import { LucideIcon } from "lucide-react";
import React from "react";

type ServiceListCardProps = {
  name: string;
  Icon: LucideIcon;
};

const ServiceListCard: React.FC<ServiceListCardProps> = ({ name, Icon }) => {
  return (
    <div className="flex items-center gap-1 rounded-full border py-1 px-2 text-black hover:shadow-md hover:bg-red-400 hover:text-white transition bg-black/10">
      <div className="bg-red-400 p-2 rounded-full">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <span className="text-sm  font-medium">{name}</span>
    </div>
  );
};

export default ServiceListCard;
