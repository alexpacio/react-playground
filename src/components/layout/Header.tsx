import { Button } from '@/components/ui/button';
import { Terminal, Sparkles, Menu, X, ChevronDown, Database, Activity } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { productsNav, servicesNav, mainNavLinks } from '@/config/navigation';

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
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesDropdownOpen(false);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300);
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
                        {productsNav.featured && (
                          <div className="row-span-3">
                            <Link
                              to={productsNav.featured.href}
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-colors hover:bg-accent focus:shadow-md"
                            >
                              <Database className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                {productsNav.featured.title}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {productsNav.featured.description}
                              </p>
                            </Link>
                          </div>
                        )}
                        <div className="space-y-2">
                          {productsNav.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          ))}
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
                    <div className="absolute top-full left-0 mt-5 w-[650px] bg-popover text-popover-foreground rounded-md border shadow-lg animate-in fade-in-0 zoom-in-95">
                      <div className="grid gap-3 p-6 lg:grid-cols-[.75fr_1fr]">
                        {servicesNav.featured && (
                          <div className="row-span-4">
                            <Link
                              to={servicesNav.featured.href}
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-colors hover:bg-accent focus:shadow-md"
                            >
                              <Activity className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                {servicesNav.featured.title}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {servicesNav.featured.description}
                              </p>
                            </Link>
                          </div>
                        )}
                        <div className="space-y-2">
                          {servicesNav.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          ))}
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
                <div className="text-sm font-medium text-white py-2">{productsNav.title}</div>
                <div className="pl-4 space-y-2">
                  {productsNav.featured && (
                    <Link
                      to={productsNav.featured.href}
                      className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {productsNav.featured.title}
                    </Link>
                  )}
                  {productsNav.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-white py-2">{servicesNav.title}</div>
                <div className="pl-4 space-y-2">
                  {servicesNav.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                  {servicesNav.featured && (
                    <Link
                      to={servicesNav.featured.href}
                      className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {servicesNav.featured.title}
                    </Link>
                  )}
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