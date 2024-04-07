import { cn } from "../../../lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

const buttonVariant = cva(
  
  " border px-5 py-1  flex items-center justify-center gap-2 font-semibold ",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "",
      },
      rounded: {
        default: " ",
        full:'rounded-full'
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  href?: string;
  icon?:ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, children, className, variant, size, rounded,icon, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariant({ variant, size,rounded, className }))}
        >
          {children}
        </Link>
      );
    }
    if(icon){
        return (
            <button
              className={cn(buttonVariant({ variant, size,rounded, className }))}
              ref={ref}
              {...props}
            >
                {icon}
              {children}
            </button>
          );

    }
    return (
      <button
        className={cn(buttonVariant({ variant, size,rounded, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariant };
