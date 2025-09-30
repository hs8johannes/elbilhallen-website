"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface ButtonLinkProps {
  href: string
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className
}: ButtonLinkProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline: "border border-border bg-background hover:bg-muted text-foreground",
    ghost: "hover:bg-muted text-foreground"
  }

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-base",
    lg: "h-12 px-6 text-lg"
  }

  const buttonClassName = cn(baseStyles, variants[variant], sizes[size], className)

  return (
    <Link href={href} className={buttonClassName}>
      {children}
    </Link>
  )
}