import React from "react";
import { FaRegBell } from "react-icons/fa";
import { PiBookOpen } from "react-icons/pi";

import AppButton from "../AppUI/AppButton";
import AppTypography from "../AppUI/AppTypography";
import AppVerticalLine from "../AppUI/AppVerticalLine";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-2 px-6 border-0 border-b-[1px] border-black">
      <div className="flex justify-between items-center gap-1">
        <AppTypography variant="h3">
          <PiBookOpen />
        </AppTypography>
        <AppVerticalLine />
        <AppTypography variant="subheading">Time Tracker</AppTypography>
      </div>
      <AppButton variant="text">
        <FaRegBell size={20} />
      </AppButton>
    </div>
  );
};

export default Header;
