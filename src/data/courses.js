export const courses = [
  {
    id: 1,
    title: "Microsoft Excel",
    description: "From formulas and pivot tables to dashboards — practical Excel for real-world data work.",
    overview:
      "A hands-on private course covering Excel from the ground up through to the intermediate techniques used daily in professional data work. Sessions are tailored to your current skill level and goals.",
    topics: [
      "Core formulas and functions (VLOOKUP, INDEX/MATCH, IF, SUMIFS)",
      "Data cleaning and transformation techniques",
      "Pivot Tables and Pivot Charts",
      "Building dashboards with slicers and dynamic charts",
      "Introduction to Power Query for basic automation",
    ],
    level: "Beginner – Intermediate",
    format: "1-on-1 private sessions",
    tags: ["Microsoft Excel", "Data Analysis", "Dashboards"],
  },
  {
    id: 2,
    title: "Google Sheets for Data Analysis & Dashboard Building",
    description: "A practical bootcamp focused on turning raw data into actionable insights — from spreadsheet foundations to live interactive dashboards.",
    overview:
      "This bootcamp-style course takes you from zero to building fully functional data dashboards in Google Sheets. Each module builds on the last, combining real-world business scenarios with hands-on practice. You'll leave each session with skills you can apply the same day — whether that's cleaning a messy export, writing a smarter formula, or presenting data in a way your team can actually use.",
    topics: [
      "Core spreadsheet skills and formula logic",
      "Lookup and data combination across tables and files",
      "Data cleaning and preparation techniques",
      "Advanced analysis with QUERY, SUMIFS, and Pivot Tables",
      "Chart building and visual design principles",
      "Building interactive, live dashboards from scratch",
    ],
    modules: [
      {
        number: 1,
        title: "Foundations",
        description:
          "Get comfortable with the Google Sheets environment before writing a single formula. This module covers the core building blocks that every subsequent session will build on.",
        topics: [
          "Navigating the interface: sheets, toolbars, and the formula bar",
          "Understanding cells, rows, and columns — and how they reference each other",
          "Data types: text, numbers, dates, and booleans",
          "Cell referencing: relative (A1), absolute ($A$1), and mixed ($A1 / A$1)",
          "Sheet management: add, rename, reorder, and hide sheets",
          "Essential keyboard shortcuts to work faster",
        ],
      },
      {
        number: 2,
        title: "Formulas",
        description:
          "Formulas are the engine of any spreadsheet. This module teaches you how to write, read, and combine them confidently — including how to diagnose and fix errors when something breaks.",
        topics: [
          "Writing your first formulas: SUM, AVERAGE, COUNT, COUNTA, MIN, MAX",
          "Relative vs. absolute cell references — and when to use each",
          "Combining functions with nested formulas",
          "ROUND, INT, and MOD for number precision",
          "Common formula errors and how to fix them: #REF!, #DIV/0!, #VALUE!",
          "Using function autocomplete and in-sheet formula hints",
        ],
      },
      {
        number: 3,
        title: "Logic & Conditionals",
        description:
          "Real data rarely fits a single rule. This module teaches you to write formulas that make decisions — flagging exceptions, categorising values, and gracefully handling missing data.",
        topics: [
          "IF statements: structure, logic, and practical business examples",
          "Nested IF for multi-step conditions",
          "AND, OR, NOT as compound logical operators",
          "IFS for cleaner multi-branch logic without deep nesting",
          "IFERROR and IFNA to suppress errors in live sheets",
          "Practical use cases: status flags, tier labels, pass/fail columns",
        ],
      },
      {
        number: 4,
        title: "Lookup & Data Combination",
        description:
          "Most analysis involves pulling data from multiple sources. This module covers every major lookup technique in Google Sheets — including when to use each one and how to handle the inevitable mismatches.",
        topics: [
          "VLOOKUP: syntax, use cases, and common mistakes",
          "HLOOKUP for horizontal table lookups",
          "INDEX + MATCH as a flexible, direction-agnostic alternative",
          "XLOOKUP — the modern replacement for VLOOKUP",
          "IMPORTRANGE to pull live data from another Google Sheets file",
          "Handling #N/A errors gracefully with IFERROR",
        ],
      },
      {
        number: 5,
        title: "Data Cleaning",
        description:
          "Raw data is almost always messy. Before you can analyse anything, you need to standardise it. This module covers the most common cleaning tasks you'll face in real business exports and form responses.",
        topics: [
          "TRIM to remove leading, trailing, and double spaces",
          "LOWER, UPPER, PROPER for consistent text casing",
          "SUBSTITUTE and REPLACE to fix recurring text issues at scale",
          "SPLIT and TEXTJOIN for separating and combining text",
          "Finding and removing duplicates with built-in tools",
          "Handling blank cells and inconsistent date formats",
        ],
      },
      {
        number: 6,
        title: "Data Analysis",
        description:
          "With clean data in hand, this module moves into real analysis — aggregating, filtering, and summarising data the way business stakeholders actually need it.",
        topics: [
          "SUMIF, COUNTIF, AVERAGEIF for single-condition aggregations",
          "SUMIFS and COUNTIFS for multi-condition analysis",
          "Pivot Tables: grouping, summarising, and filtering large datasets",
          "QUERY function: SQL-style SELECT, WHERE, GROUP BY, ORDER BY",
          "ARRAYFORMULA to apply a formula across an entire column at once",
          "Named ranges for readable, maintainable formulas",
        ],
      },
      {
        number: 7,
        title: "Visualization",
        description:
          "Numbers in a table rarely tell a clear story on their own. This module covers how to turn your analysis into charts and visuals that communicate quickly and accurately.",
        topics: [
          "Choosing the right chart type: bar, line, pie, scatter, area, and more",
          "Building and formatting charts from a data range",
          "Customising titles, colours, axes, legends, and gridlines",
          "Conditional formatting as a visual signal layer over raw data",
          "Sparklines for compact, in-cell mini charts",
          "Design principles: reducing clutter and directing the viewer's eye",
        ],
      },
      {
        number: 8,
        title: "Dashboard Building",
        description:
          "The final module brings everything together. You'll build a complete, interactive dashboard from scratch — the kind you'd share with a manager or walk through in a business review.",
        topics: [
          "Structuring your file: raw data, calculations, and dashboard on separate sheets",
          "Building dynamic KPI tiles that update automatically from source data",
          "Adding dropdown filters with data validation",
          "Linking charts and summary tables to filter selections",
          "Using checkboxes and controls for simple interactivity",
          "Layout, spacing, and colour choices for professional-looking dashboards",
        ],
      },
    ],
    level: "Beginner – Intermediate",
    format: "1-on-1 private sessions",
    tags: ["Google Sheets", "Data Analysis", "Dashboards", "Automation"],
  },
  {
    id: 3,
    title: "Google Looker Studio",
    description: "Build interactive, shareable dashboards connected to your own data sources.",
    overview:
      "Learn how to turn raw data into polished, interactive dashboards using Google Looker Studio (formerly Data Studio). Covers everything from connecting data sources to sharing reports with stakeholders.",
    topics: [
      "Connecting data sources — Sheets, BigQuery, CSV, and more",
      "Chart types and when to use each",
      "Filters, date range controls, and interactive elements",
      "Calculated fields and custom metrics",
      "Sharing, embedding, and scheduling reports",
    ],
    level: "Beginner – Intermediate",
    format: "1-on-1 private sessions",
    tags: ["Looker Studio", "Data Viz", "Dashboards"],
  },
  {
    id: 4,
    title: "Microsoft Power BI",
    description: "Professional business intelligence dashboards with Power BI Desktop and Service.",
    overview:
      "A structured course on Power BI covering data modelling, DAX, and publishing polished reports. Designed for analysts and business professionals who need to deliver insights at scale inside an organisation.",
    topics: [
      "Power BI Desktop interface and workflow",
      "Data import and transformation with Power Query",
      "Data modelling and table relationships",
      "DAX fundamentals — calculated columns and measures",
      "Building and publishing interactive reports to Power BI Service",
    ],
    level: "Beginner – Intermediate",
    format: "1-on-1 private sessions",
    tags: ["Power BI", "DAX", "Business Intelligence"],
  },
];
