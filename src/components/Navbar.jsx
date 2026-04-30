import { profile } from "../data/profile";
import { useTheme } from "../context/ThemeContext";
import { useNavigation } from "../context/NavigationContext";

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { currentPage, goHome } = useNavigation();
  const isDetailPage = currentPage.startsWith("project-") || currentPage.startsWith("course-");

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10 transition-colors duration-300">
      <button
        onClick={goHome}
        className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        {profile.name}
      </button>

      <div className="flex items-center gap-1">
        {!isDetailPage && ["Experience", "Projects", "Courses", "Education", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative text-sm text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 group"
          >
            {item}
            <span className="absolute bottom-0.5 left-3 right-3 h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
          </a>
        ))}

        {isDetailPage && (
          <button
            onClick={goHome}
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back
          </button>
        )}

        <button
          onClick={toggleDarkMode}
          className="ml-1 p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}
