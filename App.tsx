
import React, { useState, useEffect, Suspense, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Cpu, Globe, Rocket, ChevronDown, Menu, X } from 'lucide-react';
import Scene3D from './components/Scene3D';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    staggerChildren: 0.1,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-dark overflow-x-hidden">
      {/* 3D Background - Persistent */}
      <div className="fixed inset-0 z-0 opacity-60">
        <Suspense fallback={<div className="w-full h-full bg-dark flex items-center justify-center">Loading 3D Visuals...</div>}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-glow"
        >
          <span className="text-primary">FLASH</span> <span className="text-white">RIYA</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          aria-label="Toggle Menu"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <main className="relative z-10">
        {/* Hero Section - Optimized with H1 for SEO */}
        <section id="home" className="h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Expert Web Developer Bangladesh</h2>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight">
              I AM <span className="text-glow">FLASH RIYA</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Leading the digital frontier as a <span className="text-primary">Creative 3D Developer</span>. Known professionally as <strong>Riya</strong>, I build high-animation, high-impact web experiences that define the future of coding.
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <button className="px-8 py-4 bg-primary text-dark font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                Explore Riya's Work
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                Contact Flash Riya
              </button>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10"
          >
            <ChevronDown className="text-primary" size={32} />
          </motion.div>
        </section>

        {/* About Section - Name variation SEO */}
        <section id="about" className="min-h-screen py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://picsum.photos/seed/riya/800/1000" 
                alt="Riya - Professional Developer in Bangladesh" 
                title="Flash Riya Developer Profile"
                className="relative rounded-2xl w-full object-cover h-[500px] border border-white/10"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">About <span className="text-primary">Flash Riya</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                As a leading <strong>Riya Developer</strong> based in Bangladesh, I specialize in the intersection of design and technology. <strong>Riya Flash</strong> is synonymous with quality, bringing a unique 3D perspective to every project. Whether you call me <strong>Flash Riya</strong> or just <strong>Riya</strong>, I am dedicated to delivering ultra-SEO optimized, high-performance web solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="glass p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500">Successful Projects</div>
                </div>
                <div className="glass p-6 rounded-xl">
                  <div className="text-3xl font-bold text-secondary">3+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500">Years of Riya Tech</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Keywords SEO */}
        <section id="skills" className="py-24 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto text-center space-y-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Riya's Tech <span className="text-primary">Skills</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Code />, label: 'Frontend Development', tech: 'React, Next.js, Three.js' },
                { icon: <Cpu />, label: 'Backend Engineering', tech: 'Node.js, MongoDB, Go' },
                { icon: <Globe />, label: 'Web Deployment', tech: 'AWS, Vercel, Docker' },
                { icon: <Rocket />, label: 'Ultra Performance', tech: 'WebGL, Framer Motion, GSAP' }
              ].map((skill, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="glass p-8 rounded-2xl border border-white/5 space-y-4"
                >
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg text-primary mx-auto">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.label}</h3>
                  <p className="text-gray-500 text-sm">{skill.tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Riya's <br/><span className="text-primary">Masterpieces</span>
            </h2>
            <div className="hidden md:block text-gray-500 text-sm uppercase tracking-widest">Flash Riya Official Projects</div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-3xl bg-dark border border-white/5 h-[400px]"
              >
                <img 
                  src={`https://picsum.photos/seed/project${i}/800/600`} 
                  alt={`Web Development Project by Flash Riya - ${i}`}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent p-10 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-2">Riya Design Studio {i}</h3>
                  <p className="text-gray-400 mb-6 max-w-sm">Premium 3D visualization and responsive web design by <strong>Developer Riya</strong>.</p>
                  <div className="flex gap-4">
                    <button aria-label="Github Repo" className="p-3 glass rounded-full hover:text-primary"><Github size={20}/></button>
                    <button aria-label="Live Demo" className="p-3 glass rounded-full hover:text-primary"><ExternalLink size={20}/></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
          <div className="glass p-10 md:p-16 rounded-[40px] border border-white/10 text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-white">Hire <span className="text-primary">Riya BD</span></h2>
            <p className="text-gray-400 text-lg">
              Ready to take your business to the next level? Contact <strong>Flash Riya</strong> for a high-performance, 3D animated website that ranks top on Google.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:contact@flashriya.dev" className="flex items-center gap-3 px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-primary transition-colors">
                <Mail size={20} /> Email Flash Riya
              </a>
              <div className="flex gap-4">
                <a href="#" aria-label="Riya on Github" className="p-4 glass rounded-full hover:text-primary transition-colors"><Github /></a>
                <a href="#" aria-label="Riya on LinkedIn" className="p-4 glass rounded-full hover:text-primary transition-colors"><Linkedin /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Final SEO Footer */}
        <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} FLASH RIYA | RIYA DEVELOPER | BANGLADESH</p>
          <div className="mt-2 text-[10px] text-gray-600 space-x-4">
             <span>Riya Official Portfolio</span>
             <span>FlashRiya Tech</span>
             <span>Riya 3D Dev</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
