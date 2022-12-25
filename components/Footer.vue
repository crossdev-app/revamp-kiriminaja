<template>
  <footer class="container">
    <nuxt-link to="/">
        <Brandlogo class="nav-logo" />
    </nuxt-link>
    <div class="mt-4 d-flex flex-wrap">
      <div class="ftr-part pe-4">
        <p class="text-justify mb-4">
          KiriminAja adalah sebuah platform order pengiriman berbagai ekspedisi, agar para online seller dapat dengan mudah melakukan pengiriman paket COD maupun NON COD ke seluruh Indonesia.
        </p>
        <ul class="p-0">
          <li class="mb-3">
            <div class="p-2 ftr-s-icon">
              <Fa icon="building" />
            </div>
            <span class="ms-2 text-muted">Jl. Palagan No. 30, Ngaglik, Sleman, DI Yogyakarta </span>
          </li>
          <li class="mb-3">
            <div class="p-2 ftr-s-icon">
              <Fa icon="at" />
            </div>
            <span class="ms-2 text-muted">support@kiriminaja.com</span>
          </li>
          <li class="mb-3">
            <div class="p-2 ftr-s-icon">
              <Fa icon="phone" />
            </div>
            <span class="ms-2 text-muted">(0274) 8000-123</span>
          </li>
        </ul>
      </div>
      <div class="ftr-part ftr-part-r d-flex justify-content-evenly">
        <ul class="p-0">
          <li class="mb-3">
            <span class="fw-bold">Tautan Cepat</span>
          </li>
          <li>
            <a class="link" href="#">Cek Tarif Aja</a>
          </li>
          <li>
            <a class="link" href="#">Kabar Buatmu</a>
          </li>
          <li>
            <a class="link" href="#">Management Order</a>
          </li>
          <li>
            <nuxt-link to="/integration">Integrasi API</nuxt-link>
          </li>
          <li>
            <a class="link" href="#">Karir</a>
          </li>
        </ul>
        <ul class="p-0">
          <li class="mb-3">
            <span class="fw-bold">KiriminAja</span>
          </li>
          <li>
            <nuxt-link to="/about">Tentang Kami</nuxt-link>
          </li>
          <li>
            <a class="link" href="#">Syarat & Ketentuan</a>
          </li>
          <li>
            <a class="link" href="#">Kebijakan Privasi</a>
          </li>
                    <li>
            <a class="link" href="#">Fakta dan Pertanyaan</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="my-3 d-flex flex-wrap-reverse">
      <div class="ftr-part-b">
        <span>&copy; {{ currentYear.getFullYear() }} PT. Selalu Siap Solusi. All rights reserved</span>
      </div>
      <div class="ftr-part-b ftr-part-b-r">
        <div class="ftr-icon-container">
          <iconinstagram class="ftr-icon"/>
        </div>
        <div class="ftr-icon-container">
          <icontwitter class="ftr-icon"/>
        </div>
        <div class="ftr-icon-container">
          <iconfacebook class="ftr-icon"/>
        </div>
        <div class="ftr-icon-container">
          <iconyoutube class="ftr-icon"/>
        </div>
        <div class="ftr-icon-container">
          <iconlinkedin class="ftr-icon"/>
        </div>
        <div class="ftr-icon-container">
          <icontiktok class="ftr-icon"/>
        </div>
      </div>

    </div>
  </footer>
</template>


<script>
import Iconfacebook from './icon-set/Iconfacebook.vue'
import Iconinstagram from './icon-set/Iconinstagram.vue'
import Iconlinkedin from './icon-set/Iconlinkedin.vue'
import Icontiktok from './icon-set/Icontiktok.vue'
import Icontwitter from './icon-set/Icontwitter.vue'
import Iconyoutube from './icon-set/Iconyoutube.vue'
export default {
  components: { Iconinstagram, Icontwitter, Iconfacebook, Iconyoutube, Iconlinkedin, Icontiktok },
    name: "Footer",
    data(){
      return{
        currentYear: new Date,
      }
    },
}
</script>