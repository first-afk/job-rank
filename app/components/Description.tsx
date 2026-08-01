"use client";
import React, { useEffect, useState } from "react";
import { description } from "./../constants/data";
import Button from "./ui/Button";

const duration = 5000;

const Description = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const startTime = Date.now();

    const timer = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(nextProgress);
      console.log(progress);

      if (nextProgress >= 100) {
        window.clearInterval(timer);
        setActiveIndex((prev) => (prev + 1) % description.length);
      }
    }, 100);

    return () => {
      window.clearInterval(timer);
    };
  }, [activeIndex]);

  const handleClick = (index: number) => {
    if (index === activeIndex) return;
    setProgress(0);
    setActiveIndex(index);
  };

  return (
    <div className="flex max-md:flex-col max-md:items-center justify-center gap-20 w-full">
      <div className="flex flex-col">
        {description.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={item.id}>
              <Button
                key={item.id}
                variant={isActive ? "primary" : "secondary"}
                onClick={() => handleClick(index)}
                className={` relative border-2 border-outline font-semibold rounded-sm transition-all duration-200 ease-out px-2  hover:-translate-y-0.5 flex items-center justify-between gap-3 max-md:w-90 w-120 mb-4 py-2 ${isActive ? "bg-primary shadow " : "bg-background"}`}
              >
                <div className="size-11 rounded-sm border-2 border-outline shadow flex items-center justify-center">
                  <item.icon className="size-7" />
                </div>
                <div className="flex flex-col items-left justify-center mr-auto w-6/7">
                  <p className="text-[18px] font-black first-letter:capitalize leading-[1.20] text-secondary mb-1 text-left  tracking-wide">
                    {item.title}
                  </p>
                  <p className="font-medium leading-[1.35] text-[#5a5a5a] tracking-wide text-left ">
                    {item.subtext}
                  </p>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-t-md overflow-hidden transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  <div
                    className="h-full bg-outline"
                    style={{
                      width: isActive ? `${progress}%` : "0%",
                      transition: progress === 0 ? "none" : "width 16ms linear",
                    }}
                  ></div>
                </div>
              </Button>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block relative w-1/2 aspect-square md:aspect-4/3 rounded-lg overflow-hidden border-2 border-outline ">
        {description.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <video
              autoPlay
              muted
              playsInline
              loop={false}
              className="w-full h-full object-cover"
            >
              {/* <source src="" /> */}
              This video is not available
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
