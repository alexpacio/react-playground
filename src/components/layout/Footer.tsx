import { Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productsNav, servicesNav } from '@/config/navigation';
import { useTranslation } from '@/contexts/TranslationContext';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 lg:gap-12">
          <div>
            <div className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <Terminal className="h-8 w-8 text-muted-foreground mr-3" />
              Netter srl
            </div>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4">{t(productsNav.titleKey)}</h3>
            <ul className="space-y-3">
              {productsNav.featured && (
                <li>
                  <Link
                    to={productsNav.featured.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></div>
                    {t(productsNav.featured.titleKey)}
                  </Link>
                </li>
              )}
              {productsNav.items.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></div>
                    {t(item.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4">{t(servicesNav.titleKey)}</h3>
            <ul className="space-y-3">
              {servicesNav.featured && (
                <li>
                  <Link
                    to={servicesNav.featured.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></div>
                    {t(servicesNav.featured.titleKey)}
                  </Link>
                </li>
              )}
              {servicesNav.items.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></div>
                    {t(item.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4">{t('header.about')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center"
                >
                  <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></div>
                  {t('common.aboutUs')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; 2025 Netter. {t('common.allRightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
}