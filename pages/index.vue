<template>
  <div>
    <navbar />
    <home />
    <mobileappbanner />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Home from '~/components/Home.vue'
import Mobileappbanner from '~/components/Mobileappbanner.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar, Footer, Mobileappbanner, Home },
  name: 'IndexPage'
}
</script>
