import Image from "./image";

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
    <div className="flex gap-3 p-2 text-neutral rounded-lg bg-secondary items-center">
      <div
        className={`p-2 rounded-lg`}
        style={{ backgroundColor: `${iconHexColor}4D` }}
      >
        <Image src={icon} alt={`${title}-icon`} className="w-8" />
      </div>

      <section>
        <p className="text-neutral font-medium">{title}</p>
        <p className="text-neutral/60 text-xs">{subtitle}</p>
      </section>
    </div>
  );
};
export default TechCard;
