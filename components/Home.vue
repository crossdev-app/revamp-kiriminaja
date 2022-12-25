<template>
    <main class="container">
        <topbanner />
        <homesection1 />
        <homesection2 />
    </main>
</template>

<script>
import Homesection1 from './Homesection1.vue'
import Homesection2 from './Homesection2.vue'
import Topbanner from "./Topbanner.vue"

export default{
    components: { Topbanner, Homesection1, Homesection2}
}
</script>