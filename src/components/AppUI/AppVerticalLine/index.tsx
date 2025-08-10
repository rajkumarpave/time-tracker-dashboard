import React from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import AppTypography from "../AppTypography";

type AppVerticalLineProps = {
  className?: string; // Additional custom classes
  size?: number;
};
const AppVerticalLine: React.FC<AppVerticalLineProps> = ({
  className = "", // Custom classes
  size = "28",
}) => {
  let baseClass = "p-0";

  return (
    <AppTypography className={`${baseClass} ${className}`}>
      <PiLineVerticalThin size={size} />
    </AppTypography>
  );
};

export default AppVerticalLine;
