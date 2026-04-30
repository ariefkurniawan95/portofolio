import { education } from "../data/education";

const typeStyles = {
  "Bootcamp":   "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  "Bachelor's": "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400",
  "Master's":   "bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400",
};

export default function Education() {
  return (
    <section id="education" className="px-4 sm:px-8 py-12 border-t border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
      <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-6">
        Education
      </p>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gray-200 dark:bg-gray-700" />

        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div key={edu.id} className="flex gap-5 group">

              {/* Timeline dot */}
              <div className="relative z-10 mt-4 w-[30px] h-[30px] rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0 group-hover:border-blue-400 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-200" />
              </div>

              {/* Card */}
              <div className="flex-1 border border-gray-100 dark:border-gray-700 rounded-xl p-5 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex justify-between items-start gap-4 flex-wrap">

                  {/* Left — institution + degree */}
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${typeStyles[edu.type]}`}>
                        {edu.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{edu.degree}</p>
                    {edu.field && (
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{edu.field}</p>
                    )}
                  </div>

                  {/* Right — year + score */}
                  <div className="text-right shrink-0">
                    <p className="text-xs font-semibold text-blue-600 mb-1">{edu.year}</p>
                    <span className="inline-block text-xs bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full">
                      {edu.scoreLabel}: <span className="font-semibold text-gray-800 dark:text-white">{edu.score}</span>
                    </span>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
