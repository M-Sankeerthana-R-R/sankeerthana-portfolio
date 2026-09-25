export type ContributionSplit = {
  team: string;
  mine: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "github" | "live";
  note?: string;
};

export type DemoMedia = {
  label: string;
  caption: string;
  driveFileId: string;
};

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  domain: string;
  period: string;
  format:
    | "Hackathon Project"
    | "Team Project"
    | "Personal Project"
    | "Internship";
  tier: 1 | 2 | 3;
  isExperience?: boolean;
  homepageAccent: string;
  problem: string;
  product: string[];
  contribution: ContributionSplit;
  architecture: string[];
  techStack: string[];
  outcome?: string;
  links: ProjectLink[];
  media?: DemoMedia[];
  sourceNote: string;
};

export const projects: Project[] = [
  {
    slug: "vidura",
    name: "Vidura",
    shortName: "Vidura",
    tagline: "Workforce intelligence through an AI-powered virtual presenter.",
    domain: "AI Systems Engineering",
    period: "Apr – May 2025",
    format: "Hackathon Project",
    tier: 1,
    homepageAccent: "Centific Hackathon 2.0 — Winner",
    problem:
      "Centific Hackathon 2.0 challenged ~300 selected engineers (from 13,000+ applicants) to build workforce-intelligence tooling in two weeks, evaluated on both technical execution and a live industry-leader interview.",
    product: [
      "A Medical Scribe Workforce Intelligence platform with interactive workforce analytics and insight workflows.",
      "Chloe: a 3D virtual humanoid AI presenter that joins Microsoft Teams through API/cURL-triggered workflows — presenting the application, listening to spoken commands, responding conversationally, and performing actions live during the presentation.",
    ],
    contribution: {
      team: "Vidura was built as part of a hackathon team under the AI Systems Engineering stream, within a fixed 2-week window (20 Apr – 3 May 2025).",
      mine: "Developed and integrated Chloe, the 3D virtual humanoid presenter, including the Teams-joining workflow triggered via API/cURL and the conversational command handling during live presentation. Contributed to the workforce analytics and insight workflows.",
    },
    architecture: [
      "A presenter layer (Chloe) that joins a live Microsoft Teams call on trigger, rather than running as a passive bot.",
      "A command layer that listens during the presentation and routes recognized commands to actions inside the app.",
      "A workforce analytics layer surfacing insight workflows for the medical-scribe use case.",
    ],
    techStack: [
      "Microsoft Teams API",
      "3D avatar integration",
      "Workflow automation",
      "Analytics dashboards",
    ],
    outcome:
      "Hackathon Winner — ranked 1st after a rigorous 2-week evaluation, with 50% of the final score based on a live industry-leader interview and 50% on performance and soft skills.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/M-Sankeerthana-R-R/Vidura_Chloe_Centific",
        kind: "github",
      },
    ],
    media: [
      {
        label: "Vidura demo",
        caption:
          "Chloe presents Vidura and walks through the workforce intelligence dashboard. This file is 1.4GB, so it's served via Google Drive's own player rather than self-hosted — expect a moment to buffer on first play.",
        driveFileId: "1p0akouhyAvJfiILye-fS5pwkOkDgxu9G",
      },
    ],
  },
  {
    slug: "dbguard",
    name: "DBGuard",
    shortName: "DBGuard",
    tagline: "Multimodal database intelligence for secure SQL operations.",
    domain: "Cyber Security",
    period: "Jul 2025 – Dec 2025",
    format: "Team Project",
    tier: 1,
    homepageAccent: "Research project, Cyber Guard 360 × NGIT",
    problem:
      "Enterprise databases need monitoring that goes beyond a single signal — query text alone doesn't reveal whether an operation is dangerous without also weighing execution plans, logs, and system KPIs.",
    product: [
      "A multimodal AI-assisted database monitoring and protection system that integrates SQL query text, execution plans, logs, and KPIs to detect suspicious behavior and rank potential root causes.",
      "Query classification into safe, alert-only, and approval-required operations, backed by secure monitoring workflows.",
      "Activity logging, slow-query detection, client behavior tracking, and real-time monitoring dashboards.",
    ],
    contribution: {
      team: "DBGuard was the official title of an outsourced research project between Neil Gogte Institute of Technology and Cyber Guard 360 (CT, USA), confirmed by a signed research-internship certificate — worked July 2025 to December 2025, the same window as the separate Cyber Guard 360 internship listed in Experience.",
      mine: 'The certificate credits "commendable" contribution to the DBGuard project specifically. The resume does not itemize a feature-by-feature individual split beyond that, so this case study presents DBGuard\'s functionality as built during that research placement rather than claiming any single feature as a solo contribution.',
    },
    architecture: [
      "Ingests multiple signal types per query — text, execution plan, logs, KPIs — rather than relying on query text alone.",
      "A classification layer buckets each operation into safe / alert-only / approval-required.",
      "A monitoring layer tracks client activity and slow queries and surfaces them on real-time dashboards.",
    ],
    techStack: [
      "MERN",
      "Flask",
      "Docker",
      "Prometheus",
      "Grafana",
      "MySQL",
      "Redis",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/M-Sankeerthana-R-R/DBGuard",
        kind: "github",
      },
    ],
    media: [
      {
        label: "DBGuard demo",
        caption:
          "Walkthrough of DBGuard's monitoring and query-classification workflow.",
        driveFileId: "1BzvqGXDz2992D9rT9VX0HOweOzcjXcER",
      },
    ],
  },
  {
    slug: "cyberguard360",
    name: "Cyber Guard 360",
    shortName: "Cyber Guard 360",
    tagline: "Cyber Security Internship — internal work, not a public product.",
    domain: "Cyber Security",
    period: "Aug 2025 – Dec 2025",
    format: "Internship",
    tier: 1,
    isExperience: true,
    homepageAccent: "Professional internship",
    problem:
      "A six-month internship engagement with Cyber Guard 360, focused on cybersecurity practice: threat analysis, monitoring, and secure system workflows.",
    product: [
      "Assisted in developing and testing cybersecurity solutions for secure enterprise systems.",
      "Performed threat analysis, vulnerability assessment, log monitoring, and attack detection.",
      "Worked on secure system practices, monitoring tools, and database security workflows.",
    ],
    contribution: {
      team: "This is a professional internship entry, distinct from the DBGuard project case study — DBGuard was the specific research project worked on during this internship window (confirmed by a separate NGIT research-internship certificate), but the two are kept separate here since one is the employer engagement and the other is the project deliverable.",
      mine: "Resume credits: threat analysis, vulnerability assessment, log monitoring, attack detection, and collaboration on secure architectures and suspicious-activity identification.",
    },
    architecture: [
      "Internal security tooling and monitoring workflows — not a public-facing product, so no architecture diagram is presented beyond what's visible in the two work demos below.",
    ],
    techStack: [
      "Threat Analysis",
      "Vulnerability Assessment",
      "Log Monitoring",
      "Secure Database Monitoring",
    ],
    links: [],
    media: [
      {
        label: "Cyber Guard 360 — Work Demo",
        caption: "Internal work demo from the internship.",
        driveFileId: "1j8ilDjNg7jd0SGcwop8Mk0spYrxQf2Yb",
      },
      {
        label: "Cyber Guard 360 — Promo Video",
        caption: "Promotional video associated with the internship engagement.",
        driveFileId: "1DVgPPSkJnotizEVWrl-kg7_3RtACgSca",
      },
    ],
  },
  {
    slug: "genai-finance",
    name: "GenAI Finance GPT",
    shortName: "GenAI Finance",
    tagline: "A privacy-aware AI platform for financial document intelligence.",
    domain: "FinTech & Generative AI",
    period: "Feb 2025 – Jul 2025",
    format: "Team Project",
    tier: 2,
    homepageAccent: "Mobile app · federated learning",
    problem:
      "Financial documents carry sensitive information and come in many forms (invoices, budgets, forms, cheques). Processing them with AI safely means classifying, summarizing, and answering questions about them without exposing personal or financial data — and without centralizing that data for training.",
    product: [
      "A GenAI-powered mobile application for financial document classification, question answering, summarization, and sensitive-data masking, using multimodal AI pipelines.",
      "Document classification into invoice / budget / form categories using a custom-trained Scratch-ViT model.",
      "Finance Q&A via dedicated models, and report summarization using a Pegasus model.",
      "Sensitive-data masking: text anonymization with RoBERTa, and cheque-image PII masking with DETR.",
      "Federated learning to enable privacy-preserving model training across devices.",
    ],
    contribution: {
      team: "Built as a team project over roughly five months under KMIT's GenAI Project School (mentor: Dr Devika, completed 16 July 2025), combining a Flutter mobile client with multiple transformer- and vision-based models.",
      mine: "Resume credits: integrating transformer-based NLP and vision models for document understanding and processing. The public repository (README only, no application code published) additionally confirms Flutter Hooks were used to optimize state management around the classification flow.",
    },
    architecture: [
      "Flutter mobile client talking to a FastAPI backend deployed on AWS.",
      "Document classification (Scratch-ViT) branches documents by type before downstream processing.",
      "Separate model paths for Q&A, summarization (Pegasus), and PII masking (RoBERTa for text, DETR for cheque images).",
      "A federated learning loop to train without centralizing raw documents.",
    ],
    techStack: [
      "Flutter",
      "FastAPI",
      "AWS",
      "PyTorch",
      "ViT",
      "RoBERTa",
      "Pegasus",
      "BERT",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/M-Sankeerthana-R-R/Genai_Finance_Tools",
        kind: "github",
        note: "Documentation only — the repository README describes the system; application source was not published to this repo.",
      },
    ],
    media: [
      {
        label: "GenAI Finance GPT demo",
        caption:
          "Walkthrough of the document classification, Q&A, and PII-masking flow.",
        driveFileId: "1tP7f9WN3n9ZCVV4Pn248M2Iaz6v52Iq7",
      },
    ],
  },
  {
    slug: "tara",
    name: "Tara",
    shortName: "Tara",
    tagline: "A desktop AI assistant, built out of curiosity.",
    domain: "AI / Automation",
    period: "Personal Project",
    format: "Personal Project",
    tier: 2,
    homepageAccent: "Personal engineering project",
    problem:
      "Not built for a class or a client — Tara started as a way to explore what a genuinely useful, responsive desktop assistant would take to build end to end.",
    product: [
      "A modular desktop AI assistant integrating speech interaction, intent routing, system/app actions, and workflow automation.",
      "Optimized for responsive interaction through reusable services, caching, and streamlined speech-processing workflows.",
    ],
    contribution: {
      team: "Solo project, self-directed.",
      mine: "Designed and built the whole assistant: the speech interaction loop, intent routing, the system/app action layer, and the performance work (reusable services and caching) that made it feel responsive rather than laggy.",
    },
    architecture: [
      "A speech interaction layer (recognition in, text-to-speech out).",
      "An intent router that decides which module handles a given request.",
      "Modular action handlers for system, application, and automation tasks.",
      "A caching layer and reusable services introduced specifically to cut response latency.",
    ],
    techStack: [
      "Python",
      "Gemini",
      "Speech Recognition",
      "Text-to-Speech",
      "Automation",
    ],
    links: [],
  },
  {
    slug: "optivox",
    name: "OptiVox",
    shortName: "OptiVox",
    tagline: "Communication without touch.",
    domain: "Assistive AI Technology",
    period: "May 2025",
    format: "Hackathon Project",
    tier: 3,
    homepageAccent: "Built at Hackcelerate",
    problem:
      "People with severe paralysis or ALS are often mentally aware but unable to communicate physically, and existing assistive tools frequently fall short of restoring that connection.",
    product: [
      "An AI-powered, open-source interface that converts eye movements into text using webcam-based gaze tracking and GPT-based sentence prediction.",
      "Flow: webcam feed → gaze tracking → on-screen selection → text output, with correction support.",
    ],
    contribution: {
      team: "Built at the Hackcelerate hackathon, hosted by the E-Cell at Muffakham Jah College of Engineering & Technology (confirmed via the event certificate).",
      mine: "Resume credits building the accessibility platform end to end: the gaze-tracking interaction, the real-time AI-assisted communication, and the interactive assistance workflow.",
    },
    architecture: [
      "A Next.js frontend with a dedicated GazeTracker component built on webgazer.js for webcam-based eye tracking.",
      "A Flask backend that supports the text pipeline, including a word-frequency dictionary used for prediction/correction.",
      "GPT-based sentence prediction to speed up communication beyond raw letter-by-letter selection.",
    ],
    techStack: [
      "Next.js",
      "React",
      "webgazer.js",
      "Flask",
      "Python",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/M-Sankeerthana-R-R/OptiVox",
        kind: "github",
      },
    ],
    media: [
      {
        label: "OptiVox demo",
        caption:
          "Gaze tracking → virtual keyboard → dwell selection → text, shown end to end.",
        driveFileId: "1UUvLh2dvT44kEfcd9bHiz37Fi6UIIYBG",
      },
    ],
  },
  {
    slug: "safejourney",
    name: "SafeJourney",
    shortName: "SafeJourney",
    tagline: "Finding safer paths, not just shorter ones.",
    domain: "Social Impact / Safety Technology",
    period: "Nov 2025",
    format: "Hackathon Project",
    tier: 3,
    homepageAccent: "Codenovate 2.0 — Merit recognition",
    problem:
      "Standard navigation optimizes for speed, not safety. In an emergency, the fastest route and the safest route aren't always the same one.",
    product: [
      "A safety platform integrating emergency assistance, route-safety support, and rapid communication workflows.",
    ],
    contribution: {
      team: 'Built as a hackathon project — a certificate from "Codenovate 2.0" (15–16 November 2025, organized by Recurse, the technical club of Keshav Memorial Institute of Technology) recognizes this work under the name "SafeRoutes," with Merit Performance.',
      mine: "Resume credits development of the platform's emergency-assistance and route-safety features.",
    },
    architecture: [
      "A MERN-based web application with third-party API integration for route and communication features.",
    ],
    techStack: ["MERN Stack", "API Integration", "JavaScript"],
    outcome:
      "Merit Performance recognition at Codenovate 2.0 (KMIT, Nov 2025).",
    links: [],
  },
  {
    slug: "jewelry-design",
    name: "Jewelry Design Pattern Generation",
    shortName: "Jewelry Design",
    tagline: "From sketch to generated design.",
    domain: "AI / ML · Computer Vision",
    period: "Aug 2024 – Dec 2024",
    format: "Team Project",
    tier: 3,
    homepageAccent: "GAN-based design generation",
    problem:
      "Exploring whether generative models can turn a rough grayscale jewelry sketch into a realistic, colored design — automating part of the early creative design process.",
    product: [
      "Takes grayscale jewelry sketches as input and generates realistic, colored jewelry design images.",
      "Classifies whether an input sketch is jewelry at all, and if so, which type — earring, bracelet, ring, or necklace.",
    ],
    contribution: {
      team: "Built as a team project over roughly five months under KMIT's Retail Project School (mentor: Gnanesh, completion certified 11 Feb 2025), spanning a React frontend, a Node/Express backend, and a Python ML service.",
      mine: "Resume credits developing the GAN-based generation system as part of the team, exploring automated creative design generation.",
    },
    architecture: [
      "Generator: a U-Net-style encoder–decoder with skip connections, confirmed directly from the repository's published model summary (~59.3M parameters).",
      "Discriminator: a PatchGAN that classifies real-vs-generated at the patch level rather than the whole image.",
      "A classification step (jewelry vs. non-jewelry, then jewelry type) runs ahead of generation.",
      "React (Create React App) frontend, Node/Express backend, deployed separately from the Python model service.",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Python",
      "GANs",
      "U-Net",
      "PatchGAN",
      "Netlify",
    ],
    outcome: "Live frontend deployed and publicly reachable.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/M-Sankeerthana-R-R/Jewelry-Design-Pattern-Generation",
        kind: "github",
      },
      {
        label: "Live Demo",
        href: "https://jewelrydesignpatterngen.netlify.app",
        kind: "live",
      },
    ],
    media: [
      {
        label: "Jewelry Design Pattern Generation demo",
        caption:
          "Sketch input → classification → generated, colored jewelry design.",
        driveFileId: "1Y6R0k5hBvtJjBbngNeYk002NL0KPYCBA",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  if (slug === "cyberguard360") {
    return { next: getProject("dbguard")! };
  }
  const showcase = projects.filter((p) => !p.isExperience);
  const idx = showcase.findIndex((p) => p.slug === slug);
  const next = showcase[(idx + 1) % showcase.length];
  return { next };
}
