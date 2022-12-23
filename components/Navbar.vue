<template>
    <nav class="navbar p-4">
        <div class="container">
            <nuxt-link to="/">
                <Brandlogo class="nav-logo" />
            </nuxt-link>

            <ul class="navbar-nav flex-row">
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Kabar</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Layanan <i class="fa fa-arrow-down"></i></a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Cek Ongkir</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Lacak</a>
                </li>
            </ul>

        </div>
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
</style>