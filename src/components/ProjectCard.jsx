import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code2, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my,[-0.5,0.5],[8,-8]),{stiffness:300,damping:30});
  const ry = useSpring(useTransform(mx,[-0.5,0.5],[-8,8]),{stiffness:300,damping:30});
  const gx = useTransform(mx,[-0.5,0.5],['0%','100%']);
  const gy = useTransform(my,[-0.5,0.5],['0%','100%']);

  return (
    <motion.div
      ref={ref}
      onMouseMove={e=>{const r=ref.current.getBoundingClientRect();mx.set((e.clientX-r.left)/r.width-0.5);my.set((e.clientY-r.top)/r.height-0.5);}}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>{mx.set(0);my.set(0);setHovered(false);}}
      style={{rotateX:rx,rotateY:ry,transformStyle:'preserve-3d',perspective:900}}
      className="relative group h-full"
    >
      {/* Glow border */}
      <motion.div className="absolute -inset-px rounded-2xl pointer-events-none"
        animate={{opacity: hovered ? 1 : 0}} transition={{duration:0.3}}
        style={{background:'linear-gradient(135deg,rgba(124,58,237,0.6),rgba(6,182,212,0.5),rgba(244,114,182,0.5))',filter:'blur(1px)'}}/>

      {/* Spotlight */}
      <motion.div className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        animate={{opacity: hovered ? 1 : 0}} transition={{duration:0.2}}
        style={{background:`radial-gradient(circle at ${gx} ${gy}, rgba(139,92,246,0.1) 0%, transparent 60%)`}}/>

      {/* Card */}
      <div className={`relative holo-card rounded-2xl p-6 h-full flex flex-col depth-shadow overflow-hidden ${isDark ? '' : 'text-slate-900'}`}>
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(139,92,246,0.5),transparent)'}}/>
        {/* Corner brackets */}
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-primary-500/20 rounded-tr-lg"/>
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-cyan-500/20 rounded-bl-lg"/>

        {/* Header */}
        <div style={{transform:'translateZ(20px)'}} className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600/20 to-cyan-600/20 border border-primary-500/20 flex items-center justify-center">
              <Code2 size={16} className="text-primary-400"/>
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className={`project-action-btn w-7 h-7 rounded-lg ${isDark ? 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/40' : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-primary-500/40'} flex items-center justify-center transition-all`}>
                <Github size={12}/>
              </a>
              {project.link && project.link !== "#" && project.link !== project.github && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className={`project-action-btn w-7 h-7 rounded-lg ${isDark ? 'bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40' : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-500/40'} flex items-center justify-center transition-all`}>
                  <ExternalLink size={12}/>
                </a>
              )}
            </div>
          </div>

          <h3 className={`card-title text-base font-bold mb-2 font-space leading-tight transition-colors duration-300 ${isDark ? 'text-white group-hover:text-primary-300' : 'text-slate-900'}`}>
            {project.title}
          </h3>
          <p className={`card-body text-xs leading-relaxed line-clamp-4 mb-4 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div style={{transform:'translateZ(10px)'}}>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map(tag=>(
              <span key={tag} className={`px-2 py-0.5 text-xs font-semibold rounded-full ${isDark ? 'bg-primary-500/10 border border-primary-500/20 text-primary-300' : 'bg-slate-100 border border-slate-200 text-slate-700'}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className={`flex items-center justify-between pt-3 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              <Github size={12}/> Source
            </a>
            {project.link && project.link !== "#" && project.link !== project.github && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${isDark ? 'text-gray-500 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>
                <Eye size={12}/> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
