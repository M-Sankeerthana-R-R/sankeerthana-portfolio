export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML / GenAI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Transformers",
      "GANs",
      "LLMs",
      "TensorFlow",
      "PyTorch",
      "ViT",
      "BERT",
      "RoBERTa",
      "Pegasus",
    ],
  },
  {
    category: "Languages",
    items: ["Java", "Python", "C", "C++", "SQL"],
  },
  {
    category: "Full Stack",
    items: [
      "OOP",
      "REST APIs",
      "Socket Programming",
      "Client-Server Architecture",
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "FastAPI",
      "Flutter",
    ],
  },
  {
    category: "Databases / Data",
    items: ["MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud / DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana", "Git", "Maven"],
  },
  {
    category: "Security / Networking",
    items: [
      "Threat Analysis",
      "Vulnerability Assessment",
      "Secure Database Monitoring",
      "Authentication & Authorization",
      "RBAC",
      "Wireshark",
      "Burp Suite",
      "Cisco Packet Tracer",
      "Nagios",
      "Linux",
    ],
  },
];

export const problemSolving = {
  leetcode: "300+ problems solved, 100+ additional attempted",
  areas: [
    "Arrays",
    "Strings",
    "Hashing",
    "Two Pointers",
    "Sliding Window",
    "Binary Search",
    "Linked Lists",
    "Trees",
    "Graphs",
    "BFS/DFS",
    "Heaps",
    "Backtracking",
    "Dynamic Programming",
    "Greedy",
    "DSU",
    "Topological Sort",
    "Tries",
    "Bit Manipulation",
  ],
};
