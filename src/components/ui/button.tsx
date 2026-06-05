import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline";
  className?: string;
  children: React.ReactNode;
};

export function Button({ asChild, variant = "default", className = "", children, ...props }: ButtonProps) {
  const classes = ["button", variant === "outline" ? "outline" : "", className].filter(Boolean).join(" ");
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, { className: [classes, child.props.className].filter(Boolean).join(" ") });
  }
  return <button className={classes} {...props}>{children}</button>;
}
