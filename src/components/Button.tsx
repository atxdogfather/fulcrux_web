import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  arrow = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-[family-name:var(--font-inter)] font-medium text-lg transition-all duration-200";

  const variants = {
    primary:
      "bg-navy text-white px-6 py-4 hover:bg-navy-light hover:shadow-lg",
    secondary:
      "border-2 border-teal text-teal px-6 py-4 hover:bg-teal hover:text-white",
    outline:
      "border border-border text-navy px-6 py-4 hover:bg-surface",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow && <ArrowRight size={18} />}
    </Link>
  );
}
