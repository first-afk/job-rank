import React from "react";

interface buttonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}
const Button = ({
  variant = "primary",
  className,
  children,
  type = "button",
  ...props
}: buttonType) => {
  const variants = {
    primary: "bg-primary text-secondary",
    secondary: "bg-six text-secondary",
    outline: "bg-white/10 text-outline",
  };
  const baseClass =
    "relative border-2 border-outline font-semibold rounded-sm shadow shadow-[3px_2px_0_0_rgba(0,0,0,1)] transition-all duration-200 ease-out px-2 py-1";
  const finalClass = `${baseClass} ${variants[variant]} ${className} `;
  return (
    <button type={type} className={`${finalClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
