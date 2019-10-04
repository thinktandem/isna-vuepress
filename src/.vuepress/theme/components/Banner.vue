<template>
  <div class="banner">
    <div class="banner-text">
      <p>The Intersex Society of North America closed its doors and stopped updating this website in 2008.  ISNA’s work is continued by <a href="http://interactadvocates.org/">interACT: Advocates for Intersex Youth</a>, who proudly preserves this website as a historical archive.  For current information, links to intersex support groups, and to connect with intersex advocates, please head to <a href="http://interactadvocates.org/">interACT: Advocates for Intersex Youth</a>.</p>
    </div>
    <div class="banner-image">
      <img src="/interact.png">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Banner',
  };
</script>

<style lang="stylus">
  .banner
    max-width 100%
    margin 0 auto
    padding 6rem 2.5rem 2rem 2.5rem
    background-color #633f99
    color white
    display flex
    justify-content space-between
    align-items center
    @media (max-width: 958px)
      display block
    .banner-text
      p
        padding 0
        margin 0 0 0.5rem 0
        line-height 1.5
        a
          color white
          text-decoration underline
    .banner-image
      @media (max-width: 958px)
        display none
      img
        padding: 10px 50px 30px 50px;
</style>
