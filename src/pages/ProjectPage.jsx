import { useNavigation } from "../context/NavigationContext";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";

export default function ProjectPage({ projectId }) {
  const { goHome } = useNavigation();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-10 sm:py-12">
        {/* Back link */}
        <button
          onClick={goHome}
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to portfolio
        </button>

        {/* Type badge */}
        <span className="inline-block text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full mb-4">
          {project.type}
        </span>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
          {project.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 mb-8" />

        {/* Overview */}
        <section className="mb-10">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Overview</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* Highlights */}
        <section className="mb-10">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Key Highlights</p>
          <ul className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                <span className="text-blue-600 shrink-0 mt-0.5">–</span>
                {h}
              </li>
            ))}
          </ul>
        </section>

        {/* Tools */}
        <section className="mb-10">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Tools & Technologies</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        {(project.projectUrl || project.articleUrl) && (
          <section>
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Links</p>
            <div className="flex flex-wrap gap-3">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project →
                </a>
              )}
              {project.articleUrl && (
                <a
                  href={project.articleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm px-5 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Read Article →
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
