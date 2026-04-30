import { useNavigation } from "../context/NavigationContext";

export default function ProjectCard({ project }) {
  const { navigate } = useNavigation();

  return (
    <div className="border border-gray-100 dark:border-gray-700 rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md hover:-translate-y-1 group">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-1 items-center">
        <button
          onClick={() => navigate(`project-${project.id}`)}
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          View details →
        </button>
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-gray-400 dark:text-gray-500 hover:underline"
          >
            Project ↗
          </a>
        )}
        {project.articleUrl && (
          <a
            href={project.articleUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-gray-400 dark:text-gray-500 hover:underline"
          >
            Article ↗
          </a>
        )}
      </div>
    </div>
  );
}
