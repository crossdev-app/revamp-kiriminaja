<template>
    <nav>
        <brandlogo class="nav-logo" />
    </nav>
</template>

<script>
import Brandlogo from './Brandlogo.vue'
export default {
  components: { Brandlogo },
    name: "Navbar"
}
</script>

<style>
.nav-logo {
    height: 100px;
}
</style>