"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus } from "lucide-react"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  size: string
  color: string
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 101,
      name: "Home Jersey 2024/25",
      price: 89.99,
      quantity: 1,
      size: "L",
      color: "White",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
    },
    {
      id: 106,
      name: "Football Boots",
      price: 129.99,
      quantity: 1,
      size: "10",
      color: "Black",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
    },
  ])

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <main className="min-h-screen bg-background">
      <Header cartItems={cartItems.length} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-6">Your cart is empty</p>
            <Link href="/shop">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-card rounded-lg p-6 flex gap-6 shadow-sm border border-border">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <Link href={`/product/${item.id}`} className="font-semibold hover:text-accent transition-colors">
                        {item.name}
                      </Link>
                      <div className="text-sm text-muted-foreground mt-1">
                        Size: {item.size} | Color: {item.color}
                      </div>
                      <div className="text-lg font-bold text-primary mt-2">${item.price}</div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                      <div className="flex items-center gap-2 bg-muted rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-muted/80"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-muted/80"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border sticky top-24">
                <h2 className="font-bold text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between mb-6 text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
                <Button className="w-full mb-3">Proceed to Checkout</Button>
                <Link href="/shop">
                  <Button variant="outline" className="w-full bg-transparent">
                    Continue Shopping
                  </Button>
                </Link>
                {shipping === 0 && (
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg text-sm text-accent font-medium">
                    ✓ Free shipping applied
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
