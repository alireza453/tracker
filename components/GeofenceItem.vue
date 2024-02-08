<script setup lang="ts">
const props = defineProps({
  layers: {},
});
</script>
<template>
  <div
    class="h-16 bg-white dark:bg-gray-900 dark:hover:bg-gray-800 flex items-center justify-between p-2 border-solid hover:bg-indigo-50 hover:cursor-pointer"
  >
    <div class="flex items-center justify-start gap-2">
      <span class="w-7 h-7 text-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M4.914 0a1.5 1.5 0 0 0-1.06.44L.439 3.853A1.5 1.5 0 0 0 0 4.914v4.172c0 .398.158.78.44 1.06l3.414 3.415a1.5 1.5 0 0 0 1.06.439h4.172a1.5 1.5 0 0 0 1.06-.44l3.415-3.414A1.5 1.5 0 0 0 14 9.086V4.914a1.5 1.5 0 0 0-.44-1.06L10.147.439A1.5 1.5 0 0 0 9.086 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <UPopover mode="hover">
        <span class="text-gray-800 dark:text-base-100 text-sm">
          {{ layers.title }}
        </span>
        <template #panel>
          <div class="p-3">
           <span class=" text-sm text-gray-700 dark:text-base-100 ">
            {{ layers.desc }}
           </span>
          </div>
        </template>
      </UPopover>
    </div>

    <div class="flex items-center justify-end gap-2">
      <UTooltip text="اعلان ورود و خروج" :popper="{ placement: 'top' }">
        <UIcon
          name="i-heroicons-bell-alert-20-solid"
          v-if="props.layers.status"
          class="w-5 h-5 text-yellow-500"
        />
        <UIcon
          name="i-heroicons-bell-alert"
          v-if="!props.layers.status"
          class="w-5 h-5 text-yellow-500"
        />
      </UTooltip>
      <UTooltip text="حذف لایه" :popper="{ placement: 'top' }">
        <UIcon name="i-heroicons-trash-solid" class="w-5 h-5 text-red-500" />
      </UTooltip>
    </div>
  </div>
  <UDivider />
</template>
