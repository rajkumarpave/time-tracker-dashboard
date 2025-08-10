import { AiOutlinePlayCircle } from "react-icons/ai";
import AppButton from "../AppUI/AppButton";
import AppTable from "../AppUI/AppTable";
import AppTypography from "../AppUI/AppTypography";
import { FiMoreVertical } from "react-icons/fi";

export type AssignedTaskProps = {
  title: string;
  description: string;
  hours: string;
  assignedTo: string;
  status: statusValues;
  duration: string;
};

function RecentAssigned() {
  const data: AssignedTaskProps[] = [
    {
      title: "Screen Recorder",
      description: "Need completed",
      hours: "60Hrs",
      assignedTo: "Design Team",
      status: "In Progress",
      duration: "02:00:00 hrs",
    },
    {
      title: "Screen Recorder",
      description: "Need completed",
      hours: "60Hrs",
      assignedTo: "Gukapriya",
      status: "In Progress",
      duration: "02:00:00 hrs",
    },
    {
      title: "Screen Recorder",
      description: "Need completed",
      hours: "60Hrs",
      assignedTo: "Gukapriya",
      status: "Completed",
      duration: "02:00:00 hrs",
    },
  ];

  const columns = [
    { label: "Title", field: "title" },
    { label: "Description", field: "description" },
    { label: "Hours", field: "hours" },
    { label: "Assigned To", field: "assignedTo" },
    {
      label: "Status",
      field: "status",
      render: (value: string) => (
        <StatusPill status={value as "In Progress" | "Completed"} />
      ),
    },
    { label: "Duration", field: "duration" },
    {
      label: "Actions",
      field: "actions",
      render: (value: any, row: any) => (
        <div className="flex items-center justify-center gap-2">
          <AppButton variant="text">
            <AiOutlinePlayCircle size={25} />
          </AppButton>
          <AppButton variant="text">
            <FiMoreVertical size={20} />
          </AppButton>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-2 p-4">
      <AppTypography variant="subheading">Recent Assigned</AppTypography>
      <AppTable
        columns={columns}
        data={data}
        tableStyles={{
          tableRowClassName:
            "rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer",
          tableStyle: {
            borderCollapse: "separate",
            borderSpacing: "0px 10px",
          },
        }}
        hideTableHeader
        disablePagination
      />
    </div>
  );
}

type statusValues = "In Progress" | "Completed";

type StatusPillProps = {
  status: statusValues;
  className?: string;
};

export const StatusPill: React.FC<StatusPillProps> = ({
  status,
  className,
}) => {
  let statusClass = "bg-white";

  if (status === "Completed") {
    statusClass = "bg-green-600 text-white";
  }

  if (status === "In Progress") {
    statusClass = "bg-red-600 text-white";
  }

  let baseClass = `p-2 px-3 inline-block min-w-[8rem] text-center ${statusClass}`;

  return <span className={`${baseClass} ${className}`}>{status}</span>;
};

export default RecentAssigned;
