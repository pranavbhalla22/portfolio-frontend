import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Badge({ children, className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-yellow-500 px-3 py-1 text-sm font-medium text-black ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
