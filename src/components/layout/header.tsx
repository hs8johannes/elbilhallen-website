"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, Menu, X, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Hjem", href: "/" },
    { name: "Biler", href: "/biler" },
    { name: "Tjenester", href: "/tjenester" },
    { name: "Om oss", href: "/om-oss" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+47 917 32 999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>post@elbilhallen.no</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span>Åpent: Man-Fre 10-17, Lør 10-14</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Car className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-foreground">
                  Elbilhallen
                </span>
                <p className="text-sm text-muted-foreground hidden sm:block">
                  Din spesialist på elbil
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild>
              <Link href="/kontakt">
                Kontakt oss
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out border-t border-border",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 py-2 space-y-1 bg-background">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button className="w-full" asChild>
              <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>
                Kontakt oss
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}