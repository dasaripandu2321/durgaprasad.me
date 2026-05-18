"use client"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}

const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-purple-400",
  {
    variants: {
      variant: {
        default: "liquid-btn-default hover:scale-105",
        primary: "liquid-btn-primary hover:scale-105",
        cyan:    "liquid-btn-cyan hover:scale-105",
        ghost:   "liquid-btn-ghost hover:scale-105",
      },
      size: {
        sm:      "h-8  px-4  text-xs",
        default: "h-10 px-6  text-sm",
        lg:      "h-12 px-8  text-base",
        xl:      "h-14 px-10 text-lg",
        icon:    "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "lg" },
  }
)

export function LiquidButton({ className, variant, size, asChild = false, children, ...props }) {
  const Comp = asChild ? Slot : "button"
  return (
    <>
      <Comp className={cn("relative", liquidbuttonVariants({ variant, size, className }))} {...props}>
        <div className={cn(
          "liquid-btn-shell absolute inset-0 rounded-full border backdrop-blur-md transition-all duration-300",
          variant === "primary" && "liquid-btn-shell-primary",
          variant === "cyan"    && "liquid-btn-shell-cyan",
        )} />
        <div className="absolute inset-0 -z-10 rounded-full overflow-hidden"
          style={{ backdropFilter: 'url("#container-glass") blur(2px)' }} />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Comp>
      <GlassFilter />
    </>
  )
}

export const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn("inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-purple-600 text-white hover:bg-purple-500 h-9 px-4 py-2", className)} ref={ref} {...props} />
})
Button.displayName = "Button"

export { liquidbuttonVariants }
