import SectionHeader from "@/components/SectionHeader";
import CTABlock from "@/components/CTABlock";

const beliefs = [
  {
    title: "Build first, prove it, then talk money.",
    desc: "We've sat in rooms where vendors pitched six-figure platforms that took nine months to deliver. We think that's broken. Your first agent is free. You pay after it's working — not before.",
  },
  {
    title: "Stay current so you don't have to.",
    desc: "AI moves fast enough to make last quarter's solution obsolete. We monitor the landscape, evaluate new models, and upgrade your agents when it makes sense. You don't need to become an AI expert. That's our job.",
  },
  {
    title: "Bring enterprise-grade thinking to businesses that actually need it.",
    desc: "We've built AI systems for companies with thousands of employees and companies with twelve. The principles are the same — the difference is that nobody was building them for the twelve-person shop. Until now.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Hero */}
      <header className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-inter)] font-medium text-navy tracking-tight leading-[1.1]">
            Built by Operators Who&apos;ve Been in Your Chair
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-charcoal leading-relaxed max-w-2xl mx-auto italic">
            Fulcrux exists because we spent years building AI systems inside real
            companies&mdash;and saw how badly small businesses were being left
            behind.
          </p>
        </div>
      </header>

      {/* Origin Story */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader subtitle="Our Story" title="Where We Come From" alignment="left" />

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Fulcrux started inside a real company with real operational
              problems.
            </p>

            <p>
              Our founder, Matt Peterson, spent years as President of AgencyKPI,
              a data analytics company serving insurance agencies. Before that,
              he led product at Digital Turbine through a growth run from $350M
              to $8B market cap&mdash;building the data systems, automation
              pipelines, and AI-driven workflows that powered that scale.
              He&apos;s taken a venture-backed startup from zero through
              acquisition. He&apos;s built analytics platforms that hundreds of
              businesses relied on daily.
            </p>

            <p>
              The pattern was always the same: the companies that won were the
              ones that automated the work that didn&apos;t need a human. Not
              with expensive enterprise tools&mdash;with smart, focused systems
              built around how the business actually operates.
            </p>

            <p>
              But when Matt looked at small businesses&mdash;5-person agencies,
              20-person firms, owner-operators wearing every hat&mdash;he saw the
              same problems he&apos;d solved at scale, with none of the resources
              to fix them. The consultants were chasing seven-figure enterprise
              deals. The AI vendors were selling platforms that required a tech
              team to implement. Nobody was just{" "}
              <em>building the thing</em> for them.
            </p>

            <p className="font-[family-name:var(--font-inter)] font-medium text-navy text-xl">
              That&apos;s why Fulcrux exists.
            </p>

            <p>
              Our team brings experience building AI systems for both internal
              operations and external products&mdash;from data extraction and
              workflow automation to intelligent document processing and customer
              communication. We&apos;ve implemented these systems inside
              companies, not from a distance. We know what breaks, what scales,
              and what actually saves time versus what just looks good in a demo.
            </p>

            <p>
              We&apos;re not a software platform. We&apos;re not a chatbot
              vendor. We&apos;re the team that builds your AI agents, integrates
              them into your operations, and keeps them working as the technology
              evolves.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader subtitle="Values" title="What We Believe" />

          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, i) => (
              <div
                key={i}
                className="p-8 bg-surface border border-border rounded-xl"
              >
                <h3 className="text-xl font-[family-name:var(--font-inter)] font-medium text-navy mb-3">
                  {belief.title}
                </h3>
                <p className="text-charcoal leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <CTABlock
        headline="See If We're the Right Fit"
        copy="30 minutes. No pitch. We'll walk through your week, identify the highest-value automation, and tell you honestly whether we can help. If we can, your first agent is on us."
        primaryCTA="Get Your First Agent Free"
        primaryHref="/get-started"
        secondaryCTA="Book a Call"
        secondaryHref="/contact"
      />
    </div>
  );
}
