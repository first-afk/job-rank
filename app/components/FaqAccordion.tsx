"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: {
    title: string;
    description: string;
  };
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion = ({ items }: FaqAccordionProps) => {
  const [openId, setOpenId] = useState<number | null>(items[0]?.id ?? null);

  return (
    <div className="w-full max-w-3xl space-y-3 px-4 py-6">
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <div
            key={item.id}
            className="rounded-lg border-2 border-outline bg-background shadow"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between px-4 py-4 text-left"
            >
              <span className="font-semibold text-secondary">{item.question}</span>
              <ChevronDown
                className={`size-5 text-secondary transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {isOpen && (
              <div className="border-t border-outline px-4 py-4">
                <p className="font-semibold text-secondary">{item.answer.title}</p>
                <p className="mt-2 text-sm leading-6 text-tertiary">
                  {item.answer.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
