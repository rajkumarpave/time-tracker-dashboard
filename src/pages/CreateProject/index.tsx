import AppCard from "../../components/AppUI/AppCard";
import AppTypography from "../../components/AppUI/AppTypography";
import BasicLayout from "../../layout/BasicLayout";

function CreateProject() {
  return (
    <BasicLayout>
      <AppCard>
        <div className="flex items-center justify-center p-2">
          <AppTypography>Create a Project</AppTypography>
        </div>
      </AppCard>
    </BasicLayout>
  );
}

export default CreateProject;
