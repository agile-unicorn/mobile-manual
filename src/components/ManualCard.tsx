import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ManualCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ManualCard({ title, description, icon: Icon, className }: ManualCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg border bg-white p-6 shadow-md transition-all hover:shadow-lg",
      className
    )}>
      <div className="mb-4">
        <Icon className="h-8 w-8 text-secondary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}