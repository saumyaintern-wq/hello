import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "primary" | "muted" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "badge",
  primary: "badge badge-primary",
  muted: "badge badge-muted",
  outline: "badge badge-outline",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
}
