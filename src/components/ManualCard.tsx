import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

interface ManualCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function ManualCard({ title, description, className, children }: ManualCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to extract image src from children
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setSelectedImage(e.currentTarget.src);
  };

  // Clone and modify children to add click handlers to images
  const modifiedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === 'img') {
      return React.cloneElement(child, {
        onClick: handleImageClick,
        className: cn(child.props.className, 'cursor-pointer'),
      });
    }
    return child;
  });

  return (
    <>
      <div className={cn(
        "group relative overflow-hidden rounded-lg border bg-white p-6 shadow-md transition-all hover:shadow-lg",
        className
      )}>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="pt-4">
          {modifiedChildren}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}