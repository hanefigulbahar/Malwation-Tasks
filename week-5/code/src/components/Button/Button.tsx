import classNames from 'classnames';
import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';
import { Icon, IconTypes } from '../Icon';
/*
*color:
  *-primary
  *-secondary
  *-only-text

*variants:
  *-success
  *-warning

*size:
  *-small
  *-medium
  *-large

*states:
 *-onlyIcon

*otherStates:
 *-disabled
 *-loading

*/

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'only-text';
  variants?: 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  icon?: IconTypes;
  onlyIcon?: IconTypes;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: IconTypes;
  rightIcon?: IconTypes;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  color,
  variants,
  size = 'medium',
  onlyIcon,
  disabled,
  icon,
  leftIcon,
  rightIcon,
  onClick,
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        classNames(
          'flex h-20 cursor-pointer items-center justify-center rounded-md ',

          //Color
          color === 'primary' && 'bg-cyan-600 text-white hover:bg-cyan-700',
          color === 'secondary' &&
            'border border-cyan-600 text-cyan-600 hover:border-cyan-700 hover:bg-cyan-700 hover:text-white',
          color === 'only-text' &&
            'border-none text-cyan-600 hover:bg-gray-200',

          //Variants
          variants === 'success' &&
            color === 'primary' &&
            'bg-green-600 text-white hover:bg-green-700',
          variants === 'success' &&
            color === 'secondary' &&
            'border border-green-600 text-green-600 hover:border-green-700 hover:bg-green-700 hover:text-white',
          variants === 'success' &&
            color === 'only-text' &&
            'border-none text-green-600 hover:bg-gray-200',

          variants === 'warning' &&
            color === 'primary' &&
            'bg-red-600 text-white hover:bg-red-700',
          variants === 'warning' &&
            color === 'secondary' &&
            'border border-red-600 text-red-600 hover:border-red-700 hover:bg-red-700 hover:text-white',
          variants === 'warning' &&
            color === 'only-text' &&
            'border-none text-red-600 hover:bg-gray-200',

          //Sizes
          size === 'small' && 'h-fit w-max px-2 py-1 text-xs',
          size === 'medium' && 'h-fit w-max px-4 py-2 text-sm',
          size === 'large' && 'h-fit w-max px-6 py-3 text-sm',

          // Only Icon
          onlyIcon && 'rounded-full p-2',

          //Disabled
          disabled &&
            'cursor-default border-gray-300 bg-gray-300 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-400'
        )
      )}
    >
      <span className="flex items-center justify-center gap-2">
        {leftIcon && (
          <Icon
            key={leftIcon}
            icon={leftIcon}
            className={classNames(
              size === 'large' && 'h-4 w-4',
              size === 'medium' && 'h-4 w-4',
              size === 'small' && 'h-3 w-3'
            )}
          />
        )}
        {onlyIcon && (
          <Icon
            key={icon}
            icon={onlyIcon}
            className={classNames(
              size === 'large' && 'h-4 w-4',
              size === 'medium' && 'h-4 w-4',
              size === 'small' && 'h-3 w-3'
            )}
          />
        )}
        {children}
        {rightIcon && (
          <Icon
            key={rightIcon}
            icon={rightIcon}
            className={classNames(
              size === 'large' && 'h-4 w-4',
              size === 'medium' && 'h-4 w-4',
              size === 'small' && 'h-3 w-3'
            )}
          />
        )}
      </span>
    </button>
  );
};

export default Button;
