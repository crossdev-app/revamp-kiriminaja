<template>
    <div class="intgr-sec-2 my-4">
        <h2 class="text-center">Kurir Terhubung</h2>
        <p class="text-center">KiriminAja selalu terhubung dengan expedisi yang terbaik di Indonesia, dan akan terus bertambah lagi</p>
        <div class="intgr-sec-2-ccc">
            <div v-for="l in listEUM" :key="l.id" class="intgr-icon-partner">
                <img :src=[l] alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            listEUM: this.$store.state.homeKurirList
        }
    }
}
</script>

<style>

</style>