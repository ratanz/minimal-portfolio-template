import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-4xl mx-auto bg-white dark:bg-black ${className}`}>
      {children}
    </div>
  );
}
