export type ExperienceEntry = {
  org: string;
  role: string;
  period: string;
  context: string;
  bullets: string[];
  projectSlug?: string;
};

export const experience: ExperienceEntry[] = [
  {
    org: "Centific",
    role: "AI Systems Engineering — Hackathon 2.0 Winner",
    period: "Apr – May 2025",
    context:
      "2-week industry hackathon · selected from 13,000+ applicants nationwide",
    bullets: [
      "Selected among ~300 participants nationwide for the AI Systems Engineering stream through a competitive selection process.",
      "Built Vidura, a Medical Scribe Workforce Intelligence platform with interactive workforce analytics and insight workflows.",
      "Developed and integrated a 3D virtual humanoid AI presenter (Chloe) capable of joining Microsoft Teams through API/cURL-triggered workflows — presenting the application, listening to commands, responding conversationally, and performing actions live.",
      "Evaluated across technical and soft-skill dimensions over the 2-week hackathon, including an industry-leader interview worth 50% of the final evaluation.",
      "Winner | Hackathon",
    ],
    projectSlug: "vidura",
  },
  {
    org: "Cyber Guard 360",
    role: "Cyber Security Intern",
    period: "Aug 2025 – Dec 2025",
    context: "Internship",
    bullets: [
      "Assisted in developing and testing cybersecurity solutions for secure enterprise systems.",
      "Performed threat analysis, vulnerability assessment, log monitoring, and attack detection.",
      "Worked on secure system practices, monitoring tools, and database security workflows.",
      "Collaborated on secure architectures and identifying suspicious activity in applications.",
    ],
    projectSlug: "cyberguard360",
  },
];
