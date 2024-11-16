import Navi from "../Navi/Navi";
import { GithubIcon } from "../icons/GitHubIcon";
import { XIcon } from "../icons/XIcon";

export default function Footer() {
  return (
    <footer className="text-center py-4 text-gray-200 bg-gray-700 flex flex-col items-center gap-4">
      <Navi className="text-xs" />
      <div className="text-xs flex items-center gap-2">
        Developed by : 
        <a href="https://x.com/HarumiWebDesign" target="_blank" rel="noopener noreferrer">
          <XIcon size={16} className="inline-block fill-current" />
        </a>
        <a href="https://github.com/harumiWeb" target="_blank" rel="noopener noreferrer">
          <GithubIcon size={16} className="inline-block fill-current" />
        </a>
      </div>
      <small>{`© ${new Date().getFullYear()} ImageX`}</small>
    </footer>
  );
}
