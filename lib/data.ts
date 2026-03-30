export const siteConfig = {
  name: "Brandon Granillo",
  title: "Computer Systems Engineer",
  email: "bjgranil@asu.edu",
  github: "https://github.com/Bgranillo101",
  linkedin: "https://www.linkedin.com/in/bgranillo/",
  resume: "/resume.pdf",
};

export const heroData = {
  eyebrow: "Computer Systems Engineering  ·  ASU  ·  Tempe, AZ",
  tagline:
    "Designing resilient, high-reliability systems from the logic gate up.\nEmbedded firmware. Digital design. Systems architecture.",
  profileCard: {
    role: "Computer Systems Engineering Student",
    university: "ASU '28",
    gpa: "3.96",
    projects: "7+",
    languages: "C/C++, Java, Python",
    focus: "Embedded · Systems",
    status: "Open to Opportunities",
  },
};

export const aboutData = {
  bio: [
    "Computer Systems Engineering student at Arizona State University with hands-on experience applying the full Systems Engineering lifecycle to real-world, hardware-focused projects. I am driven by designing resilient, high-reliability systems that operate under technical, financial, and stakeholder constraints.",
    "Currently, I serve as the Lead Systems Engineer and Finance Chair for the Kenya Solar project (EPICS at ASU), where I lead the end-to-end development of a renewable energy system for the Naki community and GUU Secondary School in Kenya. My work spans requirements analysis, system architecture, trade studies, and the integration and verification of power generation and storage subsystems, alongside managing project budgets and cost-driven design decisions.",
    "I thrive at the intersection of technical execution and systems leadership — bridging cross-functional engineering teams and external stakeholders to deliver practical, sustainable infrastructure. I am actively seeking internship or entry-level opportunities in systems engineering or embedded systems where I can contribute to real products and grow into a high-impact engineering role.",
  ],
  stats: [
    { value: "3.96", label: "GPA" },
    { value: "7+", label: "Projects" },
    { value: "3", label: "Work Experiences" },
  ],
};

export const educationData = {
  school: "Arizona State University",
  degree: "B.S. Computer Systems Engineering",
  expected: "Aug 2024 — May 2028",
  location: "Tempe, AZ",
  gpa: "3.96",
  coursework: [
    "Computer Organization & Assembly Language Programming",
    "Digital Design Fundamentals",
    "Programming for Computer Engineering",
    "Object-Oriented Programming & Data Structures",
  ],
};

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  type?: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Lead Systems Engineer & Finance Chair",
    company: "EPICS at ASU — Kenya Solar",
    location: "Tempe, AZ",
    date: "Aug 2025 — Present",
    type: "Hybrid",
    current: true,
    bullets: [
      "Oversee the full-lifecycle systems engineering and financial management for a multi-phase solar energy deployment serving GUU Secondary School and the Naki community in Kenya",
      "Lead the end-to-end Systems Engineering lifecycle for a large-scale renewable energy solution, translating complex community needs into formal Requirements Analysis and technical specifications",
      "Design and maintain System Architecture, ensuring seamless Integration & Verification of power generation, battery storage, and distribution subsystems to meet rigorous performance standards",
      "Execute technical Trade Studies to evaluate hardware components and vendor options, optimizing for system reliability, cost-efficiency, and long-term maintainability in a remote environment",
      "Facilitate cross-functional collaboration across specialized engineering sub-teams and faculty advisors, serving as the primary technical point of contact for stakeholder engagement",
      "Manage project and risk management protocols, identifying potential failure modes in international logistics and on-site deployment to ensure project continuity",
      "Direct all budget management and fiscal operations, including cost tracking, formal budget submissions, and resource allocation for a high-cap-ex international development project",
    ],
    tags: [
      "Systems Engineering Lifecycle",
      "Requirements Analysis",
      "System Architecture",
      "Trade Studies",
      "Budget Management",
      "Risk Management",
      "Stakeholder Engagement",
    ],
  },
  {
    role: "Structural Engineering Intern",
    company: "Jason Pirtle Structural Engineering LLC",
    location: "Jackson, TN",
    date: "Feb — May 2024",
    type: "On-site",
    bullets: [
      "Trained in Revit 2024 for drafting and modeling commercial building systems",
      "Independently completed structural layouts and revisions based on previous projects",
      "Gained practical knowledge of beams, columns, foundations, and load-bearing elements",
      "Applied local codes and zoning regulations to ensure design compliance",
    ],
    tags: ["Revit 2024", "Structural Design", "CAD", "Building Codes"],
  },
  {
    role: "Retail Salesperson",
    company: "DICK'S Sporting Goods",
    location: "Jackson, TN",
    date: "Jun 2022 — May 2024",
    type: "On-site",
    bullets: [
      "Delivered customer-focused service by recommending footwear for various needs",
      "Maintained organized displays aligned with promotional strategies",
      "Handled inventory restocking, shipment processing, and loss prevention",
    ],
    tags: ["Customer Service", "Inventory Management", "Retail Operations"],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  stack: string[];
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Synchronous Traffic Light FSM Controller",
    description:
      "Designed a synchronous traffic light controller using Digital.jar from first principles. Engineered 6-state and 7-state FSM architectures using D flip-flops and combinational logic. Derived minimized logic equations using Karnaugh maps. Conducted clock-cycle-level simulation and timing analysis. Incorporated safety-critical logic to prevent unsafe state transitions. Delivered a recorded technical walkthrough explaining full system behavior.",
    tags: ["Digital Logic", "FSMs", "Safety-Critical"],
    stack: [
      "Digital Logic",
      "D Flip-Flops",
      "Karnaugh Maps",
      "Timing Analysis",
      "State Encoding",
      "Safety Validation",
    ],
    github: "https://github.com/Bgranillo101/traffic-light-microcontroller",
    featured: true,
  },
  {
    title: "PGH Risk & Safety — Workplace Safety Platform",
    description:
      "Built a full end-to-end safety management platform for a real-world client. Designed and implemented RESTful APIs with complete CRUD functionality. Implemented JWT-based authentication and role-based access control. Developed a responsive, accessible frontend dashboard (WCAG 2.1 compliant). Integrated secure file uploads, rate limiting, password hashing, and input validation.",
    tags: ["Full-Stack", "Security", "Web App"],
    stack: ["Node.js", "Express", "JWT Auth", "REST API", "SQLite", "WCAG 2.1"],
    github: "https://github.com/Bgranillo101/risk-safety-app",
  },
  {
    title: "Arduino Progressive LED Control System",
    description:
      "Designed a non-blocking embedded firmware architecture using millis() for real-time responsiveness. Implemented finite state machines (FSMs) to control multiple LED channels with deterministic behavior. Added PWM-based brightness control and input-driven runtime behavior. Integrated conditional serial debugging via preprocessor macros with zero performance impact. Developed through incremental, production-style iterations with professional documentation.",
    tags: ["Embedded", "Firmware", "C/C++"],
    stack: ["C/C++", "ATmega328P", "FSM", "PWM", "Serial Comms", "Cooperative Scheduling"],
    github: "https://github.com/Bgranillo101/arduino-led-blink",
  },
  {
    title: "Project SPYN — Autonomous Maze-Navigating Robot",
    description:
      "Led development of an autonomous navigation system for a maze-solving robot. Programmed sensor-driven logic and fail-safe behavior in MATLAB. Implemented rerouting and safety-focused decision logic. Coordinated team milestones and deliverables as Project Manager.",
    tags: ["Robotics", "Project Lead"],
    stack: ["MATLAB", "Sensor Fusion", "Navigation Logic", "Embedded Systems"],
  },
  {
    title: "3D Printing Design & Fabrication",
    description:
      "Designed a functional CAD component for additive manufacturing. Produced and validated a final 3D-printed part for dimensional accuracy and fit. Iterated designs based on fabrication constraints and print results.",
    tags: ["CAD", "Rapid Prototyping"],
    stack: ["CAD Modeling", "3D Printing", "Design Iteration"],
  },
  {
    title: "Laser Cutter Manufacturing Project",
    description:
      "Created vector-based design files for laser cutting. Fabricated physical components accounting for material properties and kerf. Applied lab safety procedures and validated final output against design specs.",
    tags: ["Digital Fabrication", "Manufacturing"],
    stack: ["Vector Design", "Laser Cutting", "Material Properties"],
    github: "https://github.com/Bgranillo101/manufacturing-projects",
  },
];

