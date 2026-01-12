import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCheck } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { Plan } from "@/types/plan";

interface PlanCardProps {
  plan: Plan;
  isPopular?: boolean;
}

const PlansCard = ({ plan, isPopular = false }: PlanCardProps) => {
  return (
    <Card
      className={`relative transition hover:shadow-lg ${
        isPopular ? "border-primary" : ""
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
          Most Popular
        </span>
      )}

      <CardHeader className="space-y-3">
        <CardTitle className="text-xl">{plan.plan}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>

        {/* Price */}
        <h3 className="flex items-center gap-1">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="text-md text-muted-foreground">/ month</span>
        </h3>

        <Button
          className="rounded-full gap-1"
          //   variant={isPopular ? "default" : "outline"}
        >
          Choose Plan Now
          <ArrowUpRight />
        </Button>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                <FaCheck size={10} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PlansCard;
