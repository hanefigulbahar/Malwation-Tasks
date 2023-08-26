import { NavLink } from "react-router-dom";
import { buttonClass } from "./Button";
import cn from "@libs/cn";
import { VariantProps } from "class-variance-authority";
import { Icon, IconTypes } from "../../icons";
import React from "react";
import Spinner from "./Spinner";

export interface ILinkProps
  extends React.LinkHTMLAttributes<HTMLLinkElement>,
    VariantProps<typeof buttonClass> {
  color: "primary" | "secondary" | "tertiary" | "warning" | "success";
  leftIcon?: IconTypes;
  rightIcon?: IconTypes;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: IconTypes;
  url: string;
  textStyle?: string;
}

const Link: React.FC<ILinkProps> = ({
  variant,
  size,
  color,
  disabled,
  icon,
  leftIcon,
  children,
  rightIcon,
  isLoading,
  url,
  textStyle,
}) => {
  const linkIconClass = cn(
    "flex-none",
    size === "large" && "h-5 w-5",
    size === "medium" && "h-4 w-4",
    size === "small" && "h-3 w-3"
  );
  return (
    <NavLink
      className={cn(
        buttonClass({
          variant,
          size,
          color,
          disabled,
          onlyIcon: !!icon,
        })
      )}
      to={url}
    >
      {leftIcon && !isLoading ? (
        <>
          {!disabled ? (
            <Icon className={linkIconClass} key={leftIcon} icon={leftIcon} />
          ) : (
            <Spinner className={cn(linkIconClass)} />
          )}
        </>
      ) : (
        <>
          {isLoading && !icon && !disabled ? (
            <Spinner className={cn(linkIconClass)} />
          ) : null}
        </>
      )}

      {icon ? (
        <>
          {isLoading && !disabled ? (
            <Spinner className={cn(linkIconClass)} />
          ) : (
            <Icon className={linkIconClass} key={icon} icon={icon} />
          )}
        </>
      ) : (
        <p className={`${textStyle} grow p-4`}>{children}</p>
      )}

      {rightIcon && !icon && (
        <Icon className={linkIconClass} key={rightIcon} icon={rightIcon} />
      )}
    </NavLink>
  );
};

export default Link;
