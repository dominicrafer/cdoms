const Button = ({
  children,
  variant,
  className,
}: {
  children?: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
}) => {
  return <button className={`btn ${variant} ${className}`}>{children}</button>;
};

export default Button;
