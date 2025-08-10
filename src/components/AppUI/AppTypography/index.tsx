import React from "react";

type AppTypographyProps = {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body"
    | "caption"
    | "subheading"; // Available variants
  children: React.ReactNode;
  className?: string; // Custom class to extend styles
  color?: string; // Custom text color, default will be 'text-black'
  align?: "left" | "center" | "right"; // Text alignment
  weight?: "light" | "normal" | "bold"; // Font weight
  uppercase?: boolean; // Apply uppercase transformation
  italic?: boolean; // Apply italic transformation
};

const AppTypography: React.FC<AppTypographyProps> = ({
  variant = "body", // Default variant
  children,
  className = "",
  color = "curent", // Default color is black
  align = "left", // Default alignment is left
  weight = "normal", // Default font weight is normal
  italic = false,
}) => {
  // Get the appropriate Tailwind classes based on the variant and props
  const variantClasses = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-semibold",
    h4: "text-2xl font-semibold",
    h5: "text-xl font-medium",
    body: "text-base font-normal",
    caption: "text-sm font-light",
    subheading: "text-lg font-medium",
  };

  // Combine classes for text alignment, color, weight, and transformations
  const classes = `${variantClasses[variant]} ${color} ${
    align === "center" ? "!text-center" : ""
  } ${align === "right" ? "!text-right" : ""} ${
    weight === "light" ? "!font-light" : ""
  } ${weight === "bold" ? "!font-bold" : ""} ${italic ? "!italic" : ""}`;

  return <span className={`${classes} ${className}`}>{children}</span>;
};

export default AppTypography;
