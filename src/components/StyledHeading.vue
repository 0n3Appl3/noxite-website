<!-- Save as src/components/StyledHeading.vue -->
<script setup>
defineProps({
  title: String,
  background: String
})
</script>

<template>
  <div class="relative overflow-hidden rounded-b-[2.5rem] h-64 md:h-72">
    <div
      class="absolute inset-0 bg-cover bg-center scale-105"
      :style="{ backgroundImage: `url('${background}')` }"
    ></div>
    <div class="absolute inset-0 opacity-80 mix-blend-multiply bg-coral"></div>
    <div class="absolute inset-0 bg-night/30"></div>
    <div class="relative flex h-full items-center justify-center px-4">
      <h1 class="text-4xl md:text-5xl font-display font-semibold text-white text-center drop-shadow-sm">
        {{ title }}
      </h1>
    </div>
  </div>
</template>