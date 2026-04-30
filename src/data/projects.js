export const projects = [
  {
    id: 1,
    title: "Modernizing Production Planning",
    description:
      "Implemented KPIs and data visualization to enhance efficiency and decision-making in manufacturing operations.",
    overview:
      "Led the end-to-end redesign of production planning processes at a manufacturing facility, introducing data-driven KPIs and interactive dashboards that replaced manual reporting workflows. The project significantly shortened decision cycles and gave management real-time visibility across the production floor.",
    highlights: [
      "Defined and implemented 12+ production KPIs covering OEE, yield rate, and downtime metrics",
      "Built interactive dashboards that reduced weekly reporting time by ~60%",
      "Established automated data pipelines from production systems to BI tools",
      "Trained the operations team on self-serve analytics, reducing analyst dependency",
    ],
    tools: ["Power BI", "SQL", "ETL Pipelines", "KPI Design", "Data Viz"],
    type: "Analytics & Dashboarding",
    tags: ["KPI Design", "Data Viz", "Manufacturing"],
    projectUrl: "https://s.id/1vAE7",
    articleUrl: "https://s.id/pH3ld",
  },
  {
    id: 2,
    title: "Retail Geospatial Analysis",
    description:
      "Mapped distribution of Alfamart and Indomaret stores across Jakarta using Google Places API and Folium in Python.",
    overview:
      "Conducted a comprehensive geospatial study of Indonesia's two dominant convenience store chains — Alfamart and Indomaret — across the greater Jakarta metropolitan area. The analysis surfaced clustering patterns, coverage gaps, and competitive proximity insights useful for retail expansion strategy.",
    highlights: [
      "Fetched and cleaned 2,000+ store locations via the Google Places API",
      "Generated interactive choropleth and cluster maps using Folium",
      "Identified underserved sub-districts with high foot-traffic potential",
      "Visualised competitive overlap zones at sub-district granularity",
    ],
    tools: ["Python", "Folium", "Google Places API", "Pandas", "GeoPandas", "Jupyter"],
    type: "Geospatial Analysis",
    tags: ["Python", "Folium", "Google Places API", "Geospatial"],
    projectUrl: "https://s.id/1ShzI",
    articleUrl: "https://s.id/1ShzK",
  },
  {
    id: 3,
    title: "Online Retail Shipping Analysis",
    description:
      "Capstone project at Purwadhika analyzing patterns and insights from online retail shipping data.",
    overview:
      "Capstone project completed at Purwadhika Digital Technology School, analysing a real-world e-commerce shipping dataset to uncover operational inefficiencies and customer satisfaction drivers. The project covered the full analytics lifecycle — from data cleaning and EDA through to business-oriented recommendations.",
    highlights: [
      "Cleaned and pre-processed 11,000+ shipment records across multiple product categories",
      "Identified key factors correlated with late deliveries using statistical analysis",
      "Discovered that Warehouse Block D had ~35% higher delay rates than other blocks",
      "Presented findings as actionable recommendations for logistics optimisation",
    ],
    tools: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter", "EDA"],
    type: "Exploratory Data Analysis",
    tags: ["Python", "EDA", "Retail"],
    projectUrl: "https://s.id/1ShzM",
    articleUrl: null,
  },
  {
    id: 4,
    title: "Service Level Forecasting",
    description:
      "Time series forecasting on logistics service level KPIs using Facebook Prophet.",
    overview:
      "Developed a time series forecasting model to predict logistics service-level performance KPIs at Segari.id, enabling proactive resource allocation and SLA management. Facebook Prophet was selected for its strength in handling weekly seasonality and holiday effects common in Indonesian supply chains.",
    highlights: [
      "Trained and tuned a Prophet model on 18 months of daily service-level data",
      "Achieved a forecast MAPE under 8% on a 30-day horizon",
      "Incorporated Indonesian public holidays and Ramadan seasonality as external regressors",
      "Delivered rolling forecasts via an automated Google Sheets pipeline for the operations team",
    ],
    tools: ["Python", "Prophet", "Pandas", "Time Series", "Google Sheets", "Jupyter"],
    type: "Forecasting & Machine Learning",
    tags: ["Python", "Prophet", "Time Series", "Supply Chain"],
    projectUrl: "https://s.id/1XAW3",
    articleUrl: "https://s.id/1XAXU",
  },
];
