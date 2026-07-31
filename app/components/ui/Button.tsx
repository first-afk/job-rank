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
    "relative border-2 border-outline font-semibold rounded-sm shadow transition-all duration-200 ease-out px-2 py-1 hover:-translate-y-0.5";
  const finalClass = `${baseClass} ${variants[variant]} ${className} `;
  return (
    <button type={type} className={`${finalClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
