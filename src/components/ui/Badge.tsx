import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "pink" | "dark" | "outline";
}

export default function Badge({ children, className, variant = "dark" }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono px-3 py-1.5 rounded-full",
      {
        "bg-[#FE4101]/10 text-[#FE4101] border border-[#FE4101]/20": variant === "pink",
        "bg-white/5 text-white/50 border border-white/10": variant === "dark",
        "border border-white/20 text-white/50": variant === "outline",
      },
      className
    )}>
      {children}
    </span>
  );
}
