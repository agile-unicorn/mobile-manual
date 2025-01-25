import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

interface ManualCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function ManualCard({ title, description, className, children }: ManualCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to handle image clicks
  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const imgSrc = event.currentTarget.src;
    setSelectedImage(imgSrc);
  };

  // Function to wrap children and add click handlers to images
  const wrapChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        if (child.type === 'img') {
          return React.cloneElement(child, {
            onClick: handleImageClick,
            className: cn(child.props.className, 'cursor-pointer hover:opacity-90 transition-opacity'),
          });
        }
        if (child.props.children) {
          return React.cloneElement(child, {
            children: wrapChildren(child.props.children),
          });
        }
      }
      return child;
    });
  };

  return (
    <>
      <div className={cn(
        "group relative overflow-hidden rounded-lg border bg-white p-6 shadow-md transition-all hover:shadow-lg",
        className
      )}>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        {children && wrapChildren(children)}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="w-full h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}