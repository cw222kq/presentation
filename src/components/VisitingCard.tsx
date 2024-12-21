import { GithubIcon, LinkedinIcon, SmallEmailIcon, Icon } from "../icons"

const icons: Icon[] = [GithubIcon, LinkedinIcon, SmallEmailIcon]

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
        {icons.map((icon) => {
            const IconComponent = icon.component;
            return (
              <a
                key={icon.url}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.label}
                className="cursor-pointer hover:scale-110 transition-all ease-in-out"
              >
                <IconComponent />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default VisitingCard
