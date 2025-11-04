"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Mail className="w-12 h-12 text-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Stay Ahead with Smart Finance Tips
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          Subscribe to our monthly newsletter for exclusive insights, money-saving tips, and product updates.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            {submitted ? "Subscribed!" : "Subscribe"}
          </Button>
        </form>

        {submitted && (
          <p className="text-sm text-primary mt-4">✓ Thanks for subscribing! Check your email for confirmation.</p>
        )}
      </div>
    </section>
  )
}
