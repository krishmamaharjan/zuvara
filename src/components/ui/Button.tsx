import React from "react";
import clsx from "clsx";

type ButtonVariant = "filled" | "outline" | "text";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  rounded?: "full" | "lg" | "md";
}

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  rounded = "full",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const roundedStyles = {
    full: "rounded-full",
    lg: "rounded-xl",
    md: "rounded-md",
  };

  const variantStyles = {
    filled:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
    text:
      "text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        roundedStyles[rounded],
        variantStyles[variant],
        "px-6 py-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
