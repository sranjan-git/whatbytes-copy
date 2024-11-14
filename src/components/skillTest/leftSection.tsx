import { ComparisonGraph } from "./graph";
import { QuickStats } from "./statistics";
import { TestInfo } from "./testInfo";

export const LeftSection = () => {
  return (
    <section className="lg:w-3/5 w-full lg:h-full h-fit flex flex-col gap-4">
      <TestInfo />
      <QuickStats />
      <ComparisonGraph />
    </section>
  );
};
