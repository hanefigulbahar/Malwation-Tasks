import React, { InputHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { Icon, IconTypes } from "../../icons";
import cn from "@libs/cn";

const inputClass = cva(
  "relative flex w-full items-center justify-center flex-grow gap-3 rounded-lg border text-neutral-700 border-gray-300 bg-gray-50 text-sm",
  {
    variants: {
      color: {
        primary: "focus-within:border-primary ",
        secondary: "focus-within:border-secondary ",
        tertiary: "focus-within:border-tertiary ",
      },
      size: {
        large: "h-12 p-4 text-base",
        medium: "h-10 p-3 text-base",
        small: "h-8 p-2 text-sm",
      },
      isError: {
        true: "border-warning text-warning focus-within:border-warning",
      },
      isSuccess: {
        true: "border-success focus-within:border-success",
      },
      disabled: {
        true: "cursor-not-allowed border-gray-200 bg-gray-200 text-gray-300 ",
      },
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  color: "primary" | "secondary" | "tertiary";
  size: "large" | "medium" | "small";
  id: string;
  disabled?: boolean;
  errorMessage?: string;
  isError?: boolean;
  isSuccess?: boolean;
  leftIcon?: IconTypes;
  rightIcon?: IconTypes;
  rightIconOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      color,
      size,
      disabled,
      leftIcon,
      rightIcon,
      errorMessage,
      isError,
      isSuccess,
      rightIconOnClick,
      ...rest
    },
    ref
  ) => {
    const inputIconClass = cn(
      size === "large" && "h-4 w-4",
      size === "medium" && "h-4 w-4",
      size === "small" && "h-3 w-3"
    );
    const inputErrorMessageClass = cn(
      "text-warning absolute",
      size === "large" && "text-sm",
      size === "medium" && "text-xs",
      size === "small" && "text-xs"
    );

    const icon = cn({
      cancel: !!errorMessage && !isSuccess,
      [rightIcon as IconTypes]: rightIcon && !errorMessage && !isSuccess,
      check: !errorMessage && isSuccess,
    }) as IconTypes;

    return (
      <label htmlFor={id}>
        <p>{id}</p>
        <div
          className={cn(
            inputClass({
              color,
              size,
              isError: !!errorMessage,
              isSuccess,
              disabled,
            })
          )}
        >
          {leftIcon && (
            <Icon className={inputIconClass} key={leftIcon} icon={leftIcon} />
          )}
          <input
            disabled={disabled}
            id={id}
            ref={ref}
            {...rest}
            className={`${
              disabled && "cursor-not-allowed"
            } w-full flex-1 bg-transparent outline-none`}
          />
          {(rightIcon || errorMessage || isSuccess) && (
            <button
              type="button"
              onClick={rightIconOnClick}
              className={rightIconOnClick ? "cursor-pointer" : "cursor-default"}
            >
              <Icon
                className={
                  isSuccess
                    ? cn(inputIconClass, "text-success")
                    : inputIconClass
                }
                icon={icon}
              />
            </button>
          )}
        </div>
        {errorMessage && !disabled && (
          <p className={cn(inputErrorMessageClass)}>{errorMessage}</p>
        )}
      </label>
    );
  }
);

export default Input;
