export type Achievement = {
  title: string;
  detail: string;
  period?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Centific Hackathon 2.0 — Winner",
    detail:
      "AI Systems Engineer offer, selected from 13,000+ nationwide applicants down to ~300 in the AI Systems Engineering stream.",
    period: "Apr – May 2026",
  },
  {
    title: "300+ LeetCode problems solved",
    detail: "100+ additional problems attempted across core DSA topics.",
  },
  {
    title: "Hackathon builder",
    detail: "Shipped SafeJourney and OptiVox as hackathon projects.",
  },
  {
    title: "Data Analytics Workshop",
    detail: "Completed workshop coursework in applied data analytics.",
  },
];

export type EducationEntry = {
  school: string;
  program: string;
  period: string;
  detail: string;
};

export const education: EducationEntry[] = [
  {
    school: "Keshav Memorial Institute of Technology",
    program: "B.Tech, Computer Science Engineering",
    period: "Sep 2023 – Present",
    detail: "CGPA: 9.33",
  },
  {
    school: "Ratna Junior College",
    program: "Intermediate (MPC)",
    period: "2021 – 2023",
    detail: "98.1%",
  },
  {
    school: "Howard Public School (CBSE)",
    program: "Class X",
    period: "2021",
    detail: "CGPA: 9.8",
  },
];
