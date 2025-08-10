import React from "react";

type AppGridProps = {
  children: React.ReactNode;
  columns?: number; // Default number of columns for mobile
  gap?: number; // Gap between items (e.g., "4", "8", "16")
  sm?: number; // Number of columns on small screens
  md?: number; // Number of columns on medium screens
  lg?: number; // Number of columns on large screens
  xl?: number; // Number of columns on extra-large screens
  xxl?: number; // Number of columns on extra extra-large screens
  className?: string;
};

const AppGrid: React.FC<AppGridProps> = ({
  children,
  columns = 12,
  gap = 2,
  sm,
  md,
  lg,
  xl,
  xxl,
  className = "",
}) => {
  let gridClasses = `grid gap-${gap}`;

  if (columns || sm) gridClasses += ` grid-cols-${sm ? sm : columns}`; // Mobile default

  if (md) gridClasses += ` md:grid-cols-${md}`;
  if (lg) gridClasses += ` lg:grid-cols-${lg}`;
  if (xl) gridClasses += ` xl:grid-cols-${xl}`;
  if (xxl) gridClasses += ` 2xl:grid-cols-${xxl}`;

  return (
    <>
      <div className={`${gridClasses} ${className}`}>{children}</div>
    </>
  );
};

export default AppGrid;
