"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { User, LogOut, Settings, Package } from "lucide-react"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const mockOrders = [
    { id: "RM001", date: "2024-12-15", total: 219.98, status: "Delivered", items: 2 },
    { id: "RM002", date: "2024-12-10", total: 89.99, status: "Shipped", items: 1 },
    { id: "RM003", date: "2024-12-01", total: 199.97, status: "Delivered", items: 3 },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-2 font-medium ${
                    activeTab === "profile" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                  }`}
                >
                  <User size={20} /> Profile
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-2 font-medium ${
                    activeTab === "orders" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                  }`}
                >
                  <Package size={20} /> Orders
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-2 font-medium ${
                    activeTab === "settings" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                  }`}
                >
                  <Settings size={20} /> Settings
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-2 font-medium text-red-600">
                  <LogOut size={20} /> Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-3">
            {activeTab === "profile" && (
              <div className="bg-card rounded-lg shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-2 border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-2 border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-4 py-2 border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-4 py-2 border border-border rounded-lg outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div className="pt-4">
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="bg-card rounded-lg shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold mb-6">Order History</h2>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-semibold">Order {order.id}</h3>
                          <p className="text-sm text-muted-foreground">
                            {order.date} • {order.items} item(s)
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">${order.total.toFixed(2)}</p>
                          <p
                            className={`text-sm font-medium ${order.status === "Delivered" ? "text-green-600" : "text-blue-600"}`}
                          >
                            {order.status}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-card rounded-lg shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold mb-6">Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div>
                      <h3 className="font-semibold">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive updates about orders and promotions</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-6 h-6 rounded" />
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div>
                      <h3 className="font-semibold">SMS Notifications</h3>
                      <p className="text-sm text-muted-foreground">Get text message alerts for shipments</p>
                    </div>
                    <input type="checkbox" className="w-6 h-6 rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Marketing Emails</h3>
                      <p className="text-sm text-muted-foreground">Receive exclusive deals and news</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-6 h-6 rounded" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
