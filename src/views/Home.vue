<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <WaveImage></WaveImage>
  </div>
</template>

<script>
// @ is an alias to /src
import WaveImage from '@/components/wave-img/WaveImage.vue'

export default {
  name: 'Home',
  components: {
    WaveImage
  }
}
</script>
