import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/">
          <Image src="/logo.png" alt="Fulcrux" width={120} height={30} />
        </Link>
        <p className="text-xs font-[family-name:var(--font-ibm-plex-mono)] text-charcoal/50 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Fulcrux Implementation Partners. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
