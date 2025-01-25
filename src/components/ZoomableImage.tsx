import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
        />
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
}