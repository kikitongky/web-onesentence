import { FaGithub } from "react-icons/fa";
export default function Header() {
  return (
    <div className="flex justify-between items-center py-1.5 px-4.5 shadow-2xl bg-gray-900 text-white">
      <h1>tongky</h1>
      <a href="https://github.com/kikitongky" target="blank">
        <FaGithub />
      </a>
    </div>
  );
}
