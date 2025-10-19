import { Button } from '@/components/ui/button';
import { Terminal, Sparkles, Menu, X, ChevronDown, Database, Server, Code, MonitorSmartphone, Network, HardDrive, Activity } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 500);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 500);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
        if (servicesTimeoutRef.current) {
          clearTimeout(servicesTimeoutRef.current);
          servicesTimeoutRef.current = null;
        }
      }
    };

    if (dropdownOpen || servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, [dropdownOpen, servicesDropdownOpen]);

  return (
    <>
      <header className={`fixed top-4 left-4 right-4 z-50 border rounded-lg shadow-gray-500/20 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-[3px] border-border/6' 
          : 'backdrop-blur-[2px] border-border/4'
      }`} style={{ boxShadow: '0 10px 15px -3px rgba(107, 114, 128, 0.1), 0 4px 6px -2px rgba(107, 114, 128, 0.05)', mixBlendMode: 'difference' }}>
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="flex items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="text-xl sm:text-2xl font-semibold text-white flex items-center hover:text-white/80 transition-colors duration-200">
                <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-white mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Netter</span>
                <span className="sm:hidden">Netter</span>
              </Link>
            </div>
            
            <div className="flex-1 flex justify-center">
              <nav className="hidden md:flex items-center space-x-1">
                <Link 
                  to="/" 
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/10"
                >
                  Home
                </Link>
                
                <div 
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={dropdownRef}
                >
                  <button className="flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/10">
                    Products
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-5 w-[500px] bg-popover text-popover-foreground rounded-md border shadow-lg animate-in fade-in-0 zoom-in-95">
                      <div className="grid gap-3 p-6 lg:grid-cols-[.75fr_1fr]">
                        <div className="row-span-3">
                          <Link
                            to="/netter-dsql"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-colors hover:bg-accent focus:shadow-md"
                          >
                            <Database className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Netter DSQL
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beyond Distributed SQL Database
                            </p>
                          </Link>
                        </div>
                        <div className="space-y-2">
                          <Link 
                            to="/products/web" 
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Web Apps</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Modern web applications and tools.
                            </p>
                          </Link>
                          <Link 
                            to="/products/mobile" 
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Mobile</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Cross-platform mobile solutions.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                  ref={servicesDropdownRef}
                >
                  <button className="flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/10">
                    Services
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-5 w-[600px] bg-popover text-popover-foreground rounded-md border shadow-lg animate-in fade-in-0 zoom-in-95">
                      <div className="grid gap-3 p-6 lg:grid-cols-2">
                        <div className="space-y-2">
                          <Link
                            to="/services/backend"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Server className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">Backend Development</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Rust, Node.js, and Golang web services
                            </p>
                          </Link>
                          <Link
                            to="/services/frontend"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Code className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">Frontend Development</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Angular and React applications
                            </p>
                          </Link>
                          <Link
                            to="/services/dba"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Database className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">Database Administration</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              MySQL, PostgreSQL, MongoDB, and Redis
                            </p>
                          </Link>
                          <Link
                            to="/services/virtualization"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <HardDrive className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">Virtualization Infrastructure</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Large-scale virtualization consultancy
                            </p>
                          </Link>
                        </div>
                        <div className="space-y-2">
                          <Link
                            to="/services/networking"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Network className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">Network Infrastructure</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Large networking infrastructure consultancy
                            </p>
                          </Link>
                          <Link
                            to="/services/vdi"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <MonitorSmartphone className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">VDI Migration</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Virtual Desktop Infrastructure migration services
                            </p>
                          </Link>
                          <Link
                            to="/services/desktop-fleet"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Terminal className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">Desktop Fleet Management</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Custom RMM and management for Windows and Linux fleets
                            </p>
                          </Link>
                          <Link
                            to="/services/observability-sre"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Activity className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">Observability & SRE</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Monitoring, logging, and site reliability engineering
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="/about"
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/10"
                >
                  About
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              
              <Button>
                Get Started
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Detached below topbar */}
      {mobileMenuOpen && (
        <div className="fixed top-[88px] left-4 right-4 z-40 md:hidden">
          <nav className="bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl transition-all duration-300">
            <div className="px-6 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-white py-2">Products</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/netter-dsql"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Netter DSQL
                  </Link>
                  <Link
                    to="/products/web"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Web Apps
                  </Link>
                  <Link
                    to="/products/mobile"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mobile
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-white py-2">Services</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/services/backend"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Backend Development
                  </Link>
                  <Link
                    to="/services/frontend"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Frontend Development
                  </Link>
                  <Link
                    to="/services/dba"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Database Administration
                  </Link>
                  <Link
                    to="/services/virtualization"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Virtualization Infrastructure
                  </Link>
                  <Link
                    to="/services/networking"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Network Infrastructure
                  </Link>
                  <Link
                    to="/services/vdi"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    VDI Migration
                  </Link>
                  <Link
                    to="/services/desktop-fleet"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Desktop Fleet Management
                  </Link>
                  <Link
                    to="/services/observability-sre"
                    className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Observability & SRE
                  </Link>
                </div>
              </div>

              <Link
                to="/about"
                className="block text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}