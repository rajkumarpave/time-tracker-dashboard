import React from "react";
import AppTypography from "../../AppUI/AppTypography";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import AppButton from "../../AppUI/AppButton";

export type AssignedTaskProps = {
  title: string;
  description: string;
  hours: string;
  assignedTo: string;
  status: statusValues;
  duration: string;
};

function AssignedTask({
  title,
  description,
  hours,
  assignedTo,
  status,
  duration,
}: AssignedTaskProps) {
  return (
    <div className="grid grid-cols-8 items-center p-2 px-4 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer">
      <AppTypography>{title}</AppTypography>
      <AppTypography>{description}</AppTypography>
      <AppTypography>{hours}</AppTypography>
      <AppTypography>{assignedTo}</AppTypography>
      <AppTypography>
        <StatusPill status={status} />
      </AppTypography>
      <AppTypography>{duration}</AppTypography>
      <AppButton variant="text" className="m-auto">
        <AiOutlinePlayCircle size={25} />
      </AppButton>
      <AppButton variant="text" className="ml-auto">
        <FiMoreVertical size={20} />
      </AppButton>
    </div>
  );
}

type statusValues = "In Progress" | "Completed";

type StatusPillProps = {
  status: statusValues;
  className?: string;
};

const StatusPill: React.FC<StatusPillProps> = ({ status, className }) => {
  let statusClass = "bg-white";

  if (status === "Completed") {
    statusClass = "bg-green-600 text-white";
  }

  if (status === "In Progress") {
    statusClass = "bg-red-600 text-white";
  }

  let baseClass = `p-2 px-3 ${statusClass}`;

  return <span className={`${baseClass} ${className}`}>{status}</span>;
};

export default AssignedTask;
