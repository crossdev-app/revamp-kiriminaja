<template>
    <div id="sidebar" :class='[this.$store.state.showSidebar ? "m-show sidebar-shown" : "m-show"]'>
        <div id="sidebar-container" class="pt-5">
            <div class="cursor-pointer text-white position-absolute top-0 end-0 me-3 mt-2" @click="toggleSidebar">
                <Fa icon="xmark" />
            </div>
            <ul class="navbar-nav">
                <li class="nav-item mx-3">
                    <a class="nav-link sidebar-item" href="#">Blog</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link sidebar-item" href="#">Kabar</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link sidebar-item" href="#">Layanan <Fa icon="chevron-down"/> </a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link sidebar-item" href="#">Cek Ongkir</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link sidebar-item" href="#">Lacak</a>
                </li>
            </ul>
            <div class="position-absolute bottom-0 start-50 translate-middle-x mb-5" style="width:70%">
                <div class="text-center text-white cursor-pointer mb-2">Masuk</div>
                <div class="text-center btn-register-sidebar rounded-pill py-2">Daftar Gratis <Fa icon="arrow-right" style="margin-left: 5px;"/></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    methods: {
        toggleSidebar(){
            this.$store.commit('toggleSidebar');
        }
    },
}
</script>