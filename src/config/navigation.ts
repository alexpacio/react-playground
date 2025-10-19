export interface NavLink {
  titleKey: string;
  href: string;
  descriptionKey?: string;
}

export interface NavSection {
  titleKey: string;
  items: NavLink[];
  featured?: NavLink;
}

export const productsNav: NavSection = {
  titleKey: 'header.products',
  featured: {
    titleKey: 'products.netterDSQL.name',
    href: '/netter-dsql',
    descriptionKey: 'products.netterDSQL.description',
  },
  items: [
    {
      titleKey: 'products.webApps.name',
      href: '/products/web',
      descriptionKey: 'products.webApps.description',
    },
    {
      titleKey: 'products.mobile.name',
      href: '/products/mobile',
      descriptionKey: 'products.mobile.description',
    },
  ],
};

export const servicesNav: NavSection = {
  titleKey: 'header.services',
  featured: {
    titleKey: 'services.observabilitySRE.name',
    href: '/services/observability-sre',
    descriptionKey: 'services.observabilitySRE.description',
  },
  items: [
    {
      titleKey: 'services.backend.name',
      href: '/services/backend',
      descriptionKey: 'services.backend.description',
    },
    {
      titleKey: 'services.frontend.name',
      href: '/services/frontend',
      descriptionKey: 'services.frontend.description',
    },
    {
      titleKey: 'services.dba.name',
      href: '/services/dba',
      descriptionKey: 'services.dba.description',
    },
    {
      titleKey: 'services.virtualization.name',
      href: '/services/virtualization',
      descriptionKey: 'services.virtualization.description',
    },
    {
      titleKey: 'services.networking.name',
      href: '/services/networking',
      descriptionKey: 'services.networking.description',
    },
    {
      titleKey: 'services.vdi.name',
      href: '/services/vdi',
      descriptionKey: 'services.vdi.description',
    },
    {
      titleKey: 'services.desktopFleet.name',
      href: '/services/desktop-fleet',
      descriptionKey: 'services.desktopFleet.description',
    },
  ],
};

export const mainNavLinks: NavLink[] = [
  { titleKey: 'header.home', href: '/' },
  { titleKey: 'header.about', href: '/about' },
];
