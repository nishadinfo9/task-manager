import Image from "next/image";
import React from "react";

type ProblemSolutionCardProps = {
  title: string;
  content: string;
  image: string;
};

const ProblemSolutionCard: React.FC<ProblemSolutionCardProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <div className="p-5 h-80 flex flex-col items-center bg-black/10 rounded-xl">
      <div className="bg-black/20 w-full h-60 rounded-xl flex items-center justify-center mx-auto">
        <Image
          width={600}
          height={600}
          src={image || "/line-chart.png"}
          alt="chart"
          className="w-48 h-40 object-cover rounded-xl "
        />
      </div>
      <div className="mt-3 space-y-3 ">
        <h3 className="text-2xl text-center font-semibold">
          {title || "Real Time Tracking"}
        </h3>
        <p className="text-center">
          {content ||
            " Easily track work hours they happen manualy input needed stay accurate"}
        </p>
      </div>
    </div>
  );
};

export default ProblemSolutionCard;
