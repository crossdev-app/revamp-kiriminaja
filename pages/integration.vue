<template>
    <div>
        <Navbar />
        <integrationpage />
        <Mobileappbanner />
        <Footer />
    </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Integrationpage from '~/components/Integrationpage.vue';
import Mobileappbanner from '~/components/Mobileappbanner.vue';
import Navbar from '~/components/Navbar.vue'
export default {
    components: { Navbar, Footer, Mobileappbanner, Integrationpage }
}
</script>Navbar