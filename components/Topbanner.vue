<template>
    <div id="top-banner" class="my-3">
        <div id="banner-info">
            <h1 class="fw-bold">{{ bannerData.title }}</h1>
            <p class="my-3">{{ bannerData.text }}</p>
            <ul>
                <li v-for="p in bannerData.listPoint"  :key="p.id" class="mb-2">
                    <iconcheckfillgreen class="banner-list-icon"/> <span class="ms-2">{{ p }}</span>
                </li>
            </ul>
            <div class="btn-banner-container">
                <div class="nav-item px-3 py-2 rounded-pill btn-register">Daftar Gratis <Fa icon="arrow-right" style="margin-left: 5px;"/></div>
                <div class="nav-item px-3 py-2 rounded-pill"><icondocumentation /> Dokumentasi</div>
            </div>
            <div id="banner-navigation">
                
            </div>
        </div>
        <div id="img-banner-container">
            <img :src=[bannerData.imgBannerUrl] alt="" srcset="">
        </div>
    </div>
</template>

<script>
import iconcheckfillgreen from './icon-set/iconcheckfillgreen.vue'
export default {
  components: { iconcheckfillgreen },
    data(){
        return{
            bannerData: {
                id: 1,
                imgBannerUrl:
                    "https://storage.googleapis.com/tprt0ezsggqjornc7nf1wwluvgulhr/kiriminaja-slider-content/odw89akaPYoL5w5g.webp",
                title: "Persiapkan Dirimu untuk Pengundian Grand Prize Pestapora 2022",
                text: "Catat tanggal dan nyalakan notifikasi di seluruh sosial media KiriminAja biar nggak kelewatan LIVE Streaming Grand Prize Pestapora 2022!",
                listPoint: [
                    "23 Desember 2022",
                    "Pengundian mobil Toyota Calya dan hadiah menarik lainnya",
                    "Live stream di YouTube dan Instagram KiriminAja",
                ],
            }
        }
    }

}
</script>