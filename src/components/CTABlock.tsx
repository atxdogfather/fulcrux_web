import Link from "next/link";

interface CTABlockProps {
  headline: string;
  copy: string;
  primaryCTA: string;
  primaryHref: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export default function CTABlock({
  headline,
  copy,
  primaryCTA,
  primaryHref,
  secondaryCTA,
  secondaryHref,
}: CTABlockProps) {
  return (
    <section className="bg-navy py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter)] font-medium text-white mb-6">
          {headline}
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto leading-relaxed">
          {copy}
        </p>
        <div className="flex flex-col items-center gap-6">
          <Link
            href={primaryHref}
            className="px-10 py-5 bg-white text-navy rounded-lg font-[family-name:var(--font-inter)] font-bold text-xl hover:bg-surface transition-all shadow-xl"
          >
            {primaryCTA}
          </Link>
          {secondaryCTA && secondaryHref && (
            <Link
              href={secondaryHref}
              className="text-white/60 font-[family-name:var(--font-inter)] font-medium hover:text-white underline underline-offset-4 transition-colors"
            >
              {secondaryCTA}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
