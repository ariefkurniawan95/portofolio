import { useNavigation } from "../context/NavigationContext";

export default function CourseCard({ course }) {
  const { navigate } = useNavigation();

  return (
    <div className="border border-gray-100 dark:border-gray-700 rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md hover:-translate-y-1 group">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {course.title}
        </h3>
        <span className="text-[10px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
          {course.level}
        </span>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{course.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {course.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-1">
        <span className="text-[11px] text-gray-400 dark:text-gray-500">{course.format}</span>
        <button
          onClick={() => navigate(`course-${course.id}`)}
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          View details →
        </button>
      </div>
    </div>
  );
}
