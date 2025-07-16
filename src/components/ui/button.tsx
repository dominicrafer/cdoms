import Icon from "./icon";
import type { IconType } from "./icon";

const Button = ({
  children,
  variant,
  className,
  icon,
}: {
  children?: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
  icon?: IconType;
}) => {
  return (
    <button
      className={`btn cursor-pointer ${variant} ${className} flex gap-1 items-center`}
    >
      {icon ? <Icon type={icon} size="md" /> : null}
      {children}
    </button>
  );
};

export default Button;
