<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
<template>
  <div class="navbar bg-base-100 dark:bg-gray-900 shadow z-10">
    <div class="flex-1">
      <h2 class="text-xl font-bold text-indigo-500 dark:text-base-100">
        Location Tracking
        <NuxtLink to="/test">----go test page</NuxtLink>
      </h2>
    </div>
    <div class="flex items-center">
      <ClientOnly>
        <UButton
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />
        <template #fallback>
          <div class="w-8 h-8" />
        </template>
      </ClientOnly>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="dark:text-base-100  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-700 rounded-box w-52"
        >
          <li>
            <a> حساب کاربری </a>
          </li>
          <li>
            <a> گزارش ورود به سیستم </a>
          </li>
          <li><a>تنظیمات</a></li>
          <li class="text-red-500 font-semibold"><a>خروج</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
