export const site = {
  name: "Mohamed Waleed Elmogy",
  nickname: "MOHAMED",
  shortName: "MWE",
  role: "AI Engineer · Data Analyst · Bioinformatics Researcher",
  headline: "Building thoughtful AI for real-world problems.",
  description:
    "I work across medical AI, machine learning, bioinformatics, and data analysis — turning complex data into useful systems and clear decisions.",
  location: "Egypt",
  avatar: "/profile.jpg",
  icon: "/icon.png",
  availability: "Available for Projects & Collaboration",
  email: "mohammed.elmogy7500@gmail.com",
  phone: "+20 102 783 9779",
  linkedin: "https://linkedin.com/in/mooogyyy",
  github: "https://github.com/mohammedelmogy7500",
  portfolio: "https://mohammedelmogy7500.github.io/Portfolio",
  url: "https://mohammedelmogy7500.github.io",
};

export const navigation = [
  { label: "SERVICES", href: "/#services", isHash: true },
  { label: "WORK", href: "/projects", isHash: false },
  { label: "EXPERIENCE", href: "/experience", isHash: false },
  { label: "SKILLS", href: "/skills", isHash: false },
  { label: "ARTICLES", href: "/notes", isHash: false },
  { label: "ABOUT", href: "/about", isHash: false },
  { label: "CONTACT", href: "/#contact", isHash: true },
];

export const services = [
  {
    id: "medical-ai",
    number: "01",
    title: "MEDICAL AI & COMPUTER VISION",
    subtitle: "Diagnostic pipelines & deep learning imaging",
    description:
      "Designing and implementing computer vision pipelines for clinical and radiological data, from image preprocessing to high-accuracy multi-class disease prediction.",
    deliverables: [
      "Chest X-ray & radiographic disease classification",
      "End-to-end TensorFlow & OpenCV pipelines",
      "Model evaluation, ROC/AUC & validation metrics",
      "Diagnostic confidence scoring & visualization",
    ],
    tag: "DEEP LEARNING",
  },
  {
    id: "data-analytics",
    number: "02",
    title: "DATA ANALYTICS & INSIGHTS",
    subtitle: "Wrangling, EDA & interactive dashboards",
    description:
      "Transforming messy, large-scale datasets into structured tabular models, statistical insights, and executive dashboards that drive clear operational decisions.",
    deliverables: [
      "Data wrangling, cleaning & validation at scale (10K+ rows)",
      "Exploratory Data Analysis (EDA) with Pandas & NumPy",
      "Interactive executive dashboards in Power BI & Tableau",
      "Statistical inference & business intelligence reporting",
    ],
    tag: "ANALYTICS",
  },
  {
    id: "bioinformatics",
    number: "03",
    title: "BIOINFORMATICS & GENOMICS",
    subtitle: "Sequence analysis & biological computation",
    description:
      "Applying machine learning and computational algorithms to genomic sequences, molecular datasets, and biomedical research pipelines.",
    deliverables: [
      "FASTA sequence parsing & BLAST alignment pipelines",
      "Biopython scripting for genomics research",
      "Disease prediction & biological classification models",
      "Biomedical data integration and feature engineering",
    ],
    tag: "BIO-COMPUTING",
  },
];

