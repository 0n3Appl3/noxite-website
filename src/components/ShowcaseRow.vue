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
  items: { type: Array, required: true }
})
</script>

<template>
  <div class="relative overflow-hidden py-16 w-full min-h-[600px] md:min-h-[520px]">
    <img
      :src="image"
      :alt="alt"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />

    <div
      class="absolute inset-0 bg-night/65"
      :class="align === 'left'
        ? 'md:bg-gradient-to-r md:from-night md:via-night/75 md:to-transparent'
        : 'md:bg-gradient-to-l md:from-night md:via-night/75 md:to-transparent'"
    ></div>

    <div class="relative mx-auto flex h-full max-w-6xl px-4">
      <div
        class="flex w-full flex-col justify-center gap-4 py-10 md:w-1/2 md:py-0 lg:w-2/5"
        :class="align === 'left' ? 'md:mr-auto' : 'md:ml-auto'"
      >
        <div
          v-scroll-reveal
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