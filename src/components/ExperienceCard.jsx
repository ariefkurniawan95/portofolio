export default function ExperienceCard({ experience }) {
  return (
    <div className="border border-gray-100 rounded-xl p-5 hover:border-blue-200 transition-colors">
      <div className="flex items-start gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
        <div className="flex-1">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-medium text-gray-900">{experience.role}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{experience.company}</p>
            </div>
            <span className="text-xs text-blue-600 font-medium">{experience.period}</span>
          </div>

          <ul className="mt-3 space-y-1">
            {experience.highlights.map((point, i) => (
              <li key={i} className="text-xs text-gray-500 flex gap-2">
                <span className="text-blue-400 mt-0.5">–</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {experience.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}