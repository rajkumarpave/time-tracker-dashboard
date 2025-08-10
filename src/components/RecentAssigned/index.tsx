import React from "react";
import AppTypography from "../AppUI/AppTypography";
import type { AssignedTaskProps } from "./AssignedTask";
import AssignedTask from "./AssignedTask";

function RecentAssigned() {
  const assignedTaskList: AssignedTaskProps[] = [
    {
      title: "Screen Recorder",
      description: "Need completed",
      hours: "60Hrs",
      assignedTo: "Design Team",
      status: "In Progress",
      duration: "02:00:00 hrs",
    },
    {
      title: "Screen Recorder",
      description: "Need completed",
      hours: "60Hrs",
      assignedTo: "Gukapriya",
      status: "In Progress",
      duration: "02:00:00 hrs",
    },
    {
      title: "Screen Recorder",
      description: "Need completed",
      hours: "60Hrs",
      assignedTo: "Gukapriya",
      status: "Completed",
      duration: "02:00:00 hrs",
    },
  ];

  return (
    <div>
      <AppTypography variant="subheading">Recent Assigned</AppTypography>
      <div className="flex flex-col gap-2 p-4">
        {assignedTaskList.map((task, idx) => (
          <AssignedTask key={idx} {...task} />
        ))}
      </div>
    </div>
  );
}

export default RecentAssigned;
