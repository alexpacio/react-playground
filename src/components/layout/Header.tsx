import { Button } from '@/components/ui/button';
import { Terminal, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 border rounded-lg shadow-gray-500/20 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-500/[0.008] backdrop-blur-[3px] border-border/6' 
        : 'bg-gray-500/[0.005] backdrop-blur-[2px] border-border/4'
    }`} style={{ boxShadow: '0 10px 15px -3px rgba(107, 114, 128, 0.1), 0 4px 6px -2px rgba(107, 114, 128, 0.05)' }}>
      <div className="px-6 sm:px-8 lg:px-10">
        <div className="flex items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl sm:text-2xl font-semibold text-foreground flex items-center hover:text-foreground/80 transition-colors duration-200" style={{ mixBlendMode: 'difference' }}>
              <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground mr-2 sm:mr-3" />
              <span className="hidden sm:inline">Netter</span>
              <span className="sm:hidden">Netter</span>
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-8" style={{ mixBlendMode: 'difference' }}>
              <Link 
                to="/" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                About
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center" style={{ mixBlendMode: 'difference' }}>
            <Button>
              Get Started
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}