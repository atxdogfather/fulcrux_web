import {
  Mail,
  Calendar,
  FileText,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTABlock from "@/components/CTABlock";

const agentCategories = [
  {
    icon: <Mail className="text-teal" size={24} />,
    title: "Inbox & Email Agents",
    tagline:
      "Your email sorted, prioritized, and answered before you even open it.",
    bullets: [
      "Triage incoming messages by urgency and type",
      "Draft replies based on your tone and history",
      "Route requests to the right person or system",
      "Flag exceptions that need your attention",
    ],
  },
  {
    icon: <Calendar className="text-teal" size={24} />,
    title: "Scheduling & Calendar Agents",
    tagline: "Appointments booked, reminders sent, no-shows prevented.",
    bullets: [
      "Handle booking requests automatically",
      "Send confirmation and reminder sequences",
      "Reschedule and follow up on cancellations",
      "Sync across calendars and systems",
    ],
  },
  {
    icon: <FileText className="text-teal" size={24} />,
    title: "Document & Data Agents",
    tagline:
      "Information collected, organized, and entered—without the data entry.",
    bullets: [
      "Request and collect documents from clients",
      "Extract data from forms, PDFs, and emails",
      "Update your CRM, AMS, or database automatically",
      "Flag missing or incomplete information",
    ],
  },
  {
    icon: <MessageSquare className="text-teal" size={24} />,
    title: "Customer Communication Agents",
    tagline:
      "Clients informed, nurtured, and followed up with—on autopilot.",
    bullets: [
      "Send status updates and check-ins",
      "Respond to common questions instantly",
      "Trigger outreach based on dates or events",
      "Escalate complex requests to you",
    ],
  },
];

const industries = [
  {
    name: "Insurance Agencies",
    description:
      "Your renewal agent monitors policy expiration dates in your AMS, sends personalized reminders at 90/60/30 days, follows up automatically when clients don't respond, books annual review appointments through your calendar, and updates the policy record when they confirm. Works with Applied Epic, Hawksoft, AMS360, and most agency management systems.",
    metric: "Most agencies save 6–8 hours/week.",
  },
  {
    name: "Accounting Firms",
    description:
      "Your document collection agent sends secure requests to clients, tracks what's been submitted vs. missing, sends automatic follow-ups on overdue items, routes completed engagement letters for signature, and schedules quarterly review appointments. Integrates with your practice management system and client portal. Tax season without the inbox chaos.",
    metric: "Most firms save 8–10 hours/week during busy season.",
  },
  {
    name: "Real Estate Offices",
    description:
      "Your lead response agent replies to inquiries within 60 seconds (even at 2am), qualifies interest level, coordinates showing requests with your calendar, sends listing update notifications when status changes, and keeps transaction timelines on track with automated reminders to all parties. Works with your MLS feed, CRM, and transaction management system.",
    metric: "Most agents save 5–7 hours/week.",
  },
];

export default function WhatWeAutomatePage() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Hero */}
      <header className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-inter)] font-medium text-navy tracking-tight leading-[1.1]">
            AI Agents That Handle Your Busywork
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-charcoal leading-relaxed max-w-2xl mx-auto">
            We build AI that does the repetitive work eating your
            week&mdash;email, scheduling, document chasing, follow-ups. If
            it&apos;s predictable and time-consuming, we can probably automate
            it.
          </p>
        </div>
      </header>

      {/* Agent Categories */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            subtitle="Capabilities"
            title="What We Build"
            alignment="left"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {agentCategories.map((cat, i) => (
              <div
                key={i}
                className="group bg-white p-8 border border-border rounded-xl hover:border-teal transition-all hover:shadow-md"
              >
                <div className="mb-4 w-12 h-12 bg-surface rounded-lg flex items-center justify-center group-hover:bg-teal-light transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-[family-name:var(--font-inter)] font-medium text-navy mb-2">
                  {cat.title}
                </h3>
                <p className="italic text-charcoal mb-4">{cat.tagline}</p>
                <ul className="space-y-2">
                  {cat.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <ArrowRight
                        className="mt-1 text-teal shrink-0"
                        size={14}
                      />
                      <span className="text-charcoal">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            subtitle="Industries"
            title="Built for Your Business"
          />

          <p className="text-center text-lg text-charcoal mb-12 max-w-2xl mx-auto -mt-8">
            We work with small businesses in high-admin industries. Here&apos;s
            what that looks like:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="bg-surface p-8 rounded-xl border border-border"
              >
                <h3 className="text-xl font-[family-name:var(--font-inter)] font-medium text-navy mb-4">
                  {ind.name}
                </h3>
                <p className="text-charcoal leading-relaxed mb-6">
                  {ind.description}
                </p>
                <p className="font-[family-name:var(--font-ibm-plex-mono)] text-teal font-medium">
                  {ind.metric}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-charcoal mt-8 italic">
            Different industry? We&apos;ll figure it out together.
          </p>
        </div>
      </section>

      {/* CTA Block */}
      <CTABlock
        headline="Not Sure What to Automate First?"
        copy="Most clients don't know until we show them. Book a 30-minute call and we'll walk through your week together — no pitch, just pattern-spotting."
        primaryCTA="Start Risk-Free"
        primaryHref="/get-started"
        secondaryCTA="Book a Call to Explore"
        secondaryHref="/contact"
      />
    </div>
  );
}
