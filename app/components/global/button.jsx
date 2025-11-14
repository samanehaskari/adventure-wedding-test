import React from "react";
import { Icon } from "@iconify/react";

export default function Button({
  children,
  size = "md", // sm | md | lg
  color = "primary", // blue | red | green | purple
  variant = "filled", // filled | outlined | ghost
  rounded = "md", // none | sm | md | lg | full
  loading = false,
  disabled = false,
  icon = null,
  onClick,
}) {
  // Button sizes
  const sizeClasses = {
    sm: "h-8 px-4 text-sm",
    md: "h-12 px-[22px] text-base",
    lg: "h-[52px] px-[22px] text-lg",
  };

  // variant and color
  const colorClasses = {
    primary: {
      filled: "bg-primary-400 text-white hover:bg-primary-600",
      outlined:
        "border border-primary-400 text-primary-400 hover:bg-primary-50",
      ghost: "text-primary-600 hover:bg-primary-50",
    },
    white: {
      filled: "bg-white text-zinc-800 ",
      outlined: "border border-white text-white",
      ghost: "text-white hover:bg-white/10",
    },
  };

  // rounded
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2 font-medium cursor-pointer
        ${sizeClasses[size]}
        ${colorClasses[color][variant]}
        ${roundedClasses[rounded]}
        transition duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed 
      `}
    >
      {loading && <Icon icon="svg-spinners:180-ring-with-bg" />}
      {icon && !loading && icon}
      {children}
    </button>
  );
}
