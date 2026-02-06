import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-navy rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">F</span>
          </div>
          <span className="text-navy font-[family-name:var(--font-inter)] font-bold text-sm tracking-tight uppercase">
            Fulcrux.ai
          </span>
        </Link>
        <p className="text-xs font-[family-name:var(--font-ibm-plex-mono)] text-charcoal/50 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Fulcrux Implementation Partners. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
