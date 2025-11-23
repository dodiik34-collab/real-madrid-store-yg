"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Search, Menu, X, User } from "lucide-react"

interface HeaderProps {
  cartItems?: number
}

export function Header({ cartItems = 0 }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
              RM
            </div>
            <span className="hidden md:inline font-bold text-lg">Real Madrid</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="hover:text-accent transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors hidden md:inline-flex">
              <Search size={20} />
            </button>
            <Link href="/cart" className="relative p-2 hover:bg-muted rounded-lg transition-colors">
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
            <Link href="/account" className="p-2 hover:bg-muted rounded-lg transition-colors hidden md:inline-flex">
              <User size={20} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 border-t border-border pt-4">
            <Link href="/shop" className="hover:text-accent transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors font-medium">
              Contact
            </Link>
            <Link href="/account" className="hover:text-accent transition-colors font-medium">
              Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
