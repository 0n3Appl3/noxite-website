<!-- Save as src/views/RulesView.vue -->
<script setup>
import StyledHeading from '../components/StyledHeading.vue'
import { rules } from '../websiteData'
</script>

<template>
  <main class="page-full-height pb-16">
    <StyledHeading title="Server Rules" background="./src/assets/thing_5.png" />

    <div class="mx-auto max-w-3xl px-4 py-12">
      <h3 class="text-2xl font-semibold">Keeping it clean</h3>
      <p class="mt-3 text-night/70">
        In order to keep this server as amazing as it is, everyone must obey the following rules.
        A lot of these are common sense and online etiquette, but it is still worth mentioning.
        These rules may change at any point and the moderation team have the final say.
      </p>

      <div class="mt-10 space-y-4">
        <div
          v-for="rule in rules"
          :key="rule.id"
          class="flex gap-4 rounded-2xl bg-white p-5 shadow-pop"
        >
          <div class="grid h-9 w-9 shrink-0 place-items-center rounded-full font-display font-semibold bg-coral text-white">
            {{ rule.id }}
          </div>
          <div>
            <h5 class="font-display font-semibold">{{ rule.title }}</h5>
            <p class="mt-1 text-sm text-night/70">{{ rule.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>