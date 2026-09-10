// ---------------------------------------------------------------------------
// All portfolio content lives here. Update copy, links, dates or credentials
// in this one file — components read from it and nothing else needs to change.
// See README.md → "Updating content" for guidance on each section.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Malika Harmaien",
  title: "AI Engineer",
  tagline: "Python · Machine Learning · Generative AI · LLMs · RAG",
  location: "Bengaluru, India",
  email: "harmaienmalika@gmail.com",
  linkedin: "https://www.linkedin.com/in/malika-harmaien/",
  github: "https://github.com/Malika26-08",
  resumeUrl: "/assets/resume/Malika-Harmaien-Resume.pdf",
  photo: {
    jpg: "/assets/photo/malika-portrait.jpg",
    webp: "/assets/photo/malika-portrait.webp",
    alt: "Portrait of Malika Harmaien",
  },
  statement:
    "Building practical AI systems that move from ideas to usable products.",
  intro:
    "I'm a B.E. Information Science and Engineering student who builds AI-powered solutions with Python, Machine Learning, Generative AI, LLMs, Retrieval-Augmented Generation and Computer Vision — and I like taking them past the notebook, into applications people can actually use.",
};

export const education = {
  school: "Don Bosco Institute of Technology (DBIT), Bengaluru",
  degree: "B.E. Information Science and Engineering",
  period: "2023 – 2027",
  detail: "CGPA 8.93 / 10",
};

export const about = {
  paragraphs: [
    "I'm an Information Science and Engineering student at DBIT, Bengaluru, working toward a career as an AI Engineer. My focus is on practical AI systems — code that runs as a service, not just a notebook that runs once.",
    "Most of what I build sits at the intersection of Generative AI, LLMs and Retrieval-Augmented Generation, with Computer Vision and MLOps-style model monitoring alongside it. I'm drawn to the application layer: multi-agent workflows, RAG-based assistants, and dashboards that make an AI system legible to the person using it, not just the person who built it.",
  ],
  focusChips: [
    "Multi-agent systems",
    "RAG-based assistants",
    "Computer vision applications",
    "Model monitoring",
    "Interactive AI dashboards",
  ],
};

// Focus areas — deliberately not numbered as 01–06: these are parallel
// disciplines, not a sequence. Short codes read like arXiv/category tags.
export const focusAreas = [
  {
    code: "AI/ML",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Core ML foundations underneath every system I build, from data handling to model evaluation.",
  },
  {
    code: "GEN",
    title: "Generative AI & LLMs",
    description:
      "Applying large language models to real workflows — reasoning, generation and tool use.",
  },
  {
    code: "RAG",
    title: "Retrieval-Augmented Generation",
    description:
      "Grounding LLM output in real, retrievable context instead of memory alone.",
  },
  {
    code: "CV",
    title: "Computer Vision",
    description:
      "Vision models for detection and classification tasks, benchmarked rather than assumed.",
  },
  {
    code: "OPS",
    title: "MLOps & Model Monitoring",
    description:
      "Watching models after deployment — drift detection and retraining, not just training.",
  },
  {
    code: "APP",
    title: "AI Application Development",
    description:
      "Shipping the API and interface around a model, so the system is usable, not just accurate.",
  },
];

export const skills = {
  Languages: ["Python", "Java", "JavaScript", "SQL", "C++"],
  "AI / Machine Learning": [
    "Machine Learning",
    "Generative AI",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "LangChain",
    "Computer Vision",
    "Scikit-learn",
  ],
  "Frameworks": ["FastAPI", "Flask", "Streamlit", "React.js", "Node.js"],
  "Libraries": ["Pandas", "NumPy", "OpenCV"],
  "Database": ["MySQL"],
  "Tools": ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab"],
};

