import { skills } from "../data/skills";
import {
  SiPython, SiR, SiMysql, SiPostgresql, SiGooglebigquery,
  SiLooker, SiMetabase, SiGooglecloud, SiGoogledataflow,
  SiScikitlearn, SiMeta, SiGit, SiGithub, SiGoogle,
} from "react-icons/si";
import {
  FaDatabase, FaChartBar, FaChartArea, FaChartLine,
  FaBrain, FaMicrosoft, FaSitemap, FaServer,
} from "react-icons/fa";

const SKILL_ICONS = {
  // Languages & Query
  "Python":      SiPython,
  "R":           SiR,
  "SQL":         FaDatabase,
  "MySQL":       SiMysql,
  "PostgreSQL":  SiPostgresql,
  "SQL Server":  FaServer,
  "BigQuery":    SiGooglebigquery,

  // Visualization & BI
  "Power BI":              FaChartBar,
  "Tableau":               FaChartArea,
  "Google Looker Studio":  SiLooker,
  "R Shiny":               SiR,
  "Metabase":              SiMetabase,

  // Cloud & Infrastructure
  "Google Cloud Platform": SiGooglecloud,
  "Cloud Functions":       SiGooglecloud,
  "Dataflow":              SiGoogledataflow,
  "Cloud Scheduler":       SiGooglecloud,

  // Machine Learning
  "Supervised Learning":     SiScikitlearn,
  "Unsupervised Learning":   SiScikitlearn,
  "Time Series Forecasting": FaChartLine,
  "Facebook Prophet":        SiMeta,

  // Tools & Workflow
  "Git":               SiGit,
  "GitHub":            SiGithub,
  "Google Workspace":  SiGoogle,
  "Microsoft Office":  FaMicrosoft,
  "ETL Pipelines":     FaSitemap,
};

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-12 border-t border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
      <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-6">
        Skills
      </p>
      <div className="flex flex-col gap-6">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-2">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const Icon = SKILL_ICONS[item];
                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full"
                  >
                    {Icon && <Icon size={13} />}
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
