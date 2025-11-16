const About: React.FC = () => {

  const styles = {
    sectionContainer: "flex flex-col lg:items-center space-y-4",
    textContainer: "text-left lg:text-justify lg:hyphens-auto space-y-3 lg:space-y-4",
    paragraphText: "text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-300 opacity-90",
    sectionHeading: "font-bold text-lg lg:hidden",
    circularBadgeBase: "w-48 h-48 rounded-full items-center justify-center text-white font-bold text-2xl text-shadow hidden lg:flex",
  }

  return (
    <div className="text-left flex flex-col">
      <h2 className="mt-4 text-3xl md:mt-12 md:text-4xl font-bold text-center">
        Hi! My name is Charlotte. I am a fullstack developer living on Lidingö.
      </h2>

      <div className="mt-8 border-t lg:mt-16 lg:grid lg:gap-x-24 lg:grid-cols-3">
        {/* Background */}
        <section className={styles.sectionContainer}>
          <div className={`${styles.circularBadgeBase} bg-gradient-to-r from-teal-500 to-indigo-600`}>
            BACKGROUND
          </div>
          <h2 className={styles.sectionHeading}>BACKGROUND</h2>
          <div className={styles.textContainer}>
            <p className={styles.paragraphText}>
              I started my professional life as a biomedical scientist. After
              working with diagnostics in the laboratory, I felt I wanted a
              bigger challenge.
            </p>
            <p className={styles.paragraphText}>
              My work as a biomedical scientist included a lot of technology and
              robotics handling that I was drawn to. The interest in
              problem-solving has always been with me, which, along with my
              curiosity about how things work technically, led me to start my
              education: Software Development and Operations at Linnaeus
              University.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className={styles.sectionContainer}>
          <div className={`${styles.circularBadgeBase} bg-gradient-to-r from-yellow-400 to-blue-500`}>
            EDUCATION
          </div>
          <h2 className={styles.sectionHeading}>EDUCATION</h2>
          <div className={styles.textContainer}>
            <p className={styles.paragraphText}>
              During my studies, I used Java, JavaScript, Node.js, C#. I was
              introduced to DevOps and got to try Ansible, CI/CD, Docker,
              Kubernetes.
            </p>
            <p className={styles.paragraphText}>
              I learned SQL and got to work with databases such as SQLite,
              MySQL, and MongoDB. We also ran OpenStack and got to set up
              infrastructures and work with servers. GitHub was used throughout
              the entire education period.
            </p>
            <p className={styles.paragraphText}>
              We got to work both in groups and individually. When we did group
              work, we worked agilely with Scrum.
            </p>
          </div>
        </section>

        {/* Work experience */}
        <section className={`${styles.sectionContainer} lg:text-center`}>
          <div className={`${styles.circularBadgeBase} bg-gradient-to-r from-purple-400 to-blue-600`}>
            WORK EXPERIENCE
          </div>
          <h2 className={styles.sectionHeading}>WORK EXPERIENCE</h2>
          <div className={styles.textContainer}>
            <p className={styles.paragraphText}>
              After my education, I started working as a consultant. I gained
              experience in web development and microservices using Spring Boot
              through projects.
            </p>
            <p className={styles.paragraphText}>
              Other technologies I gained experience with included React, React
              Native, and Postgres.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
