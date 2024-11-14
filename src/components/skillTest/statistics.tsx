"use client";

import { Separator } from "../layout/separator";
import { Avatar, AvatarFallback } from "../layout/avatar";
import { useStoreState } from "@/pages/store";
import type { FCProps } from "@/pages/types";
import Link from "next/link";

export const QuickStats = () => {
  const { rank, percentile, score } = useStoreState();

  return (
    <section className="w-full lg:min-h-40 lg:p-4 px-4 p-2 text-black border-slate-200 rounded-lg border-2">
      <h1 className="font-bold text-xl">Quick Statistics</h1>
      <section className="flex justify-around items-start lg:px-4 h-full">
        <StatFields value={rank.toString()} label="YOUR RANK">
          🏆
        </StatFields>
        <VerticalSeparator />
        <StatFields
          value={percentile + "%"}
          label="PERCENTILE"
          link="#comparison-graph"
        >
          🗓️
        </StatFields>
        <VerticalSeparator />
        <StatFields
          value={score + "/15"}
          label="CORRECT ANSWERS"
          link="#question-analysis"
        >
          ✅
        </StatFields>
      </section>
    </section>
  );
};

const VerticalSeparator = () => {
  return (
    <Separator
      decorative
      orientation="vertical"
      className="lg:h-24 h-16 lg:mx-4 mx-2 border-1 border-slate-300"
    />
  );
};

const StatFields: FCProps<{ label: string; value: string; link?: string }> = ({
  label,
  value,
  link,
  children,
}) => {
  const content = (
    <>
      <div className="flex w-fit items-center md:gap-4 gap-2 lg:mt-4 mt-2">
        <div className="lg:h-12 h-8 aspect-square">
          <Avatar className="lg:text-2xl bg-slate-100 ring-1 ring-slate-200 flex justify-center items-center h-full w-full">
            <AvatarFallback>{children}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold lg:text-2xl">{value}</h1>
          <p className="text-slate-400 font-medium text-sm text-nowrap lg:block hidden">
            {label}
          </p>
        </div>
      </div>
      <p className="w-full text-slate-400 font-medium text-[0.5rem] text-center text-nowrap lg:hidden">
        {label}
      </p>
    </>
  );

  if (!link) return <div className="flex flex-col gap-2">{content}</div>;

  return (
    <Link href={link} className="flex flex-col gap-2">
      {content}
    </Link>
  );
};
