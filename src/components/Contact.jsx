import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-8 py-12 sm:py-16 border-t border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
      <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">
        Contact
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left — personal message */}
        <div>
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4 leading-snug">
            Let's build something<br />worth talking about.
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            I'm Arief — a data analyst who takes pride in turning messy, raw datasets
            into clarity that actually moves the needle. Whether it's a supply chain
            puzzle, a forecasting model, or a dashboard that finally makes sense to
            everyone in the room — I'm in.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            If you have an interesting problem and think data can solve it, I'd love
            to hear about it. No lengthy forms — just a message.
          </p>

          {/* Availability badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              Available for opportunities
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {profile.location}
          </div>
        </div>

        {/* Right — contact cards */}
        <div className="flex flex-col gap-4">

          {/* Email card */}
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-5 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs text-blue-200 mb-0.5">Send a message</p>
              <p className="text-sm font-medium truncate">{profile.email}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto flex-shrink-0 opacity-70 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {/* LinkedIn card */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl p-5 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">Connect on</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto flex-shrink-0 text-gray-400 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <p className="text-xs text-gray-400 dark:text-gray-500 text-center pt-1">
            Usually responds within a day · Based in Bandung, open to remote worldwide.
          </p>

        </div>
      </div>
    </section>
  );
}
