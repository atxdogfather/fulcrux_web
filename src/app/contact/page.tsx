"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

const subjectOptions = [
  "General inquiry",
  "Partnership opportunity",
  "Press/media",
  "Something else",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    const form = e.currentTarget;
    const res = await fetch("https://formspree.io/f/mpqjwjqp", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError(true);
    }
  }

  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Hero */}
      <header className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-inter)] font-medium text-navy tracking-tight leading-[1.1]">
            Get in Touch
          </h1>
          <p className="mt-8 text-xl text-charcoal leading-relaxed max-w-2xl mx-auto">
            Question? Idea? Just want to say hi? We&apos;ll get back to you
            within one business day.
          </p>
        </div>
      </header>

      {/* Contact Form */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="bg-surface border border-border rounded-xl p-12 text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-[family-name:var(--font-inter)] font-medium text-navy mb-4">
                Thanks!
              </h2>
              <p className="text-charcoal text-lg">
                We&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-[family-name:var(--font-inter)] font-medium text-charcoal mb-2">
                  Name <span className="text-teal">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-[family-name:var(--font-inter)] font-medium text-charcoal mb-2">
                  Email <span className="text-teal">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block font-[family-name:var(--font-inter)] font-medium text-charcoal mb-2">
                  Subject <span className="text-teal">*</span>
                </label>
                <select
                  name="subject"
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 text-charcoal bg-white focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-colors"
                >
                  <option value="">Select a subject...</option>
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-[family-name:var(--font-inter)] font-medium text-charcoal mb-2">
                  Message <span className="text-teal">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-border rounded-lg px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-colors resize-vertical"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-navy text-white py-4 rounded-lg font-[family-name:var(--font-inter)] font-medium text-lg hover:bg-navy-light transition-all"
              >
                Send Message
              </button>
              {error && (
                <p className="text-red-600 text-center mt-4">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-16 bg-surface px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-[family-name:var(--font-inter)] font-medium text-navy mb-4">
            Prefer to talk?
          </h2>
          <p className="text-lg text-charcoal mb-6">
            Skip the form. Book a 30-minute call and we&apos;ll figure out
            together whether Fulcrux is the right fit.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 text-teal font-[family-name:var(--font-inter)] font-medium text-lg underline underline-offset-4 hover:text-navy transition-colors"
          >
            Book a Call &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
