/*
 * Use this file to augment vuepress with other vue-y things
 */
export default ({Vue, options, router, siteData}) => {
  router.addRoutes([
    { path: '/hermaphroditesspeak/', redirect: '/videos/hermaphrodites_speak/' },
    { path: '/lessonsfromtheintersexed/', redirect: '/books/lessons/' },
    { path: '/library/books/', redirect: '/books/' },
    { path: '/videos/sf__hrc__hearing/', redirect: '/videos/sf_hrc_hearing/' },
    { path: '/files/SFHRC__Intersex__Report.pdf', redirect: '/files/SFHRC_Intersex_Report.pdf' },
    { path: '/articles/tips__for__parents/', redirect: '/articles/tips_for_parents/' },
    { path: '/events/ducket2000/', redirect: '/' },
    { path: '/search/', redirect: '/' },
    { path: '/event/', redirect: '/' },
    { path: '/foo/', redirect: '/' },
    { path: '/foo/', redirect: '/' },
    { path: '/foo/', redirect: '/' },
    { path: '/foo/', redirect: '/' },
    { path: '/foo/', redirect: '/' },
    { path: '/foo/', redirect: '/' },
    { path: '/foo/', redirect: '/' },

  ])
};
