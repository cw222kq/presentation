const Footer: React.FC = () => { 

  interface TechLogo {
    id: string;
    src: string;
    alt: string;
  }

  const techLogos: TechLogo[] = [
    {
      id: "react",
      src: "/presentation/react.svg",
      alt: "React logo",
    },
    {
      id: "vite",
      src: "/presentation/vite.svg",
      alt: "Vite logo",
    },
    {
      id: "tailwind",
      src: "/presentation/tailwind.svg",
      alt: "Tailwind logo",
    },
  ]
  
  return (
    <div className="flex text-sm mt-4 text-gray-400 border-t w-full">
    <div className="w-full py-2 text-center">
    <div className="flex justify-center items-center gap-x-8">
          {techLogos.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="h-4 w-4"
            />
          ))}
        </div>
    </div>
  </div>
  )
}

export default Footer
