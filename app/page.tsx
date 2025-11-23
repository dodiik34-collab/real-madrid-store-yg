"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function Home() {
  const [cartItems, setCartItems] = useState(0)

  const categories = [
    {
      id: 1,
      name: "Jerseys",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      icon: "👕",
    },
    {
      id: 2,
      name: "Training Wear",
      image: "https://images.unsplash.com/photo-1506629082632-adff19b81bbb?w=300&h=300&fit=crop",
      icon: "🏃",
    },
    {
      id: 3,
      name: "Footwear",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      icon: "👟",
    },
    {
      id: 4,
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1523170335684-f042655cbdab?w=300&h=300&fit=crop",
      icon: "🧢",
    },
  ]

  const featured = [
    {
      id: 101,
      name: "Home Jersey 2024/25",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 102,
      name: "Away Jersey 2024/25",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1506629082632-adff19b81bbb?w=400&h=400&fit=crop",
      rating: 4.7,
    },
    {
      id: 103,
      name: "Training Jacket",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: 104,
      name: "Classic Cap",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1523170335684-f042655cbdab?w=400&h=400&fit=crop",
      rating: 4.5,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header cartItems={cartItems} />

      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-r from-primary via-accent to-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.05) 35px, rgba(255,255,255,0.05) 70px)",
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Real Madrid Store</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Official Merchandise & Apparel</p>
            <Link href="/shop">
              <Button size="lg" className="bg-white text-primary hover:bg-accent">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/shop?category=${cat.id}`}>
              <div className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={cat.image || "/placeholder.svg"}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <span className="text-4xl">{cat.icon}</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{cat.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <Heart size={20} className="text-accent" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    <span className="text-sm text-muted-foreground">⭐ {product.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-12 px-4 md:px-8">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
          <p className="mb-6 opacity-90">Get exclusive offers and updates from Real Madrid Store</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 placeholder-white/50 text-white outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
