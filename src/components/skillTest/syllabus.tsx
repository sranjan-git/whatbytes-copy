"use client";

import { Line } from "rc-progress";
import type { FCProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export const SyllabusAnalysis = () => {
  return (
    <section className="w-full min-h-[65%] border-2 border-slate-200 rounded-lg lg:p-8 p-6">
      <h1 className="font-bold text-lg">Syllabus Wise Analysis</h1>
      <ul className="flex flex-col justify-evenly h-full md:gap-4 md:mt-6">
        <ProgressRows value={80} color="#3B82F6" className="text-blue-500">
          HTML Tools, Forms, History
        </ProgressRows>
        <ProgressRows value={60} color="#F97316" className="text-orange-500">
          Tags & References in HTML
        </ProgressRows>
        <ProgressRows value={24} color="#EF4444" className="text-red-500">
          Tables & References in HTML
        </ProgressRows>
        <ProgressRows value={96} color="#10B981" className="text-green-500">
          Tables & CSS Basics
        </ProgressRows>
      </ul>
    </section>
  );
};

const ProgressRows: FCProps<{ value: number; color: string }> = ({
  children,
  value,
  color,
  className,
}) => {
  return (
    <li className="flex flex-col gap-2">
      <h1 className="text-lg text-slate-700">{children}</h1>
      <div className="flex gap-2 items-center justify-between">
        <Line
          percent={value}
          strokeWidth={2}
          trailWidth={2}
          strokeLinecap="round"
          strokeColor={color}
          trailColor={color + "33"}
          className="w-4/5 h-2 rounded-full"
        />
        <h1 className={cn("text-lg font-bold", className)}>{value}%</h1>
      </div>
    </li>
  );
};