export const projects = [
  {
    number: "01",
    slug: "diagnolink",
    title: "DiagnoLink — Chest Disease AI Diagnosis",
    category: "Medical AI · Deep Learning",
    period: "2023 — 2024",
    stat: "97% ACCURACY",
    summary:
      "An AI-powered chest disease diagnosis system using deep learning convolutional neural networks on chest X-ray imagery.",
    details: [
      "Built a deep learning classification pipeline using the NIH ChestX-ray dataset.",
      "Achieved a 97% accuracy rate across targeted thoracic disease classes.",
      "Processed radiographic medical images using OpenCV, NumPy, and TensorFlow.",
      "Engineered an end-to-end workflow from DICOM/PNG ingestion to clinical risk scoring.",
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "NumPy"],
    status: "Graduation Project · Featured",
    github: "https://github.com/mohammedelmogy7500",
    demo: "https://mohammedelmogy7500.github.io/Portfolio/",
  },
  {
    number: "02",
    slug: "supermarket-sales-analytics",
    title: "Supermarket Sales Data Wrangling & Analysis",
    category: "Data Analytics & Business Intelligence",
    period: "Jan — Mar 2025",
    stat: "10K+ RECORDS",
    summary:
      "A complete data-wrangling and business analytics project extracting commercial performance insights from high-volume retail transactions.",
    details: [
      "Cleaned, harmonized, and preprocessed multi-branch sales transaction records.",
      "Formulated exploratory data analysis exploring customer buying behavior and margin distribution.",
      "Designed visual analytical reports and executive presentations using Seaborn and Matplotlib.",
      "Identified revenue bottlenecks and seasonal product demand patterns.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    status: "Completed Project",
    github: "https://github.com/mohammedelmogy7500/Supermarket-Sales-Data-Wrangling-Analysis",
    demo: "https://github.com/mohammedelmogy7500/Supermarket-Sales-Data-Wrangling-Analysis#readme",
  },
  {
    number: "03",
    slug: "accident-data-analysis-tableau",
    title: "Accident Data Analysis & Road Safety Dashboard",
    category: "Data Visualization & Tableau",
    period: "2024",
    stat: "INTERACTIVE DASHBOARD",
    summary:
      "An interactive road traffic accident analytics dashboard analyzing casualty severity, temporal trends, and infrastructure factors.",
    details: [
      "Aggregated and structured multi-year road traffic and incident datasets.",
      "Designed dynamic Tableau dashboards with multi-criteria filtering by weather, light conditions, and vehicle type.",
      "Uncovered high-risk geographical zones and peak collision hours to inform safety measures.",
    ],
    stack: ["Tableau", "SQL", "Excel", "Data Modeling"],
    status: "Completed Project",
    github: "https://github.com/mohammedelmogy7500/Accident-Data-Analysis-Tableau-Project",
    demo: "https://github.com/mohammedelmogy7500/Accident-Data-Analysis-Tableau-Project#readme",
  },
  {
    number: "04",
    slug: "hr-analytics-performance",
    title: "HR Analytics & Employee Performance Analysis",
    category: "Workforce Analytics & Statistical Modeling",
    period: "2024",
    stat: "ATTRITION MODELING",
    summary:
      "Exploratory data analysis and predictive modeling uncovering key factors in employee turnover, satisfaction levels, and performance ratings.",
    details: [
      "Analyzed workforce demographic, compensation, and evaluation metrics.",
      "Built classification models to predict attrition risk with actionable feature importance scores.",
      "Delivered strategic retention recommendations based on quantitative findings.",
    ],
    stack: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
    status: "Completed Project",
    github: "https://github.com/mohammedelmogy7500/HR-Analytics-and-Employee-Performance-Analysis",
    demo: "https://github.com/mohammedelmogy7500/HR-Analytics-and-Employee-Performance-Analysis#readme",
  },
  {
    number: "05",
    slug: "student-performance-analysis",
    title: "Student Academic Performance Analysis",
    category: "Educational Data Mining & ML",
    period: "2024",
    stat: "REGRESSION & EDA",
    summary:
      "Statistical evaluation of socio-economic, pedagogical, and demographic factors impacting student academic achievements.",
    details: [
      "Applied multivariate regression models to evaluate grade determinants.",
      "Conducted extensive hypothesis testing and outlier detection.",
      "Published modular analysis notebooks with complete reproducibility.",
    ],
    stack: ["Python", "NumPy", "Pandas", "Matplotlib"],
    status: "Completed Project",
    github: "https://github.com/mohammedelmogy7500/student-performance-analysis",
    demo: "https://github.com/mohammedelmogy7500/student-performance-analysis#readme",
  },
  {
    number: "06",
    slug: "genomic-sequence-pipeline",
    title: "Genomic Sequence Processing & BLAST Pipeline",
    category: "Bioinformatics & Research",
    period: "2024 — 2025",
    stat: "FASTA / BLAST",
    summary:
      "Automated computational biology pipeline for parsing, filtering, and aligning genomic sequences for disease marker discovery.",
    details: [
      "Developed Python scripts for high-throughput biological sequence processing using Biopython.",
      "Implemented automated query pipelines with NCBI BLAST and local FASTA databases.",
      "Extracted phylogenetic and structural indicators for predictive classification.",
    ],
    stack: ["Python", "Biopython", "FASTA", "BLAST", "Bioinformatics"],
    status: "Research Project",
    github: "https://github.com/mohammedelmogy7500",
    demo: "https://mohammedelmogy7500.github.io/Portfolio/",
  },
];

export const skills = [
  {
    group: "Programming & Databases",
    tag: "CORE",
    items: ["Python", "SQL", "C++ Basics", "Bash / Shell", "Git & GitHub"],
  },
  {
    group: "Machine Learning & AI",
    tag: "AI / ML",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Computer Vision",
      "Convolutional Neural Networks (CNNs)",
      "Deep Learning Pipelines",
    ],
  },
  {
    group: "Data Analysis & Visualization",
    tag: "ANALYTICS",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Tableau",
      "Exploratory Data Analysis (EDA)",
    ],
  },
  {
    group: "Bioinformatics",
    tag: "BIO",
    items: ["Biopython", "FASTA Format", "NCBI BLAST", "Genomic Sequence Analysis"],
  },
  {
    group: "Platforms & Environments",
    tag: "TOOLS",
    items: ["Google Colab", "Kaggle Notebooks", "VS Code", "Jupyter", "Linux CLI"],
  },
];

