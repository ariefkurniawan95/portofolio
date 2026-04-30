import { ThemeProvider } from "./context/ThemeContext";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CareerJourney from "./components/CareerJourney";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import CourseCard from "./components/CourseCard";
import Contact from "./components/Contact";
import ProjectPage from "./pages/ProjectPage";
import CoursePage from "./pages/CoursePage";
import { projects } from "./data/projects";
import { courses } from "./data/courses";

function AppContent() {
  const { currentPage } = useNavigation();

  if (currentPage.startsWith("project-")) {
    const projectId = parseInt(currentPage.split("-")[1]);
    return <ProjectPage projectId={projectId} />;
  }

  if (currentPage.startsWith("course-")) {
    const courseId = parseInt(currentPage.split("-")[1]);
    return <CoursePage courseId={courseId} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <CareerJourney />

      <section id="projects" className="px-4 sm:px-8 py-12 border-t border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
        <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-6">
          Featured Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </section>

      <section id="courses" className="px-4 sm:px-8 py-12 border-t border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
        <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">
          Private Teaching
        </p>
        <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-1">Courses I Teach</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">
          1-on-1 private sessions tailored to your pace and goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}
