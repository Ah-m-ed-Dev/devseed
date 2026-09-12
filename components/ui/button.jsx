import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 whitespace-nowrap";

  const variants = {
    primary:
      "bg-brand hover:bg-brand-accent text-white shadow-lg shadow-brand-accent/30 hover:shadow-brand-accent/50 hover:-translate-y-0.5",
    ghost:
      "border border-brand-light/20 hover:border-brand-accent/60 hover:bg-brand-accent/10 text-white",
    outline:
      "border border-brand-accent/50 text-brand-accent hover:bg-brand-accent/10",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}