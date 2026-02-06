interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  alignment?: "center" | "left";
}

export default function SectionHeader({
  subtitle,
  title,
  alignment = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl mb-16 ${alignment === "center" ? "mx-auto text-center" : ""}`}
    >
      {subtitle && (
        <span className="font-[family-name:var(--font-ibm-plex-mono)] text-teal uppercase tracking-widest text-sm font-medium mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-inter)] font-medium text-navy leading-tight">
        {title}
      </h2>
    </div>
  );
}
