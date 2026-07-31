import React from "react";
const MARQUEE_TAGS = [
  { icon: "🌐", label: "Remote Global" },
  { icon: "🚀", label: "Seed-Stage Startups" },
  { icon: "🏢", label: "Enterprise Tech" },
  { icon: "🎨", label: "Design & UI" },
  { icon: "⚙️", label: "Backend Engineering" },
  { icon: "📊", label: "Data Science" },
  { icon: "☁️", label: "Cloud Infrastructure" },
  { icon: "🛡️", label: "Cybersecurity" },
];
const Marquee = () => {
  return (
    <div className="w-full py-5 flex flex-col items-center justify-center overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 1rem)); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        /* Pauses the animation when a user hovers over the tags */
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* 
        The mask-image applies a linear gradient that is transparent at the 0% and 100% marks, 
        but black (visible) in the middle. This creates the smooth fade effect on the edges.
      */}
      <div className="marquee-container flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] gap-4 px-4 ">
        {/* First set of tags */}
        <div className="flex shrink-0 animate-marquee items-center gap-4">
          {MARQUEE_TAGS.map((tag, index) => (
            <div
              key={`set1-${index}`}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-outline bg-background px-4 py-3 text-sm font-medium text-foreground transition-all duration-300  hover:-translate-y-0.5"
            >
              <span className="text-base">{tag.icon}</span>
              <span>{tag.label}</span>
            </div>
          ))}
        </div>

        {/* 
          Second set of tags (Identical duplicate). 
          aria-hidden="true" ensures screen readers don't read the list twice! 
        */}
        <div
          className="flex shrink-0 animate-marquee items-center gap-4"
          aria-hidden="true"
        >
          {MARQUEE_TAGS.map((tag, index) => (
            <div
              key={`set2-${index}`}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-outline bg-background px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="text-base">{tag.icon}</span>
              <span>{tag.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
