"use client";

import { useStoreState } from "@/lib/store";
import { Circle } from "rc-progress";

export const QuestionAnalysis = () => {
  const { score } = useStoreState();

  return (
    <section
      id="question-analysis"
      className="w-full aspect-[4/3] border-2 border-slate-200 rounded-lg lg:p-8 p-6"
    >
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Question Analysis</h1>
        <h1 className="font-bold text-lg text-blue-700">{score}/15</h1>
      </div>
      <p className="mt-2 mb-12 text-slate-600">
        <span className="font-bold">
          You scored {score} question correct out of 15.
        </span>{" "}
        However it still needs some improvements
      </p>
      <div className="h-40 aspect-square mx-auto relative text-center">
        <Circle
          percent={(score / 15) * 100}
          strokeWidth={16}
          trailWidth={16}
          strokeColor="#3B82F6"
          trailColor="#DBEAFE"
          strokeLinecap="butt"
          className="absolute"
        />
        <h1 className="flex text-3xl h-full justify-center items-center">🎯</h1>
      </div>
    </section>
  );
};
