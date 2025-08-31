import { Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <Terminal className="h-8 w-8 text-muted-foreground mr-3" />
              Netter
            </div>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Effective solutions for advanced companies.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center cursor-pointer">
                  <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></div>
                  Cloud Architecture
                </div>
              </li>
              <li>
                <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center cursor-pointer">
                  <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></div>
                  Software Development
                </div>
              </li>
              <li>
                <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center cursor-pointer">
                  <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></div>
                  System Engineering
                </div>
              </li>
              <li>
                <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center cursor-pointer">
                  <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></div>
                  DevOps & CI/CD
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">info@netter.com</li>
              <li className="text-sm text-muted-foreground">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; 2025 Netter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}