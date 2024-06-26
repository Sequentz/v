import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        send: " bg-white hover:bg-green-500 text-black transform active:translate-x-0.5 active:translate-y-0.5 active:scale-95 active:shadow-inner transition-transform duration-150",
        remove: " bg-black text-whiter hover:text-black hover:bg-red-600 transform active:translate-x-0.5 active:translate-y-0.5 active:scale-95 active:shadow-inner transition-transform duration-150",
        default: "bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",
        destructive:
          "bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",
          shop: "text-white  border-gray-400 bg-gradient-to-t from-rose-600 to-red-800 hover:bg-gray-400 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 transform active:translate-x-0.5 active:translate-y-0.5 active:scale-95 active:shadow-inner transition-transform duration-150 hover:bg-gradient-to-b from-rose-600 to-red-800 transition transform hover:-translate-y-1 duration-200",
        outline:
          "  bg-white hover:bg-gray-400 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 transform active:translate-x-0.5 active:translate-y-0.5 active:scale-95 active:shadow-inner transition-transform duration-150 transition transform hover:-translate-y-1 duration-200",
          
        secondary:
          "bg-red-700 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
        ghost: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        link: "text-gray-900 underline-offset-4 hover:underline dark:text-gray-50",
        cart: "bg-black text-white hover:bg-gray-500 hover:text-black transform active:translate-x-0.5 active:translate-y-0.5 active:scale-95 active:shadow-inner transition-transform duration-150"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
