import React from "react";
import AppTypography from "../AppTypography";

type AppProgressBarProps = {
  progress: number; // A value between 0 and 100
  className?: string; // Custom class for additional styling
  showProgressLabel?: boolean; // to show/hide percentage label
};

const AppProgressBar: React.FC<AppProgressBarProps> = ({
  progress,
  className = "",
  showProgressLabel = true,
}) => {
  // Make sure the progress value stays between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full flex flex-col gap-1">
      <div className={`w-full bg-gray-300  ${className}`}>
        <div
          className="h-2 bg-black"
          style={{ width: `${clampedProgress}%` }}
        ></div>
      </div>
      {showProgressLabel && (
        <AppTypography
          align="right"
          variant="caption"
          className="block"
        >{`${clampedProgress}% Completed`}</AppTypography>
      )}
    </div>
  );
};

export default AppProgressBar;
