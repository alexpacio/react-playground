export interface NavLink {
  title: string;
  href: string;
  description?: string;
}

export interface NavSection {
  title: string;
  items: NavLink[];
  featured?: NavLink;
}

export const productsNav: NavSection = {
  title: 'Products',
  featured: {
    title: 'Netter DSQL',
    href: '/netter-dsql',
    description: 'Beyond Distributed SQL Database',
  },
  items: [
    {
      title: 'Web Apps',
      href: '/products/web',
      description: 'Modern web applications and tools.',
    },
    {
      title: 'Mobile',
      href: '/products/mobile',
      description: 'Cross-platform mobile solutions.',
    },
  ],
};

export const servicesNav: NavSection = {
  title: 'Services',
  featured: {
    title: 'Observability & SRE',
    href: '/services/observability-sre',
    description: 'Build reliable systems at scale',
  },
  items: [
    {
      title: 'Backend Development',
      href: '/services/backend',
      description: 'Rust, Node.js, and Golang services',
    },
    {
      title: 'Frontend Development',
      href: '/services/frontend',
      description: 'Angular and React applications',
    },
    {
      title: 'Database Administration',
      href: '/services/dba',
      description: 'MySQL, PostgreSQL, MongoDB, Redis',
    },
    {
      title: 'Virtualization Infrastructure',
      href: '/services/virtualization',
      description: 'KVM, Hyper-V, and VMware expertise',
    },
    {
      title: 'Network Infrastructure',
      href: '/services/networking',
      description: 'TCP/IP, OpenWRT, VyOS, OPNSense',
    },
    {
      title: 'VDI Migration',
      href: '/services/vdi',
      description: 'Virtual Desktop Infrastructure',
    },
    {
      title: 'Desktop Fleet Management',
      href: '/services/desktop-fleet',
      description: 'RMM for Windows and Linux fleets',
    },
  ],
};

export const mainNavLinks: NavLink[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
];
