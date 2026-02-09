"use client";

import { useState } from "react";
import Script from "next/script";
import { Phone, Hammer, CheckCircle2, ShieldCheck, ChevronDown, Calendar } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTABlock from "@/components/CTABlock";

const steps = [
  {
    icon: <Phone className="text-teal" size={24} />,
    title: "Book a Discovery Call",
    time: "30 min",
    desc: "We'll walk through your week together. What's repetitive? What's annoying? What would you love to never do again? No pitch—just pattern-spotting.",
  },
  {
    icon: <Hammer className="text-teal" size={24} />,
    title: "We Build Your First Agent",
    time: "2 weeks",
    desc: "We take the highest-value task and automate it. You answer a few async questions. That's it.",
  },
  {
    icon: <CheckCircle2 className="text-teal" size={24} />,
    title: "You Decide If It's Worth It",
    time: "30 days",
    desc: "Run the agent for a month. If it saves you 5+ hours a week, you pay and we continue as partners. If it doesn't deliver, you owe nothing.",
  },
];

const faqs = [
  {
    q: "What's the catch?",
    a: "There isn't one. We take on the build risk because we're confident in what we deliver. If it doesn't work, we've wasted our time, not yours.",
  },
  {
    q: "What if I'm not sure what to automate?",
    a: "That's what the discovery call is for. Most clients don't know until we show them. We'll find it together.",
  },
  {
    q: "How long until I see results?",
    a: "First agent is live in 2 weeks. You'll know if it's working within 30 days.",
  },
  {
    q: "What are token costs?",
    a: "AI models charge by usage—like a utility bill. For most small businesses, that's $20–75/month. You pay the AI provider directly (Anthropic or OpenAI), not us. We'll help you set it up and estimate your costs before we build anything.",
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

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Calendly popup widget */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Hero */}
      <header className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-inter)] font-medium text-navy tracking-tight leading-[1.1]">
            Let&apos;s Find Your First Win
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-charcoal leading-relaxed max-w-2xl mx-auto">
            One call. One automation. Zero risk. We&apos;ll identify the task
            eating most of your week, build an AI agent to handle it, and prove
            it works&mdash;before you pay a dime.
          </p>
          <button
            onClick={() =>
              (window as unknown as { Calendly: { initPopupWidget: (opts: { url: string }) => void } }).Calendly.initPopupWidget({
                url: "https://calendly.com/matt-fulcrux/30min",
              })
            }
            className="mt-10 inline-flex items-center gap-3 bg-teal text-white px-8 py-4 rounded-xl text-lg font-[family-name:var(--font-inter)] font-medium hover:bg-navy transition-colors"
          >
            <Calendar size={22} />
            Book Your Discovery Call
          </button>
          <p className="mt-6 text-charcoal">
            Prefer email? Reach out at{" "}
            <a
              href="mailto:hello@fulcrux.ai"
              className="text-teal underline underline-offset-4 hover:text-navy transition-colors"
            >
              hello@fulcrux.ai
            </a>
          </p>
        </div>
      </header>

      {/* 3-Step Process */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader subtitle="The Process" title="Three Steps to Your First Agent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-border text-center">
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-3xl text-teal font-bold">
                    {i + 1}
                  </span>
                </div>
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-[family-name:var(--font-inter)] font-medium text-navy mb-2">
                  {step.title}
                </h3>
                <div className="font-[family-name:var(--font-ibm-plex-mono)] text-teal text-xs uppercase tracking-widest mb-4 font-medium">
                  {step.time}
                </div>
                <p className="text-charcoal leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk-Free Callout */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface border-2 border-navy p-12 text-center rounded-2xl">
            <ShieldCheck size={48} className="mx-auto text-navy mb-6" />
            <h2 className="text-3xl font-[family-name:var(--font-inter)] font-medium text-navy mb-4">
              No Gotchas. Here&apos;s the Deal.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-4">
              We build your first agent at no upfront cost. You test it for 30
              days. If it delivers real value&mdash;saving you 5+ hours a
              week&mdash;you pay for the build and we transition into an ongoing
              partnership.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-4">
              If it doesn&apos;t work? You don&apos;t pay, and we part as
              friends.
            </p>
            <p className="text-charcoal leading-relaxed">
              You&apos;ll set up your own API account (we walk you through
              it&mdash;takes 5 minutes). Token costs run $20&ndash;75/month
              depending on volume. You control the keys, you control the costs.
            </p>
          </div>
        </div>
      </section>

      {/* After Your First Agent */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader subtitle="What's Next" title="After Your First Agent" />
          <div className="-mt-8">
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              Most clients don&apos;t stop at one. Once you see what&apos;s
              possible, you&apos;ll spot automation opportunities everywhere.
            </p>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              After your first agent proves value, we scope a partnership based
              on your needs&mdash;more agents, more complex workflows, ongoing
              monitoring and upgrades. You grow at your pace. We&apos;re not
              going anywhere.
            </p>
          </div>
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
        headline="Let's Find Your First Win"
        copy="45 minutes of your time. 2 weeks to a working agent. Zero payment until it's saving you hours."
        primaryCTA="Start Risk-Free"
        primaryHref="/get-started#book"
      />
    </div>
  );
}
