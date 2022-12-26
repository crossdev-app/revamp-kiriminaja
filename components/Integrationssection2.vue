<template>
    <div class="intgr-sec-2 my-4">
        <h2 class="text-center">Modern Rest API's, Simply Delivered</h2>
        <p class="text-center">Kami menggunakan teknologi REST API terbaru yang lebih mudah dimengerti oleh developer ber skala kecil</p>
        <div class="intgr-sec-2-ccc">
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
    </div>
</template>

<script>
export default {
    data(){
        return {
            listEUM: [
                {
                    icon: "",
                    title: "Ongkir Up to Date",
                    desc: "Ongkos kirim langsung dari ekspedisi, tanpa perubahan",
                },
                {
                    icon: "",
                    title: "Pickup & Dropoff",
                    desc: "Tentukan dan pilih opsi pengiriman dropoff dan pickup",
                },
                {
                    icon: "",
                    title: "AWB Terpusat",
                    desc: "Gak perlu pusing menunggu dapet AWB, kami yang antrikan",
                },
                {
                    icon: "",
                    title: "Tracking Satu Pintu",
                    desc: "Hasil ekspedisi kami buat dengan satu konsep penyajian",
                },
                {
                    icon: "",
                    title: "Jangkauan Terluas",
                    desc: "Selalu terbuka untuk seluruh area origin dan destinasi",
                },
                {
                    icon: "",
                    title: "Selalu Ada",
                    desc: "Kami selalu siap sedia ada setiap hari tanpa libur",
                },
                {
                    icon: "",
                    title: "Garansi Uptime",
                    desc: "Ongkos kirim langsung dari ekspedisi, tanpa perubahan",
                },
                {
                    icon: "",
                    title: "Tim teknis supportif",
                    desc: "Ongkos kirim langsung dari ekspedisi, tanpa perubahan",
                },
            ]
        }
    }

}
</script>