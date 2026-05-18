import React from 'react';
import { useCustomDomain } from './hooks/useCustomDomain';
import { useTheme } from './context/ThemeContext';
import { WebGLShader } from './components/WebGLShader';
import CyberneticGridShader from './components/ui/cybernetic-grid';
import { SectionDivider } from './components/ui/gradient-tracing';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ── Error boundary ── */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: '#020208', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'monospace' }}>
          <h1 style={{ color: '#f472b6', fontSize: '1.5rem', marginBottom: '1rem' }}>⚠ Runtime Error</h1>
          <pre style={{ color: '#a78bfa', background: '#0d0d1a', padding: '1.5rem', borderRadius: '0.5rem', maxWidth: '800px', overflow: 'auto', fontSize: '0.85rem' }}>
            {this.state.error?.toString()}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useCustomDomain();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <ErrorBoundary>
      <div className={`min-h-screen overflow-x-hidden selection:bg-primary-500 selection:text-white ${isDark ? 'bg-dark-950 text-white' : 'bg-light-50 text-[#1a1040]'}`}>

        {/* Hero background — WebGL chromatic shader */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <WebGLShader />
        </div>

        {/* Content */}
        <div className="relative z-[10]">
          <Navbar />
          <main>
            <Hero />

            {/* Cybernetic grid wraps all sections after Hero */}
            <div className="relative overflow-hidden">
              {/* Cybernetic grid — absolute, only covers sections 2+ */}
              <div className="absolute inset-0 pointer-events-none z-0" style={{ opacity: isDark ? 0.45 : 0.2 }}>
                <CyberneticGridShader />
              </div>

              <SectionDivider gradientColors={["#a78bfa","#06b6d4","#f472b6"]} animationDuration={2} />
              <TechStack />
              <SectionDivider gradientColors={["#06b6d4","#a78bfa","#f472b6"]} animationDuration={2.5} />
              <Projects />
              <SectionDivider gradientColors={["#f472b6","#a78bfa","#06b6d4"]} animationDuration={3} />
              <Experience />
              <SectionDivider gradientColors={["#06b6d4","#f472b6","#a78bfa"]} animationDuration={2.8} />
              <Contact />
              <SectionDivider gradientColors={["#06b6d4","#f472b6","#a78bfa"]} animationDuration={2.8} />
            </div>
          </main>
          <Footer />
        </div>

      </div>
    </ErrorBoundary>
  );
}

export default App;
