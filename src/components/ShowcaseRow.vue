<script setup>
import {
  ShieldCheckIcon,
  HomeIcon,
  MapPinIcon,
  MoonIcon,
  CubeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/outline'

const icons = { ShieldCheckIcon, HomeIcon, MapPinIcon, MoonIcon, CubeIcon, ChatBubbleLeftRightIcon }

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  image: { type: String, required: true },
  alt: { type: String, default: '' },
  align: { type: String, default: 'left', validator: (v) => ['left', 'right'].includes(v) },
  items: { type: Array, required: true },
  // Optional heading shown above the three columns.
  heading: { type: String, default: '' },
  // Optional subtitle shown under the heading.
  subtitle: { type: String, default: '' },
  // Alignment of the heading/subtitle block.
  headingAlign: { type: String, default: 'center', validator: (v) => ['left', 'center', 'right'].includes(v) }
})

const headingAlignClass = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end'
}
</script>

<template>
  <div class="relative overflow-hidden py-16 w-full min-h-[600px] md:min-h-[420px]">
    <img
      :src="image"
      :alt="alt"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />

    <div class="absolute inset-0 bg-night/20"></div>
    <div class="absolute inset-0 bg-coral/100 mix-blend-multiply"></div>

    <div class="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4">
      <div
        v-if="heading || subtitle"
        v-scroll-reveal
        class="mb-8 flex flex-col"
        :class="headingAlignClass[headingAlign]"
      >
        <h2 v-if="heading" class="text-2xl font-display font-semibold text-cream md:text-3xl">
          {{ heading }}
        </h2>
        <p v-if="subtitle" class="mt-2 max-w-2xl text-sm text-cream/80 md:text-base">
          {{ subtitle }}
        </p>
      </div>

      <div
        v-scroll-reveal-group
        class="grid grid-cols-1 gap-4 py-10 md:grid-cols-3 md:py-0"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="rounded-2xl bg-white/10 backdrop-blur-sm p-5 text-cream"
        >
          <div class="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-coral text-white">
            <component :is="icons[item.icon]" class="h-5 w-5" />
          </div>
          <h3 class="font-display font-semibold">{{ item.title }}</h3>
          <p class="mt-1 text-sm text-cream/80">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>