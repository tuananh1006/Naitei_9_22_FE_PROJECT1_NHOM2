import React from "react";

interface SectionLayoutProps {
  title: string;
  children: React.ReactNode;
  headerActions?: React.ReactNode;
  className?: string;
}

export default function SectionLayout({ 
  title, 
  children, 
  headerActions, 
  className = "" 
}: SectionLayoutProps) {
  return (
    <section className={`py-6 sm:py-8 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center mb-4 sm:mb-5">
          <h2 className="text-lg sm:text-xl font-semibold border-b-2 border-green-600 text-green-600 pb-1">
            {title}
          </h2>
          {headerActions}
        </div>
        {children}
      </div>
    </section>
  );
}


