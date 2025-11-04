import { Card } from "@/components/ui/card"
import { PieChart, TrendingUp, DollarSign, Target } from "lucide-react"

const features = [
  {
    icon: PieChart,
    title: "Income & Expense Tracking",
    description: "Log every transaction quickly and accurately. Get a complete picture of your financial flow.",
  },
  {
    icon: TrendingUp,
    title: "Smart Categorizer",
    description: "AI-driven categorization to understand where your money goes automatically.",
  },
  {
    icon: DollarSign,
    title: "Multi-Currency Converter",
    description: "Manage finances across global currencies with real-time exchange rates.",
  },
  {
    icon: Target,
    title: "Budget & Goal Tracker",
    description: "Set realistic budgets and track your goals to achieve financial milestones.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Powerful Features for Complete Control
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your finances effectively in one intuitive platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-8 border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
