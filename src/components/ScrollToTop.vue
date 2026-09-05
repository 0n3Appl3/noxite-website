<!-- Save as src/components/ScrollToTop.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpCircleIcon } from '@heroicons/vue/24/solid'
import scrollToTop from '@/scrollToTop'

const show = ref(false)

const onScroll = () => {
  show.value = window.scrollY > 100
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-3"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-3"
  >
    <button
      v-if="show"
      @click="scrollToTop"
      class="fixed bottom-4 right-4 z-30 flex items-center gap-2 rounded-full bg-night text-cream pl-3 pr-4 py-2 text-sm font-display font-semibold shadow-pop hover:bg-coral transition-colors"
    >
      <ArrowUpCircleIcon class="h-5 w-5" />
      Go To Top
    </button>
  </Transition>
</template>