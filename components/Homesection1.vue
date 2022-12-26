<template>
    <section>
        <span class="sec-sub">Empowering UMKM</span>
        <h2>Jangkauan untuk semua kebutuhan pengiriman paketmu</h2>
        <p class="sec-sub-title">Persembahan dari kami untuk mempermudah kebutuhan bisnismu</p>
        <div id="hs1-container">
            <div v-for="l in listEUM" :key="l.id" class="custom-card">
                <div class="box-icon-c">
                </div>
                <p class="c-card-title">
                    {{ l.title }}
                </p>
                <p class="c-card-desc mb-0">
                    {{ l.desc }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import Customcard from "./Customcard.vue"

export default 
{
    components: { Customcard },
    data(){
        return{
            listEUM: [
                {
                    icon: "",
                    title: "Layanan Terintegrasi",
                    desc: "Dashboard, API, Dan Mobile kami sediakan untuk mengontrol & monitoring lebih mudah.",
                },
                {
                    icon: "",
                    title: "Ekspedisi Terbaik",
                    desc: "Kamu bisa pilih layanan sameday, next day, reguler, ekonomi, kargo dan lainya sesukamu.",
                },
                {
                    icon: "",
                    title: "Sistem Otomatis",
                    desc: "Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.",
                },
                {
                    icon: "",
                    title: "Selalu Ada Untukmu",
                    desc: "Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.",
                },
                {
                    icon: "",
                    title: "Laporan Aktual",
                    desc: "Kemudahan pantau paket, pencairan COD, saldo, semuanya.",
                },
                {
                    icon: "",
                    title: "Friendly",
                    desc: "Ciptakan solusi terbaik dengan masukan, kritik, dan diskusi.",
                },
            ]
        }
    }

}
</script>Customcard