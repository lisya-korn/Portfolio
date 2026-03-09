import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Shield, 
  Terminal, 
  Lock, 
  Globe, 
  ChevronRight,
  Download,
  Activity,
  Database,
  Search,
  Zap,
  Instagram,
  Award,
  Users,
  Award as CertificateIcon,
  X,
  Eye
} from 'lucide-react';

const PROJECTS = [
  {
    title: "Research & Experimentation Logs",
    description: "This section documents cybersecurity lab experiments and research covering network security, intrusion detection, and penetration testing, including SIEM monitoring with Wazuh, traffic analysis using Wireshark, reconnaissance with Nmap, and ML-based intrusion detection with scikit-learn.",
    tech: ["Wazuh", "Honeypot", "Wireshark", "Nmap", "Linux"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    link: "https://gillerz2256gin.blogspot.com/"
  },
  {
    title: "Network Attack Simulation and Detection Lab",
    description: "A cybersecurity lab environment designed to simulate common network attacks such as scanning, brute-force, and DDoS. Security events were monitored and analyzed using Wazuh with network traffic inspection via Wireshark.",
    tech: ["Nmap", "Bruteforce", "DDoS", "SIEM", "Honeypot"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/1qADhhYhrfrwOgenI-Gcmg1elrvuChsTN/view?usp=sharing"
  },
  {
    title: "NETStare – Network Security Reconnaissance Tool",
    description: "A Python-based network security tool that integrates network scanning, port scanning, DNS lookup, and WiFi scanning to analyze devices and potential vulnerabilities within a local network.",
    tech: ["Python", "Flask", "Network Scanner", "Port Scanner", "DNS Lookup"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/1-XZYDsyNV5-IJw48f3jrkOIyYClZ0r6q/view?usp=sharing"
  }
];

const SKILLS = [
  { category: "Security Operations", items: ["SIEM monitoring & log analysis (Wazuh)", "Network Scanning & Enumeration (Nmap)", "Web application security testing (Burp Suite)", "Basic DDoS Simulation & traffic analysis"], icon: <Shield className="w-5 h-5" /> },
  { category: "Network Security", items: ["Firewalls configuration (UFW/iptables)", "Nmap", "Wireshark", "TCP/IP & OSI model analysis", "SSH configuration"], icon: <Zap className="w-5 h-5" /> },
  { category: "Penetration Testing", items: ["Metasploit", "Burp Suite", "Nmap", "Kali Linux", "DDos"], icon: <Search className="w-5 h-5" /> },
  { category: "Compliance & Risk", items: ["Vulnerability Severity Analysis", "Basic Risk Assessment"], icon: <Lock className="w-5 h-5" /> }
];

const CERTIFICATIONS = [
  {
    title: "Ethical Hacker For Dummies (Micro Skill)",
    issuer: "KOMDIGI - Digital Talent Scholarship",
    date: "2026",
    description: "Pelatihan intensif mengenai dasar-dasar Ethical Hacking dan Pengantar Keamanan Siber yang diselenggarakan oleh Pusat Pengembangan Literasi Digital.",
    certificateImage: "https://picsum.photos/seed/ethical-hacker/1200/800"
  },
  {
    title: "Certified Secure Computer User (CSCU) v3",
    issuer: "EC-Council (Synergy Academy)",
    date: "2024",
    description: "Sertifikasi internasional yang memvalidasi pengetahuan dan keterampilan dalam praktik komputasi aman, perlindungan data, dan keamanan jaringan.",
    certificateImage: "https://picsum.photos/seed/cscu-cert/1200/800"
  }
];

const ORGANIZATIONS = [
  {
    role: "Koordinator Bidang Sumber Daya Manusia",
    org: "HIMAFORKA UAJY",
    period: "2024 - 2025",
    description: "Memimpin strategi pengembangan anggota, mengelola proses regenerasi organisasi, dan meningkatkan kualitas kolaborasi antar anggota himpunan.",
    certificateImage: "https://picsum.photos/seed/himaforka-2025/1200/800"
  },
  {
    role: "Anggota Bidang Sumber Daya Manusia",
    org: "HIMAFORKA UAJY",
    period: "2023 - 2024",
    description: "Berkontribusi dalam perancangan program kerja internal dan mendukung inisiatif pengembangan potensi mahasiswa Informatika.",
    certificateImage: "https://picsum.photos/seed/himaforka-2024/1200/800"
  },
  {
    role: "Laboratory Assistant",
    org: "Cyber Security Lab - UAJY",
    period: "2023 - Present",
    description: "Membimbing praktikum keamanan jaringan, mengelola lingkungan SIEM (Wazuh), dan membantu mahasiswa dalam memahami konsep pertahanan siber."
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modal for Certificate */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-bg/90 backdrop-blur-xl"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full glass rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedCertificate} 
                alt="Certificate" 
                className="w-full h-auto object-contain max-h-[80vh]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Pattern */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-brand-bg/50 to-brand-bg pointer-events-none z-0" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
              <Shield className="text-brand-bg w-5 h-5" />
            </div>
            <span>PORTFOLIO</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {['About', 'Skills', 'Leadership', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-accent transition-colors">
                {item}
              </a>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-accent text-brand-bg px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
                Cyber Security Student
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
                Securing the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">
                  digital frontier.
                </span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                Hi, I'm Charlisya Greely, a 6th semester Informatics students 
                with practical laboratory experience in cybersecurity. I am 
                an undergraduate student from Atma Jaya Yogyakarta University.

                I have implemented SIEM monitoring using Wazuh, deployed honeypot 
                systems to observe attacker behavior, and performed network reconnaissance using Nmap. 
                For web application testing, I use Burp Suite within a Kali Linux lab environment 
                to analyze common vulnerabilities. I like to keep myself relevant by solving Capture The Flags
                on Hack The Box website.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-brand-bg rounded-xl font-bold flex items-center gap-2"
                >
                  View Projects
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
                <div className="flex items-center gap-4 px-4">
                  <a href="https://github.com/lisya-korn" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:text-brand-accent transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/charlisya-greely-6a49b4291" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:text-brand-accent transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:230712430@students.uajy.ac.id" className="p-3 rounded-xl glass hover:text-brand-accent transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <h2 className="text-4xl font-bold mb-6 italic font-serif">Security Foundations</h2>
                <p className="text-zinc-400 leading-relaxed">
                  As a 6th-semester Informatics student, I am actively building my foundation in cybersecurity. 
                  I focus on practical learning through laboratory experiments, security certifications, 
                  and hands-on tool exploration to develop a proactive defense mindset.
                </p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {SKILLS.map((skill, idx) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl glass hover:border-brand-accent/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-bg transition-colors">
                        {skill.icon}
                      </div>
                      <h3 className="font-bold text-lg">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <span key={item} className="px-3 py-1 rounded-md bg-white/5 text-zinc-400 text-sm font-mono">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Certifications Section */}
        <section id="leadership" className="py-32 px-6 bg-zinc-900/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Certifications */}
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Certifications</h2>
                </div>
                <div className="space-y-6">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl glass border-l-4 border-l-brand-accent"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{cert.title}</h3>
                        <span className="text-xs font-mono text-brand-accent">{cert.date}</span>
                      </div>
                      <p className="text-sm text-zinc-400 mb-2 font-medium">{cert.issuer}</p>
                      <p className="text-sm text-zinc-500 leading-relaxed mb-4">{cert.description}</p>
                      
                      {cert.certificateImage && (
                        <button 
                          onClick={() => setSelectedCertificate(cert.certificateImage!)}
                          className="flex items-center gap-2 text-xs font-bold text-brand-accent hover:underline"
                        >
                          <Eye className="w-4 h-4" />
                          VIEW CERTIFICATE
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Organizations */}
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Leadership & Soft Skills</h2>
                </div>
                <div className="space-y-6">
                  {ORGANIZATIONS.map((org, idx) => (
                    <motion.div
                      key={`${org.org}-${org.role}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl glass border-l-4 border-l-emerald-500 group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{org.role}</h3>
                        <span className="text-xs font-mono text-emerald-500">{org.period}</span>
                      </div>
                      <p className="text-sm text-zinc-400 mb-2 font-medium">{org.org}</p>
                      <p className="text-sm text-zinc-500 leading-relaxed mb-4">{org.description}</p>
                      
                      {org.certificateImage && (
                        <button 
                          onClick={() => setSelectedCertificate(org.certificateImage!)}
                          className="flex items-center gap-2 text-xs font-bold text-brand-accent hover:underline"
                        >
                          <Eye className="w-4 h-4" />
                          VIEW CERTIFICATE
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-5xl font-bold mb-4">Selected Works</h2>
                <p className="text-zinc-400">A collection of projects that define my journey.</p>
              </div>
              <div className="hidden md:block">
                <span className="text-sm font-mono text-zinc-500">03 PROJECTS TOTAL</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a href={project.link} className="p-3 rounded-full bg-white text-brand-bg hover:bg-brand-accent transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.link} className="p-3 rounded-full bg-white text-brand-bg hover:bg-brand-accent transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech?.map(t => (
                        <span key={t} className="text-[10px] font-bold tracking-widest uppercase text-brand-accent">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors">
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                  Let's create something <br />
                  <span className="italic font-serif">extraordinary.</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto">
                  I'm currently looking for internship opportunities and freelance projects. 
                  My inbox is always open.
                </p>
                
                <a 
                  href="mailto:230712430@students.uajy.ac.id"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-brand-bg rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all"
                >
                  <Mail className="w-6 h-6" />
                  Contact Me
                </a>

                <div className="mt-16 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex gap-8">
                    <a href="https://github.com/lisya-korn" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">GITHUB</a>
                    <a href="https://www.linkedin.com/in/charlisya-greely-6a49b4291" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">LINKEDIN</a>
                    <a href="https://www.instagram.com/chrgrl_21" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">INSTAGRAM</a>
                  </div>
                  <p className="text-sm text-zinc-600 font-mono">
                    © {new Date().getFullYear()} Everything is Possible
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Decoration */}
      <footer className="py-12 px-6 text-center border-t border-white/5">
        <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase">
          Built with React, Tailwind & Motion
        </p>
      </footer>
    </div>
  );
}
