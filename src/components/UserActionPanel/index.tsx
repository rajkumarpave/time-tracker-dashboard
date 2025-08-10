import React from "react";
import { FaRegUser } from "react-icons/fa";
import AppTypography from "../AppUI/AppTypography";
import AppButton from "../AppUI/AppButton";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function UserActionPanel() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center border-0 border-t-[1px] border-b-[1px] border-black p-2 px-6">
      <GreetingCard username="Megala" />
      <AppButton
        size="sm"
        onClick={() => {
          navigate("/create-project");
        }}
        endIcon={<IoIosAddCircleOutline />}
      >
        Create Project
      </AppButton>
    </div>
  );
}

type GreetingCardProps = {
  username: string;
};

const GreetingCard: React.FC<GreetingCardProps> = ({ username }) => {
  return (
    <div className="flex gap-2">
      <span className="text-2xl border-1 border-black p-2 rounded-md">
        <FaRegUser />
      </span>
      <div className="flex flex-col">
        <AppTypography>Welcome {username}!</AppTypography>
        <AppTypography variant="caption">
          Analyze everything on an Dashboard
        </AppTypography>
      </div>
    </div>
  );
};

export default UserActionPanel;
