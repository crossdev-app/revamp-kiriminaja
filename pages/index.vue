<template>
  <div>
    <navbar />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from '~/components/Content.vue'
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar, Footer, Content },
  name: 'IndexPage'
}
</script>
