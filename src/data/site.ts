// src/data/site.ts
// Single source of truth for all site copy.
// Components are pure templates — nothing hardcoded in .astro or .tsx files.
// Copy rule: no em dashes (—). Use a comma, colon, or period as appropriate.

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  cta?: boolean;
}

export interface StatBlock {
  num: string;
  label: string;
  countTo?: number;
  suffix?: string;
  useComma?: boolean;
}

/** A heading that has one italic+amber <em> span. */
export interface AccentHeading {
  before: string;
  em: string;
  after?: string;
}

export interface WorkPillar {
  title: string;
  body: string;
}

export interface ImpactMetric {
  num: string;
  label: string;
}

export interface ProjectTestimonial {
  quote: string;
  name: string;
  role: string;
  permission: string;
}

export interface ProjectDetail {
  overview: string;
  contributionsHeading: string;
  contributions: string[];
  keyDecisionsHeading?: string;
  keyDecisions?: string;
  constraintsHeading?: string;
  constraints?: string[];
  impactHeading: string;
  impactMetrics: ImpactMetric[];
  impactSummary?: string;
  testimonials?: ProjectTestimonial[];
}

export interface Project {
  id: string;
  company: string;
  industry: string;
  logoUrl?: string;
  logoAlt?: string;
  title: string;
  tags: string[];
  detail: ProjectDetail;
}

export interface TestimonialSlide {
  quote: string;
  name: string;
  role: string;
}

export interface PhilosophyPillar {
  num: string;
  title: string;
  body: string;
}

/** A line in the contact big-text block. em=true renders it italic+amber. */
export interface ContactLine {
  text: string;
  em?: boolean;
}

