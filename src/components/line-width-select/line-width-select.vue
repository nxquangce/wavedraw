<template>
  <div class="select-box">
    <div class="select-res" @click="toggleShowOptions()">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          width="103"
          height="20"
          viewBox="0 0 103 20"
        >
          <line x1="0" y1="10" x2="103" y2="10" v-bind:stroke-width="selectedValue" stroke="#000000" />
        </svg>
      </span>
      <div class="arrow">
        <span class="material-icons">keyboard_arrow_down</span>
      </div>
    </div>
    <div class="select-options" v-if="showOptions">
      <span class="select-option selected" data-value="1" v-for="strokeWidth in values" :key="strokeWidth" @click="select(strokeWidth)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          width="103"
          height="20"
          viewBox="0 0 103 20"
        >
          <line x1="0" y1="10" x2="103" y2="10" v-bind:stroke-width="strokeWidth" stroke="#000000" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import "./line-width-select.scss";
import { LineWidthSelectTs } from "./line-width-select";
export default class LineWidthSelect extends LineWidthSelectTs {}
</script>
