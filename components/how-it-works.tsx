import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "1",
    title: "Sign Up Easily",
    description: "Create your free account in seconds with just your email.",
  },
  {
    number: "2",
    title: "Connect Your Wallets",
    description: "Link bank accounts or manually add transactions to get started.",
  },
  {
    number: "3",
    title: "Track Automatically",
    description: "AI categorizes your expenses instantly for better insights.",
  },
  {
    number: "4",
    title: "Set Goals & Save More",
    description: "Monitor your financial growth and achieve your milestones.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with MyWallet in just four simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 border border-border h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
