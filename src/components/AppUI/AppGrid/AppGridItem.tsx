import React from "react";

// Define the types for the props
interface AppGridItemProps {
  sm?: number; // Columns to span on small screens
  md?: number; // Columns to span on medium screens
  lg?: number; // Columns to span on large screens
  xl?: number; // Columns to span on extra-large screens
  className?: string; // Additional custom class names
  children: React.ReactNode; // Content to render inside the grid item
}

const AppGridItem: React.FC<AppGridItemProps> = ({
  sm = 12, // Default to full width (spanning all 12 columns on small screens)
  md = sm, // If no md is provided, it should fallback to sm value
  lg = md, // If no lg is provided, it should fallback to md value
  xl = lg, // If no xl is provided, it should fallback to lg value
  className = "",
  children,
}) => {
  let baseClass = `col-span-${sm}`;

  if (sm) {
    baseClass = `${baseClass} sm:col-span-${sm}`;
  }
  if (md) {
    baseClass = `${baseClass} md:col-span-${md}`;
  }
  if (lg) {
    baseClass = `${baseClass} lg:col-span-${lg}`;
  }
  if (xl) {
    baseClass = `${baseClass} xl:col-span-${xl}`;
  }

  return <div className={`${baseClass} ${className}`}>{children}</div>;
};

export default AppGridItem;
