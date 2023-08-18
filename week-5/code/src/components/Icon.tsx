export type IconTypes =
  | "search"
  | "cancel"
  | "check"
  | "shortArrowDown"
  | "shortArrowUp";
interface IIcon extends React.ComponentPropsWithoutRef<"svg"> {
  icon: IconTypes;
}

export function Icon({ icon, ...props }: IIcon) {
  return (
    <svg {...props}>
      <use href={`./assets/icon/base.svg#${icon}`} />
    </svg>
  );
}
