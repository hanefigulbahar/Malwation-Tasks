import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import Spinner from "./Spinner";
import { Icon, IconTypes } from "../../icons";
import cn from "@libs/cn";

export const buttonClass = cva(
  "flex items-center justify-center h-20 gap-3 cursor-pointer rounded-md fill-white text-white ",
  {
    variants: {
      variant: {
        primary: "text-white",
        secondary: "bg-transparent border ",
        textOnly: "bg-transparent",
      },
      size: {
        small: "h-8 w-full px-2 py-1 text-xs",
        medium: "h-10 w-full px-4 py-2 text-sm",
        large: "h-12 w-full px-6 py-3 text-sm",
      },
      color: {
        primary: "bg-primary hover:bg-primaryHover active:bg-primaryActive",
        secondary:
          "bg-secondary hover:bg-secondaryHover active:bg-secondaryActive",
        tertiary: "bg-tertiary hover:bg-tertiaryHover active:bg-tertiaryActive",
        success: "bg-success hover:bg-successHover active:bg-successActive",
        warning: "bg-warning  hover:bg-warningHover active:bg-warningActive",
      },
      disabled: {
        true: "cursor-not-allowed border-gray-300 bg-gray-300 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-400 fill-gray-400 active:bg-gray-300",
      },
      onlyIcon: {
        true: "rounded-full",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "secondary",
        className:
          "bg-transparent fill-primary text-primary border-primary hover:bg-primary/10 active:bg-primary/20",
      },
      {
        color: "secondary",
        variant: "secondary",
        className:
          "bg-transparent fill-secondary text-secondary border-secondary hover:bg-secondary/10 active:bg-secondary/20",
      },
      {
        variant: "secondary",
        color: "tertiary",
        className:
          "bg-transparent fill-tertiary text-tertiary border-tertiary hover:bg-tertiary/10 active:bg-tertiary/20",
      },
      {
        variant: "secondary",
        color: "success",
        className:
          "bg-transparent fill-success text-success border-success hover:bg-success/10 active:bg-success/20",
      },
      {
        variant: "secondary",
        color: "warning",
        className:
          "bg-transparent fill-warning text-warning border-warning hover:bg-warning/10 active:bg-warning/20",
      },
      {
        variant: "textOnly",
        color: "primary",
        className:
          "bg-transparent fill-primary text-primary hover:bg-primary/10 active:bg-primary/20",
      },
      {
        variant: "textOnly",
        color: "secondary",
        className:
          "bg-transparent fill-secondary text-secondary hover:bg-secondary/10 active:bg-secondary/20",
      },
      {
        variant: "textOnly",
        color: "tertiary",
        className:
          "bg-transparent fill-tertiary text-tertiary hover:bg-tertiary/10 active:bg-tertiary/20",
      },
      {
        variant: "textOnly",
        color: "success",
        className:
          "bg-transparent fill-success text-success hover:bg-success/10 active:bg-success/20",
      },
      {
        variant: "textOnly",
        color: "warning",
        className:
          "bg-transparent fill-warning text-warning hover:bg-warning/10 active:bg-warning/20",
      },
      {
        variant: "secondary",
        disabled: true,
        className:
          "cursor-not-allowed fill-gray-300 border-gray-300 text-gray-300 hover:border-gray-300 hover:bg-transparent hover:text-gray-300 active:bg-transparent",
      },
      {
        variant: "textOnly",
        disabled: true,
        className:
          "cursor-not-allowed fill-gray-300  bg-gray-50  text-gray-300  hover:bg-gray-50 hover:text-gray-300 active:bg-gray-50",
      },
      {
        size: "large",
        onlyIcon: true,
        className: "p-0 w-12",
      },
      {
        size: "medium",
        onlyIcon: true,
        className: "p-0 w-10",
      },
      {
        size: "small",
        onlyIcon: true,
        className: "p-0 w-8",
      },
    ],
  }
);

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClass> {
  color: "primary" | "secondary" | "tertiary" | "warning" | "success";
  leftIcon?: IconTypes;
  rightIcon?: IconTypes;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: IconTypes;
  textStyle?: string;
}
const Button = React.forwardRef<
  HTMLButtonElement,
  Omit<IButtonProps, "onlyIcon">
>(
  (
    {
      variant,
      size,
      color,
      disabled,
      icon,
      leftIcon,
      onClick,
      children,
      rightIcon,
      isLoading,
      textStyle,
    },
    ref
  ) => {
    const btnIconClass = cn(
      "flex-none",
      size === "large" && "h-5 w-5",
      size === "medium" && "h-4 w-4",
      size === "small" && "h-3 w-3"
    );
    return (
      <button
        disabled={isLoading || disabled}
        onClick={onClick}
        className={cn(
          buttonClass({
            variant,
            size,
            color,
            disabled,
            onlyIcon: !!icon,
          })
        )}
      >
        {leftIcon && !isLoading ? (
          <>
            {!disabled ? (
              <Icon className={btnIconClass} key={leftIcon} icon={leftIcon} />
            ) : (
              <Spinner className={cn(btnIconClass, "absolute top-0")} />
            )}
          </>
        ) : (
          <>
            {isLoading && !icon && disabled ? (
              <Spinner className={cn(btnIconClass)} />
            ) : null}
          </>
        )}

        {icon ? (
          <>
            {isLoading && !disabled ? (
              <Spinner className={cn(btnIconClass)} />
            ) : (
              <Icon className={btnIconClass} key={icon} icon={icon} />
            )}
          </>
        ) : (
          <p className={`${textStyle} grow p-4`}>{children}</p>
        )}

        {rightIcon && !icon && (
          <Icon className={btnIconClass} key={rightIcon} icon={rightIcon} />
        )}
      </button>
    );
  }
);

export default Button;
