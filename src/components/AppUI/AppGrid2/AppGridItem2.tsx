import React from "react";

type AppGridItem2Props = {
  children: React.ReactNode;
  sm?: number; // Number of columns on small screens
  md?: number; // Number of columns on medium screens
  lg?: number; // Number of columns on large screens
  xl?: number; // Number of columns on extra-large screens
  xxl?: number; // Number of columns on extra extra-large screens
  className?: string; // Custom class names
};

const AppGridItem2: React.FC<AppGridItem2Props> = ({
  children,
  sm = 12, // Default 12 columns for mobile
  md = sm, // Default to sm value for md
  lg = md, // Default to md value for lg
  xl = lg, // Default to lg value for xl
  xxl = xl, // Default to xl value for xxl
  className = "",
}) => {
  const breakPointMap: { [key: number]: string } = {
    1: "w-1/12",
    2: "w-2/12",
    3: "w-3/12",
    4: "w-4/12",
    5: "w-5/12",
    6: "w-6/12",
    7: "w-7/12",
    8: "w-8/12",
    9: "w-9/12",
    10: "w-10/12",
    11: "w-11/12",
    12: "w-full", // w-full for 12 columns (full width)
  };

  let flexClasses = "";

  // Handle responsive breakpoints for each screen size
  if (sm) flexClasses += ` sm:${breakPointMap[sm]}`;
  if (md) flexClasses += ` md:${breakPointMap[md]}`;
  if (lg) flexClasses += ` lg:${breakPointMap[lg]}`;
  if (xl) flexClasses += ` xl:${breakPointMap[xl]}`;
  if (xxl) flexClasses += ` 2xl:${breakPointMap[xxl]}`;

  return <div className={`${flexClasses} ${className}`}>{children}</div>;
};

export default AppGridItem2;
