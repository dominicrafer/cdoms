import Image from "../ui/image";

const Button = ({
  children,
  variant,
  className,
  icon,
}: {
  children?: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
  icon?: string;
}) => {
  return (
    <button className={`btn ${variant} ${className} flex gap-2`}>
      {icon ? <Image src={icon} alt={`icon-${icon}`}></Image> : null}
      {children}
    </button>
  );
};

export default Button;
