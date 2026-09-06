<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import scrollToTop from './scrollToTop'
import ScrollToTop from './components/ScrollToTop.vue'

const year = new Date().getFullYear()

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/rules', label: 'Rules' },
  { to: '/guides', label: 'Guides' }
]
</script>

<template>
  <Disclosure as="nav" v-slot="{ open, close }" class="fixed top-0 z-30 w-full bg-cream/90 backdrop-blur border-b-4 border-night/5">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex h-20 items-center justify-between">
        <RouterLink to="/" @click="scrollToTop" class="shrink-0">
          <img alt="Noxite logo" src="@/assets/noxite-wordmark.png" class="h-9 w-auto" />
        </RouterLink>

        <div class="hidden md:flex items-center gap-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            @click="scrollToTop"
            class="pill-link text-night hover:bg-night/5"
            active-class="!bg-coral !text-white"
          >
            {{ link.label }}
          </RouterLink>

          <a href="https://discord.gg/xnyMD2r" target="_blank" rel="noopener"
             class="grid h-10 w-10 place-items-center rounded-full bg-night/5 text-night hover:bg-coral hover:text-white transition-colors" aria-label="Discord">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor"><path d="M20.3 5.4a17 17 0 0 0-4.2-1.3l-.2.4c1.6.4 2.5.9 3.4 1.6-1.5-.7-3-1.2-4.9-1.2s-3.4.5-4.9 1.2c.9-.7 1.9-1.3 3.5-1.6l-.2-.4A17 17 0 0 0 3.7 5.4C1.8 8.9 1.3 12.3 1.5 15.6a17 17 0 0 0 5.1 2.6c.4-.6.8-1.2 1-1.9-.6-.2-1.1-.5-1.6-.8l.4-.3c3 1.4 6.3 1.4 9.3 0l.4.3c-.5.3-1 .6-1.6.8.3.7.6 1.3 1 1.9a17 17 0 0 0 5.1-2.6c.3-3.8-.5-7.2-2.3-10.2ZM8.7 13.6c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.7.8 1.6 1.8c0 1-.7 1.8-1.6 1.8Zm6.6 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.7.8 1.6 1.8c0 1-.7 1.8-1.6 1.8Z"/></svg>
          </a>
        </div>

        <DisclosureButton class="md:hidden grid h-10 w-10 place-items-center rounded-full bg-night/5 text-night">
          <Bars3Icon v-if="!open" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </DisclosureButton>
      </div>
    </div>

    <DisclosurePanel class="md:hidden bg-cream border-t-4 border-night/5 px-4 pb-4">
      <div class="flex flex-col gap-1 pt-2">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          @click="() => { scrollToTop(); close() }"
          class="pill-link text-night hover:bg-night/5"
          active-class="!bg-coral !text-white"
        >
          {{ link.label }}
        </RouterLink>
        <div class="flex gap-2 pt-2">
          <a href="https://bsky.app/profile/noxitenz.bsky.social" target="_blank" rel="noopener" class="pill-link bg-night/5 text-night">Bluesky</a>
          <a href="https://discord.gg/xnyMD2r" target="_blank" rel="noopener" class="pill-link bg-night/5 text-night">Discord</a>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <div class="pt-20">
    <RouterView />
  </div>

  <ScrollToTop />

  <footer class="bg-night text-cream rounded-t-[2.5rem] mt-10">
    <div class="mx-auto max-w-6xl px-4 py-10">
      <div class="flex flex-wrap items-center justify-between gap-6">
        <RouterLink to="/" @click="scrollToTop" class="flex items-center gap-3">
          <img src="../src/assets/noxite-icon.png" alt="Noxite logo" class="h-10 w-10 rounded-xl" />
          <span class="font-display font-semibold">&copy; {{ year }} Noxite, by 0n3Appl3</span>
        </RouterLink>
        <ul class="flex gap-2">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink :to="link.to" @click="scrollToTop" class="pill-link text-cream/80 hover:bg-white/10 hover:text-white">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>