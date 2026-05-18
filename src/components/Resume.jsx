import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Briefcase, GraduationCap, Award, Code2, FolderGit2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-primary-500/30 pb-3">
    <Icon size={20} className="text-primary-400 flex-shrink-0" />
    <h3 className="text-xl font-bold font-space text-primary-400 uppercase tracking-wider">{title}</h3>
  </div>
);

const Resume = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const buttonClasses = `inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary-500 ${isDark ? 'border border-primary-500/30 bg-primary-500/10 text-primary-200 hover:bg-primary-500/15' : 'border border-primary-500/30 bg-primary-500/8 text-primary-700 hover:bg-primary-500/15'}`;

  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-space font-bold mb-4">Resume</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-2xl"
        >
          {/* Header */}
          <div className={`text-center mb-10 border-b pb-8 ${isDark ? 'border-gray-700' : 'border-slate-200'}`}>
            <h1 className={`text-3xl md:text-4xl font-space font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              D Venkata Durga Prasad
            </h1>
            <div className={`flex flex-wrap justify-center gap-4 mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              <a href="mailto:dasaripandu1979@gmail.com" className="flex items-center gap-1 hover:text-primary-400 transition-colors">
                <Mail size={14} /> dasaripandu1979@gmail.com
              </a>
              <a href="tel:8125325189" className="flex items-center gap-1 hover:text-primary-400 transition-colors">
                <Phone size={14} /> 8125325189
              </a>
              <a href="https://linkedin.com/in/dasaripandu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary-400 transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="https://github.com/dasaripandu2321" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary-400 transition-colors">
                <Github size={14} /> GitHub
              </a>
              <span className="flex items-center gap-1">
                <MapPin size={14} /> India
              </span>
            </div>
          </div>

          {/* About Me */}
          <div id="about" className="mb-10">
            <SectionTitle icon={Code2} title="About Me" />
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
              I am D Venkata Durga Prasad, a B.Tech CSE (Data Science) student driven by AI, data, and modern web experiences. I enjoy combining machine learning, analytics, and full-stack development to solve real-world problems.
            </p>
            <p className={`leading-relaxed mt-4 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
              My work includes a Data Science internship at Corizo, Google Advanced Data Analytics certification, and hands-on projects in predictive systems, dashboards, and intelligent web applications using React, Python, and Tailwind CSS.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <SectionTitle icon={Briefcase} title="Experience & Certifications" />
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h4 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Data Science Internship</h4>
                  <p className="text-primary-400 font-medium">Corizo · Bengaluru</p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    Successfully completed a Data Science internship focusing on data analysis, machine learning concepts, and practical data-driven problem solving.
                  </p>
                </div>
                <span className={`text-sm whitespace-nowrap mt-1 md:mt-0 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>08/2025 – 11/2025</span>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h4 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Google Advanced Data Analytics</h4>
                  <p className="text-primary-400 font-medium">Certification</p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    Covered translating data into meaningful insights, applying statistical techniques, and performing regression analysis.
                  </p>
                </div>
                <span className={`text-sm whitespace-nowrap mt-1 md:mt-0 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>02/2026 – 03/2026</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <a href="#about" className={buttonClasses}>
              About Me
            </a>
          </div>

          {/* Education */}
          <div className="mb-10">
            <SectionTitle icon={GraduationCap} title="Education" />
            <div className="space-y-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h4 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>B.Tech CSE – Data Science</h4>
                  <p className="text-primary-400 font-medium">Kalasalingam Academy of Research and Education · Krishnan Kovil</p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>CGPA: 7.27</p>
                </div>
                <span className={`text-sm whitespace-nowrap mt-1 md:mt-0 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>08/2023 – 03/2026</span>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h4 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Intermediate</h4>
                  <p className="text-primary-400 font-medium">Sarada Educational Institutions · Vijayawada</p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Marks: 869/1000 (86.9%)</p>
                </div>
                <span className={`text-sm whitespace-nowrap mt-1 md:mt-0 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>2021 – 2023</span>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h4 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>SSC (Secondary Education)</h4>
                  <p className="text-primary-400 font-medium">Narayana E Techno School · Vijayawada</p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Passed</p>
                </div>
                <span className={`text-sm whitespace-nowrap mt-1 md:mt-0 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>2020</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <a href="#about" className={buttonClasses}>
              About Me
            </a>
          </div>

          {/* Skills */}
          <div className="mb-10">
            <SectionTitle icon={Award} title="Skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Languages", items: ["C++", "Java", "Python (Basic)", "JavaScript", "Bootstrap"] },
                { label: "Frontend", items: ["JavaScript", "HTML", "CSS", "React", "Bootstrap", "Tailwind CSS"] },
                { label: "Backend", items: ["REST API Development", "Node.js", "Express"] },
                { label: "Database", items: ["MySQL", "MongoDB", "SQL", "Database Design", "Data Modeling"] },
                { label: "Tools & Deployment", items: ["Git", "GitHub", "Jupyter Notebook", "Power BI", "Apache Hadoop", "Docker (Basic)", "Render", "Vercel"] },
              ].map(({ label, items }) => (
                <div key={label}>
                  <p className={`text-sm font-semibold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <span key={item} className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${isDark ? 'bg-dark-800 border border-gray-700 text-gray-300 hover:border-primary-500 hover:text-primary-400' : 'bg-slate-100 border border-slate-200 text-slate-700 hover:border-primary-500 hover:text-primary-700'}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <SectionTitle icon={FolderGit2} title="Projects" />
            <div className="space-y-5">
              {[
                {
                  name: "AI-Based Crop Recommendation System",
                  desc: "Developed a machine learning model to recommend suitable crops based on soil nutrients and environmental conditions."
                },
                {
                  name: "Data Analysis Dashboard",
                  desc: "Created an interactive dashboard to analyze business/sales data using Power BI or Tableau. Performed data cleaning, analysis, and visualization to generate meaningful insights."
                },
                {
                  name: "Battery Health Monitoring System",
                  desc: "Designed a system to monitor smartphone battery health and predict battery degradation. Analyzed battery usage data and generated insights using Python-based analytics."
                },
                {
                  name: "Fake News Detection System",
                  desc: "Developed a machine learning model to classify news articles as real or fake. Applied Natural Language Processing techniques using Python and TF-IDF vectorization."
                },
              ].map(({ name, desc }) => (
                <div key={name} className="border-l-2 border-primary-500/40 pl-4">
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{name}</h4>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
