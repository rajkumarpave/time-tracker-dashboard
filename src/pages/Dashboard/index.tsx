import React from "react";
import AppGrid from "../../components/AppUI/AppGrid";
import StatsCard from "../../components/StatsCard";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import LastActivity from "../../components/LastActivity";
import PerformanceOverview from "../../components/PerformanceOverview";
import AppGridItem from "../../components/AppUI/AppGrid/AppGridItem";
import RecentAssigned from "../../components/RecentAssigned";
import UserActionPanel from "../../components/UserActionPanel";
import BasicLayout from "../../layout/BasicLayout";

const cardList = [
  {
    title: "Approval Request",
    value: "03",
    description:
      "Who are all requested for approvals lists can be visible here",
    icon: <IoMdCheckmarkCircleOutline />,
  },
  {
    title: "Current Projects",
    value: "10",
    description: "The Current Projects count be visible here",
    icon: <IoBriefcaseOutline />,
  },
];

function Dashboard() {
  return (
    <>
      <UserActionPanel />
      <BasicLayout>
        <AppGrid>
          <AppGridItem sm={12} md={5}>
            <div className="flex flex-col gap-4">
              <LastActivity
                projectName="Project Name"
                description="Description"
                progress={60}
                duration="5:55:09"
                dueHrs="8 Hrs"
              />
              <AppGrid sm={1} md={2} gap={4}>
                {cardList.map((card, idx) => (
                  <StatsCard
                    key={idx}
                    title={card.title}
                    value={card.value}
                    description={card.description}
                    icon={card.icon}
                  />
                ))}
              </AppGrid>
            </div>
          </AppGridItem>
          <AppGridItem sm={12} md={7}>
            <PerformanceOverview />
          </AppGridItem>
        </AppGrid>
        <RecentAssigned />
      </BasicLayout>
    </>
  );
}

export default Dashboard;
