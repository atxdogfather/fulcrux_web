"use client";

import { useState } from "react";
import { ChevronDown, RefreshCw, Shield } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTABlock from "@/components/CTABlock";

const phases = [
  {
    label: "Phase 1: Discovery",
    week: "Week 1",
    time: "Your Time: 30 minutes",
    desc: "One 30-minute call. You walk us through your week—what's repetitive, what's annoying, what eats time you don't have. We identify the highest-value automation and scope the first agent.",
  },
  {
    label: "Phase 2: Build",
    week: "Weeks 2–3",
    time: "Your Time: 0 hours",
    desc: "We disappear and build. You'll get a few async questions via email or Slack—that's it. We install the agent, integrate it with your systems, train it on your data, and test edge cases.",
  },
  {
    label: "Phase 3: Evolve",
    week: "Ongoing",
    time: "Your Time: 15 min/month",
    desc: "Your agent goes live. We monitor performance, fix issues, and upgrade capabilities as AI improves. Monthly check-in calls. Slack access for quick questions. When you're ready, we add more agents.",
  },
];

const tableRows = [
  {
    phase: "Week 1: Discovery",
    you: "30 min (one call)",
    us: "8 hours (mapping, scoping, design)",
  },
  {
    phase: "Weeks 2–3: Build",
    you: "0 hours",
    us: "40 hours (building, integrating, testing)",
  },
  {
    phase: "Week 4: Review",
    you: "15 min (test & approve)",
    us: "4 hours (tuning, refinement)",
  },
  {
    phase: "Ongoing: Evolve",
    you: "15 min/month",
    us: "2–4 hours/month (monitoring, upgrades)",
  },
];

const trustLevels = [
  {
    period: "Week 1–2",
    level: "You approve everything",
    width: "w-full",
    desc: "Agent drafts an email? You review before it sends.",
  },
  {
    period: "Week 3–4",
    level: "You approve exceptions only",
    width: "w-2/3",
    desc: "Agent handles routine tasks automatically, flags edge cases for you.",
  },
  {
    period: "Month 2+",
    level: "Full autonomy (your choice)",
    width: "w-1/3",
    desc: "Full autonomy on tasks you trust. You can tighten or loosen controls anytime.",
  },
];

const faqs = [
  {
    q: "What if it doesn't work for my business?",
    a: "You don't pay. We build your first agent and run it for 30 days. If it doesn't save you 5+ hours a week, you owe nothing.",
  },
  {
    q: "Do I need a tech team?",
    a: "No. We handle everything—setup, integration, training, maintenance. If you can use email, you can use our agents.",
  },
  {
    q: "What systems do you integrate with?",
    a: "Most CRMs, calendar tools, email platforms, and industry-specific software (AMS, practice management, etc.). If you use it daily, we can probably connect to it.",
  },
  {
    q: "How much does it cost?",
    a: "After your first agent proves value, we'll scope a partnership based on how many agents you need and how complex your workflows are. Most clients invest less than the cost of a part-time hire—and get more done.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-surface transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-[family-name:var(--font-inter)] font-medium text-navy text-lg pr-4">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`text-charcoal shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-charcoal leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Hero */}
      <header className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-inter)] font-medium text-navy tracking-tight leading-[1.1]">
            You Do Very Little. We Do Everything.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-charcoal leading-relaxed max-w-2xl mx-auto">
            Most AI projects require months of your time, endless meetings, and
            a tech team you don&apos;t have. Ours don&apos;t. You give us 45
            minutes total. We handle the rest&mdash;and you don&apos;t pay until
            it&apos;s working.
          </p>
        </div>
      </header>

      {/* 3-Phase Process */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader subtitle="The Process" title="How We Work Together" />

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-border" />

            {phases.map((step, i) => (
              <div key={i} className="relative z-10">
                <div className="w-20 h-20 bg-white border-2 border-border rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xl text-navy font-bold">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="font-[family-name:var(--font-inter)] font-bold text-navy text-xl mb-1">
                  {step.label}
                </h4>
                <div className="font-[family-name:var(--font-ibm-plex-mono)] text-teal text-xs uppercase tracking-widest mb-3 font-medium">
                  {step.time}
                </div>
                <p className="italic text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You vs. We Table */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader subtitle="The Math" title="Your Time vs. Our Time" />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left font-[family-name:var(--font-inter)] font-medium text-charcoal border-b-2 border-border" />
                  <th className="p-4 text-left font-[family-name:var(--font-inter)] font-medium text-white bg-teal rounded-tl-lg border-b-2 border-teal">
                    You
                  </th>
                  <th className="p-4 text-left font-[family-name:var(--font-inter)] font-medium text-white bg-navy rounded-tr-lg border-b-2 border-navy">
                    Us
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="p-4 font-[family-name:var(--font-inter)] font-medium text-navy">
                      {row.phase}
                    </td>
                    <td className="p-4 font-[family-name:var(--font-ibm-plex-mono)] text-teal text-sm">
                      {row.you}
                    </td>
                    <td className="p-4 text-charcoal">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-surface border-2 border-navy p-8 rounded-xl text-center">
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-2xl text-navy font-bold">
              Total your time to first working agent: 45 minutes.
            </p>
            <p className="mt-2 text-charcoal italic">
              We&apos;re not being generous&mdash;we&apos;re being efficient.
              The less you&apos;re involved, the faster we move.
            </p>
          </div>
        </div>
      </section>

      {/* AI Changes Section */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-border">
            <RefreshCw className="text-teal" size={28} />
          </div>
          <SectionHeader
            subtitle="Future-Proof"
            title="You Never Fall Behind"
          />
          <div className="-mt-8">
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              AI is moving fast. The model that&apos;s best today might be
              obsolete in six months. That&apos;s our problem, not yours.
            </p>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              When better models drop, we evaluate them. When new capabilities
              emerge, we test them against your workflows. When upgrades make
              sense, we implement them. You don&apos;t have to track the AI
              landscape&mdash;that&apos;s what you&apos;re paying us for.
            </p>
            <p className="font-[family-name:var(--font-inter)] font-medium text-navy text-xl mt-6">
              Your agents get better over time. Automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Human-in-the-Loop */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto shadow-sm border border-border">
            <Shield className="text-teal" size={28} />
          </div>
          <SectionHeader
            subtitle="Control"
            title="You're Always in Control"
          />

          <p className="text-center text-lg text-charcoal mb-12 max-w-2xl mx-auto -mt-8">
            AI agents work best with human oversight&mdash;especially at the
            start. Here&apos;s how we handle it:
          </p>

          <div className="space-y-6">
            {trustLevels.map((level, i) => (
              <div key={i} className="bg-surface p-6 rounded-xl border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-teal font-medium text-sm uppercase tracking-wider">
                    {level.period}
                  </span>
                  <span className="font-[family-name:var(--font-inter)] font-medium text-navy text-lg">
                    {level.level}
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-3 mb-3">
                  <div
                    className={`bg-teal h-3 rounded-full ${level.width}`}
                  />
                </div>
                <p className="text-charcoal text-sm">{level.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 font-[family-name:var(--font-inter)] font-medium text-navy">
            Nothing happens without your permission until you&apos;re ready.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader subtitle="FAQ" title="Common Questions" />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <CTABlock
        headline="Ready to Get Your Time Back?"
        copy="45 minutes of your time. 2 weeks to a working agent. Zero payment until it's saving you hours."
        primaryCTA="Start Risk-Free"
        primaryHref="/get-started"
      />
    </div>
  );
}
