import React from "react";
import { FiLoader } from "react-icons/fi";

export type AppButtonProps = {
  variant?: "filled" | "outlined" | "text";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton: React.FC<AppButtonProps> = ({
  children,
  variant = "filled",
  startIcon,
  endIcon,
  className = "",
  size = "md",
  loading = false,
  disabled,
  ...rest
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    filled: "bg-black text-white hover:bg-gray-900 disabled:bg-gray-700",
    outlined:
      "bg-white border border-black text-black hover:bg-black hover:text-white disabled:text-gray-500 disabled:border-gray-300",
    text: "border-0 text-black hover:bg-black hover:text-white disabled:text-gray-500 disabled:border-gray-300",
  };

  const cursorClass =
    disabled || loading ? "cursor-not-allowed" : "cursor-pointer";

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${cursorClass} ${className}`;

  return (
    <button
      disabled={disabled || loading}
      className={combinedClasses}
      {...rest}
    >
      {loading ? (
        <FiLoader className="animate-spin" />
      ) : (
        <>
          {startIcon && <span>{startIcon}</span>}
          {children}
          {endIcon && <span>{endIcon}</span>}
        </>
      )}
    </button>
  );
};

export default AppButton;
