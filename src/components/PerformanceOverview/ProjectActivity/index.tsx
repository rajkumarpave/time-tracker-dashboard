import AppCard from "../../AppUI/AppCard";

import ProjectTask, { type ProjectTaskProps } from "../ProjectTask";
import AppTypography from "../../AppUI/AppTypography";

function ProjectActivity() {
  const taskList: ProjectTaskProps[] = [
    {
      taskName: "Task 1",
      projectName: "Project 1",
      description: "Description",
      progress: 61,
    },
    {
      taskName: "Task 2",
      projectName: "Project 1",
      description: "Description",
      progress: 40,
    },
    {
      taskName: "Task 2",
      projectName: "Project 1",
      description: "Description",
      progress: 80,
    },
  ];

  return (
    <AppCard>
      <div className="flex flex-col gap-4">
        <AppTypography variant="subheading" weight="bold">
          Project Activity
        </AppTypography>
        <div className="flex flex-col gap-4 h-[300px] overflow-y-auto">
          {taskList.map((task, idx) => (
            <ProjectTask key={idx} {...task} />
          ))}
        </div>
      </div>
    </AppCard>
  );
}

export default ProjectActivity;
