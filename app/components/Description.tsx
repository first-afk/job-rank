import React from "react";
import { description } from "./../constants/data";
import Button from "./ui/Button";

const Description = () => {
  return (
    <div className="flex max-md:flex-col">
      <div className="flex flex-col">
        {description.map((item) => (
          <div key={item.id}>
            <Button
              variant="secondary"
              className="flex  items-center justify-between gap-4 max-md:w-90 w-120 mb-4 py-2 hover:bg-primary"
            >
              <div className="size-11 rounded-sm border-2 border-outline shadow flex items-center justify-center">
                <item.icon className="size-7" />
              </div>
              <div className="flex flex-col items-center justify-center mr-auto w-6/7">
                <p className="text-[18px] font-black first-letter:capitalize leading-[1.20] text-secondary mb-1 text-center tracking-wide">
                  {item.title}
                </p>
                <p className="font-medium leading-[1.35] text-[#5a5a5a] tracking-wide">
                  {item.subtext}
                </p>
              </div>
            </Button>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Description;
