
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "confirmed" | "new";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-sm font-medium",
        status === "confirmed" && "bg-status-confirmed/20 text-status-confirmed",
        status === "new" && "bg-status-new/20 text-status-new",
        className
      )}
    >
      {status === "confirmed" ? "Confirmed" : "New"}
    </span>
  );
};
