import React from "react";
import AppTypography from "../AppUI/AppTypography";
import AppCard from "../AppUI/AppCard";

type StatsCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
};

function StatsCard({ title, icon, value, description }: StatsCardProps) {
  return (
    <AppCard>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className={`p-0.5 border-[1px] border-black text-black`}>
            {icon}
          </span>
          <AppTypography weight="bold">{title}</AppTypography>
        </div>
        <AppTypography variant="h5">{value}</AppTypography>
        <AppTypography>{description}</AppTypography>
      </div>
    </AppCard>
  );
}

export default StatsCard;
