const SectionHeader = ({
  title,
  subtitle,
  className,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) => {
  return (
    <header className={className}>
      <h2>{title}</h2>
      <p className="opacity-70">{subtitle}</p>
    </header>
  );
};

export default SectionHeader;
