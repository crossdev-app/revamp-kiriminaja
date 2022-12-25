<template>
  <section class="container">
    <span class="sec-sub">Our Leaders</span>
    <h2>We lead with intention</h2>
    <div id="lead-container">
        <div v-for="l in leaders" :key="l.id" class="leads-box">
            <img :src=[l.photoUrl] alt="">
            <p class="fw-bolder fs-5 mb-0">{{ l.name }}</p>
            <span class="text-muted">{{ l.pos }}</span>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            leaders: this.$store.state.teamLeaders
        }
    }
}
</script>