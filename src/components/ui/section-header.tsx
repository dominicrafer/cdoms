import clsx from "clsx";

const SectionHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <header
      className={clsx("text-secondary text-3xl section-header", className)}
    >
      {children}
    </header>
  );
};

export default SectionHeader;
