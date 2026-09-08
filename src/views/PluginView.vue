<script setup>
import {
  ShieldCheckIcon,
  HomeIcon,
  MapPinIcon,
  MoonIcon,
  UserGroupIcon,
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  PaintBrushIcon,
  NoSymbolIcon,
  ArrowsRightLeftIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/vue/24/outline'
import { featuredPlugins, otherPlugins } from '../websiteData'
import StyledHeading from '../components/StyledHeading.vue'
import CallToAction from '../components/CallToAction.vue'

const icons = {
  ShieldCheckIcon,
  HomeIcon,
  MapPinIcon,
  MoonIcon,
  UserGroupIcon,
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  PaintBrushIcon,
  NoSymbolIcon,
  ArrowsRightLeftIcon,
  AdjustmentsHorizontalIcon
}
</script>

<template>
  <main class="page-full-height pb-16">
    <StyledHeading title="OneEngine" background="./src/assets/thing_2.png" />

    <div class="mx-auto max-w-3xl px-4 py-12 text-left sm:text-center" v-scroll-reveal>
      <h2 class="text-3xl font-semibold">OneEngine to Rule Them All</h2>
      <p class="mt-4 text-night/70">
        OneEngine is the custom, all-in-one core plugin that powers Noxite. Instead of stitching together a dozen separate plugins, everything from land claiming to moderation, homes, chat formatting and more lives in a single, purpose-built package.
      </p>
      <p class="mt-3 text-night/70">
        It was built for a near-vanilla survival SMP experience, and it's designed to be configured, not just installed. Costs, timers, formats, and permissions can all be tuned to suit a different server's needs.
      </p>
    </div>

    <!-- Top 3 features -->
    <div class="mx-auto max-w-6xl px-4">
      <div class="grid gap-4 sm:grid-cols-3" v-scroll-reveal-group>
        <div v-for="feature in featuredPlugins" :key="feature.id" class="rounded-2xl bg-white p-5 shadow-pop">
          <div class="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-coral text-white">
            <component :is="icons[feature.icon]" class="h-5 w-5" />
          </div>
          <h3 class="font-display font-semibold">{{ feature.title }}</h3>
          <p class="mt-2 text-sm text-night/70">{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <!-- Remaining features, as a list -->
    <div class="mx-auto max-w-4xl px-4 py-16">
      <h3 class="text-2xl font-semibold text-left sm:text-center" v-scroll-reveal>More Features</h3>
      <div class="mt-8 divide-y divide-night/10 rounded-2xl bg-white shadow-pop" v-scroll-reveal-group>
        <div v-for="feature in otherPlugins" :key="feature.id" class="flex gap-4 p-5">
          <div class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-coral-light text-coral">
            <component :is="icons[feature.icon]" class="h-5 w-5" />
          </div>
          <div>
            <h4 class="font-display font-semibold">{{ feature.title }}</h4>
            <p class="mt-1 text-sm text-night/70">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-3xl px-4 pb-4 text-left sm:text-center" v-scroll-reveal>
      <h2 class="text-3xl font-semibold">Want to run it on your own server?</h2>
      <p class="mt-4 text-night/70">
        OneEngine isn't limited to Noxite. If you're a server owner or administrator interested in giving it a try, the plugin can be tailored to your server's setup and rules.
      </p>
      <p class="mt-3 text-night/70">
        Getting your own copy of OneEngine, along with any customisation work, is a paid service. Pricing depends on what you're after and is discussed directly.
      </p>
    </div>
  </main>

  <CallToAction
    title="Have any questions?"
    description="Get in touch with 0n3Appl3 on Discord to talk about a copy of the plugin, customisations, and pricing."
    website="https://discord.gg/xnyMD2r"
    buttonText="Contact on Discord"
  />
</template>