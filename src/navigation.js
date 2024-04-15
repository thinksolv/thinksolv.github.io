import {
  getPermalink,
  getBlogPermalink,
  getHomePermalink,
  getAsset,
} from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Home",
      href: getHomePermalink(),
      links: [
        /*{
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },*/
      ],
    },
    {
      text: "Useful Links",
      links: [
        {
          text: "Terms",
          href: getPermalink("/terms"),
        },
        {
          text: "Privacy policy",
          href: getPermalink("/privacy"),
        },
      ],
    },
    {
      text: "Contact",
      href: getPermalink("/contact"),
    },
    /*{
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },*/
    {
      text: "Blog",
      href: getBlogPermalink(),
      links: [
        /*{
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        /*{
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },*/
      ],
    },
    /*{
      text: 'Widgets',
      href: '#',
    },*/
  ],
  actions: [
    /*{
      text: "Install Free add-on",
      href: "https://workspace.google.com/marketplace/app/pdf_to_docs/28755135712",
      target: "_blank",
    },*/
  ],
};

export const footerData = {
  links: [
    {
      title: "Product",
      links: [
        { text: "Features", href: `${getHomePermalink()}#features` },
        { text: "Blog", href: getBlogPermalink() },
        /*{ text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },*/
      ],
    },
    /*{
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        /*{ text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },*/
    /* {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
       /* { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },*/
    /*{
      title: 'Company',
      links: [
       
        
        /*{ text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },*/
  ],
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms-of-service") },
    { text: "Privacy Policy", href: getPermalink("/privacy-policy") },
  ],
  socialLinks: [
    /* { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },*/
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://www.thinksolv.com/wp-content/uploads/2024/03/favicon.png)]"></span>
    Owned and maintained by  <a class="text-blue-600 underline dark:text-muted" href="https://www.thinksolv.com/">Thinksolvv Technologies private limited.</a> Forge.Factory, KCT tech park, Saravanampatti, Coimbatore - 641 049. All rights reserved.
  `,
};
