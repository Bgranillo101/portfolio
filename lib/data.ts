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
    "Designing systems from the logic gate up.\nEmbedded firmware. Digital design. Systems architecture.",
  profileCard: {
    role: "Systems Engineer",
    university: "ASU '28",
    gpa: "3.96",
    projects: "5+",
    languages: "C/C++, Java, Python",
    focus: "Embedded · Digital",
    status: "Open to Opportunities",
  },
};

export const aboutData = {
  bio: [
    "I'm a Computer Systems Engineering student at ASU with a deep interest in the space where hardware meets software. Whether I'm designing FSM-based controllers in Verilog, writing non-blocking embedded firmware in C/C++, or architecting a full-stack web platform — I'm driven by systems that work reliably, efficiently, and elegantly.",
    "Currently leading systems engineering for a solar energy project through EPICS at ASU, where I translate real stakeholder needs into technical architecture. I hold a 3.96 GPA and I'm actively seeking internship and co-op opportunities in embedded systems and computer engineering.",
  ],
  stats: [
    { value: "3.96", label: "GPA" },
    { value: "5+", label: "Projects" },
    { value: "2", label: "Work Experiences" },
  ],
};

export const educationData = {
  school: "Arizona State University",
  degree: "B.S. Computer Systems Engineering",
  expected: "Expected Spring 2028",
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
  current?: boolean;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Lead Systems Engineer & Finance Chair",
    company: "EPICS at ASU",
    location: "Tempe, AZ",
    date: "Aug 2025 — Present",
    current: true,
    bullets: [
      "Applying IEEE systems engineering lifecycle standards to design an off-grid solar energy system — from needs analysis through subsystem verification — for a school and rural community",
      "Authored formal system requirements documents (SRS) and technical specifications derived from stakeholder interviews and operational constraints",
      "Architected system-level integration of solar PV generation, battery storage (charge/discharge cycles), and AC/DC distribution subsystems with defined interface control",
      "Own budget management and cost-performance tradeoff analysis for a multi-thousand dollar capital project across a multidisciplinary team",
    ],
    tags: [
      "IEEE Systems Lifecycle",
      "Requirements Engineering",
      "Power Systems",
      "Subsystem Integration",
    ],
  },
  {
    role: "Structural Engineering Intern",
    company: "Jason Pirtle Structural Engineering LLC",
    location: "Jackson, TN",
    date: "Feb — May 2024",
    bullets: [
      "Produced structural layouts and revisions for commercial buildings using Revit 2024",
      "Applied load paths, beam and column sizing, and foundation principles to real projects",
      "Verified structural designs complied with local building codes and zoning regulations",
      "Executed independent design and drafting tasks by interpreting prior project documentation",
    ],
    tags: ["Revit 2024", "Structural Design", "CAD", "Building Codes"],
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
      "Designed a clocked sequential traffic light controller entirely from first principles — no HDL libraries, no shortcuts. Engineered 6-state and 7-state Moore FSMs using D flip-flops with one-hot and binary state encoding strategies, then derived and minimized all combinational output logic via Karnaugh maps. Implemented fail-safe invalid-state recovery logic to guarantee the controller never enters a hazardous undefined state.",
    tags: ["Digital Logic", "RTL Design", "Safety-Critical"],
    stack: [
      "Verilog RTL",
      "Moore FSM",
      "D Flip-Flops",
      "Karnaugh Maps",
      "Clocked Sequential Logic",
      "State Encoding",
    ],
    github: "https://github.com/Bgranillo101/traffic-light-microcontroller",
    featured: true,
  },
  {
    title: "Arduino Progressive LED Control System",
    description:
      "Interrupt-free cooperative firmware on ATmega328P (16 MHz) using millis()-based scheduling to achieve deterministic multi-channel timing without blocking the execution loop. Implemented FSM-driven LED sequencing with PWM brightness control and compile-time debug instrumentation via preprocessor macros — zero runtime overhead in production builds.",
    tags: ["Embedded", "Firmware"],
    stack: ["C/C++", "ATmega328P", "FSM", "PWM", "Cooperative Scheduling"],
    github: "https://github.com/Bgranillo101/arduino-led-blink",
  },
  {
    title: "Autonomous Maze-Navigating Robot",
    description:
      "Led a team developing a sensor-driven autonomous robot with embedded navigation logic in MATLAB. Designed fault-tolerant decision algorithms for obstacle avoidance and path correction. Managed subsystem integration, milestone tracking, and cross-team coordination — delivered on schedule.",
    tags: ["Robotics", "Systems Lead"],
    stack: ["MATLAB", "Sensor Fusion", "Navigation Logic", "Fault Tolerance"],
  },
  {
    title: "Workplace Safety Management Platform",
    description:
      "Full-stack platform for incident reporting and training compliance tracking. Built a REST API with Express and JWT-based role authentication, connected to a dynamic Bootstrap 5 frontend with multi-user session handling.",
    tags: ["Full-Stack", "Web App"],
    stack: ["Node.js", "Express", "JWT Auth", "REST API", "Bootstrap 5"],
    github: "https://github.com/Bgranillo101/risk-safety-app",
  },
];

export const programmingLanguages = [
  "C",
  "C++",
  "Verilog RTL",
  "MIPS Assembly",
  "Java",
  "Python",
  "MATLAB",
  "Bash",
];

export const technicalSkills = [
  // Embedded Systems
  "Arduino / ATmega328P",
  "FSM Design",
  "Cooperative Scheduling",
  "PWM Control",
  "UART / Serial",
  "Interrupt-free Firmware",
  "Hardware Debugging",
  // Digital Design
  "Synchronous Sequential Logic",
  "Moore / Mealy FSMs",
  "D Flip-Flops",
  "Karnaugh Maps",
  "Timing & Propagation Analysis",
  "Safety-Critical Design",
  "Computer Organization",
  // Tools
  "Quartus Prime Lite",
  "ModelSim",
  "Git / GitHub",
  "Revit 2024",
  "MATLAB Simulink",
  "Node.js / Express",
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
