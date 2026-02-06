import SectionHeader from "@/components/SectionHeader";
import CTABlock from "@/components/CTABlock";

const scenarios = [
  {
    industry: "Insurance Agency",
    title: "Renewal Management",
    pattern:
      "An 8-person P&C agency was losing renewals to competitors who reached clients first. The CSRs were buried in manual reminder emails and phone tag. Renewals that slipped meant lost revenue and frustrated clients.",
    agent:
      "A renewal management agent that monitors policy expiration dates, sends personalized outreach at 90/60/30 days, follows up on non-responders, books annual review appointments, and updates the AMS when clients confirm.",
    results: [
      "6–8 hours/week returned to CSRs",
      "Renewal touch rate: 100% (vs. ~70% manually)",
      "Response time: Same day (vs. 2–3 days)",
    ],
  },
  {
    industry: "Accounting Firm",
    title: "Tax Season Document Collection",
    pattern:
      "A 5-person CPA firm dreaded the January–April document chase. Partners were sending reminder emails at 10pm, clients were submitting incomplete packages, and the team was tracking everything in spreadsheets that fell out of date hourly.",
    agent:
      "A document collection agent that sends secure requests, tracks submissions against a checklist, follows up automatically on missing items, and alerts staff only when a client package is complete or stuck.",
    results: [
      "8–10 hours/week saved during busy season",
      "Client document completion: 2 weeks faster on average",
      "Partner inbox volume: Down 40%",
    ],
  },
  {
    industry: "Real Estate Office",
    title: "Lead Response",
    pattern:
      "A solo agent was losing leads to competitors who responded faster. Zillow inquiries at 9pm sat until morning. By then, the prospect had already scheduled a showing with someone else.",
    agent:
      "A lead response agent that replies within 60 seconds (24/7), qualifies interest, answers common questions, and books showings directly on the agent's calendar. Complex requests get escalated with full context.",
    results: [
      "Response time: 60 seconds (vs. 6+ hours)",
      "Lead-to-showing conversion: Up 35%",
      "5–7 hours/week freed from initial outreach",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Hero */}
      <header className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-inter)] font-medium text-navy tracking-tight leading-[1.1]">
            What This Looks Like in Practice
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-charcoal leading-relaxed max-w-2xl mx-auto">
            Real patterns from real industries. Here&apos;s how AI agents handle
            the busywork eating your week&mdash;starting with one automation at
            a time.
          </p>
        </div>
      </header>

      {/* Honesty Intro */}
      <section className="py-16 bg-surface px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            subtitle="Transparency"
            title="What Typical Engagements Look Like"
          />
          <p className="text-lg text-charcoal leading-relaxed text-center -mt-8">
            We&apos;re a new company, so we&apos;ll be honest: the case studies
            below are representative scenarios, not named clients. They&apos;re
            based on real patterns we&apos;ve seen across insurance, accounting,
            and real estate. As we close clients, we&apos;ll add their stories
            here&mdash;with permission.
          </p>
          <p className="text-center text-lg text-charcoal mt-4">
            For now, here&apos;s what AI agent implementations typically look
            like:
          </p>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {scenarios.map((scenario, i) => (
              <div
                key={i}
                className="bg-surface border border-border rounded-xl overflow-hidden"
              >
                {/* Industry Label */}
                <div className="bg-navy px-6 py-3">
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-white text-xs uppercase tracking-widest">
                    {scenario.industry}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-[family-name:var(--font-inter)] font-medium text-navy mb-6">
                    {scenario.title}
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-[family-name:var(--font-inter)] font-medium text-navy text-sm uppercase tracking-wider mb-2">
                      The Pattern
                    </h4>
                    <p className="text-charcoal leading-relaxed text-sm">
                      {scenario.pattern}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-[family-name:var(--font-inter)] font-medium text-navy text-sm uppercase tracking-wider mb-2">
                      The Agent
                    </h4>
                    <p className="text-charcoal leading-relaxed text-sm">
                      {scenario.agent}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-[family-name:var(--font-inter)] font-medium text-navy text-sm uppercase tracking-wider mb-2">
                      Typical Results
                    </h4>
                    <ul className="space-y-2">
                      {scenario.results.map((result, j) => (
                        <li
                          key={j}
                          className="font-[family-name:var(--font-ibm-plex-mono)] text-teal text-sm font-medium"
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <CTABlock
        headline="Ready to Be the Next Story?"
        copy="Every case study started with a 30-minute call. We found the task eating the most time, built an agent to handle it, and only charged when it worked. Same offer. Your turn."
        primaryCTA="Start Risk-Free"
        primaryHref="/get-started"
        secondaryCTA="Book a Call"
        secondaryHref="/contact"
      />
    </div>
  );
}
