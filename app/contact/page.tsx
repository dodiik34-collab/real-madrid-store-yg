import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">support@realmadridstore.com</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-muted-foreground">Madrid, Spain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
