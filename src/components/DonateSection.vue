<script setup>
import {
  UserPlusIcon,
  HomeModernIcon,
  PaintBrushIcon,
  StarIcon,
  GiftIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'
import { donatorPerks } from '../websiteData'

const icons = { UserPlusIcon, HomeModernIcon, PaintBrushIcon, StarIcon, GiftIcon, SparklesIcon }

// TODO: replace with your real store/Patreon/Ko-fi link.
const donateLink = 'https://noxite.co.nz/donate'
</script>

<template>
  <section class="bg-night text-cream py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="mx-auto max-w-2xl text-center" v-scroll-reveal>
        <h2 class="text-3xl font-semibold">Support Noxite</h2>
        <p class="mt-4 text-cream/70">
          Noxite is free to play and always will be. If you'd like to help cover hosting costs,
          donating unlocks a handful of extra perks as a thank you.
        </p>
      </div>

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" v-scroll-reveal-group>
      <div v-for="perk in donatorPerks" :key="perk.id" class="rounded-2xl bg-night-light p-5">
        <div class="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-coral text-white">
          <component :is="icons[perk.icon]" class="h-5 w-5" />
        </div>
        <h3 class="font-display font-semibold">{{ perk.title }}</h3>
        <p class="mt-2 text-sm text-cream/70">{{ perk.description }}</p>
      </div>
    </div>

      <div class="mt-10 text-center">
        <a :href="donateLink" target="_blank" rel="noopener" class="btn-game btn-game-coral">
          Become a Donator
        </a>
        <p class="mt-3 text-xs text-cream/50">
          Donations support server hosting only — they never affect gameplay balance.
        </p>
      </div>
    </div>
  </section>
</template>