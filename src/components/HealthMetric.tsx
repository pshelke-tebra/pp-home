
import { cn } from "@/lib/utils";

interface HealthMetricProps {
  title: string;
  value: string;
  status: "stable" | "up" | "down";
  className?: string;
}

export const HealthMetric = ({ title, value, status, className }: HealthMetricProps) => {
  return (
    <div className={cn("p-4 rounded-2xl bg-white/80 backdrop-blur-sm", className)}>
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">{value}</span>
        <span className={cn("px-2 py-1 rounded-full bg-metric/20 text-metric text-sm font-medium")}>
          {status}
        </span>
      </div>
    </div>
  );
};
