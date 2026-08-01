import React from "react";
import Button from "../components/ui/Button";
import { Upload } from "lucide-react";

const page = () => {
  return (
    <main>
      <section className="w-full min-h-screen py-24 px-14 bg-deux/50 bg-gradient dark:bg-background">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="heading-h2 font-serif">
              Better jobs in one{" "}
              <span className="text-uno italic">Click</span>{" "}
            </h1>

            <p className="text-[16px] leading-[1.75] text-tertiary dark:text-foreground py-5 md:w-2/3">
              Paste your resume below. We use AI to extract your skills to find
              your perfect role via vector search
            </p>

            <Button className="w-full py-3 px-2 mt-4 leading-[1.60] text-[15px] inline-flex items-center justify-center gap-2">
              Upload your CV/Resume{" "}
              <span>
                <Upload className="size-5 text-outline" />
              </span>
            </Button>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
};

export default page;
