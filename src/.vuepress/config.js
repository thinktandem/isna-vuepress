module.exports = {
  title: 'ISNA',
  description: '',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '/styles/overrides.css'}],
  ],
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-xxxxxxx',
    },
    'autometa': {
      site: {
        name: 'ISNA',
      },
      canonical_base: 'https://isna.org',
    },
    'canonical': {
      baseURL: 'https://isna.org',
    },
    'robots': {
      host: 'https://isna.org',
    },
    'sitemap': {
      hostname: 'https://isna.org',
      exclude: ['/404.html'],
    },
  },
  themeConfig: {
    nav: [
      {text: 'faq', link: '/faq/'},
      {text: 'support groups', link: '/support/'},
      {text: 'contact', link: '/contact/'},
      {text: 'español', link: '/espanol/'},
    ],
    sidebar: {
      '/faq/': [
        {
          title: 'Stuff',
          collapsable: false,
          children: [
            'things',
          ],
        },
      ],
    },
  },
};
