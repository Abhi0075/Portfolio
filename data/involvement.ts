export type Involvement = {
  id: string;
  org: string;
  role: string;
  period: string;
  points: string[];
};

// Campus involvement and recognition, from the résumé.
export const involvement: Involvement[] = [
  {
    id: "iic",
    org: "Institution’s Innovation Council — JSSSTU, Mysuru",
    role: "Head of Organizing Committee",
    period: "Jul 2022 — Jun 2024",
    points: [
      "Coordinated with the IIC student council on event management.",
      "Conducted outreach programs across schools and colleges to promote entrepreneurship and innovation.",
      "Organized IIC Hackathon 2.0, Capture the Flag, and IIC Troubleshoot 2.0.",
    ],
  },
  {
    id: "csi",
    org: "Computer Society of India — JSSSTU, Mysuru",
    role: "Event Lead",
    period: "Jan 2023 — Jun 2024",
    points: [
      "Coordinated technical events and workshops for the CSI student chapter.",
      "Organized coding competitions, technical sessions, and student engagement activities.",
    ],
  },
];

export const award = {
  title: "Deloitte Green Dot of Fame 2024",
  detail:
    "Recognized as part of the “Move The Dot Team — 2024” for exceptional workforce impact.",
};
