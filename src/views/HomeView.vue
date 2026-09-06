<script setup>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon, ClipboardDocumentCheckIcon, ClipboardIcon } from '@heroicons/vue/24/outline'
import { ShieldCheckIcon, HomeIcon, MapPinIcon, MoonIcon, CubeIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import { features, faqs } from '../websiteData'
import CallToAction from '../components/CallToAction.vue'
import DonateSection from '../components/DonateSection.vue'

const icons = { ShieldCheckIcon, HomeIcon, MapPinIcon, MoonIcon, CubeIcon, ChatBubbleLeftRightIcon }

const showSnackbar = ref(false)
async function copyServerIP(ip) {
  await navigator.clipboard.writeText(ip)
  showSnackbar.value = true
  setTimeout(() => (showSnackbar.value = false), 2500)
}
</script>

<template>
  <header class="relative h-[85vh] min-h-[520px] overflow-hidden">
    <video playsinline autoplay muted loop class="absolute inset-0 h-full w-full object-cover">
      <source src="../assets/noxite-bkg.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-transparent"></div>
    <div class="relative mx-auto flex h-full max-w-6xl items-center px-4">
      <div class="text-white">
        <h1 class="text-5xl md:text-6xl font-display font-semibold">Survive together</h1>
        <p class="mt-2 text-lg md:text-xl text-cream/90">Minecraft multiplayer hosted in New Zealand</p>
        <button
          type="button"
          @click="copyServerIP('play.noxite.co.nz')"
          class="btn-game btn-game-coral mt-8"
        >
          <ClipboardIcon class="h-5" />
          play.noxite.co.nz
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-3"
    >
      <div
        v-if="showSnackbar"
        class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-2xl bg-night text-cream px-4 py-3 shadow-pop"
      >
        <ClipboardDocumentCheckIcon class="h-5 w-5 text-grass" />
        <span class="text-sm font-semibold">IP copied to clipboard</span>
      </div>
    </Transition>
  </header>

  <CallToAction
    title="Join our community on Discord"
    description="Send server chat messages to fellow players from the comfort of your mobile device!"
    website="https://discord.gg/xnyMD2r"
    buttonText="Join Discord"
  />

  <main>
    <div class="mx-auto max-w-3xl px-4 py-16 text-center" v-scroll-reveal>
      <h2 class="text-3xl font-semibold">Welcome to Noxite</h2>
      <p class="mt-4 text-night/70">Noxite is a Minecraft survival multiplayer server hosted in New Zealand.</p>
      <p class="mt-3 text-night/70">
        The server first opened in 2015 under the old name Appl3 PvP as a small factions community. A year later, we became to an SMP in 2016 and has since strived to deliver
        an experience that is more relaxed and welcoming.
      </p>
    </div>

    <div class="mx-auto max-w-6xl px-4 pb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" v-scroll-reveal-group>
      <div
        v-for="feature in features"
        :key="feature.id"
        class="rounded-xl2 bg-white shadow-pop p-6"
      >
        <div class="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-coral text-white">
          <component :is="icons[feature.icon]" class="h-6 w-6" />
        </div>
        <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
        <p class="mt-2 text-night/70 text-sm">{{ feature.description }}</p>
      </div>
    </div>

    <DonateSection />

    <div class="mx-auto max-w-3xl px-4 pb-20 pt-20">
      <h2 class="text-3xl font-semibold text-center" v-scroll-reveal>FAQ</h2>
      <div class="mt-8 space-y-3" v-scroll-reveal-group>
        <Disclosure v-for="faq in faqs" :key="faq.id" v-slot="{ open }">
          <div class="rounded-2xl bg-white shadow-pop overflow-hidden">
            <DisclosureButton class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold">
              {{ faq.question }}
              <ChevronDownIcon class="h-5 w-5 shrink-0 text-coral transition-transform" :class="{ 'rotate-180': open }" />
            </DisclosureButton>
            <DisclosurePanel class="px-5 pb-5 text-night/70 text-sm">
              {{ faq.answer }}
            </DisclosurePanel>
          </div>
        </Disclosure>
      </div>
    </div>
  </main>

  <CallToAction
    title="Learn about our custom plugin"
    description="All of Noxite's core functionality is powered by One Engine, our custom all-in-one SMP plugin."
    link="/guides"
    buttonText="Read Guides"
  />
</template>