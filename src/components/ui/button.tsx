import type { ButtonHTMLAttributes } from "react";
import Icon from "./icon";
import type { IconType } from "./icon";

const Button = ({
  children,
  variant,
  className,
  icon,
  ...properties
}: {
  children?: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
  icon?: IconType;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`btn cursor-pointer ${variant} ${className} flex gap-1 items-center`}
      {...properties}
    >
      {icon ? <Icon type={icon} size="md" /> : null}
      {children}
    </button>
  );
};

export default Button;
