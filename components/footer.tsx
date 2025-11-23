import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Real Madrid Store</h3>
            <p className="text-sm opacity-80">Official online store for Real Madrid merchandise and apparel.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li>
                <Link href="/shop" className="hover:opacity-100 transition-opacity">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:opacity-100 transition-opacity">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li>
                <Link href="/contact" className="hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:opacity-100 transition-opacity">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:opacity-100 transition-opacity">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Real Madrid Store. All rights reserved. | Design & Development</p>
        </div>
      </div>
    </footer>
  )
}
