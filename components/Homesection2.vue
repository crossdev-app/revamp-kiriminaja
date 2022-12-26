<template>
    <section>
        <span class="sec-sub">Makin Simple</span>
        <h2>Masih jaman kirim paket lama? Berantas dengan KiriminAja</h2>
        <p class="sec-sub-title">Ekspedisi terbaik yang kami pilihkan hanya untuk kamu lho</p>
        <div id="hs2-container">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/feature-light.webp" alt="">
            <div id="hs2-list">
                <ul>
                    <li v-for="l in listmks" :key="l.id" class="cursor-pointer">
                        <iconcheckoutline class="mx-3 text-success" /> <span>{{ l }}</span> 
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import iconcheckoutline from './icon-set/iconcheckoutline.vue'
export default {
  components: { iconcheckoutline },
    data(){
        return{
            listmks: [
                "Berbagai service expedisi sameday, kargo dan lainnya.",
                "Penjemputan paket tanpa minimal kiriman.",
                "Fitur dropoff atau cashless.",
                "Kirim paket COD dengan pencairan tercepat.",
                "Platform mudah digunakan (user friendly).",
                "Meminimalisir rasio retur.",
            ]
        }
    }
}
</script>