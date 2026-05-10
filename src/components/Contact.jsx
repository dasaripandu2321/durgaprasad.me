import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';
import { useTheme } from '../context/ThemeContext';
import { FloatingPaths } from './ui/floating-paths';

const SOCIAL = [
  { label:'Gmail',    handle:'dasaripandu1979@gmail.com',                          href:'mailto:dasaripandu1979@gmail.com',                                    icon:Mail,    grad:['#ef4444','#f97316'], shadow:'rgba(239,68,68,0.4)' },
  { label:'GitHub',   handle:'github.com/dasaripandu2321',                         href:'https://github.com/dasaripandu2321',                                  icon:Github,  grad:['#6b7280','#9ca3af'], shadow:'rgba(156,163,175,0.3)' },
  { label:'LinkedIn', handle:'linkedin.com/in/dasari-venkata-durga-prasad',        href:'https://www.linkedin.com/in/dasari-venkata-durga-prasad-694ba7289',  icon:Linkedin,grad:['#2563eb','#3b82f6'], shadow:'rgba(59,130,246,0.4)' },
];

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const s = encodeURIComponent(`Message from ${form.name}`);
    const b = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:dasaripandu1979@gmail.com?subject=${s}&body=${b}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-dark-950/55' : 'bg-white/80'}`} />
      <div className="orb-purple absolute w-[500px] h-[500px] -bottom-40 -right-40 opacity-25"/>
      <div className="orb-cyan    absolute w-[400px] h-[400px] -top-20 -left-20 opacity-20"/>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-20 text-center">
          <motion.span initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:0.1}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-primary-500/30 text-primary-400 bg-primary-500/5 section-badge">
            <Sparkles size={12}/> Get in touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="h-px w-32 mx-auto mb-6" style={{background:'linear-gradient(90deg,transparent,#8b5cf6,transparent)'}}/>
          <p className={`section-sub max-w-lg mx-auto ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — socials (2 cols) */}
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="lg:col-span-2 space-y-4">
            <p className={`text-xs font-bold tracking-widest uppercase mb-6 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Find me on</p>

            {SOCIAL.map(({label,handle,href,icon:Icon,grad:[c1,c2],shadow},i)=>(
              <motion.a key={label} href={href} target={label!=='Gmail'?'_blank':undefined} rel="noopener noreferrer"
                initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                whileHover={{x:6,scale:1.01}} className={`flex items-center gap-4 p-4 rounded-2xl ${isDark ? 'border border-white/6 holo-card' : 'border border-slate-200 bg-white/80 shadow-sm'} group cursor-pointer`}>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{background:`linear-gradient(135deg,${c1}25,${c2}15)`,border:`1px solid ${c1}30`}}>
                  <Icon size={20} style={{color:c1}}/>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`social-label font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{label}</p>
                  <p className={`social-handle text-xs truncate mt-0.5 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>{handle}</p>
                </div>
                <ArrowUpRight size={14} className={`social-arrow transition-all flex-shrink-0 ${isDark ? 'text-gray-600 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'} group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
              </motion.a>
            ))}

            {/* Quote card */}
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.4}}
              className={`mt-6 p-5 rounded-2xl relative overflow-hidden ${isDark ? 'border border-primary-500/10 bg-primary-500/5' : 'border border-slate-200 bg-slate-50'}`}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(139,92,246,0.5),transparent)'}}/>
              <p className={`quote-text text-sm italic leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>"I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing."</p>
              <p className="quote-author text-primary-400 text-xs font-bold mt-3">— D Venkata Durga Prasad</p>
            </motion.div>
          </motion.div>

          {/* Right — form (3 cols) */}
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="lg:col-span-3">
            <div className="holo-card rounded-2xl p-8 depth-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(139,92,246,0.6),rgba(6,182,212,0.6),transparent)'}}/>
              <p className="form-label text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">Send a message</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`form-label block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Name</label>
                    <input type="text" name="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required placeholder="John Doe"
                      className="input-field w-full px-4 py-3 text-sm"/>
                  </div>
                  <div>
                    <label className={`form-label block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Email</label>
                    <input type="email" name="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required placeholder="john@example.com"
                      className="input-field w-full px-4 py-3 text-sm"/>
                  </div>
                </div>
                <div>
                  <label className={`form-label block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Message</label>
                  <textarea name="message" rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required
                    placeholder="Tell me about your project or just say hi..."
                    className="input-field w-full px-4 py-3 text-sm resize-none"/>
                </div>
                <LiquidButton type="submit" variant="primary" size="lg" className="w-full">
                  {sent ? '✓ Opening mail app...' : <><Send size={15}/>Send Message</>}
                </LiquidButton>
                <p className={`form-hint text-center text-xs ${isDark ? 'text-gray-600' : 'text-slate-500'}`}>Opens your default mail app with the message pre-filled.</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
