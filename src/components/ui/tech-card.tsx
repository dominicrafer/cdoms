const TechCard = ({
  title,
  subtitle,
  icon,
  iconHexColor,
}: {
  title: string;
  subtitle?: string;
  icon: string;
  iconHexColor: string;
}) => {
  return (
    <div className="flex gap-3 p-2.5 text-neutral rounded-lg bg-secondary items-center">
      <div
        className={`p-2.5 rounded-lg`}
        style={{ backgroundColor: `${iconHexColor}4D` }}
      >
        <img src={icon} alt={`${title}-icon`} />
      </div>

      <section>
        <h3 className="text-neutral font-medium">{title}</h3>
        <p className="text-neutral/60 text-xs">{subtitle}</p>
      </section>
    </div>
  );
};
export default TechCard;
