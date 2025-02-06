
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";

interface HealthMetricProps {
  title: string;
  value: string;
  status: "stable" | "up" | "down";
  className?: string;
}

export const HealthMetric = ({ title, value, status, className }: HealthMetricProps) => {
  const statusColor = {
    stable: "bg-metric-stable/20 text-metric-stable",
    up: "bg-metric-up/20 text-metric-up",
    down: "bg-metric-down/20 text-metric-down",
  };

  const StatusIcon = {
    stable: ArrowRight,
    up: ArrowUp,
    down: ArrowDown,
  }[status];

  return (
    <div className={cn("p-4 rounded-2xl bg-white/80 backdrop-blur-sm", className)}>
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">{value}</span>
        <span className={cn("p-1 rounded-full", statusColor[status])}>
          <StatusIcon className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
};
