import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium",
    "transition-all duration-300 ease-[var(--ease-out-expo)] select-none",
    "outline-none focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow-elev-md hover:opacity-90 hover:shadow-elev-lg hover:-translate-y-0.5",
        gradient:
          "bg-aurora text-white animate-aurora border border-white/10 shadow-elev-md hover:shadow-glow hover:-translate-y-0.5",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:bg-surface-2 hover:border-foreground/30",
        ghost:
          "bg-transparent text-foreground hover:bg-surface-2",
        glass:
          "glass text-foreground hover:bg-surface-2/60",
        secondary:
          "bg-surface-2 text-foreground border border-border hover:bg-surface-3",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/30",
        link:
          "text-primary underline-offset-4 hover:underline rounded-none px-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-8 text-base",
        icon: "size-10",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

export interface ButtonProps
  extends Omit<React.ComponentProps<typeof ButtonPrimitive>, "render">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(classes, child.props.className),
      ...(props as Record<string, unknown>),
    });
  }

  return (
    <ButtonPrimitive data-slot="button" className={classes} {...props}>
      {children}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
