import AppCard from "../AppUI/AppCard";
import AppTypography from "../AppUI/AppTypography";
import AppButton from "../AppUI/AppButton";
import { FiFilter } from "react-icons/fi";
import ProjectActivity from "./ProjectActivity";
import TimeDistribution from "./TimeDistribution";

function PerformanceOverview() {
  return (
    <AppCard>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <AppTypography variant="subheading" weight="bold">
            Performance Overview Filter
          </AppTypography>
          <AppButton startIcon={<FiFilter />} variant="outlined">
            Filter
          </AppButton>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[100%] sm:w-[100%] md:w-5/12">
            <ProjectActivity />
          </div>
          <div className="w-[100%] sm:w-[100%] md:w-7/12">
            <TimeDistribution />
          </div>
        </div>
      </div>
    </AppCard>
  );
}

export default PerformanceOverview;
