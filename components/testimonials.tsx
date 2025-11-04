import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Aisha R.",
    role: "Student",
    content: "MyWallet helped me save 20% more every month. The categorizer is a game changer!",
    rating: 5,
    avatar: "👩‍🎓",
  },
  {
    name: "Michael D.",
    role: "Freelancer",
    content: "The budget tracker keeps me disciplined and motivated. Finally, I understand my spending patterns.",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "Sarah K.",
    role: "Professional",
    content: "The multi-currency support is perfect for my international work. Highly recommended!",
    rating: 5,
    avatar: "👩‍💻",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Loved by Users Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about MyWallet.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border border-border">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
