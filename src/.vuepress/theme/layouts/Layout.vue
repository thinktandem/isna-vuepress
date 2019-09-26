<template>
  <ParentLayout>
    <Banner slot="page-top" />
    <Footer slot="page-bottom" />
  </ParentLayout>
</template>

<script>
  import ParentLayout from '@parent-theme/layouts/Layout.vue'
  import Footer from '@theme/components/Footer.vue'
  import Banner from '@theme/components/Banner.vue'

  export default {
    components: {
      ParentLayout,
      Footer,
      Banner,
    }
  }
</script>
