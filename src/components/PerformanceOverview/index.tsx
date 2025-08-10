import React from "react";
import AppCard from "../AppUI/AppCard";
import AppTypography from "../AppUI/AppTypography";
import AppButton from "../AppUI/AppButton";
import { FiFilter } from "react-icons/fi";
import ProjectActivity from "./ProjectActivity";
import AppGrid from "../AppUI/AppGrid";
import AppGridItem from "../AppUI/AppGrid/AppGridItem";
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
        <ProjectActivity />
      </div>
      <TimeDistribution />
    </AppCard>
  );
}

export default PerformanceOverview;
