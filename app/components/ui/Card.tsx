import { Star } from "lucide-react";
import React from "react";

interface CardType extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "deux" | "trois" | "quart" | "cent" | "six";
}

const Card = ({
  variant = "deux",
  className,
  children,
  ...props
}: CardType) => {
  const variants = {
    deux: "bg-deux text-secondary",
    trois: "bg-trois text-secondary",
    quart: "bg-quart text-secondary",
    cent: "bg-cent text-secondary",
    six: "bg-six text-secondary",
  };
  const baseClass =
    "relative border-2 border-outline rounded-lg shadow transition-all duration-200 ease-out px-4 py-3 mb-8 mt-4 h-auto mb-auto";
  const finalClass = `${baseClass} ${variants[variant]} ${className} `;
  return (
    <div {...props} className={`${finalClass}`}>
      <div className="flex flex-col space-y-4 py-2">
        <div className="flex items-center justify-start gap-1">
          <Star className="size-3 text-outline fill-outline" />
          <Star className="size-3 text-outline fill-outline" />
          <Star className="size-3 text-outline fill-outline" />
          <Star className="size-3 text-outline fill-outline" />
          <Star className="size-3 text-outline fill-outline" />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Card;
