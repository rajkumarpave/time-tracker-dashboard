import AppProgressBar from "../../AppUI/AppProgressBar";
import AppTypography from "../../AppUI/AppTypography";
import AppCard from "../../AppUI/AppCard";

export type ProjectTaskProps = {
  taskName: string;
  projectName: string;
  description: string;
  progress: number;
};

function ProjectTask({
  taskName,
  projectName,
  description,
  progress,
}: ProjectTaskProps) {
  let title = taskName;
  if (projectName) {
    title = `${title} (${projectName})`;
  }

  return (
    <AppCard size="md">
      <div className="flex flex-col gap-1">
        <AppTypography>{title}</AppTypography>
        <AppTypography variant="caption">{description}</AppTypography>
        <AppProgressBar progress={progress} />
      </div>
    </AppCard>
  );
}

export default ProjectTask;