// Journey So Far — a real chronological sequence, so index markers and
// dates are meaningful wayfinding here, not decoration.
export const journey = [
  {
    kind: "education",
    marker: "01",
    title: "B.E. Information Science and Engineering",
    org: "Don Bosco Institute of Technology (DBIT), Bengaluru",
    period: "2023 – 2027",
    detail: "CGPA 8.93 / 10",
    description:
      "The foundation of the journey — coursework and early projects in Python, data structures and applied computing.",
  },
  {
    kind: "internship",
    marker: "02",
    title: "Python Programming Intern",
    org: "CodSoft",
    period: "25 Mar 2025 – 25 Apr 2025",
    detail: "Certificate ID ac8cf50 · issued 28 Apr 2025",
    description:
      "A four-week virtual internship building Python programming projects, applying programming and problem-solving fundamentals to practical applications.",
  },
  {
    kind: "internship",
    marker: "03",
    title: "Data Analyst Intern",
    org: "BeeSkilled",
    period: "6-week online internship",
    detail: "Issued 20 Aug 2026",
    description:
      "Analyzed datasets with Python and data-processing tools to identify patterns and support data-driven conclusions.",
  },
  {
    kind: "internship",
    marker: "04",
    title: "Artificial Intelligence Intern",
    org: "XTRAGRAD PVT LTD",
    period: "1 Aug 2026 – 30 Aug 2026 · Remote",
    detail: "Certificate ID XG-INT-725402 · issued 5 Sep 2026",
    description:
      "Applied Python-based AI and computer vision techniques to develop and evaluate a project solution, then developed and presented it — hands-on experience in practical AI application development. The most directly relevant internship to my AI Engineer track.",
    highlight: true,
  },
  {
    kind: "research",
    marker: "05",
    title: "Research Publication",
    org: "IJSRED — International Journal of Scientific Research and Engineering Development",
    period: "Volume 9, Issue 4 · July – August 2026",
    detail: "ISSN 2581-7175",
    description:
      "Published \u201cAI-Powered Model Monitoring System with Data Drift Detection and Automated Retraining for Machine Learning Model.\u201d A milestone rather than a certificate — the research groundwork behind one of the featured projects below.",
    highlight: true,
  },
];

// Projects — ordered by how strongly each communicates the AI Engineer
// positioning. `visual` selects the abstract SVG motif rendered for the card
// (see components/ProjectVisual.jsx) since no product screenshots exist yet.
export const projects = [
  {
    slug: "lifebridge-ai",
    featured: true,
    index: "01",
    name: "LifeBridge AI",
    subtitle: "AI-Powered Emergency Response Platform",
    what: "Getting the right information and next steps to someone in the middle of a disaster or emergency, fast, is a coordination problem as much as an information one.",
    built:
      "A full-stack emergency response and disaster-assistance platform built around a multi-agent workflow — eight coordinated agents handling different parts of an emergency-response task — with a Next.js frontend and a FastAPI backend deployed as separate services.",
    tech: ["Next.js", "FastAPI", "Gemini", "Multi-Agent AI"],
    links: {
      github: "https://github.com/Malika26-08/LIFEBRIDGE-AI",
      live: "https://lifebridge-ai.vercel.app",
      api: "https://lifebridge-ai-production-adc6.up.railway.app/docs",
    },
    visual: "agents",
  },
  {
    slug: "codeorbit-ai",
    index: "02",
    name: "CodeOrbit AI",
    subtitle: "GitHub Repository Intelligence Assistant",
    what: "Understanding an unfamiliar codebase from the README alone rarely works — you need to query the actual code.",
    built:
      "An AI assistant that retrieves over a repository's real code and structure to answer questions about it, combining LangChain and FAISS for retrieval with the GitHub API for repository access, served through a FastAPI backend and a Streamlit interface. Built during the IBM Bob Hackathon with lablab.ai.",
    tech: ["LLMs", "RAG", "LangChain", "FAISS", "FastAPI", "Streamlit", "GitHub API"],
    links: {
      github: "https://github.com/Malika26-08/Code_Orbit_AI",
      live: "https://codeorbitai-aadj9flhdqzs2ntljrrr79.streamlit.app/",
      api: "https://code-orbit-ai.onrender.com/",
    },
    visual: "retrieval",
  },
  {
    slug: "exam-proctoring",
    index: "03",
    name: "AI-Based Online Exam Proctoring System",
    subtitle: "Computer vision for abnormal-activity detection",
    what: "Flagging abnormal behaviour during an online exam — not identifying who someone is.",
    built:
      "A computer-vision system that detects abnormal activity during online examinations, benchmarking five architectures — DenseNet121, InceptionV3, Inception-ResNet-v2, a custom CNN, and YOLOv5 — against target classes including eye movement, hand movement, mobile-phone use, side-watching and mouth opening. Deployed with Streamlit.",
    tech: ["Python", "OpenCV", "YOLOv5", "DenseNet121", "InceptionV3", "Inception-ResNet-v2", "Custom CNN", "Streamlit"],
    links: {
      github: "https://github.com/Malika26-08/AI-Online-Exam-Proctoring",
      live: "https://ai-online-exam-proctoring.streamlit.app/",
    },
    visual: "vision",
  },
  {
    slug: "model-monitoring",
    index: "04",
    name: "AI-Powered Model Monitoring",
    subtitle: "Data Drift Detection & Automated Retraining",
    what: "A model's accuracy on day one says little about its accuracy six months later, once the world it was trained on has moved.",
    built:
      "A model-monitoring system that detects data drift and supports automated retraining, aimed at keeping machine learning models reliable as the underlying data distribution changes. Published as research rather than shipped as a public repository — see the publication in the Journey section for the full citation.",
    tech: ["Data Drift Detection", "Model Monitoring", "Automated Retraining", "MLOps"],
    links: {
      publication: "/assets/certificates/ijsred-publication-certificate.pdf",
      journal: "https://www.ijsred.com",
    },
    visual: "drift",
    isResearch: true,
  },
  {
    slug: "study-marks-predictor",
    index: "05",
    name: "Study Time vs Marks Prediction Dashboard",
    subtitle: "Interactive study planner",
    what: "Turning study hours and study intensity into a concrete, visual study plan.",
    built:
      "An interactive study planner and exam-marks dashboard built with Python and Streamlit. Predictions come from a rule-based approach keyed to study hours and study intensity — not a trained machine-learning model — surfaced through an interactive dashboard for exploring study-related inputs.",
    tech: ["Python", "Streamlit", "Rule-based logic"],
    links: {
      github: "https://github.com/Malika26-08/study-marks-predictor",
      live: "https://study-marks-predictor.streamlit.app/",
    },
    visual: "chart",
  },
  {
    slug: "urban-heat-mapping",
    index: "06",
    name: "Urban Heat Hyperlocal Mapping",
    subtitle: "Geospatial heat-hotspot visualization",
    what: "Heat exposure isn't uniform across a city — it's hyperlocal, and most mapping isn't granular enough to show that.",
    built:
      "An interactive system for detecting and visualizing urban heat hotspots, combining geospatial analytics with heat-related data through a Streamlit and Folium dashboard.",
    tech: ["Python", "Streamlit", "Folium", "Geospatial Analytics"],
    links: {
      github: "https://github.com/Malika26-08/urban-heat-hyperlocal-mapping",
      live: "https://malika26-08-urban-heat-hyperlocal-mapping-appapp-ybdcou.streamlit.app/",
    },
    visual: "heatmap",
  },
];

