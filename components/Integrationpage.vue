<template>
  <main class="container">
    <topbannerintgr />
    <integrationssection2 />
    <integrationssection3 />
    <integrationssection4 />
  </main>
</template>

<script>
import Integrationssection2 from './Integrationssection2.vue'
import Integrationssection3 from './Integrationssection3.vue'
import Integrationssection4 from './Integrationssection4.vue'
import Topbannerintgr from './Topbannerintgr.vue'
export default {
  components: { Topbannerintgr, Integrationssection2, Integrationssection3, Integrationssection4 },
}
</script>