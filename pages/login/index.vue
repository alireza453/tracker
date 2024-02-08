<script setup lang="ts">
definePageMeta({
  layout: "auth-layout",
});
const router = useRouter();

const login = () => {
  router.push("/map");
};
</script>
<template>
  <div class="flex items-center justify-center w-full h-screen bg-[#F5F7FA]">
    <img src="/images/4.png" class="w-1/2" alt="" />

    <div
      class="flex p-4 bg-base-100 dark:bg-gray-800 rounded-lg shadow-lg flex-col justify-center"
    >
      <div class="mx-auto w-full max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2
          class="mt-4 text-center text-xl font-bold leading-9 text-indigo-500"
        >
          سامانه جامع شهاب
        </h2>
      </div>
      <div class="mt-10 mx-auto w-full max-w-xs">
        <UForm class="space-y-3" @submit="login">
          <UFormGroup name="username">
            <UInput
              placeholder="نام کاربری"
              type="text"
              icon="i-heroicons-user"
            />
          </UFormGroup>
          <UFormGroup name="password">
            <UInput
              placeholder="رمزعبور"
              type="password"
              icon="i-heroicons-lock-closed"
            />
          </UFormGroup>
          <div>
            <UButton class="hover:shadow-md" color="primary" type="submit" block label="ورود">
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
  </div>
</template>
