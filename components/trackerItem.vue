<script setup lang="ts">
const props = defineProps({
  data: {},
});
</script>
<template>
  <div
    class="h-16 bg-white dark:bg-gray-900 dark:hover:bg-gray-800 p-1 hover:transition-all duration-400 border-solid hover:bg-indigo-50 hover:cursor-pointer"
  >
    <div class="flex items-center justify-around gap-2">
      <UAvatar
        :chip-color="data.status"
        chip-position="top-right"
        size="md"
        class="border"
        :src="data.avatar"
        alt="Avatar"
      />

      <div class="flex flex-col flex-1 justify-center items-start">
        <span class="mb-1 text block dark:text-base-100">{{ data.name }}</span>
        <span
          class="badge text-xs text-gray-500 dark:text-base-300 dark:badge-neutral"
          >{{ data.trip_code }}</span
        >
        <!-- <span 
            class="badge  text-xs text-gray-500 dark:text-base-300 dark:badge-neutral"
            >{{ data.type }}</span
          > -->
      </div>

      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          :class="['w-5 h-5', `text-${data.icon_color}`]"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M20.891 2.006L20.997 2l.13.008l.09.016l.123.035l.107.046l.1.057l.09.067l.082.075l.052.059l.082.116l.052.096c.047.1.077.206.09.316l.005.106c0 .075-.008.149-.024.22l-.035.123l-6.532 18.077A1.55 1.55 0 0 1 14 22.32a1.547 1.547 0 0 1-1.329-.747l-.065-.127l-3.352-6.702l-6.67-3.336a1.55 1.55 0 0 1-.898-1.259L1.68 10c0-.56.301-1.072.841-1.37l.14-.07l18.017-6.506l.106-.03l.108-.018z"
            />
          </g>
        </svg>
      </span>
    </div>
  </div>
</template>
