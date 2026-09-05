<!-- Save as src/components/CallToAction.vue -->
<script setup>
import scrollToTop from '../scrollToTop'

defineProps({
  title: String,
  description: String,
  link: String,
  website: String,
  buttonText: String
})

const openWebsite = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="border-y-4 border-night/5 bg-coral-light">
    <div class="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="text-center md:text-left">
        <h3 class="text-2xl font-semibold text-night">{{ title }}</h3>
        <p class="text-night/70 mt-1">{{ description }}</p>
      </div>
      <RouterLink v-if="link" :to="link" @click="scrollToTop">
        <button type="button" class="btn-game btn-game-coral">
          {{ buttonText }}
        </button>
      </RouterLink>
      <button v-if="website" type="button" class="btn-game btn-game-coral" @click="openWebsite(website)">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>