export const programmingLanguages = [
  "C",
  "C++",
  "Python",
  "Java",
  "MIPS Assembly",
  "Verilog RTL",
  "MATLAB",
  "Bash",
  "JavaScript",
  "SQL",
];

export const technicalSkills = [
  // Embedded Systems
  "Arduino / ATmega328P",
  "FSM Design",
  "Cooperative Scheduling",
  "PWM Control",
  "UART / Serial",
  "Hardware Debugging",
  "Embedded Systems",
  // Digital Design
  "Synchronous Sequential Logic",
  "Moore / Mealy FSMs",
  "D Flip-Flops",
  "Karnaugh Maps",
  "Timing & Propagation Analysis",
  "Safety-Critical Design",
  "Digital Circuit Design",
  "Computer Organization",
  // Software & Web
  "Node.js / Express",
  "REST APIs",
  "JWT Authentication",
  "SQLite",
  "Git / GitHub",
  "Object-Oriented Programming",
  // Data & Analysis
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Data Analysis",
  // Tools
  "Quartus Prime Lite",
  "ModelSim",
  "Revit 2024",
  "MATLAB Simulink",
  "Prompt Engineering",
  "CAD Modeling",
];

export const classSchedule = [
  { code: "CSE 220", name: "Programming for Computer Engr", instructor: "Malpe" },
  { code: "CSE 230", name: "Computer Org/Assemb Lang Prog", instructor: "Indela" },
  { code: "FSE 404", name: "EPICS Gold: EPICS in Action", instructor: "Minutello" },
  { code: "IEE 380", name: "Prob & Stats Engr Prob Solving", instructor: "Chattin" },
  { code: "PHY 131", name: "Univ Physics II: Elctrc/Magnet", instructor: "Jacobs" },
  { code: "PHY 132", name: "University Physics Lab II", instructor: "Reaves" },
  { code: "NLM 160", name: "Vol Action & Community Ldrshp", instructor: "Henry, Kotleba" },
];

export const activities = [
  { name: "Swimming", icon: "waves" as const },
  { name: "Basketball", icon: "circle" as const },
  { name: "Hiking", icon: "mountain" as const },
  { name: "Weight Lifting", icon: "dumbbell" as const },
];
