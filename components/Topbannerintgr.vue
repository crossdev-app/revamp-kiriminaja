<template>
    <div id="top-banner-intgr" class="mt-3">
        <div id="banner-intgr-info">
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
        </div>
        <div id="img-banner-intgr-container">
            <img :src=[bannerData.imgBannerUrl] alt="" srcset="">
        </div>
    </div>
</template>

<script>
import iconcheckfillgreen from './icon-set/iconcheckfillgreen.vue'
import Icondocumentation from './icon-set/icondocumentation.vue'
export default {
  components: { iconcheckfillgreen, Icondocumentation },
    data(){
        return{
            bannerData: {
                imgBannerUrl:
                    "https://kiriminaja.com/assets/home-v3/integration-image.svg",
                title: "Partner Ecosystem & Integrations",
                text: "Kami bermitra dengan banyak ekspedisi terkemuka untuk membantu mengembangkan bisnis Anda lebih cepat, dan lebih kuat dari sebelumnya.",
                listPoint: [
                    "Beragam pilihan expedisi & Layanan",
                    "Support Cash On Delivery",
                    "Dashboard Monitoring",
                ],
            }
        }
    }

}
</script>