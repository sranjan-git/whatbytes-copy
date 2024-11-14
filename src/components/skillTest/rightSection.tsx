import { QuestionAnalysis } from "./ques";
import { SyllabusAnalysis } from "./syllabus";

export const RightSection = () => {
  return (
    <section className="lg:w-2/5 w-full h-full flex flex-col gap-4">
      <SyllabusAnalysis />
      <QuestionAnalysis />
    </section>
  );
};
