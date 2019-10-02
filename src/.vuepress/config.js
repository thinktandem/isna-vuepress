module.exports = {
  title: 'Intersex Society of North America',
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
    logo: '/ISNA-logo.png',
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
          path: '/faq/',
          children: [
            "/faq/what_is_intersex/",
            "/faq/frequency/",
            {
              title: 'Intersex conditions',
              path: '/faq/conditions/',
              collapsable: true,
              children: [
                '/faq/conditions/5AR/',
                '/faq/conditions/ais/',
                '/faq/conditions/ais_test/',
                '/faq/conditions/aphalia/',
                '/faq/conditions/cah/',
                '/faq/conditions/clitoromegaly/',
                '/faq/conditions/gonadal_dysgenesis/',
                '/faq/conditions/hypospadias/',
                '/faq/conditions/klinefelter/',
                '/faq/conditions/know/',
                '/faq/conditions/micropenis/',
                '/faq/conditions/mosaicism/',
                '/faq/conditions/mrkh/',
                '/faq/conditions/ovo-testes/',
                '/faq/conditions/pais/',
                '/faq/conditions/progestin/',
                '/faq/conditions/raphe/',
                '/faq/conditions/swyer/',
                '/faq/conditions/turner/',
              ]
            },
            "/faq/patient-centered/",
            "/faq/third-gender/",
            "/faq/concealment/",
            "/faq/standard_of_care/",
            {
              title: 'Questions about Intersex Society of North America',
              path: '/faq/isna/',
              collapsable: true,
              children: [
                '/faq/isna/referrals/',
                '/faq/isna/support/',
                '/faq/isna/howtohelp/',
                '/faq/isna/activities/',
                '/faq/isna/mission/',
                '/faq/isna/location/',
                '/faq/isna/people/',
              ]
            },
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
        {
          title: 'Legal',
          path: '/legal/',
          sidebarDepth: 1,
          children: [
            "/legal/",
          ],
        },
        {
          title: 'Library',
          path: '/taxonomy/term/7',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            "/bibliographies/",
            "/books/",
            "/library/history/",
            "/videos/",
          ],
        },
        ['/about/emeritus/', 'People'],
        {
          title: 'Learn More',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['http://dsdguidelines.org/', 'DSD Guidelines'],
            "/articles/tips_for_parents/",
            "/teaching_kit/",
            "/dsdsymposium2006/",
            ['http://www.accordalliance.org/', 'Accord Alliance'],
          ],
        },
      ],
    },
  },
};
