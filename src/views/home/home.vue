<template>
  <div class="home">
    <div class="workspace-container">
      <div class="main-col">
        <div class="res-row">
          <WaveImage></WaveImage>
        </div>
        <div class="text-row">
          <textarea></textarea>
        </div>
      </div>
      <div class="panel-col">
        <SidePanel></SidePanel>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WaveImage from "@/components/wave-img/WaveImage.vue";
import SidePanel from "@/components/side-panel/side-panel.vue";
import "./home.scss";

export default {
  name: "Home",
  components: {
    WaveImage,
    SidePanel
  }
};
</script>
