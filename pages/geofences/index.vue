<script setup lang="ts">
const geofence_data = [
  { id: 1, title: "لایه اول" ,status:false,desc:'توضیحات اول'},
  { id: 2, title: "لایه دوم",status:true,desc:'توضیحات دوم'},
  { id: 3, title: "لایه سوم" ,status:false,desc:'توضیحات سوم'},
  { id: 4, title: "لایه چهارم",status:true ,desc:'توضیحات چهارم'},
];
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-12 mt-2">
      <!-- trackers panel -->
      <div class="col-span-2 h-screen overflow-y-scroll dark:bg-gray-900">
        <geofence-item
          v-for="layer in geofence_data"
          :layers="layer"
        ></geofence-item>
      </div>

      <!-- map area -->
      <div class="col-span-10 bg-blue-50 flex items-center justify-center">
        Map here
      </div>
    </div>
  </div>
</template>
