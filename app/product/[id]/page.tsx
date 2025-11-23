"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Share2, ShoppingCart, ChevronLeft, Star } from "lucide-react"

const allProducts: Record<number, any> = {
  101: {
    id: 101,
    name: "Home Jersey 2024/25 - Official Real Madrid",
    price: 89.99,
    category: "Jerseys",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    description:
      "Official Real Madrid home jersey for the 2024/25 season. Made with premium breathable fabric for comfort and performance. Features the iconic white color with the latest club crest.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White"],
  },
  102: {
    id: 102,
    name: "Away Jersey 2024/25 - Authentic Edition",
    price: 89.99,
    category: "Jerseys",
    rating: 4.7,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1506629082632-adff19b81bbb?w=600&h=600&fit=crop",
    description: "Authentic away jersey with modern design elements. Perfect for supporters and players alike.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black"],
  },
  106: {
    id: 106,
    name: "Football Boots - Professional Grade",
    price: 129.99,
    category: "Footwear",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    description:
      "Professional-grade football boots designed for elite performance. Lightweight, responsive, and built for speed.",
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    colors: ["White", "Black", "Gold"],
  },
}

export default function ProductPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = allProducts[productId] || allProducts[101]

  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [liked, setLiked] = useState(false)
  const [cartAdded, setCartAdded] = useState(false)

  const handleAddToCart = () => {
    setCartAdded(true)
    setTimeout(() => setCartAdded(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Breadcrumb */}
        <Link href="/shop" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ChevronLeft size={18} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <div className="bg-muted rounded-lg overflow-hidden aspect-square">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-muted rounded-lg cursor-pointer hover:ring-2 ring-accent transition-all"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`View ${i}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="border-y border-border py-4">
              <div className="text-4xl font-bold text-primary mb-2">${product.price}</div>
              <p className="text-muted-foreground">In stock • Free shipping on orders over $50</p>
            </div>

            <div>
              <p className="text-foreground mb-4 leading-relaxed">{product.description}</p>
            </div>

            {product.colors.length > 1 && (
              <div>
                <label className="font-semibold block mb-3">Color</label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-2 rounded-lg transition-all ${
                        selectedColor === color
                          ? "bg-accent text-accent-foreground ring-2 ring-accent"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="font-semibold block mb-3">Size</label>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg transition-all font-medium ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground ring-2 ring-primary"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-semibold block mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  −
                </button>
                <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleAddToCart} size="lg" className="flex-1">
                <ShoppingCart size={20} className="mr-2" />
                {cartAdded ? "Added to Cart!" : "Add to Cart"}
              </Button>
              <button
                onClick={() => setLiked(!liked)}
                className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
              >
                <Heart size={24} className={liked ? "fill-accent text-accent" : ""} />
              </button>
              <button className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                <Share2 size={24} />
              </button>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-sm">
              <p className="font-semibold text-accent mb-2">📦 Shipping & Returns</p>
              <p className="text-foreground">Free shipping on orders over $50. Easy 30-day returns on all products.</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[101, 102, 104, 106]
              .filter((id) => id !== productId)
              .map((id) => {
                const relatedProduct = allProducts[id] || allProducts[101]
                return (
                  <Link key={id} href={`/product/${id}`}>
                    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                      <div className="relative h-48 bg-muted overflow-hidden">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-accent line-clamp-2 text-sm">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-primary">${relatedProduct.price}</span>
                          <span className="text-xs">⭐ {relatedProduct.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
