import { cn } from "@/lib/utils";

export default function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "p-6 md:p-8 rounded-2xl border border-brand-light/10 bg-brand-light/[0.03] backdrop-blur-sm",
        hover &&
          "hover:border-brand-accent/40 hover:bg-brand-accent/[0.05] hover:-translate-y-1 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}