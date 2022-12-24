<template>
    <nav class="navbar p-4">
        <sidebar />
        <div class="container">
            <div class="m-show" @click="toggleSidebar">
                <Fa icon="bars" class="nav-icon" style="font-size: 22px"/>
            </div>

            <nuxt-link to="/">
                <Brandlogo class="nav-logo" />
            </nuxt-link>

            <ul class="navbar-nav flex-row m-hide">
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">Kabar</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">Layanan <Fa icon="chevron-down"/> </a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">Cek Ongkir</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">Lacak</a>
                </li>
            </ul>

            <div class="navbar-nav flex-row align-items-center m-hide">
                <span class="nav-item nav-link mx-2">Masuk</span>
                <div class="nav-item px-3 py-2 rounded-pill btn-register">Daftar Gratis <Fa icon="arrow-right" style="margin-left: 5px;"/></div>
            </div>
            
            <div class="m-show">
                <Fa icon="user" class="nav-icon" style="font-size: 22px" />
            </div>

        </div>
    </nav>
</template>

<script>
import Brandlogo from './Brandlogo.vue'
import Sidebar from './Sidebar.vue'

export default {
    components: { Brandlogo, Sidebar },
    name: "Navbar",
    methods: {
        toggleSidebar(){
            this.$store.commit('toggleSidebar')
        }
    },
}
</script>