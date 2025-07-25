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
    <div className="career-card" key={company}>
      <div className="flex flex-row gap-4">
        <div className="w-28 h-28">
          <Image src={logo} alt={`${logo}`} className="rounded-md"></Image>
        </div>
        <div className="flex flex-col">
          <h3>{role}</h3>
          <p className="text-neutral-300">
            {company} | {location}
          </p>
          <span className="text-neutral-300">{duration}</span>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Chip title={skill} key={index} />
            ))}
          </div>
        </div>
      </div>
      <ul className="list-disc ml-5 mt-6 text-neutral-300 flex flex-col gap-4">
        {descriptions.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </div>
  );
};

export default CareerCard;
