import Link from "next/link";
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  Mail,
  Calendar,
  FileText,
  MessageSquare,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTABlock from "@/components/CTABlock";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Hero Section */}
      <header className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-inter)] font-medium text-navy tracking-tight leading-[1.1]">
            Stop Betting on AI Alone
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-charcoal leading-relaxed max-w-2xl mx-auto">
            You know AI can help your business. You just don&apos;t know who to
            trust. We build the right AI agents for your operations, then stick
            around to evolve them as the technology changes. No big bet. No
            lock-in. Just a partner who builds what works.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/get-started"
              className="px-8 py-4 bg-navy text-white rounded-lg font-[family-name:var(--font-inter)] font-medium text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Start Risk-Free <ArrowRight size={18} />
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-4 border border-border text-navy rounded-lg font-[family-name:var(--font-inter)] font-medium text-lg hover:bg-surface transition-all text-center"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-16 inline-flex items-center gap-3 px-4 py-2 bg-surface rounded-full border border-border">
            <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
            <span className="font-[family-name:var(--font-ibm-plex-mono)] text-teal text-sm font-medium tracking-tight">
              You don&apos;t pay until it&apos;s working
            </span>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            subtitle="The Problem"
            title="The Problem With AI Right Now"
          />

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border shadow-sm">
            {/* Without Fulcrux */}
            <div className="bg-white p-10">
              <h3 className="text-charcoal font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-widest mb-6">
                Without Fulcrux
              </h3>
              <ul className="space-y-6">
                {[
                  "Consultants hand you a roadmap and disappear.",
                  "Vendors lock you into their tool.",
                  "DIY experiments waste months — and whatever you build today might be obsolete in six months.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start opacity-60">
                    <Clock className="mt-1 text-charcoal shrink-0" size={18} />
                    <p className="italic text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Fulcrux */}
            <div className="bg-navy p-10">
              <h3 className="text-white/50 font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-widest mb-6">
                With Fulcrux
              </h3>
              <ul className="space-y-6">
                {[
                  "Real AI agents, live in your systems in 2 weeks. Not a strategy deck.",
                  "Monthly check-ins. Slack access. We're your ongoing AI partner, not a one-time contractor.",
                  "New AI capability drops? We evaluate it. Better model released? We upgrade your agents.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2
                      className="mt-1 text-teal shrink-0"
                      size={18}
                    />
                    <p className="font-[family-name:var(--font-inter)] text-white text-lg font-medium">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            subtitle="Why Fulcrux"
            title="What Makes Fulcrux Different"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "We build, not just advise.",
                desc: "Real AI agents, live in your systems in 2 weeks. Not a strategy deck.",
              },
              {
                title: "We stay, not disappear.",
                desc: "Monthly check-ins. Slack access. We're your ongoing AI partner, not a one-time contractor.",
              },
              {
                title: "We evolve with you.",
                desc: "New AI capability drops? We evaluate it. Better model released? We upgrade your agents. You never fall behind.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-border rounded-xl hover:border-teal transition-all hover:shadow-md"
              >
                <h3 className="text-xl font-[family-name:var(--font-inter)] font-medium text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Automate Preview */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            subtitle="Capabilities"
            title="AI Agents That Handle Your Busywork"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mail className="text-teal" />,
                title: "Inbox Agent",
                desc: "Triage, draft responses, and flag priority client requests automatically.",
              },
              {
                icon: <Calendar className="text-teal" />,
                title: "Scheduling Agent",
                desc: "Handle complex back-and-forth calendar coordination without human touch.",
              },
              {
                icon: <FileText className="text-teal" />,
                title: "Document Agent",
                desc: "Extract data from messy PDFs and sync it directly to your CRM or ERP.",
              },
              {
                icon: <MessageSquare className="text-teal" />,
                title: "Communication Agent",
                desc: "Proactive client follow-ups and status updates based on project milestones.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-white border border-border rounded-xl hover:border-teal transition-all hover:shadow-md"
              >
                <div className="mb-6 w-12 h-12 bg-surface rounded-lg flex items-center justify-center group-hover:bg-teal-light transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-[family-name:var(--font-inter)] font-medium text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/what-we-automate"
              className="text-teal font-[family-name:var(--font-inter)] font-medium hover:text-navy underline underline-offset-4 transition-colors inline-flex items-center gap-2"
            >
              See all agent types <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="Results"
            title="Real Businesses, Real Results"
          />

          <div className="bg-surface border-l-4 border-teal p-8 md:p-12 rounded-r-xl">
            <p className="italic text-xl leading-relaxed text-charcoal mb-6">
              &ldquo;I forward every AI vendor pitch to my Fulcrux partner. He
              tells me what&apos;s legit and what&apos;s hype. Worth the
              partnership fee alone — and that&apos;s before the 10 hours a week
              I got back.&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="font-[family-name:var(--font-inter)] font-medium text-navy">
                — Sarah Chen, Owner, Chen Insurance
                <span className="block text-sm text-charcoal font-normal mt-1">
                  8 employees, Columbus OH
                </span>
              </p>
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-teal font-medium">
                10 hrs/week saved
              </span>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/case-studies"
              className="text-teal font-[family-name:var(--font-inter)] font-medium hover:text-navy underline underline-offset-4 transition-colors inline-flex items-center gap-2"
            >
              Read more case studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <CTABlock
        headline="Ready to Stop Going It Alone?"
        copy="We'll build your first AI agent and run it for 30 days. If it saves you 5+ hours a week, you pay and we continue as partners. If it doesn't deliver, you owe nothing."
        primaryCTA="Start Risk-Free"
        primaryHref="/get-started"
        secondaryCTA="See what we've built for others"
        secondaryHref="/case-studies"
      />
    </div>
  );
}
