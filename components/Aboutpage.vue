<template>
  <main class="container">
    <aboutsection1 />
    <visionmission />
    <teamlead />
    <lifeatkirimaja />
  </main>
</template>

<script>
import Aboutsection1 from './Aboutsection1.vue'
import Lifeatkirimaja from './Lifeatkirimaja.vue'
import Teamlead from './Teamlead.vue'
import Visionmission from './Visionmission.vue'
export default {
  components: { Aboutsection1, Visionmission, Teamlead, Lifeatkirimaja}

}
</script>
