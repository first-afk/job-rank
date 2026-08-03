import { Calculator, File, SearchSlash } from "lucide-react";

export const description = [
  {
    id: 1,
    icon: File,
    title: "Drop your resume in",
    subtext: "Upload your CV/Resume as PDF or TXT",
    caption:
      "Our AI instantly extracts your skills, years of experience, and domain expertise into a  semantic profile",
  },
  {
    id: 2,
    icon: Calculator,
    title: "We do the maths",
    subtext: "We convert your profile into a mathematical embedding",
    caption:
      "We run a high-speed similarity search against thousands of active job postings.",
  },
  {
    id: 3,
    icon: SearchSlash,
    title: "Review your ranked matches",
    subtext: "No more scrolling through irrelevant promoted jobs.",
    caption:
      "Get a curated feed of roles ranked strictly by how well they mathematically align with your resume",
  },
];

export const testimonial = [
  {
    id: 1,
    variant: "cent",
    reviewer: "Esther Orieji",
    review:
      "I was getting auto-rejected because my resume said 'React' but the job required 'Next.js'. Job Rank understood the semantic overlap and found me a role I wouldn't have even applied for.",
  },
  {
    id: 2,
    variant: "trois",
    reviewer: "Gershom Agim",
    review:
      "The vector search is insane. It read between the lines of my messy past experience and matched me with a Developer Advocate role that fits my exact hybrid skillset.",
  },
  {
    id: 3,
    variant: "six",
    reviewer: "Charles Ejiofor",
    review:
      "Finally, a job tool that doesn't just do a basic CTRL+F for keywords. The percentage match scores actually make sense.",
  },
];

export const contact = [
  {
    id: 1,
    media: "LinkedIn",
    description: "Questions, feedback, or just say hi",
    link: "Follow @esther-orieji",
    href: "",
  },
  {
    id: 2,
    media: "Mail",
    description: "Questions, feedback, or just say hi",
    link: "hey@esther-orieji.com",
    href: "",
  },
];

export const faq = [
  {
    id: 1,
    question: "how does job rank match candidate resume to job description",
    answer: {
      title: "vector semantic search",
      description:
        "Text content from resume is converted  into high-dimensional vectors and a similarity search is executed to calculate a precise semantic relevance score regardless of phrasing differences",
    },
  },
];
