export type ProjectLinks = {
  github?: string;
  demo?: string;
  writeup?: string;
};

export type Project = {
  id: string;
  /** Case-file number shown on the folder tab, e.g. "001". */
  fileNumber: string;
  title: string;
  tagline: string;
  problem: string;
  contribution: string;
  notes: string[];
  tech: string[];
  links: ProjectLinks;
  disclaimer?: string;
  /**
   * Draft projects are kept here for planning but are never rendered on the
   * page. Flip to true only when the project is genuinely implemented.
   */
  published: boolean;
};

// Both published projects are sourced from the résumé. The accuracy figure
// (85% → 92%) is stated there, so it may be shown. Drafts stay unpublished.
export const projects: Project[] = [
  {
    id: "foodresq",
    fileNumber: "001",
    title: "FoodResQ",
    tagline: "Venue-based food redistribution system.",
    problem:
      "Event venues end up with surplus food, while NGOs nearby need timely, usable donations. Matching the two by hand is slow and unreliable, so good food goes to waste.",
    contribution:
      "Built the backend APIs — food listings, NGO requests, and pickup tracking — with Node.js, Express.js, PostgreSQL, and Redis, along with a food-matching system based on location, quantity, food type, and pickup availability.",
    notes: [
      "Matching weighs location, quantity, food type, and pickup availability together.",
      "The APIs cover the full loop: venues list surplus food, NGOs request it, and pickup progress is tracked to completion.",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "Redis"],
    links: {},
    published: true,
  },
  {
    id: "dermapal",
    fileNumber: "002",
    title: "DermaPal",
    tagline:
      "Dermatological condition detection and classification using deep learning — final-year academic project.",
    problem:
      "Understanding a skin concern usually starts with a specialist visit. DermaPal explores whether a convolutional neural network can give a useful first-pass read of a skin image and point the user toward sensible next steps.",
    contribution:
      "Built the image-classification pipeline around a ResNet18 backbone — preparing the dataset, training and optimizing the model (accuracy improved from 85% to 92%) — and implemented a Flask backend that serves predictions with disease-specific recommendations.",
    notes: [
      "Iterative training and optimization lifted classification accuracy from 85% to 92%.",
      "Transfer learning on ResNet18 keeps the model small enough to train and run without specialized hardware.",
      "Positioned as decision support, not diagnosis — predictions always route the user toward professional care.",
    ],
    tech: ["Python", "ResNet18", "CNN", "Flask", "Image Classification"],
    disclaimer:
      "Academic project — not a medical device and not clinically validated.",
    links: {},
    published: true,
  },

  // -------------------------------------------------------------------
  // Draft placeholder — confirmed idea, NOT completed work. Intentionally
  // not rendered (published: false). Never publish as-is.
  // -------------------------------------------------------------------
  {
    id: "api-reliability-platform",
    fileNumber: "003",
    title: "API Discovery and Reliability Platform",
    tagline: "TODO — one-line summary once the project is built.",
    problem: "TODO — describe the problem once the project exists.",
    contribution: "TODO — describe your actual contribution.",
    notes: [],
    tech: [],
    links: {},
    published: false,
  },
];
