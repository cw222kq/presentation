const About: React.FC = () => {
  return (
    <div className="text-left flex flex-col">
      <h2 className="mt-4 text-3xl md:mt-12 md:text-4xl font-bold text-center">
        Hej! Jag heter Charlotte. Jag är en fullstackutvecklare som bor på
        Lidingö.
      </h2>

      <div className="mt-8 border-t lg:mt-16 lg:grid lg:gap-x-24 lg:grid-cols-3">

        {/* Background */}
        <section className="flex flex-col lg:items-center space-y-4">
          <div className="w-48 h-48 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full items-center justify-center text-white font-bold text-2xl text-shadow hidden lg:flex">
            BAKGRUND
          </div>
          <h2 className="font-bold text-lg lg:hidden">BAKGRUND</h2>
          <div className="text-left lg:text-justify lg:hyphens-auto">
            <p>
              Jag började mitt yrkesliv som biomedicinsk analytiker. Efter att
              ha jobbat med diagnostik på laboratoriet så kände jag att jag
              ville ha en större utmaning.
            </p>
            <p>
              Mitt arbete som biomedicinsk analytiker inkluderade mycket teknik
              och robothantering som jag drogs till. Intresset för
              problemlösning har alltid funnits hos mig det tillsammans med min
              nyfikenhet för hur saker fungerar tekniskt fick mig att påbörjade
              min utbildning: Utveckling och drift av mjukvarusystem på
              Linnéuniversitetet.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="flex flex-col lg:items-center space-y-4">
          <div className="w-48 h-48 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full items-center justify-center text-white font-bold text-2xl text-shadow hidden lg:flex">
            UTBILDNING
          </div>
          <h2 className="font-bold text-lg lg:hidden">UTBILDNING</h2>
          <div className="text-left lg:text-justify lg:hyphens-auto">
            <p>
              Under min utbildningstid använde jag Java, JavaScript, Node.js,
              C#. Jag introducerades för DevOps och fick testa på Ansible,
              CI/CD, Docker, Kubernetes.
            </p>
            <p>
              Jag lärde mig SQL och fick jobba med databaser så som sqlite,
              mySQL och mongoDB. Vi körde även openstack och fick sätta upp
              infrastrukturer och jobba med servrar. Github kördes under hela
              utbildningstiden.
            </p>
            <p>
              Vi fick jobba både i grupp och individuellt. När vi körde
              grupparbeten arbetade vi agilt med Scrum.
            </p>
          </div>
        </section>
        
        {/* Work experience */}
        <section className="flex flex-col lg:items-center lg:text-center space-y-4">
          <div className="w-48 h-48 bg-gradient-to-r from-purple-400 to-blue-600 rounded-full items-center justify-center text-white font-bold text-2xl text-shadow hidden lg:flex">
            ARBETSLIVS ERFARENHET
          </div>
          <h2 className="font-bold text-lg lg:hidden">ARBETSLIVS ERFARENHET</h2>
          <div className="text-left lg:text-justify lg:hyphens-auto">
            <p>
              Efter min utbildningstid började jag arbeta som konsult. Jag fick
              erfarenhet av webbutveckling och mikroservices med användning av
              Spring Boot genom projekt.
            </p>
            <p>
              Andra tekniker som jag fick erfarenhet av var bland annat React,
              React Native, Postgres.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
