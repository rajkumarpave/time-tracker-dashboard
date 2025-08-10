import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

interface MenuItem {
  label: string;
  route: string;
}

const MobileMenu: React.FC<{ menuList: MenuItem[] }> = ({ menuList }) => {
  // State to toggle the menu visibility
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle the mobile menu
  const toggleMenu = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="block md:hidden relative">
      <div className="p-4 cursor-pointer" onClick={toggleMenu}>
        <FaBars size={30} />
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-[93vw] bg-gray-800 text-white p-4 z-50">
          <div className="flex justify-between items-center">
            <AiOutlineClose
              size={30}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="flex flex-col gap-4 mt-4">
            {menuList.map((menu, idx) => (
              <li key={idx}>
                <Link
                  to={menu.route}
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                  onClick={toggleMenu}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="hidden lg:flex gap-6">
        {menuList.map((menu, idx) => (
          <Link
            key={idx}
            to={menu.route}
            className="text-black hover:text-gray-500"
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