export interface CtaButton {
  label: string;
  href: string;
  variant: 'dark' | 'outline';
  external?: boolean;
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

export const nav = {
  logo: 'Estelle Lu',
  links: [
    { label: 'About',        href: '#about' },
    { label: 'Work',         href: '#work' },
    { label: 'Philosophy',   href: '#philosophy' },
    { label: 'Get in Touch', href: '#contact', cta: true },
  ] satisfies NavLink[],
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  tag: 'Business & Systems Analyst · MBA · Kansas City',
  name: {
    line1: 'Estelle',
    line2: 'Lu.',       // rendered as <em> — italic + amber
  },
  description:
    'I combine psychology and business training to build analytics that work with human behavior, not against it. I enjoy working where business needs, data, technology, and people come together.',
  status: 'Currently contracting at Burns & McDonnell',
  buttons: [
    { label: 'View My Work', href: '#work',                                    variant: 'dark'    },
    { label: 'LinkedIn ↗',   href: 'https://www.linkedin.com/in/estelle-lu/', variant: 'outline', external: true },
  ] satisfies CtaButton[],
  scrollHint: 'Scroll',
};

// ─── Stats Strip ──────────────────────────────────────────────────────────────

export const stats: StatBlock[] = [
  { num: '2,000+', label: 'Employees trained on new tools and processes', countTo: 2000, suffix: '+', useComma: true },
  { num: '50+',    label: 'KPI dashboards delivered across industries',   countTo: 50,   suffix: '+' },
  { num: '80%',    label: 'Reduction in manual reporting labor',          countTo: 80,   suffix: '%' },
  { num: '4 hrs',  label: 'Saved daily through SQL automation',           countTo: 4,    suffix: ' hrs' },
];

// ─── Marquee ──────────────────────────────────────────────────────────────────

export const marqueeTools: string[] = [
  'SQL',
  'Power BI',
  'Tableau',
  'Jira',
  'Confluence',
  'Azure DevOps',
  'Dynamics 365',
  'Incorta',
  'Oracle ERP',
  'NetSuite',
  'REST APIs',
  'Power Apps',
  'Orbit Analytics',
  'Miro',
  'Visio',
  'Excel',
];

// ─── About ────────────────────────────────────────────────────────────────────

export const about = {
  eyebrow: 'About',
  headline: {
    before: 'Nice to',
    em: 'meet you!',
  } satisfies AccentHeading,
  body: [
    "I'm an MBA-trained business systems and analytics professional based in Kansas City. I combine psychology and business training to build analytics that work with human behavior, not against it.",
    'I enjoy working where business needs, data, technology, and people come together, helping teams clarify problems, improve processes, and make better decisions.',
    "I believe that the best products and dashboards don't just give you more data. They give you a clearer vision.",
  ],
  // Rendered smaller and muted — personal note separate from professional bio.
  personalNote:
    "Outside of work, you'll usually find me training for my next marathon, enjoying a latte, or baking something sweet.",
  pillarsHeading: 'How I work',
  pillars: [
    {
      title: 'Structured Problem Solving',
      body:  'I break down complexity, identify root causes, and build practical, scalable solutions',
    },
    {
      title: 'Human-Centered Adoption',
      body:  'I design with users in mind and support change through training, documentation and ongoing partnership',
    },
    {
      title: 'Turning Complexity into Clarity',
      body:  'I simplify the complex, creating clarity through systems, data, and compelling visuals',
    },
  ] satisfies WorkPillar[],
  skillsHeading: 'What I do best',
  skills: [
    'Systems Thinking',
    'Business Analysis',
    'Training & Enablement',
    'Dashboard Design',
    'SQL & Reporting',
    'Change Management',
    'Process Mapping',
    'Requirements Gathering',
  ],
};

// ─── Work ─────────────────────────────────────────────────────────────────────

export const work = {
  eyebrow: 'Featured Work',
  heading: {
    before: 'Projects that made a',
    em: 'real difference.',
  } satisfies AccentHeading,
  description:
    'Analytics, financial systems, workflow support, and business process improvement. Click any project to expand.',
  projects: [
    {
      id:       'row-burns',
      company:  'Burns & McDonnell',
      industry: 'Financial Tech · Enterprise IT',
      logoUrl:  'https://logo.clearbit.com/burnsmcd.com',
      logoAlt:  'Burns & McDonnell logo',
      title:    'Jira & Confluence Department Transformation',
      tags:     ['Jira Admin', 'Confluence', 'Change Mgmt', 'Azure DevOps', 'Power Apps'],
      detail: {
        overview:
          'Served as the designated Jira administrator for four cross-functional teams during a department-wide transition from Azure DevOps and OneNote into Jira and Confluence. Led Jira setup, board creation, automation configuration, Confluence migration, Power App-to-Jira intake migration, and large-scale training efforts that supported adoption and go-live readiness for more than 2,000 employees.',
        contributionsHeading: 'Key Contributions',
        contributions: [
          'Led Jira setup, board creation, and automation configuration as the designated admin for four teams',
          'Launched production-ready Jira spaces and boards within two weeks of starting',
          'Managed Confluence migration from fragmented OneNote documentation into a structured knowledge base',
          'Created a page-by-page migration inventory, assigned content owners, and coordinated documentation transition',
          'Project managed migration of Power App intake forms into Jira for the Financial Automations team',
          'Partnered with IT and FinTech leadership on change management strategy to support adoption of new workflows',
          'Designed and led Jira and Confluence training programs and workshops for 2,000+ employees in virtual and in-person settings',
        ],
        constraintsHeading: 'Constraints Navigated',
        constraints: [
          'Change mgmt for 2,000+ employees',
          '2-week go-live timeline',
          'Cross-collaboration with 3 teams',
          'Varied Jira/Confluence familiarity',
        ],
        impactHeading: 'Impact',
        impactMetrics: [
          { num: '2,000+', label: 'Employees trained' },
          { num: '2 wks',  label: 'Go-live timeline' },
          { num: '4',      label: 'Teams supported' },
          { num: '3+',     label: 'Systems migrated' },
        ],
        testimonials: [
          {
            quote:
              'Special thanks to Estelle for keeping communication flowing across departments such as HR, Finance, and Procurement, ensuring alignment across the organization. She also prepared training materials and enablement resources that helped teams adopt the new platform and processes more effectively.',
            name:       'Mentor Bytyqi',
            role:       'Department IT Manager, Enterprise Applications · Burns & McDonnell',
            permission: 'Used with permission',
          },
          {
            quote:
              'It was wonderful working with Estelle throughout the Jira migration project. Her contributions made a real difference, and I appreciate all of her hard work and positivity.',
            name:       'Mentor Bytyqi',
            role:       'Department IT Manager, Enterprise Applications · Burns & McDonnell',
            permission: 'Used with permission',
          },
        ],
      },
    },
    {
      id:       'row-wellsky',
      company:  'WellSky',
      industry: 'Post-Acute Healthcare',
      logoUrl:  'https://logo.clearbit.com/wellsky.com',
      logoAlt:  'WellSky logo',
      title:    'Product Analyst — Post-Acute Healthcare Reporting Platform',
      tags:     ['SQL', 'Dashboarding', 'Healthcare', 'Jira', 'User Guides'],
      detail: {
        overview:
          'At WellSky, I supported product analytics and reporting for a customer-facing platform used by post-acute healthcare clients. My work focused on helping teams and users better understand product performance, adoption, and reporting needs through KPI dashboards, custom reports, SQL-based logic, and user-focused enablement.',
        contributionsHeading: 'Key Contributions',
        contributions: [
          'Owned end-to-end product analytics for a reporting platform serving 200+ healthcare clients',
          'Delivered 50+ KPI-driven dashboards and interactive reports designed to support real-time monitoring and decision-making',
          'Worked with product managers and healthcare clients to define success metrics, gather requirements, and evaluate feature impact',
          'Built reusable SQL-based reporting frameworks that supported self-service analytics for 200+ users',
          'Wrote 10+ user guides and led training sessions to improve reporting adoption and customer confidence',
          'Automated billing and patient face sheet reports to improve compliance and reduce manual reporting work',
        ],
        impactHeading: 'Impact',
        impactMetrics: [
          { num: '50+',  label: 'KPI dashboards' },
          { num: '200+', label: 'Healthcare clients' },
          { num: '10+',  label: 'User guides written' },
          { num: '↓',    label: 'Manual effort reduced' },
        ],
        impactSummary:
          'Helped turn reporting into a more scalable, user-friendly part of the product experience. Improved visibility into customer usage patterns, feature adoption, and product performance. Enabled more self-service reporting, reducing reliance on analysts for routine reporting needs.',
      },
    },
    {
      id:       'row-supply',
      company:  'Supply Chain Client',
      industry: 'ERP & Reporting Automation',
      title:    'Sales Open Orders Dashboard & SQL Automation',
      tags:     ['SQL', 'Incorta', 'Oracle ERP', 'NetSuite'],
      detail: {
        overview:
          'Built real-time Sales Open Orders dashboards that consolidated ERP and CRM data to give supply chain and sales leadership instant visibility into order status, aging, and revenue forecasting, eliminating manual daily reporting.',
        contributionsHeading: 'Solution & Technical Approach',
        contributions: [
          'Integrated and standardized Oracle ERP and NetSuite data in SQL',
          'Built an automated daily-refreshing data model for open orders',
          'Designed KPI-driven dashboard views with executive-first visual hierarchy',
          'Added rolling 7-day and month-over-month metrics for short-term planning',
        ],
        keyDecisionsHeading: 'Key Decisions',
        keyDecisions:
          'Full automation over incremental optimization: stakeholders needed complete elimination of manual work, not just reduction. Familiar dashboard design patterns to lower change resistance and build trust to accelerate adoption.',
        constraintsHeading: 'Constraints Navigated',
        constraints: [
          'Multiple ERP schemas',
          'Strict security requirements',
          'Near real-time updates',
          'Legacy system integration',
        ],
        impactHeading: 'Impact',
        impactMetrics: [
          { num: '80%',   label: 'Reduction in manual labor' },
          { num: '4 hrs', label: 'Daily time saved' },
        ],
        impactSummary:
          'Eliminated a long-standing manual Excel reporting workflow. Enabled real-time executive visibility into open orders and backlog risk. Reduced reporting effort by ~80%, improving decision velocity across sales and supply chain leadership.',
      },
    },
    {
      id:       'row-book',
      company:  'Local Bookstore',
      industry: 'Retail Strategy · KC Area',
      title:    'Data-Driven Operations & Customer Segmentation',
      tags:     ['Excel', 'SQL', 'Segmentation', 'Retail Strategy'],
      detail: {
        overview:
          'Improved operations for a local book, plant, and coffee shop through data-driven analysis, including inventory tracking, customer segmentation, and store-hour optimization based on traffic and sales patterns. Incorporated social media-driven demand trends (e.g., BookTok) into competitive analysis to inform customer engagement and merchandising recommendations.',
        contributionsHeading: 'Solution & Technical Approach',
        contributions: [
          'Built an Excel + SQL framework to track inventory turnover and revenue by product line',
          'Analyzed purchasing behavior to identify high-impact sales periods and categories',
          'Applied behavioral segmentation (demographics, technographics, and needs-based psychographics) to identify target customer mindsets beyond basic purchase patterns, revealing opportunities in the remote worker and creative community segments',
          'Evaluated competitor positioning and social-media-driven demand trends (e.g., BookTok)',
          'Delivered actionable recommendations for store hours, promotions, and community engagement',
        ],
        keyDecisionsHeading: 'Key Decisions',
        keyDecisions:
          'Simplicity over complexity. Prioritized low-cost, maintainable tooling to ensure adoption by a small business team. Focused on actionable insights over complex analysis.',
        constraintsHeading: 'Constraints Navigated',
        constraints: [
          'Limited budget',
          'Minimal historical data',
          'No inventory software',
          'Confidentiality requirements',
        ],
        impactHeading: 'Impact',
        impactMetrics: [
          { num: '20%', label: 'Increase in foot traffic' },
          { num: '3',   label: 'Revenue streams optimized' },
        ],
        impactSummary:
          'Replaced ad-hoc inventory and sales tracking with a structured framework. Improved visibility across books, coffee, and plant revenue streams. Enabled data-driven decisions for store hours, customer targeting, and marketing.',
      },
    },
  ] satisfies Project[],
};

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials = {
  eyebrow: 'Recognition',
  slides: [
    {
      quote:
        'Special thanks to Estelle for keeping communication flowing across departments such as HR, Finance, and Procurement, ensuring alignment across the organization. She also prepared training materials and enablement resources that helped teams adopt the new platform and processes more effectively.',
      name: 'Mentor Bytyqi',
      role: 'Department IT Manager, Enterprise Applications · Burns & McDonnell',
    },
    {
      quote:
        'It was wonderful working with Estelle throughout the Jira migration project. Her contributions made a real difference, and I appreciate all of her hard work and positivity.',
      name: 'Mentor Bytyqi',
      role: 'Department IT Manager, Enterprise Applications · Burns & McDonnell',
    },
  ] satisfies TestimonialSlide[],
};

// ─── Philosophy ───────────────────────────────────────────────────────────────

export const philosophy = {
  eyebrow: 'Dashboard Philosophy',
  statement: {
    before: 'Dashboards that help people ',
    em:     'decide,',
    after:  ' not just inform.',
  } satisfies AccentHeading,
  body: [
    'I design for the people who will actually use the data: busy professionals making important decisions under pressure. Good analytics begins not with the data, but with understanding the audience.',
    "The best dashboards don't give you more information. They give you the right information, shaped into a story that's useful in the moment it's needed.",
  ],
  pillars: [
    {
      num:   '01',
      title: 'Outcome-First Metrics',
      body:  "Surface what matters most, not what's easiest to measure. Focus on business outcomes that drive impact.",
    },
    {
      num:   '02',
      title: 'Clear Visual Hierarchy',
      body:  'Information that is easier to take in reduces cognitive load at decision time. Clean, focused design that prioritizes signal over noise.',
    },
    {
      num:   '03',
      title: 'Signal Over Noise',
      body:  "Highlight what matters most and remove what doesn't. Clean, focused design that earns attention rather than demanding it.",
    },
    {
      num:   '04',
      title: 'Audience-Specific Decisions',
      body:  'Design for the user, their context, and their business. Executive, operational, and user-level needs are genuinely different.',
    },
  ] satisfies PhilosophyPillar[],
};

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact = {
  lines: [
    { text: "Let's build" },
    { text: 'something', em: true },
    { text: 'together.' },
  ] satisfies ContactLine[],
  sub: 'Open to contract, full-time, and consulting opportunities in analytics, business systems, and data-driven strategy.',
  buttons: [
    { label: 'Connect on LinkedIn ↗', href: 'https://www.linkedin.com/in/estelle-lu/', variant: 'dark',    external: true },
    { label: 'Say Hello',             href: 'mailto:estelle.elizabeth.lu@gmail.com',   variant: 'outline' },
  ] satisfies CtaButton[],
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footer = {
  logo:      'Estelle Lu',
  tagline:   'Business & Systems Analyst · Kansas City, MO',
  copyright: '© 2026',
};

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const seo = {
  title:       'Estelle Lu | Business & Systems Analyst | Kansas City',
  description:
    'MBA-trained Business & Systems Analyst in Kansas City. I build analytics that work with human behavior, turning complex data into clear decisions for teams and leaders.',
  url:         'https://estellelu.com',
  ogImage:     '/og/default.png',
  twitterCard: 'summary_large_image' as const,
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type':       'Person',
        '@id':         'https://estellelu.com/#person',
        name:          'Estelle Lu',
        jobTitle:      'Business & Systems Analyst',
        description:   'MBA-trained Business & Systems Analyst in Kansas City specializing in dashboard design, SQL automation, change management, and enterprise systems implementation.',
        url:           'https://estellelu.com',
        email:         'estelle.elizabeth.lu@gmail.com',
        image:         'https://estellelu.com/og/default.png',
        worksFor: {
          '@type': 'Organization',
          name:    'Burns & McDonnell',
          url:     'https://burnsmcd.com',
        },
        knowsAbout: [
          'Business Analysis',
          'Systems Analysis',
          'SQL',
          'Power BI',
          'Tableau',
          'Change Management',
          'Dashboard Design',
          'Data Analytics',
          'KPI Reporting',
          'Process Mapping',
          'Requirements Gathering',
          'Jira Administration',
          'Confluence',
          'Oracle ERP',
          'NetSuite',
        ],
        sameAs: [
          'https://www.linkedin.com/in/estelle-lu/',
        ],
        address: {
          '@type':         'PostalAddress',
          addressLocality: 'Kansas City',
          addressRegion:   'MO',
          addressCountry:  'US',
        },
      },
      {
        '@type':       'WebSite',
        '@id':         'https://estellelu.com/#website',
        name:          'Estelle Lu | Business & Systems Analyst',
        url:           'https://estellelu.com',
        description:   'Portfolio of Estelle Lu, MBA-trained Business & Systems Analyst in Kansas City.',
        inLanguage:    'en-US',
        author: {
          '@id': 'https://estellelu.com/#person',
        },
      },
    ],
  },
};
