import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof React.JSX.IntrinsicElements;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({
  as: Tag = "div",
  size = "xl",
  className,
  children,
  ...props
}: ContainerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizeMap[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