// Certifications backed by an actual certificate file in /public/assets/certificates
export const certifications = [
  {
    kind: "publication",
    title: "Certificate of Publication — IJSRED",
    issuer: "International Journal of Scientific Research and Engineering Development",
    period: "Volume 9, Issue 4 · July – August 2026",
    credentialId: "ISSN 2581-7175",
    issued: "Peer-reviewed, open-access journal",
    file: "/assets/certificates/ijsred-publication-certificate.pdf",
  },
  {
    title: "Artificial Intelligence Internship",
    issuer: "XTRAGRAD PVT LTD",
    period: "1 – 30 Aug 2026 · Remote",
    credentialId: "XG-INT-725402",
    issued: "Issued 5 Sep 2026",
    file: "/assets/certificates/xtragrad-ai-internship.pdf",
  },
  {
    title: "Data Analyst Internship",
    issuer: "BeeSkilled",
    period: "6-week online program",
    credentialId: null,
    issued: "Issued 20 Aug 2026",
    file: "/assets/certificates/beeskilled-data-analyst-internship.pdf",
  },
  {
    title: "Python Programming Internship",
    issuer: "CodSoft",
    period: "25 Mar 2025 – 25 Apr 2025",
    credentialId: "ac8cf50",
    issued: "Issued 28 Apr 2025",
    file: "/assets/certificates/codsoft-python-internship.pdf",
  },
];

// Additional resume-listed certifications with no certificate file on hand —
// shown without a credential ID, date or download link (none was provided).
export const otherCertifications = [
  { title: "Python Essentials (Fast Track)", issuer: "Decoding Data Science" },
  { title: "5-Day AI Agents: Intensive Vibe Coding Course", issuer: "Kaggle" },
  { title: "PARALLAX 2026", issuer: "AWS Cloud Club, DBIT" },
  { title: "IBM Bob Hackathon", issuer: "lablab.ai" },
];

export const publication = {
  title:
    "AI-Powered Model Monitoring System with Data Drift Detection and Automated Retraining for Machine Learning Model",
  journal: "International Journal of Scientific Research and Engineering Development (IJSRED)",
  detail: "Volume 9, Issue 4 · July – August 2026",
  issn: "ISSN 2581-7175",
  certFile: "/assets/certificates/ijsred-publication-certificate.pdf",
  journalUrl: "https://www.ijsred.com",
};

// Achievements — exactly three, per the source resume. IBM Bob Hackathon is
// deliberately excluded here; it appears only as context on CodeOrbit AI.
export const achievements = [
  {
    rank: "1st",
    title: "AWS Certification Challenge Quiz",
  },
  {
    rank: "2nd",
    title: "Mastering AI Prompt, Context, and Harness Engineering Quiz",
  },
  {
    rank: "—",
    title: "Certificate of Appreciation, Academic Excellence — DBIT",
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Focus", href: "#focus" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Credentials", href: "#credentials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
