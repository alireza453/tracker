<script setup lang="ts">
import { ref } from "vue";
const center = ref([52.52615, 29.607491]);
const projection = ref("EPSG:4326");
const zoom = ref(14);
const rotation = ref(0);
</script>
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    class="h-screen mt-2"
  >
    <ol-view
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>

<style scoped>
@import "vue3-openlayers/dist/vue3-openlayers.css";
</style>
