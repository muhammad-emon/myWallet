import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-sm text-foreground">Now available on iOS & Android</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Your Smart Financial Command Center
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          Take control of your money with intuitive tracking, smart categorization, and powerful goal setting. Manage
          your finances like never before.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Start Managing Your Money Now
            <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline">
            Sign Up Free
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative mt-12 rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
          <img src="/financial-dashboard-with-charts-and-transactions.jpg" alt="MyWallet Dashboard" className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
