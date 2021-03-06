module.exports = {
  title: 'Intersex Society of North America',
  description: '',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
  ],
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-105500-1',
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
      policies: [
        {
          userAgent: '*',
          disallow: [
            '/',
          ],
        },
        {
          userAgent: 'Googlebot',
          allow: [
            '/',
          ],
        },
        {
          userAgent: 'Slurp',
          allow: [
            '/',
          ],
        },
        {
          userAgent: 'Bingbot',
          allow: [
            '/',
          ],
        }
      ]
    },
    'sitemap': {
      hostname: 'https://isna.org',
      exclude: ['/404.html'],
    },
  },
  themeConfig: {
    logo: '/ISNA-logo.png',
    logoMobile: '/ISNA-logo-mobile.png',
    nav: [
      {text: 'faq', link: '/faq/'},
      {text: 'support groups', link: '/support/'},
      {text: 'contact', link: '/about/contact/'},
      {text: 'español', link: '/espanol/'},
    ],
    sidebar: {
      '/books/chrysalis/': [
        {
          title: 'Chrysalis Special Issue on Intersexuality (1997)',
          path: '/books/chrysalis/',
          children: [
            '/books/chrysalis/from_the_editors/',
            '/books/chrysalis/chase/',
            '/books/chrysalis/cameron/',
            '/books/chrysalis/dreger/',
            '/books/chrysalis/coventry/',
            '/books/chrysalis/mcclintock/',
            '/books/chrysalis/beck/',
            '/books/chrysalis/moreno/',
            '/books/chrysalis/derick/',
            '/books/chrysalis/triea/',
            '/node/743/',
            '/books/chrysalis/moreno_letter/',
            '/books/chrysalis/kessler/',
            '/books/chrysalis/green/',
            '/books/chrysalis/aap/',
            '/books/chrysalis/walcutt_ode/',
            '/books/chrysalis/rodrigues/',
            '/books/chrysalis/triea_pru/',
            '/books/chrysalis/craffey/',
            '/books/chrysalis/alexander/',
            '/books/chrysalis/nicholson/',
            '/books/chrysalis/murk/',
            '/books/chrysalis/walcutt/',
            '/books/chrysalis/moreno_1/',
          ],
        },
      ],
      '/columbia/': [
        {
          title: "Colombia's Highest Court Restricts Surgery on Intersex Children",
          path: '/columbia/',
          children: [
            '/node/21/',
            '/node/193/',
            '/node/97/',
            '/node/27/',
            {
              title: 'Texts of Colombia Decisions',
              path: '/node/516/',
              collapsable: true,
              children: [
                '/node/166/',
                '/node/149/',
                '/node/34/',
                '/node/126/',
                '/node/110/',
              ]
            },
          ],
        },
      ],
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
        ['/legal/', 'Law'],
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
