import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border border-gray-200",
        lime: "bg-[#D2F801] text-black font-semibold",
        glass: "bg-white/80 backdrop-blur-md text-gray-800 border border-white/40 shadow-sm",
        darkGlass: "bg-black/60 backdrop-blur-md text-white border border-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
