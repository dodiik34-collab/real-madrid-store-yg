"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Filter, Heart } from "lucide-react"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState([0, 200])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("featured")

  const allProducts = [
    {
      id: 101,
      name: "Home Jersey 2024/25",
      price: 89.99,
      category: 1,
      size: "S,M,L,XL,XXL",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 102,
      name: "Away Jersey 2024/25",
      price: 89.99,
      category: 1,
      size: "S,M,L,XL,XXL",
      image: "https://images.unsplash.com/photo-1506629082632-adff19b81bbb?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 142,
    },
    {
      id: 103,
      name: "Third Jersey 2024/25",
      price: 89.99,
      category: 1,
      size: "S,M,L,XL",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 104,
      name: "Training Jacket",
      price: 69.99,
      category: 2,
      size: "S,M,L,XL,XXL",
      image: "https://images.unsplash.com/photo-1523170335684-f042655cbdab?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 67,
    },
    {
      id: 105,
      name: "Training Pants",
      price: 59.99,
      category: 2,
      size: "S,M,L,XL",
      image: "https://images.unsplash.com/photo-1506629082632-adff19b81bbb?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 45,
    },
    {
      id: 106,
      name: "Football Boots",
      price: 129.99,
      category: 3,
      size: "6,7,8,9,10,11,12,13",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 234,
    },
    {
      id: 107,
      name: "Training Shoes",
      price: 99.99,
      category: 3,
      size: "6,7,8,9,10,11,12",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 178,
    },
    {
      id: 108,
      name: "Official Cap",
      price: 24.99,
      category: 4,
      size: "One Size",
      image: "https://images.unsplash.com/photo-1523170335684-f042655cbdab?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 92,
    },
    {
      id: 109,
      name: "Scarf",
      price: 19.99,
      category: 4,
      size: "One Size",
      image: "https://images.unsplash.com/photo-1506629082632-adff19b81bbb?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 56,
    },
    {
      id: 110,
      name: "Backpack",
      price: 49.99,
      category: 4,
      size: "One Size",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 78,
    },
  ]

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [selectedCategory, searchTerm, priceRange, sortBy])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Shop</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-card rounded-lg p-6 space-y-6 sticky top-24">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter size={18} /> Filters
                </h3>
              </div>

              <div>
                <label className="font-medium block mb-3">Search</label>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="font-medium block mb-3">Category</label>
                <div className="space-y-2">
                  {[
                    { id: 1, name: "Jerseys" },
                    { id: 2, name: "Training Wear" },
                    { id: 3, name: "Footwear" },
                    { id: 4, name: "Accessories" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-medium block mb-3">Price Range</label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="text-sm text-muted-foreground">
                    ${priceRange[0]} - ${priceRange[1]}
                  </div>
                </div>
              </div>

              <div>
                <label className="font-medium block mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <Button
                onClick={() => {
                  setSelectedCategory(null)
                  setSearchTerm("")
                  setPriceRange([0, 200])
                  setSortBy("featured")
                }}
                variant="outline"
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <section className="flex-1">
            <div className="mb-6 text-sm text-muted-foreground">Showing {filteredProducts.length} products</div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
                        <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-xl font-bold text-primary">${product.price}</span>
                          <div className="text-right">
                            <div className="text-sm font-medium">⭐ {product.rating}</div>
                            <div className="text-xs text-muted-foreground">({product.reviews})</div>
                          </div>
                        </div>
                        <Button className="w-full" size="sm">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