export const experience = [
  {
    role: "Data Analyst",
    organization: "Professional Experience",
    period: "2023 — 2025",
    type: "Industry",
    bullets: [
      "Analyzed and transformed datasets containing 10K+ records using Python and SQL.",
      "Conducted extensive data cleaning, anomaly detection, and exploratory data analysis using Pandas and NumPy.",
      "Built predictive models and benchmarked statistical metrics across classification tasks.",
      "Constructed interactive dashboards and management summaries using Power BI, Tableau, and Matplotlib.",
    ],
  },
  {
    role: "Bioinformatics Trainee & Research Assistant",
    organization: "Research & Academic Training",
    period: "2022 — 2025",
    type: "Research",
    bullets: [
      "Analyzed biological and medical datasets using machine-learning algorithms and statistical workflows.",
      "Engineered automated Python pipelines for processing genomic and clinical data.",
      "Applied Biopython, FASTA data formats, and BLAST search algorithms to genetic sequences.",
      "Collaborated on disease classification models combining image data and clinical markers.",
    ],
  },
];

export const education = {
  institution: "Delta University for Science and Technology",
  degree: "Bachelor’s Degree in Artificial Intelligence & Bioinformatics",
  period: "2021 — 2025",
  gpa: "2.904 / 4.00",
  highlights: [
    "Specialized coursework in Deep Learning, Medical Imaging, Pattern Recognition, and Genomics.",
    "Graduation Project: DiagnoLink (Chest Disease AI) — 97% Reported Accuracy.",
  ],
};

export const course = {
  name: "Google Data Analysis Specialist",
  provider: "Digital Egypt Pioneers Initiative (DEPI)",
  period: "2024 — 2025",
  badge: "DEPI GOOGLE SPECIALIST",
  description:
    "Comprehensive professional training program covering data preparation, SQL query optimization, Python data processing, and enterprise dashboard storytelling.",
};

