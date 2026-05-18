import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GITHUB_USERNAME, PROJECT_DESCRIPTIONS } from '../constants';
import ProjectCard from './ProjectCard';
import { ParticleTextEffect } from './ui/particle-text';
import { useTheme } from '../context/ThemeContext';

// Portfolio site repo — show in nav/site only, not as a featured project card
// Also exclude the GitHub Pages repo for the username (e.g. username.github.io)
const EXCLUDED_GITHUB_REPOS = new Set([
  'durgaprasad.me',
  'durgaprasad-me',
  'durgaprasad_me',
  `${GITHUB_USERNAME}.github.io`,
]);

/** Repo(s) for the Aura Fit app — pinned to the end of the project grid only. */
const isAuraFitRepoName = (name) => {
  const n = String(name).toLowerCase();
  const slug = n.replace(/_/g, '-');
  return n === 'aura_fit_app' || slug === 'aura-fit-app' || slug === 'aura-fit' || slug === 'aurafit';
};

const isAuraFitCard = (p) =>
  isAuraFitRepoName(p.title) || /aura_fit_app|aura-fit-app/i.test(p.github || '');

// Match repo name to a custom description key
const getCustomDescription = (repoName) => {
  const name = repoName.toLowerCase();
  const match = Object.keys(PROJECT_DESCRIPTIONS).find(key => name.includes(key));
  return match ? PROJECT_DESCRIPTIONS[match] : null;
};

/** Non–Aura Fit projects first; Aura Fit last (single card). */
const withAuraFitLast = (items) => {
  const aura = items.filter(isAuraFitCard);
  const rest = items.filter((p) => !isAuraFitCard(p));
  const merged = [...rest, ...aura];
  return merged.filter((p, i) => merged.findIndex((q) => q.title === p.title && q.github === p.github) === i);
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error('Failed to fetch repos');
        const data = await response.json();
        
        // Filter out forks, portfolio repo, and any repo with "code_alpha" in the name
        const filteredRepos = data
          .filter(
            (repo) =>
              !repo.fork &&
              !repo.name.toLowerCase().includes('code_alpha') &&
              !repo.name.toLowerCase().includes('codealpha') &&
              !EXCLUDED_GITHUB_REPOS.has(repo.name.toLowerCase()) &&
              !String(repo.html_url || '').toLowerCase().includes(`${GITHUB_USERNAME}.github.io`) &&
              !(repo.homepage && String(repo.homepage).toLowerCase().includes(`${GITHUB_USERNAME}.github.io`))
          )
          .map((repo) => {
            let liveLink = repo.homepage || repo.html_url;
            // Override live link for darshanam tickets booking
            if (repo.name.toLowerCase().includes("darshanam") || repo.name.toLowerCase().includes("darsanam")) {
              liveLink = "https://darsanam-tkts.vercel.app/login";
            }
            // Override live link for fake news detector
            else if (repo.name.toLowerCase().includes("fake") && repo.name.toLowerCase().includes("news")) {
              liveLink = "https://fake-news-detector-six-ashen.vercel.app/";
            }
            // Override live link for BVR Transport
            else if (repo.name.toLowerCase().includes("bvr")) {
              liveLink = "https://bvr-transport.vercel.app/";
            }
            // Override live link for Crop Companion
            else if (repo.name.toLowerCase().includes("crop") && repo.name.toLowerCase().includes("companion")) {
              liveLink = "https://crop-companion-iota.vercel.app/signin";
            }

            
            return {
              title: repo.name,
              description:
                getCustomDescription(repo.name) ||
                repo.description ||
                'No description provided for this repository.',
              tags: [repo.language].filter(Boolean),
              github: repo.html_url,
              link: liveLink,
            };
          });
        const ordered = withAuraFitLast(filteredRepos);
        if (ordered.length > 0) {
          setProjects(ordered);
        } else {
          throw new Error('No public repos found');
        }
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
        // Fallback to manual projects from constants if GitHub is disconnected or rate limited
        const keys = Object.keys(PROJECT_DESCRIPTIONS);
        const orderedKeys = [...keys.filter((k) => k !== 'aura_fit_app'), ...keys.filter((k) => k === 'aura_fit_app')];
        const manualProjects = withAuraFitLast(
          orderedKeys.map((key) => {
            let liveLink = '#';
            const lowerName = key.toLowerCase();

            if (lowerName.includes('darshanam') || lowerName.includes('darsanam')) {
              liveLink = 'https://darsanam-tkts.vercel.app/login';
            } else if (lowerName.includes('fake') && lowerName.includes('news')) {
              liveLink = 'https://fake-news-detector-six-ashen.vercel.app/';
            } else if (lowerName.includes('bvr')) {
              liveLink = 'https://bvr-transport.vercel.app/';
            } else if (lowerName.includes('crop') && lowerName.includes('companion')) {
              liveLink = 'https://crop-companion-iota.vercel.app/signin';
            }

            const title = key
              .split(/[-_]/)
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');

            return {
              title,
              description: PROJECT_DESCRIPTIONS[key],
              tags: ['React', 'JavaScript', 'Python'],
              github: `https://github.com/${GITHUB_USERNAME}/${key}`,
              link: liveLink,
            };
          })
        );
        setProjects(manualProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>What I've built</p>
          <div className="w-full max-w-2xl mx-auto mb-2">
            <ParticleTextEffect
              words={["PROJECTS", "ML MODELS", "WEB APPS", "DASHBOARDS", "AI TOOLS"]}
              height={100}
              fontSize={72}
            />
          </div>
          <h2 className={`text-2xl md:text-3xl font-space font-bold mb-4 ${isDark ? '' : 'text-[#1a1040]'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto" />
        </motion.div>

        {loading ? (
          <div className={`text-center font-space text-xl animate-pulse ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
            Loading GitHub Projects...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <div className={`text-center col-span-full ${isDark ? 'text-gray-400' : 'text-[#5a4d8a]'}`}>
                No projects found. Check your GITHUB_USERNAME in constants/index.js!
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
