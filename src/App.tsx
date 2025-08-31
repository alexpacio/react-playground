import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from './components/ui/button';
import { Menu, X, Cloud, Code, ArrowRight, CheckCircle, Mail, Phone, MapPin, Zap, Shield, Cpu, Database, Globe, Terminal, GitBranch, Layers, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse-slow"></div>
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-500 ease-out rounded-2xl ${
          scrolled 
            ? 'bg-slate-900/60 backdrop-blur-2xl border border-slate-700/60 shadow-2xl shadow-black/20' 
            : 'bg-slate-900/20 backdrop-blur-xl border border-slate-600/30'
        }`}>
          <div className="px-6 sm:px-8 lg:px-10">
            <div className="flex justify-between items-center py-4">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-purple-300 hover:to-blue-300 transition-all duration-300 flex items-center group">
                  <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden sm:inline">CloudTech Solutions</span>
                  <span className="sm:hidden">CloudTech</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-6 lg:space-x-8">
                <Link to="/" className="text-sm lg:text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group px-2 py-1">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
                <Link to="/about" className="text-sm lg:text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group px-2 py-1">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
                <Link to="/services" className="text-sm lg:text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group px-2 py-1">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
                <Link to="/contact" className="text-sm lg:text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group px-2 py-1">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
                <Button className="ml-4 lg:ml-6 bg-gradient-to-r from-cyan-500/90 to-purple-600/90 hover:from-cyan-400 hover:to-purple-500 text-white border border-cyan-500/20 rounded-xl px-4 py-2 text-sm font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <span className="hidden sm:inline">Get Started</span>
                  <span className="sm:hidden">Start</span>
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 animate-in slide-in-from-top-2 duration-300">
            <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-700/60 rounded-2xl p-4 space-y-2 shadow-2xl shadow-black/20">
              <Link to="/" className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-xl transition-all duration-300">
                Home
              </Link>
              <Link to="/about" className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-xl transition-all duration-300">
                About
              </Link>
              <Link to="/services" className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-xl transition-all duration-300">
                Services
              </Link>
              <Link to="/contact" className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-xl transition-all duration-300">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-xl border-t border-slate-700/50">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 flex items-center">
              <Terminal className="h-8 w-8 text-cyan-400 mr-3" />
              CloudTech Solutions
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Leading IT consultancy specializing in software engineering, system architecture, and cloud-native solutions for modern enterprises.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></div>
                Cloud Architecture
              </a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></div>
                Software Development
              </a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></div>
                System Engineering
              </a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></div>
                DevOps & CI/CD
              </a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-base text-gray-400 flex items-center">
                <Mail className="h-4 w-4 text-cyan-400 mr-2" />
                info@cloudtech-solutions.com
              </li>
              <li className="text-base text-gray-400 flex items-center">
                <Phone className="h-4 w-4 text-cyan-400 mr-2" />
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700/50 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; 2025 CloudTech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-sm text-cyan-400 animate-fade-in">
              <Sparkles className="h-4 w-4 mr-2" />
              Next-Generation Cloud Solutions
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-extrabold text-white mb-8 animate-fade-in-up">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">Transform Your</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">Digital Future</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-200">
              Elite IT consultancy specializing in 
              <span className="text-cyan-400 font-semibold"> cutting-edge software engineering</span>, 
              <span className="text-purple-400 font-semibold"> scalable system architecture</span>, and 
              <span className="text-blue-400 font-semibold"> distributed cloud-native applications</span>. 
              We don't just build technology—we architect the future.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-600 hover:from-cyan-400 hover:via-purple-500 hover:to-blue-500 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105">
                <span className="relative z-10 flex items-center">
                  Launch Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
              <Button variant="outline" size="lg" className="group border-2 border-slate-600 text-white hover:border-cyan-400 hover:text-cyan-400 bg-slate-900/50 backdrop-blur-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                <Terminal className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-sm text-cyan-400 mb-6 animate-fade-in">
              <Zap className="h-4 w-4 mr-2" />
              Elite Technology Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">Comprehensive</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">IT Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              We architect the future with cutting-edge technology solutions that drive innovation and accelerate digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group hover-lift animate-fade-in-up animation-delay-400">
              <div className="relative h-full glass-morphism-dark rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Cloud Architecture</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Design and implement scalable, secure cloud infrastructure using AWS, Azure, and GCP. Kubernetes orchestration and microservices architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="group hover-lift animate-fade-in-up animation-delay-600">
              <div className="relative h-full glass-morphism-dark rounded-2xl p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Software Engineering</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Full-stack development, API design, database optimization, and modern frameworks. React, Node.js, Python, Go, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="group hover-lift animate-fade-in-up animation-delay-800">
              <div className="relative h-full glass-morphism-dark rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Layers className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">System Integration</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Legacy system modernization, API integration, data migration, and enterprise system architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-slate-900/50 to-slate-800/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Why Choose</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">CloudTech Solutions?</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Our team of elite engineers brings decades of combined experience in architecting next-generation systems for Fortune 500 companies and innovative startups.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group animate-slide-in-right animation-delay-200">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      Proven Excellence
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Successfully architected and delivered 200+ mission-critical projects with 99.9% uptime guarantee.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group animate-slide-in-right animation-delay-400">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      Cloud-Native Mastery
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Deep expertise in containerization, serverless architectures, Kubernetes, and distributed systems at scale.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group animate-slide-in-right animation-delay-600">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      Future-Ready Solutions
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      End-to-end support from architecture design to deployment, monitoring, and continuous optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 animate-fade-in-up animation-delay-800">
              <div className="grid grid-cols-2 gap-6">
                <div className="group hover-lift">
                  <div className="glass-morphism-dark rounded-2xl p-6 text-center border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
                    <div className="text-gray-400 font-medium">Projects Delivered</div>
                  </div>
                </div>
                <div className="group hover-lift">
                  <div className="glass-morphism-dark rounded-2xl p-6 text-center border border-slate-700/50 hover:border-green-400/50 transition-all duration-500">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                    <div className="text-gray-400 font-medium">Uptime SLA</div>
                  </div>
                </div>
                <div className="group hover-lift">
                  <div className="glass-morphism-dark rounded-2xl p-6 text-center border border-slate-700/50 hover:border-purple-400/50 transition-all duration-500">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-gray-400 font-medium">Enterprise Clients</div>
                  </div>
                </div>
                <div className="group hover-lift">
                  <div className="glass-morphism-dark rounded-2xl p-6 text-center border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-gray-400 font-medium">Expert Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      <div className="relative py-20 pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-sm text-cyan-400 mb-6">
              <Globe className="h-4 w-4 mr-2" />
              About Our Mission
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Leading the</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">Cloud Revolution</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              CloudTech Solutions was founded with a mission to architect the future of enterprise technology. Our team of elite engineers and visionary architects brings together decades of experience in building next-generation, scalable systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in-up animation-delay-400">
              <div className="glass-morphism-dark rounded-2xl p-8 border border-slate-700/50 h-full">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Cpu className="h-6 w-6 text-cyan-400 mr-3" />
                  Our Philosophy
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We specialize in cloud-native architectures, distributed systems, and cutting-edge software engineering practices. Our expertise spans major cloud platforms including AWS, Azure, and Google Cloud Platform, with deep mastery of containerization technologies like Docker and Kubernetes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our approach is consultative and collaborative. We don't just build software—we architect digital ecosystems that drive exponential business growth.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-600">
              <div className="glass-morphism-dark rounded-2xl p-8 border border-slate-700/50 h-full">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Database className="h-6 w-6 text-purple-400 mr-3" />
                  Our Impact
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Whether you're a visionary startup building your first scalable platform or a Fortune 500 enterprise modernizing legacy systems, we provide the expertise to accelerate your digital transformation journey.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We architect solutions that are not just current, but future-ready, ensuring your technology infrastructure scales with your ambitions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up animation-delay-800">
            <div className="glass-morphism-dark rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Our Elite Expertise</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: GitBranch, text: "Cloud-native application development and deployment" },
                  { icon: Layers, text: "Microservices architecture and API design" },
                  { icon: Database, text: "Container orchestration with Kubernetes" },
                  { icon: Terminal, text: "DevOps and CI/CD pipeline implementation" },
                  { icon: Shield, text: "Database design and optimization" },
                  { icon: Globe, text: "Security and compliance best practices" },
                  { icon: Cpu, text: "Performance monitoring and observability" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-slate-800/30 transition-colors duration-300 group">
                    <item.icon className="h-5 w-5 text-cyan-400 mt-1 group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Cloud Architecture & Migration",
      description: "Complete cloud transformation services including architecture design, migration planning, and implementation.",
      features: ["AWS, Azure, GCP expertise", "Kubernetes orchestration", "Serverless architectures", "Cost optimization"]
    },
    {
      title: "Software Development",
      description: "Full-stack development services with modern frameworks and best practices.",
      features: ["React, Node.js, Python", "API design & development", "Database optimization", "Testing & QA"]
    },
    {
      title: "DevOps & CI/CD",
      description: "Streamline your development workflow with automated deployment pipelines and monitoring.",
      features: ["Pipeline automation", "Infrastructure as Code", "Monitoring & logging", "Security scanning"]
    },
    {
      title: "System Integration",
      description: "Legacy modernization and system integration services to connect your technology stack.",
      features: ["Legacy system migration", "API integration", "Data synchronization", "Enterprise architecture"]
    },
    {
      title: "Consulting & Strategy",
      description: "Technology strategy consulting to align your IT infrastructure with business goals.",
      features: ["Technology roadmaps", "Architecture reviews", "Performance audits", "Team training"]
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance services to keep your systems running smoothly.",
      features: ["24/7 monitoring", "Performance optimization", "Security updates", "Technical support"]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/30 to-slate-900/80"></div>
      <div className="relative bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50 py-20 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-sm text-cyan-400 mb-8 animate-fade-in">
            <Zap className="h-4 w-4 mr-2" />
            Our Service Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Elite</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Comprehensive technology solutions engineered to accelerate your digital transformation and drive exponential business growth through cutting-edge innovation.
          </p>
        </div>
      </div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="group hover-lift animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative h-full glass-morphism-dark rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/30 to-slate-900/80"></div>
      <div className="relative py-20 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-sm text-cyan-400 mb-8 animate-fade-in">
            <Mail className="h-4 w-4 mr-2" />
            Let's Connect
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Get In</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Ready to transform your business with cutting-edge technology? Let's discuss your project requirements and architect your digital future together.
          </p>
        </div>
      </div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 animate-fade-in-up animation-delay-400">
              <div className="glass-morphism-dark rounded-2xl p-8 border border-slate-700/50 h-fit">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Terminal className="h-6 w-6 text-cyan-400 mr-3" />
                  Contact Information
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Ready to architect your digital future? Connect with our elite engineering team through any of these channels.
                </p>
                <dl className="space-y-6">
                  <div className="flex items-center group">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-400">Email</dt>
                      <dd className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">info@cloudtech-solutions.com</dd>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-400">Phone</dt>
                      <dd className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">+1 (555) 123-4567</dd>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-400">Office</dt>
                      <dd className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                        123 Tech Street<br />
                        San Francisco, CA 94105<br />
                        United States
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
            <div className="lg:col-span-2 animate-fade-in-up animation-delay-600">
              <div className="glass-morphism-dark rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full py-3 px-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full py-3 px-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full py-3 px-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full py-3 px-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Tell us about your project requirements, goals, and how we can help architect your digital transformation..."
                    />
                  </div>
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-4 rounded-xl border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <AnimatedBackground />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
