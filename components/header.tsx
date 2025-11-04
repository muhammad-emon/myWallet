"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">💸</div>
          <span className="text-xl font-bold text-foreground">MyWallet</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition">
            How It Works
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition">
            Pricing
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition">
            FAQ
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline">Sign In</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="block text-foreground hover:text-primary">
              How It Works
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary">
              Pricing
            </a>
            <a href="#faq" className="block text-foreground hover:text-primary">
              FAQ
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="w-full bg-transparent">
                Sign In
              </Button>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
