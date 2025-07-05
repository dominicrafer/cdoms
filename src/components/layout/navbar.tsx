import Image from "../ui/image";

const Navbar = () => {
  return (
    <nav className="bg-neutral py-3 px-6 rounded-full w-2xl m-auto box-shadow-default">
      <ul className="flex justify-around text-primary text-md">
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
