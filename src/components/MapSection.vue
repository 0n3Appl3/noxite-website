<script setup>
import { MapIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'

const mapLink = 'https://map.noxite.co.nz'

const mapImage = new URL('../assets/map.png', import.meta.url).href
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-16">
    <div class="grid items-center gap-10 md:grid-cols-2">
      <div class="text-left" v-scroll-reveal>
        <div class="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-coral text-white">
          <MapIcon class="h-5 w-5" />
        </div>
        <h2 class="text-3xl font-semibold">Explore the world</h2>
        <p class="mt-4 text-night/70">
          See what everyone has been building. The live server map allows you to explore the world from
          your browser, scout out new places to visit, and find your friends' bases.
        </p>

        <ul class="mt-5 space-y-2 text-sm text-night/70">
          <li class="flex items-center gap-2">
            <ShieldCheckIcon class="h-5 w-5 shrink-0 text-coral" />
            See every land claim, colour-coded by owner
          </li>
          <li class="flex items-center gap-2">
            <MapIcon class="h-5 w-5 shrink-0 text-coral" />
            Pan and zoom across the whole explored world
          </li>
        </ul>

        <a
          :href="mapLink"
          target="_blank"
          rel="noopener"
          class="btn-game btn-game-coral mt-8 inline-flex items-center gap-2"
        >
          View the Map
        </a>
      </div>

      <div class="overflow-hidden rounded-2xl shadow-pop" v-scroll-reveal>
        <a :href="mapLink" target="_blank" rel="noopener" aria-label="Open the Noxite server map">
          <img
            :src="mapImage"
            alt="A preview of the Noxite server map"
            class="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-80"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </section>
</template>