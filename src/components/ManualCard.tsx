import { cn } from "@/lib/utils";

interface ManualCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function ManualCard({ title, description, className, children }: ManualCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg border bg-white p-6 shadow-md transition-all hover:shadow-lg",
      className
    )}>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="pt-4">
        {children}
      </div>
    </div>
  );
}