export const NAV_LINKS = [
  { id: 'home', title: 'Home' },
  { id: 'projects', title: 'Projects' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: "Let's Connect" },
];

export const HERO_CONTENT = {
  title: "D Venkata Durga Prasad",
  subtitle: "B.Tech CSE (Data Science) | Full-Stack & ML Developer",
  description: "I am a passionate Data Science student and AI Web Developer with a strong interest in solving real-world problems using data and intelligent systems. I enjoy transforming raw data into meaningful insights and building smart applications that enhance user experiences.",
};

export const GITHUB_USERNAME = "dasaripandu2321"; // User's GitHub username

export const SKILLS = [
  { category: "Languages", items: ["C++", "Java", "Python", "JavaScript", "Bootstrap"] },
  { category: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend & DB", items: ["Node.js", "Express", "REST API", "MySQL", "MongoDB", "SQL"] },
  { category: "AI & Data Science", items: ["Machine Learning", "NLP", "TF-IDF", "Power BI", "Apache Hadoop"] },
  { category: "Tools & Deployment", items: ["Git", "GitHub", "Docker", "Jupyter Notebook", "Render", "Vercel"] }
];

export const EXPERIENCE = [
  {
    year: "08/2025 – 11/2025",
    role: "Data Science Intern",
    company: "Corizo, Bengaluru",
    description: "Completed a Data Science internship focusing on data analysis, machine learning concepts, and practical data-driven problem solving."
  },
  {
    year: "02/2026 – 03/2026",
    role: "Google Advanced Data Analytics",
    company: "Certification",
    description: "Covered translating data into meaningful insights, applying statistical techniques, and performing regression analysis."
  },
  {
    year: "08/2023 – 03/2026",
    role: "B.Tech CSE (Data Science)",
    company: "Kalasalingam Academy of Research and Education, Krishnan Kovil",
    description: "CGPA: 7.27. Core focus on Data Science, Artificial Intelligence, Machine Learning, and Software Engineering."
  },
  {
    year: "2021 – 2023",
    role: "Intermediate (MPC)",
    company: "Sarada Educational Institutions, Vijayawada",
    description: "Marks obtained: 869/1000 (86.9%)."
  }
];

// Transform EXPERIENCE data for RadialOrbitalTimeline component
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export const TIMELINE_DATA = EXPERIENCE.map((exp, index) => {
  const getIcon = (role) => {
    if (role.toLowerCase().includes('intern')) return Briefcase;
    if (role.toLowerCase().includes('google') || role.toLowerCase().includes('cert')) return Award;
    return GraduationCap;
  };

  const getStatus = (role, year) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    if (role.toLowerCase().includes('b.tech') && year.includes('2026')) {
      return currentYear <= 2026 ? "in-progress" : "completed";
    }
    if (role.toLowerCase().includes('intern') && year.includes('2025')) {
      return currentYear > 2025 || (currentYear === 2025 && currentMonth > 11) ? "completed" : "in-progress";
    }
    if (role.toLowerCase().includes('google') && year.includes('2026')) {
      return currentYear > 2026 || (currentYear === 2026 && currentMonth >= 3) ? "completed" : "pending";
    }
    return "completed";
  };

  const getEnergy = (role) => {
    if (role.toLowerCase().includes('b.tech')) return 85;
    if (role.toLowerCase().includes('intern')) return 75;
    if (role.toLowerCase().includes('google')) return 90;
    return 70;
  };

  const getRelatedIds = (index) => {
    // Create connections between related experiences
    const connections = [];
    if (index === 0) connections.push(2); // Intern -> B.Tech
    if (index === 1) connections.push(2); // Google Cert -> B.Tech
    if (index === 2) connections.push(0, 1); // B.Tech -> Intern, Google Cert
    if (index === 3) connections.push(2); // Intermediate -> B.Tech
    return connections;
  };

  return {
    id: index + 1,
    title: exp.role,
    date: exp.year,
    content: exp.description,
    category: exp.role.toLowerCase().includes('intern') ? 'Experience' :
              exp.role.toLowerCase().includes('cert') ? 'Certification' : 'Education',
    icon: getIcon(exp.role),
    relatedIds: getRelatedIds(index),
    status: getStatus(exp.role, exp.year),
    energy: getEnergy(exp.role)
  };
});

export const SOCIAL_LINKS = {
  github: "https://github.com/dasaripandu2321",
  linkedin: "https://www.linkedin.com/in/dasari-venkata-durga-prasad-694ba7289",
  email: "mailto:dasaripandu1979@gmail.com"
};

export const RESUME_URL = "/resume.pdf";

// Custom descriptions for your projects — keyed by repo name (lowercase)
export const PROJECT_DESCRIPTIONS = {
  "crop-companion": "Built an AI-powered crop recommendation system using machine learning. Takes soil nutrients (N, P, K), temperature, humidity, pH, and rainfall as input to suggest the most suitable crop using a trained classification model.",
  "fake-news-detector": "Developed a machine learning model to classify news articles as real or fake using Natural Language Processing. Applied TF-IDF vectorization and trained a Passive Aggressive Classifier on a labeled news dataset.",
  "darsanam-tkts": "Full-stack temple ticket booking web app for Darshanam. Features user authentication, seat selection, booking management, and payment flow. Built with React, Node.js, Express, and MongoDB.",
  "bvr-transport": "Transport management web application for BVR Transport. Includes route management, vehicle tracking, and booking features. Built with React frontend and Node.js backend deployed on Vercel.",
  "aura-fit": "A comprehensive fitness application designed to track workouts, monitor health metrics, and guide users toward their fitness goals. Features a dynamic UI and personalized tracking capabilities.",
};
