import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Define types for the props
interface BarChartData {
  name: string;
  value: number;
}

interface AppBarChartProps {
  data: BarChartData[];
  yAxisLabelSurfix?: string;
}

const AppBarChart: React.FC<AppBarChartProps> = ({
  data,
  yAxisLabelSurfix,
}) => {
  // Custom function to add a prefix (e.g., "$") to the Y-Axis labels
  const yAxisLabelFormatter = (value: number) => {
    if (yAxisLabelSurfix) {
      return `${value} ${yAxisLabelSurfix}`;
    }
    return `${value}`;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={yAxisLabelFormatter} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#B0B0B0" /> {/* Gray color */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AppBarChart;
