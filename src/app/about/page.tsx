import SectionHeader from "@/components/SectionHeader";
import CTABlock from "@/components/CTABlock";

const beliefs = [
  {
    title: "You shouldn't pay for promises",
    desc: "We build first, prove it works, then talk about money. If the agent doesn't save you time, you don't pay.",
  },
  {
    title: "AI is a moving target",
    desc: "What works today will be obsolete in six months. We don't just build your agent—we evolve it as the technology changes.",
  },
  {
    title: "Small businesses deserve better",
    desc: "Enterprise companies have AI teams. You have us. Same expertise, right-sized for your business.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Hero */}
      <header className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-inter)] font-medium text-navy tracking-tight leading-[1.1]">
            Built by Someone Who&apos;s Been in Your Chair
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-charcoal leading-relaxed max-w-2xl mx-auto italic">
            Fulcrux exists because I spent years drowning in the same admin work
            you&apos;re drowning in now.
          </p>
        </div>
      </header>

      {/* Origin Story */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader subtitle="Our Story" title="Why I Built This" alignment="left" />

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I&apos;m Matt Peterson. I spent the last several years as
              President of an insurtech company called AgencyKPI. We provided
              data analytics to insurance agencies&mdash;good work, meaningful
              clients, a team I was proud of.
            </p>

            <p>
              But here&apos;s what nobody tells you about running a 20-person
              company: the admin work never stops. Reporting workflows that ate
              12 hours a week. Client updates that fell through the cracks.
              Document collection that turned tax season into chaos.
            </p>

            <p>
              I started automating our own workflows out of desperation. Email
              triage. Data extraction. Client follow-ups. One agent at a time, I
              clawed back hours.
            </p>

            <p>
              Then I realized: every small business has this problem. The owner
              is buried in busywork that&apos;s predictable, repetitive, and
              absolutely automatable&mdash;but they don&apos;t have time to
              figure out how. And the consultants who could help them are chasing
              enterprise contracts, not 8-person agencies.
            </p>

            <p className="font-[family-name:var(--font-inter)] font-medium text-navy text-xl">
              So I built Fulcrux.
            </p>

            <p>
              We&apos;re not a software platform. We&apos;re not a chatbot
              vendor. We&apos;re the people who will actually sit down with you,
              find the task eating your week, build an AI agent to handle it, and
              stick around to make sure it keeps working as AI changes.
            </p>

            <p className="italic text-navy">
              That&apos;s it. That&apos;s the whole company.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader subtitle="Values" title="How We Work" />

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
        headline="Let's Talk"
        copy="30 minutes. No pitch. We'll walk through your week, find the task that's eating the most time, and tell you honestly whether we can help."
        primaryCTA="Start Risk-Free"
        primaryHref="/get-started"
        secondaryCTA="Book a Call"
        secondaryHref="/contact"
      />
    </div>
  );
}
