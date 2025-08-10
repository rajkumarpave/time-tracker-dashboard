import AppCard from "../../components/AppUI/AppCard";
import AppTypography from "../../components/AppUI/AppTypography";
import BasicLayout from "../../layout/BasicLayout";

function ProjectTracker() {
  return (
    <BasicLayout>
      <AppCard>
        <div className="flex items-center justify-center p-2">
          <AppTypography>Project Tracker Page</AppTypography>
        </div>
      </AppCard>
    </BasicLayout>
  );
}

export default ProjectTracker;
