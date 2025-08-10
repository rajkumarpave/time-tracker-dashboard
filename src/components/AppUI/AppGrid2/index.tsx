import React from "react";

type AppGridProps = {
  children: React.ReactNode;
  gap?: number; // Gap between items (e.g., "4", "8", "16")
  className?: string; // Custom class names for styling
};

const AppGrid2: React.FC<AppGridProps> = ({
  children,
  gap = 2,
  className = "",
}) => {
  // Use Tailwind grid classes to create a responsive grid container
  return (
    <div className={`grid gap-${gap} grid-cols-12 ${className}`}>
      {children}
    </div>
  );
};

export default AppGrid2;
