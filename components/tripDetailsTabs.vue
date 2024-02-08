<script setup lang="ts">
import type { detailsTabOptionDto } from "~/models/PropsModelsDTO";

const details_tab_items = [
  {
    key: "options_info",
    label: "تنظیمات",
    description: "details about options",
  },
  {
    key: "trip_info",
    label: "سفر",
    description: "details about trip",
  },
  {
    key: "driver_device_info",
    label: "جزئیات",
    description: "details about driver",
  },
];
//=======================

const trackerOptions = reactive({
  showRouteHistory: false,
  showPopup: false,
  openIconSelectorModal: false,
  endTripotification: false,
});

const props = defineProps<{ options: detailsTabOptionDto }>();
</script>

<template>
  <UTabs :items="details_tab_items" class="w-full">
    <template #item="{ item }">
      <!--start trip content -->
      <div v-if="item.key === 'trip_info'" class="space-y-3">
        <UProgress :value="options.tripProcess" :max="100" indicator />

        <div class="flex justify-around items-center text-sm">
          <div
            class="flex items-center justify-center gap-1 dark:text-base-100"
          >
            <span class="font-bold text-lg"> 1:20:45 </span>

            <span class="text-emerald-500 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M464 256a208 208 0 1 1-416 0a208 208 0 1 1 416 0M0 256a256 256 0 1 0 512 0a256 256 0 1 0-512 0m232-136v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24"
                />
              </svg>
            </span>
          </div>
          <UDivider class="w-1/3"></UDivider>
          <div
            class="flex items-center justify-center gap-1 dark:text-base-100"
          >
            <span class="font-bold text-lg"> 2کیلومتر </span>
            <span class="text-emerald-500 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 96 43 96 96s-43 96-96 96H139.6c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96c-53 0-96-43-96-96s43-96 96-96h39.8c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96M117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2l-.2-.2c-6 4.6-14.6 4-20-1.8C59.8 473 0 402.5 0 352c0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9c-10.7 14.7-21.7 28-30.8 38.5zM128 352a32 32 0 1 0-64 0a32 32 0 1 0 64 0m288-224a32 32 0 1 0 0-64a32 32 0 1 0 0 64"
                />
              </svg>
            </span>
          </div>
        </div>

        <!-- start -->
        <UCard class="dark:bg-gray-800">
          <div class="flex items-center justify-end gap-2">
            <div class="text-right flex items-end justify-start flex-col gap-2">
              <span class="text-gray-800 badge dark:badge-neutral">
                12:29:26, 1402-11-19
              </span>
              <span class="text-gray-800 badge dark:badge-neutral">
                X: 29.612901, Y: 52.550955
              </span>
            </div>

            <span class="w-11 h-11 text-info">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85c58.9 0 106.7 47.8 106.7 106.8S314.9 298.6 256 298.6m0-170.6c-35.4 0-64 28.6-64 64s28.6 64 64 64s64-28.6 64-64s-28.6-64-64-64"
                />
              </svg>
            </span>
          </div>
          <UTooltip text="کپی اطلاعات مبدا" :popper="{ placement: 'left' }">
            <span
              class="hover:text-indigo-700 dark:hover:text-orange-500 hover:cursor-pointer text-gray-800 dark:text-base-100 text-sm text-right"
              >آدرس: فارس، شیراز، بلوار کریمخان زند، کریمخان زند ۱۱،
              دانشور</span
            >
          </UTooltip>
        </UCard>

        <!-- destination -->
        <UCard class="dark:bg-gray-800">
          <div class="flex items-center justify-end gap-2">
            <div class="text-right flex items-end justify-start flex-col gap-2">
              <span class="text-gray-800 badge dark:badge-neutral"
                >12:29:26, 1402-11-19</span
              >
              <span class="text-gray-800 badge dark:badge-neutral">
                29.612901, 52.550955
              </span>
            </div>
            <span class="w-11 h-11 text-rose-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85c58.9 0 106.7 47.8 106.7 106.8S314.9 298.6 256 298.6m0-170.6c-35.4 0-64 28.6-64 64s28.6 64 64 64s64-28.6 64-64s-28.6-64-64-64"
                />
              </svg>
            </span>
          </div>
          <UTooltip text="کپی اطلاعات مقصد" :popper="{ placement: 'left' }">
            <span
              class="hover:text-indigo-700 dark:hover:text-orange-500 hover:cursor-pointer text-gray-800 dark:text-base-100 text-sm text-right"
              >آدرس: فارس، شیراز، بلوار کریمخان زند، کریمخان زند ۱۱،
              دانشور</span
            >
          </UTooltip>
        </UCard>
      </div>
      <!--end trip content -->

      <!--start details content -->
      <div v-else-if="item.key === 'driver_device_info'" class="space-y-3">
        <UCard class="dark:bg-gray-800">
          <div class="flex items-center justify-end gap-2">
            <div class="text-right flex items-end justify-start flex-col gap-2">
              <span class="text-gray-800 dark:text-base-100"
                >علیرضا: راننده</span
              >
              <span class="text-gray-800 dark:text-base-100"> مشخصات </span>
            </div>
            <div class="avatar">
              <div
                class="w-16 h-16 rounded-full ring ring-cyan-500 ring-offset-base-100 ring-offset-2"
              >
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
          <UTooltip text="کپی اطلاعات " :popper="{ placement: 'left' }">
            <span
              class="hover:text-indigo-700 dark:hover:text-orange-500 hover:cursor-pointer text-gray-800 dark:text-base-100 text-sm text-right"
              >آدرس: فارس، شیراز، بلوار کریمخان زند، کریمخان زند ۱۱،
              دانشور</span
            >
          </UTooltip>
        </UCard>
        <UCard class="dark:bg-gray-800">
          <div class="flex items-center justify-end gap-2">
            <div class="text-right flex items-end justify-start flex-col gap-2">
              <span class="text-gray-800 dark:text-base-100"
                >علیرضا: راننده</span
              >
              <span class="text-gray-800 dark:text-base-100"> مشخصات </span>
            </div>
            <div class="avatar">
              <div
                class="w-16 h-16 rounded-full ring ring-cyan-500 ring-offset-base-100 ring-offset-2"
              >
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
          <UTooltip text="کپی اطلاعات " :popper="{ placement: 'left' }">
            <span
              class="hover:text-indigo-700 dark:hover:text-orange-500 hover:cursor-pointer text-gray-800 dark:text-base-100 text-sm text-right"
              >آدرس: فارس، شیراز، بلوار کریمخان زند، کریمخان زند ۱۱،
              دانشور</span
            >
          </UTooltip>
        </UCard>
      </div>
      <!--end details content -->

      <!--start option content -->
      <div v-else>
        <div class="flex flex-col gap-4 p-2">
          <div
            class="flex items-center justify-between"
            v-if="options.showRouteOption"
          >
            <input
              type="checkbox"
              class="toggle toggle-primary toggle-sm"
              checked
              v-model="trackerOptions.showRouteHistory"
            />

            <span class="text-gray-800 dark:text-base-100 text-sm"
              >نمایش مسیر طی شده</span
            >
          </div>

          <div
            class="flex items-center justify-between"
            v-if="options.endTripNotificationOption"
          >
            <input type="checkbox" class="toggle toggle-primary toggle-sm" />
            <span class="text-gray-800 dark:text-base-100 text-sm"
              >اعلان پایان سفر</span
            >
          </div>

          <div
            class="flex items-center justify-between"
            v-if="options.showPopupOption"
          >
            <input type="checkbox" class="toggle toggle-primary toggle-sm" />
            <span class="text-gray-800 dark:text-base-100 text-sm"
              >نمایش پاپ‌آپ</span
            >
          </div>
          <div
            class="flex items-center justify-between"
            v-if="options.routeColorOption"
          >
            <UButton
              onclick="iconSelect_modal.showModal()"
              label="انتخاب"
              variant="ghost"
              size="sm"
            ></UButton>
            <span class="text-gray-800 dark:text-base-100 text-sm"
              >تغییر رنگ مسیر</span
            >
          </div>
          <div
            class="flex items-center justify-between"
            v-if="options.changeIconOption"
          >
            <UButton
              onclick="iconSelect_modal.showModal()"
              label="انتخاب"
              variant="ghost"
              size="sm"
            ></UButton>
            <span class="text-gray-800 dark:text-base-100 text-sm"
              >تغییر آیکون</span
            >
          </div>

          <UCard v-if="options.playHistory">
            <UProgress :value="20" indicator size="sm" />
            <div class="flex items-center justify-center gap-1 mt-2">
              <div class="flex items-center justify-around gap-3 mt-2">
                <span class="text-sm text-gray-800 dark:text-base-100"
                  >-1.25 x</span
                >
                <UTooltip text="کاهش سرعت" :popper="{ placement: 'top' }">
                  <button class="btn btn-sm btn-circle">
                    <UIcon name="i-heroicons-backward" class="w-4 h-4" />
                  </button>
                </UTooltip>
                <UTooltip text="پخش/توقف" :popper="{ placement: 'top' }">
                  <button class="btn btn-sm btn-circle">
                    <UIcon name="i-heroicons-play-solid" class="w-4 h-4" />
                  </button>
                </UTooltip>
                <UTooltip text="افزایش سرعت" :popper="{ placement: 'top' }">
                  <button class="btn btn-sm btn-circle">
                    <UIcon name="i-heroicons-forward" class="w-4 h-4" />
                  </button>
                </UTooltip>
                <span class="text-sm text-gray-800 dark:text-base-100"
                  >1.25 x</span
                >
              </div>
            </div>
            <span class="text-gray-800 dark:text-base-100 text-center block p-2"
              >6:22:45 1402-11-19</span
            >
          </UCard>
        </div>
      </div>
      <!--end option content -->
    </template>
  </UTabs>
</template>
