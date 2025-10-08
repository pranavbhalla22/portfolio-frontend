import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
