import React from "react";

interface StepProcessProps {
  steps: string[];
  step: number;
}

const StepProcess: React.FC<StepProcessProps> = ({ steps, step }) => (
  <div className="flex items-center justify-between mb-6">
    {steps.map((label, idx) => (
      <div key={label} className="flex-1 flex flex-col items-center relative">
        <div
          className={`rounded-full w-8 h-8 flex items-center justify-center font-bold
            ${
              idx < step
                ? "bg-green-600 text-white"
                : idx === step
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
        >
          {idx + 1}
        </div>
        <span
          className={`mt-2 text-xs text-center ${
            idx <= step ? "text-green-600 font-semibold" : ""
          }`}
        >
          {label}
        </span>
        <div className="w-full h-1 mt-2 mb-2 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-1 w-full bg-gray-300" />
          <div
            className="absolute left-0 top-0 h-1 bg-green-600 transition-all duration-500"
            style={{
              width: idx < step ? "100%" : idx === step ? "50%" : "0%",
            }}
          />
        </div>
      </div>
    ))}
  </div>
);

export default StepProcess;

