<script setup lang="ts">
const props = defineProps({
  data: {},
});
</script>
<template>
  <div
    class="h-16 bg-white dark:bg-gray-900 dark:hover:bg-gray-800 p-1 border-solid hover:bg-indigo-50 hover:cursor-pointer"
  >
    <div class="flex items-center justify-start gap-2">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="['w-6', 'h-6', `text-${data.icon_color}`]"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"
          />
        </svg>
      </span>

      <div>
        <span class="mb-1 text block dark:text-base-100">{{ data.name }}</span>

        <div class="flex items-center justify-between gap-2">
          <!-- <span 
            class="badge font-semibold text-xs"
            >{{ data.type }}</span
          > -->
          <span class="text-gray-500 block font-semibold text-xs dark:text-slate-400">{{
            data.trip_code
          }}</span>
        </div>
      </div>

      <UAvatar
        :chip-color="data.status"
        chip-position="top-right"
        size="md"
        class="border ml-auto"
        :src="data.avatar"
        alt="Avatar"
      />
    </div>
  </div>
</template>
