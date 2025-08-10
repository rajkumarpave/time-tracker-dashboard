import AppCard from "../../AppUI/AppCard";
import BarChart from "../../Charts/BarChart";
import AppTypography from "../../AppUI/AppTypography";

function TimeDistribution() {
  const chartData = [
    { name: "Project A", value: 400 },
    { name: "Project B", value: 300 },
    { name: "Project C", value: 500 },
    { name: "Project D", value: 600 },
    { name: "Project E", value: 450 },
    { name: "Project F", value: 700 },
  ];

  return (
    <AppCard>
      <div className="flex flex-col gap-4">
        <AppTypography variant="subheading" weight="bold">
          Time Distribution by Categories
        </AppTypography>
        <BarChart data={chartData} yAxisLabelSurfix="hrs" />
      </div>
    </AppCard>
  );
}

export default TimeDistribution;
