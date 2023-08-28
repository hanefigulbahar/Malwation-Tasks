export const iconPaths = [
  "logout",
  "dashboard",
  "eyeOn",
  "eyeOff",
  "shortArrowDown",
  "dashboard",
  "search",
  "arrowLeft",
  "users",
  "menu",
  "home",
  "trash",
  "create",
] as const;

export type IconTypes = (typeof iconPaths)[number];

interface IIcon extends React.ComponentPropsWithoutRef<"svg"> {
  icon: IconTypes;
}
export function Icon({ icon, className = "w-full h-full", ...props }: IIcon) {
  return (
    <svg {...props} className={className}>
      <use href={`/assets/icon/base.svg#${icon}`} />
    </svg>
  );
}
