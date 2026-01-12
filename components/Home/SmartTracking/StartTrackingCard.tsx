import Image from "next/image";
import React from "react";

type StartTrackingCardProps = {
  image: string;
  title: string;
};

const StartTrackingCard: React.FC<StartTrackingCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="flex items-center border rounded-md bg-black/10 hover:bg-red-400 hover:text-white gap-2 p-2">
      <Image
        height={50}
        width={50}
        src={image}
        alt="tracking"
        className="w-10 p-1 bg-red-400 border rounded-md object-cover"
      />
      <p className="text-md font-medium">{title}</p>
    </div>
  );
};

export default StartTrackingCard;
