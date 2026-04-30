import { profile } from "../data/profile";
import profilePic from "../images/profile_picture.jpg";

export default function Hero() {
  return (
    <section className="px-4 sm:px-8 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">

      {/* Left — text */}
      <div>
        <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full mb-5">
          Open to opportunities
        </span>

        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white leading-tight mb-1">
          {profile.name}
        </h1>
        <p className="text-lg text-blue-600 font-medium mb-1">{profile.title}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-5">{profile.location}</p>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
          {profile.summary}
        </p>

        <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg px-4 py-3 mb-7">
          Open for full-time roles and freelance opportunities in{" "}
          <span className="font-semibold">data analytics</span>,{" "}
          <span className="font-semibold">forecasting</span>,{" "}
          <span className="font-semibold">dashboard creation</span>, and{" "}
          <span className="font-semibold">data consultancy</span>.
          Feel free to reach out — let's build something impactful together.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm px-5 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Hire Me
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
      </div>

      {/* Right — photo + stats */}
      <div className="flex flex-col gap-4">

        {/* Photo with blue accent offset */}
        <div className="relative mx-auto w-full max-w-xs md:max-w-none">
          <div className="absolute -bottom-3 -right-3 w-full h-full bg-blue-50 dark:bg-blue-900/30 rounded-2xl" />
          <img
            src={profilePic}
            alt={profile.name}
            className="relative w-full rounded-2xl object-cover object-top shadow-sm"
            style={{ height: 340 }}
          />
        </div>

        {/* Stats 2×2 */}
        <div className="grid grid-cols-2 gap-3">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
