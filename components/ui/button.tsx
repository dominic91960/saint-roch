import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[0.4em] whitespace-nowrap rounded-[0.4em] font-semibold capitalize transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[2em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-black hover:text-black/70",
        primary:
          "relative overflow-hidden rounded-full bg-primary text-primary-foreground after:absolute after:inset-0 after:-translate-x-[9em] after:-rotate-45 after:bg-white/50 after:transition-transform after:duration-500 after:ease-in after:content-[''] hover:after:translate-x-[9em]",
        secondary:
          "relative overflow-hidden rounded-full bg-[#141414] text-primary-foreground after:absolute after:inset-0 after:-translate-x-[9em] after:-rotate-45 after:bg-white/50 after:transition-transform after:duration-500 after:ease-in after:content-[''] hover:after:translate-x-[9em]",
      },
      size: {
        default: "px-[1em] py-[0.5em]",
        icon: "p-[0.5em]",
        none: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
