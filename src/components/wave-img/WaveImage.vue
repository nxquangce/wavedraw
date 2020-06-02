<template>
  <div id="wave-img">
    <div class="title-row">
        <div class="title-tab">Wavegen</div>
    </div>
    <div class="wave-container">
      <div id="wave-space"></div>
    </div>
    <div class="btn-row">
      <div class="btn inline">
        <span class="material-icons">playlist_add</span> Add signal
      </div>
      <div class="btn inline">
        <span class="material-icons">access_time</span> Add cycle
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { WaveImageTs } from "./WaveImage";
import "./wave-image.scss";
export default class WaveImage extends WaveImageTs {}
</script>