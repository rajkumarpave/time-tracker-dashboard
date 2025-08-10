import React from "react";
import AppCard from "../AppUI/AppCard";
import AppTypography from "../AppUI/AppTypography";
import { AiOutlinePlayCircle } from "react-icons/ai";
import AppProgressBar from "../AppUI/AppProgressBar";

type ProgressStatsProps = {
  label: string;
  value: string;
};

const ProgressStats: React.FC<ProgressStatsProps> = ({ label, value }) => {
  return (
    <AppCard size="sm">
      <div className="flex gap-2">
        <AppTypography>{label}</AppTypography>
        <AppTypography weight="bold">{value}</AppTypography>
      </div>
    </AppCard>
  );
};

type LastActivityProps = {
  projectName: string;
  description: string;
  progress: number;
  duration: string;
  dueHrs: string;
};

const LastActivity: React.FC<LastActivityProps> = ({
  projectName,
  description,
  progress,
  duration,
  dueHrs,
}) => {
  return (
    <AppCard>
      <div className="flex flex-col gap-4">
        <AppTypography variant="subheading" weight="bold">
          Last Activity
        </AppTypography>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <AppTypography weight="bold">
              Task Name ({projectName})
            </AppTypography>
            <AppTypography weight="bold">{description}</AppTypography>
          </div>
          <AppTypography variant="h2">
            <AiOutlinePlayCircle />
          </AppTypography>
        </div>
        <AppProgressBar progress={progress} showProgressLabel={false} />
        <div className="flex gap-2 justify-between">
          <ProgressStats label="Due Hrs:" value={dueHrs} />
          <ProgressStats label="Duration" value={duration} />
          <ProgressStats label="Progress" value={`${progress}%`} />
        </div>
      </div>
    </AppCard>
  );
};

export default LastActivity;
