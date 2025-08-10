import React from "react";

const BasicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default BasicLayout;
