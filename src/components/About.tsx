const AboutMe: React.FC = () => {
  return (
    <div className="px-16 text-left flex flex-col sm:px-28 md:px-32 lg:px-44">
        <h2 className="mt-12 text-4xl font-bold">
          Hej! Jag heter Charlotte. Jag är en fullstack utvecklare som bor på
          Lidingö.
        </h2>
      
      <section className="mt-8 space-y-4 pt-8">
        <h2 className="font-bold">BAKGRUND</h2>
        <p>
          Jag började mitt yrkesliv som biomedicinsk analytiker. Efter att ha
          jobbat med diagnostik på laboratoriet så kände jag att jag ville ha en
          större utmaning.
        </p>
        <p>
          Mitt arbete som biomedicinsk analytiker inkluderade mycket teknik och
          robothantering som jag drogs till. Intresset för problemlösning har
          alltid funnits hos mig det tillsammans med min nyfikenhet för hur
          saker fungerar tekniskt fick mig att påbörjade min utbildning:
          Utveckling och drift av mjukvarusystem på Linnéuniversitetet.
        </p>
      </section>
      <section className="mt-8 space-y-4 pt-8">
        <h2 className="font-bold">UTBILDNING</h2>
        <p>
          Under min utbildningstid använde jag Java, JavaScript, Node.js, C#.
          Jag introducerades för DevOps och fick testa på Ansible, CI/CD, Docker, Kubernetes.
        </p>
        <p>
          Jag lärde mig SQL och fick jobba med databaser så som sqlite, mySQL och mongoDB.
          Vi körde även openstack och fick sätta upp infrastrukturer och jobba med servrar. Github kördes under hela utbildningstiden.
        </p>
        <p>
          Vi fick jobba både i grupp och individuellt. När vi körde grupparbeten arbetade vi agilt med Scrum.
        </p>
      </section>
      <section className="mt-8 space-y-4 pt-8">
        <h2 className="font-bold">ARBETSLIVS ERFARENHET</h2>
        <p>
          Efter min utbildningstid började jag arbeta som konsult. Jag fick erfarenhet av webbutveckling och mikroservices med användning av Spring Boot genom projekt.
        </p>
        <p>
          Andra tekniker som jag fick erfarenhet av var bland annat React, React Native, Postgres,
        </p>
      </section>
    </div>
  )
}

export default AboutMe
