import React from "react";

type AppCardProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "base";
  className?: string;
};

const AppCard: React.FC<AppCardProps> = ({
  children,
  size = "base",
  className = "",
}) => {
  let baseClass = "p-6 m-2";

  if (size === "sm") {
    baseClass = "p-2";
  }

  if (size === "md") {
    baseClass = "p-4";
  }

  return (
    <div className={`${baseClass} border border-black rounded-md ${className}`}>
      {children}
    </div>
  );
};

export default AppCard;
