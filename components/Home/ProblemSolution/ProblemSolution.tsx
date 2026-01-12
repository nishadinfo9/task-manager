import Image from "next/image";
import React from "react";
import ProblemSolutionCard from "./ProblemSolutionCard";

const ProblemSolution = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center gap-1 bg-black/10 w-xs  py-1 rounded-full mx-auto">
        <Image
          className="w-5"
          src={"/logo.png"}
          width={50}
          height={50}
          alt="logo"
        />
        <p>Powerful Tools Simple Experences</p>
      </div>
      <h2 className="text-center font-bold text-4xl">
        All In One Productiveity Solution
      </h2>
      <div className="grid grid-cols-3 gap-8 mt-10">
        <ProblemSolutionCard title={""} content={""} image="/line-chart.png" />
        <ProblemSolutionCard title={""} content={""} image="/bar-chart.png" />
        <ProblemSolutionCard title={""} content={""} image="/pie-chart.png" />
      </div>
    </div>
  );
};

export default ProblemSolution;
