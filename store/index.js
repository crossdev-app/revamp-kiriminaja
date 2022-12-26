export const state = () => ({
  showSidebar: false,
  homeBannerList: [
    {
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
    },
    {
      id: 2,
      imgBannerUrl:
        "https://storage.googleapis.com/tprt0ezsggqjornc7nf1wwluvgulhr/kiriminaja-slider-content/djDmpUvwP8WgLcjs.webp",
      title: "Borzo Delivery Kini Sudah Hadir di KiriminAja!",
      text: "Kini pengiriman instant di KiriminAja makin banyak pilihannya! Update aplikasi KiriminAja-mu dan cobain kirim paket instant pakai Borzo Delivery!",
      listPoint: [
        "Pengiriman Instant",
        "Mulai dari Rp 2.000/km",
        "Bisa diakses di seluruh wilayah Pulau Jawa, Bali, Balikpapan, Banda Aceh, dan Bandar Lampung.",
      ],
    },
    {
      id: 3,
      imgBannerUrl:
        "https://kiriminaja.com/storage/Slider/November22/1669273853_Slider%20(2).png",
      title: "Ninja Xpress telah hadir di aplikasi KiriminAja.",
      text: "SahabatKA, ada yang baru nih di KiriminAja! Mulai hari ini layanan pengiriman paket Ninja Xpress hadir di aplikasi KiriminAja.",
      listPoint: [
        "Ninja Xpress Standard",
        "Support Penuh dari Ninja",
        "Bisa Cash on Delivery",
      ],
    },
    {
      id: 4,
      imgBannerUrl:
        "https://kiriminaja.com/storage/Slider/April22/1648798905_Slider2%20(3)%20(1).png",
      title: "Gebyar Pesta Pora KiriminAja, Kirim Dapet Cuan",
      text: "Cara cerdas KIRIM PAKET pakai KiriminAja banyak diskon dan dapatkan peluang bawa pulang hadiahnya. Yuk buruan daftar dan kirim paketmu sekarang!",
      listPoint: [
        "Tanpa Biaya Pendaftaran",
        "Bebas Pilih Ekspedisi",
        "Banyak Hadiahnya",
      ],
    },
  ],
  homeKurirList: [
    "https://kiriminaja.com/assets/home-v3/logistics/jnt.png",
    "https://kiriminaja.com/assets/home-v3/logistics/sicepat.png",
    "https://kiriminaja.com/assets/home-v3/logistics/sap.png",
    "https://kiriminaja.com/assets/home-v3/logistics/sentral.png",
    "https://kiriminaja.com/assets/home-v3/logistics/ninja.png",
    "https://kiriminaja.com/assets/home-v3/logistics/gosend.png",
    "https://kiriminaja.com/assets/home-v3/logistics/grab_express.png",
    "https://kiriminaja.com/assets/home-v3/logistics/jne.png",
    "https://kiriminaja.com/assets/home-v3/logistics/ncs.png",
    "https://kiriminaja.com/assets/home-v3/logistics/idx.png",
    "https://kiriminaja.com/assets/home-v3/logistics/borzo.png",
    "https://kiriminaja.com/assets/home-v3/logistics/anteraja.png",
  ],
  clientAPIList: [
    "https://kiriminaja.com/assets/home-v3/clients/arcelle.png",
    "https://kiriminaja.com/assets/home-v3/clients/jawara-satoe.png",
    "https://kiriminaja.com/assets/home-v3/clients/dion-farma.png",
    "https://kiriminaja.com/assets/home-v3/clients/natasha.png",
    "https://kiriminaja.com/assets/home-v3/clients/clandys.png",
    "https://kiriminaja.com/assets/home-v3/clients/diskop-ukm-diy.png",
    "https://kiriminaja.com/assets/home-v3/clients/sibakul.png",
    "https://kiriminaja.com/assets/home-v3/clients/nimco.png",
    "https://kiriminaja.com/assets/home-v3/clients/misseana.png",
    "https://kiriminaja.com/assets/home-v3/clients/yukbid.png",
    "https://kiriminaja.com/assets/home-v3/clients/sibelio.png",
    "https://kiriminaja.com/assets/home-v3/clients/fabil.png",
    "https://kiriminaja.com/assets/home-v3/clients/efes.png",
    "https://kiriminaja.com/assets/home-v3/clients/inolabs.png",
    "https://kiriminaja.com/assets/home-v3/clients/finna.png",
    "https://kiriminaja.com/assets/home-v3/clients/tries.png",
    "https://kiriminaja.com/assets/home-v3/clients/paeko.png",
    "https://kiriminaja.com/assets/home-v3/clients/hayyana.png"
  ],
  teamLeaders: [
    {
      id: 1,
      photoUrl: "https://kiriminaja.com/assets/teams/budi-satria-isman.png",
      name: "Budi Satria Isman",
      pos: "President Commisioner",
    },
    {
      id: 2,
      photoUrl: "https://kiriminaja.com/assets/teams/fariz-gtj.png",
      name: "Fariz GTJ",
      pos: "Chief Executive Officer & Founder",
    },
    {
      id: 3,
      photoUrl: "https://kiriminaja.com/assets/teams/paras-nasution.png",
      name: "Paras M. Nasution",
      pos: "Chief Operation Officer",
    },
    {
      id: 4,
      photoUrl: "https://kiriminaja.com/assets/teams/muhammad-ih.png",
      name: "Muhammad Irfan H",
      pos: "Chief Technology Officer & Founder",
    },
    {
      id: 5,
      photoUrl: "https://kiriminaja.com/assets/teams/auf.png",
      name: "Arief Ardinugroho",
      pos: "Chief Marketing Officer",
    },
  ],
});

export const mutations = {
  toggleSidebar(state) {
    state.showSidebar = !state.showSidebar;
  },
};
