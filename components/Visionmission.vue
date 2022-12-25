<template>
  <section class="container">
    <span class="sec-sub">Vision & Mission</span>
    <h2>Our Mission</h2>
    <div class="d-flex justify-content-between flex-wrap my-4" id="vsms-detail">
      <div id="vsms-list">
        <ul>
          <li v-for="m in listMission" :key="m.id">
            <iconcheckoutline class="fs-5 mx-3"/> <span>{{ m }}</span> 
          </li>
        </ul>
      </div>
      <div id="vsms-expl" class="px-4 py-2">
        <p>
          KiriminAja adalah sebuah platform yang memberikan kemudahan untuk pengiriman paket dan menemukan ekspedisi sesuai kebutuhan masyarakat, dengan metode pengiriman COD dan Non-COD yang dikembangkan oleh PT Selalu Siap Solusi.
        </p>
        <p>
          Kemi memberikan solusi untuk UMKM, pebisnis online, serta seluruh masyarakat Indonesia yang ingin melakukan pengiriman paket.
        </p>
        <p>
          Kami menawarkan:
        </p>
        <ul>
          <li>
            Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.
          </li>
          <li>
            Adanya layanan pengiriman COD (Cash On Delivery) dengan pencairan dana harian dan sistem pengambilan paket dirumah oleh ekspedisi.
          </li>
          <li>
            Layanan pengiriman paket non-cod dengan sistem pengambilan paket dirumah oleh ekspedisi.
          </li>
          <li>
            Platform yang dapat membantu pebisnis online mengendalikan dan mengelola bisnisnya dengan lebih baik.
          </li>
        </ul>
        <p>
          Dengan layanan dan inovasi yang ditawarkan, KiriminAja memiliki komitmen untuk berkontribusi pada perekonomian Indonesia, dengan cara memberikan solusi serta kemudahan bagi para pebisnis online supaya bisnisnya terus berkembang.
        </p>
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
      listMission:[
     
        "Meningkatkan penjualan produk UMKM secara online.",
        "Memberikan inovasi-inovasi terbaru dan terbaik.",
        "Memberikan pelayanan yang maksimal dan optimal untuk pelanggan.",
        "Mengenalkan KiriminAja seluas-luasnya ke seluruh Indonesia."
      ]
    }
  }
}
</script>