export const certificates = [
  {
    title: "Introduction to Computer Vision and Image Processing",
    issuer: "IBM / Coursera",
    category: "Computer Vision",
    link: "https://www.coursera.org/learn/introduction-computer-vision-watson-opencv",
  },
  {
    title: "Applied Machine Learning in Python",
    issuer: "University of Michigan / Coursera",
    category: "Machine Learning",
    link: "https://www.coursera.org/learn/python-machine-learning",
  },
  {
    title: "Fake News Detection with Machine Learning",
    issuer: "Practical ML Lab",
    category: "NLP & Classification",
    link: "https://www.coursera.org/projects/nlp-fake-news-detector",
  },
  {
    title: "Intro to Analytic Thinking, Data Science, and Data Mining",
    issuer: "Professional Specialization",
    category: "Data Science",
    link: "https://www.coursera.org/learn/intro-analyticthinking-datascience-datamining",
  },
  {
    title: "Operations Research (1): Models and Applications",
    issuer: "Academic Specialization",
    category: "Optimization",
    link: "https://www.coursera.org/learn/operations-research-modeling",
  },
  {
    title: "Operations Research (2): Optimization Algorithms",
    issuer: "Academic Specialization",
    category: "Optimization",
    link: "https://www.coursera.org/learn/operations-research-algorithms",
  },
  {
    title: "Operations Research (3): Theory",
    issuer: "Academic Specialization",
    category: "Optimization",
    link: "https://www.coursera.org/learn/operations-research-theory",
  },
  {
    title: "Dynamic Programming, Greedy Algorithms",
    issuer: "Algorithmic Specialization",
    category: "Algorithms",
    link: "https://www.coursera.org/learn/dynamic-programming-greedy-algorithms",
  },
  {
    title: "Numerical Methods for Engineers",
    issuer: "Engineering Sciences",
    category: "Mathematics",
    link: "https://www.coursera.org/learn/numerical-methods-engineers",
  },
  {
    title: "Fundamentals of Network Communication",
    issuer: "Networking Core",
    category: "Systems",
    link: "https://www.coursera.org/learn/fundamentals-network-communications",
  },
];

export const notes = [
  {
    slug: "learning-from-medical-images",
    href: "/notes/learning-from-medical-images",
    category: "MEDICAL AI",
    title: "Learning from Medical Images: From DICOM to Deep Activations",
    description:
      "A deep-dive into radiographic image normalization, artifact handling, data augmentation for scarce datasets, and evaluating sensitivity vs. specificity in clinical AI.",
    status: "READ ARTICLE",
    readTime: "7 MIN READ",
    date: "MARCH 2025",
  },
  {
    slug: "reliable-data-wrangling-pipelines",
    href: "/notes/reliable-data-wrangling-pipelines",
    category: "DATA ANALYSIS",
    title: "Building Reliable Data Wrangling Pipelines That Don't Silently Fail",
    description:
      "A working guide on handling missing data, detecting silent schema drift, and structuring reproducible feature engineering with Pandas and NumPy.",
    status: "READ ARTICLE",
    readTime: "6 MIN READ",
    date: "FEBRUARY 2025",
  },
  {
    slug: "computational-genomics-sequence-alignment",
    href: "/notes/computational-genomics-sequence-alignment",
    category: "BIOINFORMATICS",
    title: "Computational Approaches to Genomic Sequence Alignment",
    description:
      "Demystifying Smith-Waterman, BLAST heuristics, and using Biopython to parse high-throughput biological data without running out of memory.",
    status: "READ ARTICLE",
    readTime: "8 MIN READ",
    date: "JANUARY 2025",
  },
];

export const impactMetrics = [
  { value: "97%", label: "ACCURACY REPORTED", note: "On DiagnoLink Chest Disease AI" },
  { value: "10K+", label: "RECORDS WRANGLED", note: "Cleaned & analyzed with Python & SQL" },
  { value: "10+", label: "SPECIALIZED CERTS", note: "In Computer Vision, ML & Optimization" },
  { value: "4 YRS", label: "AI & BIOINFORMATICS", note: "At Delta University for Science & Tech" },
];

export const marqueeItems = [
  "PYTHON",
  "TENSORFLOW",
  "PYTORCH",
  "OPENCV",
  "DEEP LEARNING",
  "MEDICAL AI",
  "BIOINFORMATICS",
  "SQL",
  "POWER BI",
  "TABLEAU",
  "PANDAS",
  "NUMPY",
  "SCIKIT-LEARN",
  "BLAST",
  "BIOPYTHON",
  "CHEST X-RAY DIAGNOSIS",
  "EXPLORATORY DATA ANALYSIS",
  "GENOMIC PIPELINES",
];
