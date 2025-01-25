import { cn } from "@/lib/utils";
import { ZoomableImage } from "./ZoomableImage";

interface ManualCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function ManualCard({ title, description, className, children }: ManualCardProps) {
  // Function to replace img tags with ZoomableImage components in the children
  const enhanceChildren = (children: React.ReactNode): React.ReactNode => {
    if (typeof children !== 'string' && React.isValidElement(children)) {
      if (children.type === 'img') {
        return (
          <ZoomableImage
            src={children.props.src}
            alt={children.props.alt}
            className={children.props.className}
          />
        );
      }
      if (children.props.children) {
        return React.cloneElement(children, {
          children: React.Children.map(children.props.children, child =>
            enhanceChildren(child)
          )
        });
      }
    }
    return children;
  };

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg border bg-white p-6 shadow-md transition-all hover:shadow-lg",
      className
    )}>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="pt-4">
        {React.Children.map(children, child => enhanceChildren(child))}
      </div>
    </div>
  );
}