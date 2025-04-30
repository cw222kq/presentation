interface ProjectCardProps {
  title: string
  description: React.ReactNode
  imageUrl?: string
  repoUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  repoUrl,
}) => {
  const hasRepoUrl = repoUrl ? true : false

  const content = (
    <>
      {/* Image (only big devices) */}
      <div className="relative hidden lg:col-span-1 lg:flex">
        <img
          src={imageUrl || "/presentation/imagePlaceholder.png"}
          alt={
            imageUrl
              ? `${title} project screenshot`
              : `${title} project placeholder image`
          }
          className="w-full h-auto rounded-lg object-cover"
        />

        <div className="absolute inset-0 flex items-center text-center justify-center text-white font-bold text-2xl text-shadow">
          {title}
        </div>
      </div>

      {/* Header-text (small devices) */}
      <h2 className="font-bold text-lg lg:hidden text-left">{title}</h2>

      {/* Content text */}
      <div className="text-left lg:text-justify lg:col-span-3 lg:px-16 flex items-center">
        {description}
      </div>
    </>
  )

  if (hasRepoUrl) {
    return (
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit the ${title} repository on GitHub`}
        className="space-y-4 lg:grid lg:grid-cols-4 block text-inherit no-underline rounded-lg"
      >
        {content}
      </a>
    )
  }
  return (
    <div className="space-y-4 lg:grid lg:grid-cols-4 block text-inherit no-underline rounded-lg cursor-default relative">
      {content}
    </div>
  )
}

export default ProjectCard
