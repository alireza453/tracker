<script setup lang="ts"></script>
<template>
  <div>
    <DesktopSidebar ></DesktopSidebar>

    <div class="ml-16 grid h-screen grid-rows-[56px_1fr] gap-0">
      <Navbar></Navbar>
      <main class="max-h-screen overflow-hidden">
        <slot />
      </main>
    </div>
  </div>
</template>
