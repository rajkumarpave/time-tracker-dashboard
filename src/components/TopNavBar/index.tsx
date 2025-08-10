import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppButton from "../AppUI/AppButton";
import AppTypography from "../AppUI/AppTypography";
import { MdKeyboardArrowDown } from "react-icons/md";
import AppVerticalLine from "../AppUI/AppVerticalLine";

// Define types for the menu list
interface MenuItem {
  label: string;
  route: string;
}

const TopNavBar: React.FC = () => {
  // List of menu items
  const menuList: MenuItem[] = [
    { label: "Dashboard", route: "/" },
    { label: "Project Tracker", route: "/Project-Tracker" },
    { label: "Analyze", route: "/analyze" },
    { label: "Settings", route: "/settings" },
  ];

  // Get the current location (URL) from react-router
  const location = useLocation();

  return (
    <div className="flex justify-between items-center p-3 px-4">
      <div className="flex space-x-4 bg-white text-black">
        {menuList.map((menu, idx) => {
          const isActive = location.pathname === menu.route;
          return (
            <div
              key={idx}
              className={`cursor-pointer ${isActive ? "font-bold" : ""}`}
            >
              <Link to={menu.route}>{menu.label}</Link>
            </div>
          );
        })}
      </div>
      <NavActionButton />
    </div>
  );
};

const NavActionButton = () => {
  return (
    <div className="border border-black p-1 flex gap-1 items-center rounded-md">
      <AppButton variant="outlined" size="sm">
        <AppTypography weight="bold">M</AppTypography>
      </AppButton>
      <AppVerticalLine />
      <AppButton variant="text" size="sm">
        <AppTypography variant="h4" weight="bold">
          <MdKeyboardArrowDown />
        </AppTypography>
      </AppButton>
    </div>
  );
};

export default TopNavBar;
