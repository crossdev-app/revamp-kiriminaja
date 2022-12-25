<template>
    <div>
      <navbar />
      <about />
      <mobileappbanner />
      <Footer />
    </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Mobileappbanner from '~/components/Mobileappbanner.vue'
import Navbar from '~/components/Navbar.vue'
import About from '~/components/Aboutpage.vue'
export default {
  components: { Navbar, Footer, Mobileappbanner, About },

}
</script>
