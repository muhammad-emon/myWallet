import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["Basic income & expense tracking", "Manual transaction entry", "Basic reports", "Up to 3 budgets"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/month",
    description: "For serious savers",
    features: [
      "Everything in Free",
      "AI-powered categorization",
      "Unlimited budgets & goals",
      "Advanced analytics",
      "Multi-currency support",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For power users",
    features: [
      "Everything in Premium",
      "Advanced analytics & insights",
      "Export to CSV/PDF",
      "Bank account integration",
      "Custom categories",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you. Always flexible, always fair.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 border transition-all ${
                plan.highlighted ? "border-primary bg-primary/5 ring-2 ring-primary/20 md:scale-105" : "border-border"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>

              {/* CTA */}
              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-accent/5"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
