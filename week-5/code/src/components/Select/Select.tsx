import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

/*
*size:
  *-small
  *-medium
  *-large

*otherStates:
 *-disabled
*/

interface ISelectProps {
  data: string[];
  error?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}
const Select = ({ data, error, size = 'medium', disabled }: ISelectProps) => {
  return (
    <div className="w-80">
      <select
        disabled={disabled}
        className={twMerge(
          classNames(
            'h-10 w-full rounded-md border-2 border-cyan-600  text-gray-600 outline-cyan-600',

            //Variants
            error && 'border-red-600  text-red-500 outline-red-600',

            //Sizes
            size === 'small' && 'h-10 p-2 text-sm',
            size === 'medium' && 'h-12 p-2 text-base',
            size === 'large' && 'h-14 p-2 text-lg',

            disabled && 'border-gray-300  text-gray-300 outline-gray-300'
          )
        )}
      >
        {data?.map((item) => <option value={item}>{item}</option>)}
      </select>
      <span
        className={twMerge(
          classNames('hidden', error && 'flex text-xs text-red-500')
        )}
      >
        {error}
      </span>
    </div>
  );
};

export default Select;
