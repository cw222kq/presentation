const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center border-t space-y-8 mt-8 sm:mt-24 md:mt-28 lg:mt-40">
      <section className="space-y-4 lg:grid lg:grid-cols-4">
        
        {/* Image (only big devices) */}
        <div className="relative hidden lg:col-span-1 lg:flex">
          <img
            src="/presentation/pongPic.png"
            className="w-full h-auto rounded-lg"
          />

          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl text-shadow">
            Pong
          </div>
        </div>

        {/* Header-text (small devices) */}
        <h2 className="font-bold text-lg lg:hidden text-left">
          Pong
        </h2>

        {/* Content text */}
        <div className="text-left lg:text-justify lg:col-span-3 lg:px-16 flex items-center">
          <p>
            Pong is the first Go project I have created after taking the course{" "}
            <a
              href="https://www.udemy.com/course/go-the-complete-developers-guide/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Go: The Complete Developer's Guide
            </a>{" "}
            on Udemy. The project is written in Go and uses Raylib for graphics
            programming.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Projects
