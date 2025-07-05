const ExperienceCard = ({
  children,
  title,
  subtitle,
  duration,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  duration?: string;
}) => {
  return (
    <div className="p-3 border rounded-md bg-neutral text-primary">
      <header className="flex justify-between items-start">
        <span className="font-bold">{title}</span>
        <span className="subtitle italic">{duration}</span>
      </header>
      <p className="subtitle">{subtitle}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default ExperienceCard;
