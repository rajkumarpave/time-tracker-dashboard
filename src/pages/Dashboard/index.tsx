import StatsCard from "../../components/StatsCard";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import LastActivity from "../../components/LastActivity";
import PerformanceOverview from "../../components/PerformanceOverview";
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
        <div className="flex flex-wrap">
          <div className="w-[100%] sm:w-[100%] md:w-5/12">
            <div className="flex flex-col gap-4">
              <LastActivity
                projectName="Project Name"
                description="Description"
                progress={60}
                duration="5:55:09"
                dueHrs="8 Hrs"
              />
              <div className="flex flex-wrap">
                {cardList.map((card, idx) => (
                  <div className="w-[100%] sm:w-[100%] md:w-1/2">
                    <StatsCard
                      key={idx}
                      title={card.title}
                      value={card.value}
                      description={card.description}
                      icon={card.icon}
                      className="min-h-[180px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[100%] sm:w-[100%] md:w-7/12">
            <PerformanceOverview />
          </div>
        </div>
        <RecentAssigned />
      </BasicLayout>
    </>
  );
}

export default Dashboard;
