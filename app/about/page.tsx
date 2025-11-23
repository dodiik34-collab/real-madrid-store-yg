import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">About Real Madrid Store</h1>

        <div className="prose prose-invert max-w-none">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Real Madrid Store is the official online destination for authentic Real Madrid merchandise and apparel.
              We're dedicated to providing fans with premium quality products that celebrate one of the world's greatest
              football clubs.
            </p>
            <p className="text-foreground leading-relaxed">
              From official jerseys to training wear and accessories, every product in our store represents the
              excellence, tradition, and prestige of Real Madrid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
              <div className="text-4xl mb-3">⚪</div>
              <h3 className="font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground text-sm">Premium materials and authentic designs</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground text-sm">Quick delivery to customers worldwide</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold mb-2">Authentic</h3>
              <p className="text-muted-foreground text-sm">100% official Real Madrid products</p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Shop?</h2>
            <p className="text-foreground mb-6">Explore our complete collection of Real Madrid merchandise</p>
            <Link href="/shop">
              <Button size="lg">Start Shopping</Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
