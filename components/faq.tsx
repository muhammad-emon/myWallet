"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is my data secure?",
    answer:
      "Yes! MyWallet uses AES-256 encryption to protect your data. We also comply with GDPR and other international data protection standards.",
  },
  {
    question: "Can I use it without linking my bank account?",
    answer:
      "Absolutely. You can manually add income and expenses. Bank account linking is optional and provides additional convenience.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes! MyWallet is available on both iOS and Android. Download it from the App Store or Google Play.",
  },
  {
    question: "Can I export my data?",
    answer: "Yes, with our Premium and Pro plans. You can export your financial data to CSV or PDF formats anytime.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and digital payment methods including Apple Pay and Google Pay.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time without penalties. Your data remains accessible for 30 days.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about MyWallet.</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-accent/5 transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground text-lg">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
