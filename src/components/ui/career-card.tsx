import Image from "./image";
import Chip from "./chip";

type CareerCardProperties = {
  logo?: string;
  role: string;
  location: string;
  company: string;
  duration: string;
  skills: string[];
  descriptions: string[];
};

const CareerCard = ({
  logo,
  role,
  location,
  duration,
  skills,
  descriptions,
  company,
}: CareerCardProperties) => {
  return (
    <article className="career-card">
      <div className="flex flex-row gap-4">
        <Image
          src={logo}
          alt={`${logo}`}
          className="w-28 h-28 rounded-md"
        ></Image>
        <div className="flex flex-col">
          <h3>{role}</h3>
          <p className="text-neutral-300">
            {company} | {location}
          </p>
          <span className="text-neutral-300">{duration}</span>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Chip title={skill} />
            ))}
          </div>
        </div>
      </div>
      <ul className="list-disc ml-5 mt-6 text-neutral-300 flex flex-col gap-4">
        {descriptions.map((description) => (
          <li>{description}</li>
        ))}
      </ul>
    </article>
  );
};

export default CareerCard;
