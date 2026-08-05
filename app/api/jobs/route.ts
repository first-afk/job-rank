import { google, GoogleEmbeddingModelOptions } from "@ai-sdk/google";
import { createClient } from "@supabase/supabase-js";
import { embed } from "ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
  );
  const url =
    "https://daily-international-job-postings.p.rapidapi.com/api/v2/jobs/search?dateCreated=2026-07&portal=jobsinnigeria&occupation=developer";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
      "x-rapidapi-host": "daily-international-job-postings.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const { result } = await response.json();
    const jobsInserted = [];
    // console.log("response", result);

    for (const job of result) {
      const title = job.occupation || "Unknown Role";
      const company = job.company || "Unknown Company";
      const location = job.city || "Unknown City";
      const industry = job.industry;
      let description = "";

      if (job.description) {
        description = job.description;
      } else {
        const skillsList = Array.isArray(job.skills)
          ? job.skills.join(", ")
          : "Not specified";
        const workType = Array.isArray(job.workType)
          ? job.workType.join(", ")
          : "Full-time";
        const location = `${job.city || "Unknown City"}, ${job.state || "Unknown State"}`;

        description = `Role: ${title} at ${company}. 
        Industry: ${job.industry || "General"}. 
        Location: ${location}. 
        Contract: ${workType}. 
        Core Skills Required: ${skillsList}. 
        This is a ${job.isRemote || job.title.includes("Remote") ? "Remote" : "On-site"} position.`;
      }
      const textToEmbed = `Job Title: ${job.title}\nCompany: ${job.company_name}\nLocation: ${job.location}\nDescription: ${description}`;

      const { embedding } = await embed({
        model: google.embedding("gemini-embedding-001"),
        value: textToEmbed,
        providerOptions: {
          google: {
            outputDimensionality: 768,
          } satisfies GoogleEmbeddingModelOptions,
        },
      });

      const { data, error } = await supabase
        .from("jobs")
        .insert({
          title,
          company,
          location,
          industry,
          description,
          embedding,
        })
        .select();
      if (error) {
        console.error(`Error inserting job ${title}:`, error);
        continue;
      }
      if (data && data.length > 0) {
        jobsInserted.push(data[0]);
      }
    }
    return NextResponse.json({
      success: true,
      expectedCount: result.length,
      count: jobsInserted.length,
      //   jobs: jobsInserted,
    });
  } catch (error) {
    console.error("Error fetching jobs from techmap:", error);
    return NextResponse.json(
      { error: "Failed to process jobs" },
      { status: 500 },
    );
  }
}
