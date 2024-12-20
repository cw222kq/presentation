import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

interface Link {
  icon: JSX.Element;
  url: string;
  label: string
}

const links: Link[] = [
  { icon: <IoLogoGithub />, url: 'https://github.com/cw222kq', label: 'Github' },
  { icon: <IoLogoLinkedin />, url: 'https://www.linkedin.com/in/charlotte-westerberg-a924561bb/', label: 'LinkedIn'  },
  { icon: <IoMail />, url: 'mailto:lotten_w@hotmail.com', label: 'Email' },
];

const VisitingCard: React.FC = () => {
    return (
        <div className="w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative w-full h-52">
            <img
              src="/presentation/profile.png"
              alt="profile picture"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white text-shadow">
              <h2 className="text-lg font-bold">Charlotte Westerberg</h2>
              <p className="text-sm opacity-80">Fullstack developer</p>
            </div>
          </div>
    
          {/* Content Section */}
          <div className="p-4 space-y-3">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Fullstack developer with a medical background
            </p>
            <div className="flex space-x-4">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="cursor-pointer hover:scale-110 transition-all ease-in-out"
                >
                  {link.icon}
                </a>
              ))}
        </div>
      </div>
    </div>
  );
};

export default VisitingCard;