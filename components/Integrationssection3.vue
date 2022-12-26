<template>
    <div class="intgr-sec-2 bg-transparent my-4">
        <h2 class="text-center">Telah dipercayai oleh</h2>
        <p class="text-center">KiriminAja berkomitmen untuk selalu mendukung perkembangan dan kemajuan UMKM di seluruh Indonesia</p>
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
            listEUM: this.$store.state.clientAPIList
        }
    }
}
</script>

<style>

</style>