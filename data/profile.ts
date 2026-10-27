export const profile = {
  // About section paragraphs (rendered in order). Keep factual.
  aboutParagraphs: [
    "I’m a software engineer at Deloitte India — I joined as an intern in January 2024, grew into a full-time developer role, and now work as a senior developer on backend systems: REST APIs, data modeling, search, and cloud deployment on AWS.",
    "I gravitate toward the parts of software that make it dependable: clear contracts between services, sensible schemas, tests that catch real regressions, and logs you can actually reason about when something breaks in production.",
    "I completed my B.Tech in Information Science and Engineering at JSS Science and Technology University (SJCE), Mysuru, and I keep sharpening my craft through hands-on projects — small tools, cloud experiments, and practical applications of AI in developer workflows.",
  ],
  focusAreas: [
    "Scalable backend systems",
    "API design and reliability",
    "Search and data processing",
    "Cloud-native applications",
    "Security and authorization",
    "Maintainable software architecture",
    "Practical applications of AI and developer tooling",
  ],
  // Education history from the résumé (newest first). Figures confirmed
  // against the résumé: CGPA 8.96, pre-university 90.8%.
  education: [
    {
      degree: "B.Tech, Information Science and Engineering",
      school: "JSS Science and Technology University (SJCE)",
      location: "Mysuru, India",
      period: "2020 — 2024",
      score: "CGPA 8.96 / 10",
    },
    {
      degree: "Pre-University Course — PCMB",
      school: "Sir M V PU College",
      location: "Davanagere, India",
      period: "2018 — 2020",
      score: "90.8%",
    },
  ],
} as const;
