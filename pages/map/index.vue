<script setup lang="ts">
import { reactive, ref } from "vue";
import type { detailsTabOptionDto } from "~/models/PropsModelsDTO";

const tracker_types = ["خودرو", "پهپاد", "شخص"];
const selected = ref([]);
const fake_trackers = [
  {
    status: "green",
    id: 1,
    name: "rstallon0on0",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    trip_code: "JP-31",
    icon_color: "indigo-500",
    type: "پهپاد",
  },
  {
    status: "green",
    id: 2,
    name: "cblair11",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    trip_code: "IT-23",
    icon_color: "red-500",
    type: "خودرو",
  },
  {
    status: "green",
    id: 3,
    name: "kdalton2",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    trip_code: "AU-NT",
    icon_color: "blue-500",
    type: "پهپاد",
  },
  {
    status: "green",
    id: 4,
    name: "smottini3",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    trip_code: "US-FL",
    icon_color: "purple-500",
    type: "شخص",
  },
  {
    status: "green",
    id: 5,
    name: "wclere4",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    trip_code: "BR-MG",
    icon_color: "green-500",
    type: "پهپاد",
  },
  {
    status: "green",
    id: 6,
    name: "hfellona5",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    trip_code: "AO-MOX",
    icon_color: "orange-500",
    type: "شخص",
  },
  {
    status: "green",
    id: 7,
    name: "mquilty6",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    trip_code: "PG-WPD",
    icon_color: "yellow-500",
    type: "شخص",
  },
  {
    status: "green",
    id: 8,
    name: "ltremoille7",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    trip_code: "HN-CL",
    icon_color: "cyan-500",
    type: "پهپاد",
  },
  {
    status: "green",
    id: 9,
    name: "fpudan8",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    trip_code: "IN-BR",
    icon: "violet-600",
    type: "شخص",
  },
  {
    status: "green",
    id: 10,
    name: "opharaoh9",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    trip_code: "CA-BC",
    icon: "orange-800",
    type: "خودرو",
  },
];

const DetailsOption: detailsTabOptionDto = {
  showRouteOption: true,
  endTripNotificationOption: true,
  showPopupOption: true,
  changeIconOption: true,
  playHistory: false,
  tripProcess: 45,
  routeColorOption: true,
};
</script>

<template>
  <div class="grid grid-cols-12 mt-2">
    <!-- trackers panel -->
    <div class="col-span-2 h-screen overflow-y-scroll dark:bg-gray-900 ">
      <UInput
        icon="i-heroicons-magnifying-glass"
        variant="none"
        size="sm"
        placeholder="جستجو"
        class="w-100 my-2 dark:text-slate-100 dark:bg-gray-800"
      />

      <USelectMenu
        v-model="selected"
        :options="tracker_types"
        multiple
        class="w-100 my-2 mx-2"
      />

      <TrackerItem
        v-for="tracker in fake_trackers"
        :key="tracker.id"
        :data="tracker"
      />
    </div>

    <!-- map area -->
    <div class="col-span-7 bg-blue-50 flex items-center justify-center">
      <CustomOlMap></CustomOlMap>
    </div>
    <!-- details panel -->
    <div
      class="col-span-3 h-screen overflow-y-scroll dark:bg-gray-900 p-2 "
    >
      <h1 class="font-bold text-slate-800 dark:text-base-100 p-2 text-right">
        AU-NT
      </h1>

      <trip-details-tabs :options="DetailsOption"></trip-details-tabs>
    </div>
  </div>
</template>
