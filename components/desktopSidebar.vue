<script setup lang="ts">
const sidebar_items = [
  {
    id: 1,
    title: "نقشه زنده",
    icon: "i-heroicons-map",
    link: "/map",
  },
  {
    id: 2,
    title: "کاربران",
    icon: "i-heroicons-users",
    link: "/users",
  },
  {
    id: 3,
    title: "دستگاه ها",
    icon: "i-heroicons-signal",
    link: "/devices",
  },
  {
    id: 4,
    title: "سفرها",
    icon: "i-heroicons-globe-europe-africa",
    link: "/trips",
  },
  {
    id: 5,
    title: "ژئوفنس ها",
    icon: "i-heroicons-cube",
    link: "/geofences",
  },
  {
    id: 6,
    title: "تنظیمات",
    icon: "i-heroicons-cog-6-tooth",
    link: "/settings",
  },
];
</script>
<template>
  <!-- Static sidebar for desktop -->
  <div
    class="fixed inset-y-0 left-0 border-r-2 dark:boreder-2 dark:border-gray-800 w-20 overflow-y-auto dark:bg-gray-900 bg-base-100 pb-4"
  >
    <div class="flex h-16 shrink-0 items-center justify-center">
      <span class="text-indigo-500 w-10 h-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 3.001a8.98 8.98 0 0 0-8.981 8.98c0 2.35.9 4.488 2.378 6.09l.678.734l-1.47 1.356l-.678-.735a10.945 10.945 0 0 1-2.908-7.444C1.019 5.917 5.935 1 11.999 1C18.064 1 22.98 5.916 22.98 11.98c0 2.873-1.103 5.49-2.908 7.445l-.678.735l-1.47-1.356l.678-.735a8.945 8.945 0 0 0 2.378-6.088A8.98 8.98 0 0 0 12 3m0 4.5a4.5 4.5 0 0 0-3.308 7.55l.678.735l-1.47 1.356l-.678-.735a6.5 6.5 0 1 1 9.557 0l-.679.735l-1.47-1.356l.678-.735A4.5 4.5 0 0 0 12 7.5M10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m1.947 3.966L16.936 23H6.959zm0 3.457l-1.117 1.575h2.235z"
          />
        </svg>
      </span>
    </div>
    <nav class="mt-2">
      <ul role="list" class="flex flex-col items-center space-y-1">
        <li v-for="item in sidebar_items" :key="item.id" class="w-full">
          <nuxt-link
            :to="item.link"
            class="dark:hover:bg-gray-800 hover:bg-indigo-50 text-gray-400 dark:hover:text-white hover:text-indigo-500 group flex flex-col items-center justify-center rounded-md p-3 text-sm gap-y-2"
          >
            <UIcon :name="item.icon" class="w-6 h-6"></UIcon>
            <span class="text-center">{{ item.title }}</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
