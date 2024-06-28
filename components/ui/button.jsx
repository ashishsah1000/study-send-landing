import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "buttonHover text-primary bg-gradient-to-br from-[#367CE7] to-[#4E1FD4] hover:bg-gradient-to-tl hover:from-[#367CE7] hover:to-[#4E1FD4] transition-all duration-300 ease-in-out rounded-md",
        destructive:
          "buttonHover bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "buttonHover border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          " buttonHover bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: " buttonHover hover:bg-accent hover:text-accent-foreground",
        link: "buttonHover text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "px-4 py-2 min-w-32 h-10 lg:px-6 lg:py-2 lg:min-w-40 lg:h-11 rounded-md",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
