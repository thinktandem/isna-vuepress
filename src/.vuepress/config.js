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
      image  : false,
      twitter: false,
      og     : false,
      schema : false,
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
      {text: 'contact', link: '/about/contact/'},
      {text: 'español', link: '/espanol/'},
    ],
    sidebar: {
      '/': [
        {
          title: 'FAQ',
          collapsable: true,
          children: [
            "/faq/what_is_intersex/",
            "/faq/frequency/",
            "/faq/conditions/",
            "/faq/patient-centered/",
            "/faq/third-gender/",
            "/faq/concealment/",
            "/faq/standard_of_care/",
            "/faq/isna/",
            "/faq/end_secrecy/",
            "/faq/hermaphrodite/",
            "/faq/y_chromosome/",
            "/faq/ambiguous/",
            "/faq/anatomy/",
            "/faq/aap_policy/",
            "/faq/transgender/",
            "/faq/not_eradicating_gender/",
            "/faq/gender_assignment/",
            "/faq/healthy/",
            "/faq/nothing/",
            "/faq/surgery/",
            "/faq/medical_risks/",
            "/faq/howtorecords/",
            "/faq/marriage/",
            "/faq/reimer/",
            "/faq/history/"
          ],
        },
      ],
    },
  },
};
