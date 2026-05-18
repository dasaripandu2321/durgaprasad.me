import React from 'react';
import { Github, ExternalLink, Code2, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GITHUB_USERNAME } from '../constants';

const ProjectCard = ({ project }) => {
  // Hide the GitHub Pages repo card if it slips through filtering
  if (!project) return null;
  const title = String(project.title || '').toLowerCase();
  const src = String(project.github || project.link || '').toLowerCase();
  if (title.includes(`${GITHUB_USERNAME}.github.io`) || src.includes(`${GITHUB_USERNAME}.github.io`)) return null;

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative group h-full">
      <div className={`relative rounded-2xl p-6 h-full flex flex-col overflow-hidden ${isDark ? 'bg-slate-900 text-slate-100 border border-white/10' : 'bg-white text-slate-900 border border-slate-200'} shadow-lg`}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)' }} />
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-primary-500/20 rounded-tr-lg" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-cyan-500/20 rounded-bl-lg" />

        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600/20 to-cyan-600/20 border border-primary-500/20 flex items-center justify-center">
              <Code2 size={16} className="text-primary-400" />
            </div>
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-7 h-7 rounded-lg ${isDark ? 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/40' : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-primary-500/40'} flex items-center justify-center transition-all`}
              >
                <Github size={12} />
              </a>
              {project.link && project.link !== '#' && project.link !== project.github && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-7 h-7 rounded-lg ${isDark ? 'bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40' : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-500/40'} flex items-center justify-center transition-all`}
                >
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>

          <h3 className={`card-title text-base font-bold mb-2 font-space leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {project.title}
          </h3>
          <p className={`card-body text-xs leading-relaxed line-clamp-4 mb-4 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 text-xs font-semibold rounded-full ${isDark ? 'bg-primary-500/10 border border-primary-500/20 text-primary-300' : 'bg-slate-100 border border-slate-200 text-slate-700'}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className={`flex items-center justify-between pt-3 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              <Github size={12} /> Source
            </a>
            {project.link && project.link !== '#' && project.link !== project.github && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>
                <Eye size={12} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
