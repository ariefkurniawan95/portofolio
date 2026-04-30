import { useNavigation } from "../context/NavigationContext";
import { courses } from "../data/courses";
import { profile } from "../data/profile";
import Navbar from "../components/Navbar";

export default function CoursePage({ courseId }) {
  const { goHome } = useNavigation();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-12">
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

        {/* Meta badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">
            Private Course
          </span>
          <span className="inline-block text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">
            {course.level}
          </span>
          <span className="inline-block text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">
            {course.format}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
          {course.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {course.tags.map((tag) => (
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
            {course.overview}
          </p>
        </section>

        {/* Topics */}
        <section className="mb-10">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">What You'll Learn</p>
          <ul className="space-y-2.5">
            {course.topics.map((topic, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                <span className="text-blue-600 shrink-0 mt-0.5">–</span>
                {topic}
              </li>
            ))}
          </ul>
        </section>

        {/* Course Modules */}
        {course.modules && (
          <section className="mb-10">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-5">Course Modules</p>
            <div className="space-y-6">
              {course.modules.map((mod) => (
                <div
                  key={mod.number}
                  className="border border-gray-100 dark:border-gray-800 rounded-xl p-5"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <span className="shrink-0 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full tabular-nums">
                      {String(mod.number).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug pt-0.5">
                      {mod.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3 pl-0">
                    {mod.description}
                  </p>
                  <ul className="space-y-1.5 pl-1">
                    {mod.topics.map((t, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="text-blue-400 shrink-0 mt-0.5">–</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section>
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Interested?</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Reach out to arrange a free 15-minute intro call and discuss your learning goals.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}?subject=Private Course Inquiry — ${course.title}`}
              className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in touch →
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm px-5 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
