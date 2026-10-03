<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  ShieldCheckIcon,
  HomeIcon,
  MapPinIcon,
  MoonIcon,
  CubeIcon,
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline'

const icons = { ShieldCheckIcon, HomeIcon, MapPinIcon, MoonIcon, CubeIcon, ChatBubbleLeftRightIcon }

const props = defineProps({
  image: { type: String, required: true },
  alt: { type: String, default: '' },
  items: { type: Array, required: true },
  heading: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  headingAlign: { type: String, default: 'center', validator: (v) => ['left', 'center', 'right'].includes(v) }
})

const headingAlignClass = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end'
}

// Fallback for items without their own `image`: show a different slice of the shared
// section photo so each card still looks distinct.
const cardPositions = ['15% 40%', '50% 60%', '85% 40%', '30% 80%', '70% 20%', '50% 50%']

/*
 * Infinite loop: the items are rendered COPIES times in a row. The carousel starts on the
 * first item of the middle copy, and whenever scrolling settles it is silently shifted back
 * into the middle copy (every copy looks identical, so the jump is invisible). That leaves
 * plenty of runway in both directions, so it wraps around forever.
 */
const COPIES = 5
const MIDDLE = Math.floor(COPIES / 2)

const n = computed(() => props.items.length)
const loopItems = computed(() =>
  Array.from({ length: COPIES }, (_, copy) =>
    props.items.map((item, i) => ({ item, copy, i, key: `${copy}-${item.id}` }))
  ).flat()
)

const track = ref(null)
const activeGlobal = ref(0) // Index into loopItems of the card nearest the centre.
const active = computed(() => (n.value ? activeGlobal.value % n.value : 0))

let idleTimer = null

function cardCentre(child) {
  return child.offsetLeft + child.offsetWidth / 2
}

function scrollLeftFor(child, el) {
  return child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2
}

function nearestIndex(el) {
  const centre = el.scrollLeft + el.clientWidth / 2
  let best = 0
  let bestDistance = Infinity
  Array.from(el.children).forEach((child, i) => {
    const distance = Math.abs(cardCentre(child) - centre)
    if (distance < bestDistance) {
      bestDistance = distance
      best = i
    }
  })
  return best
}

// Silently shift into the middle copy once scrolling has stopped.
function recentre() {
  const el = track.value
  if (!el || dragging.value || n.value < 2) return
  const g = nearestIndex(el)
  const copy = Math.floor(g / n.value)
  if (copy === MIDDLE) return
  const setWidth = el.children[n.value].offsetLeft - el.children[0].offsetLeft
  el.scrollTo({ left: el.scrollLeft + (MIDDLE - copy) * setWidth, behavior: 'instant' })
  activeGlobal.value = g + (MIDDLE - copy) * n.value
}

function update() {
  const el = track.value
  if (!el) return
  activeGlobal.value = nearestIndex(el)
  clearTimeout(idleTimer)
  idleTimer = setTimeout(recentre, 150)
}

function goTo(globalIndex, behavior = 'smooth') {
  const el = track.value
  if (!el) return
  const g = Math.max(0, Math.min(loopItems.value.length - 1, globalIndex))
  activeGlobal.value = g
  el.scrollTo({ left: scrollLeftFor(el.children[g], el), behavior })
}

// Dots pick the closest copy of the chosen item, so the jump stays short.
function goToItem(i) {
  const base = Math.floor(activeGlobal.value / n.value) * n.value
  goTo(base + i)
}

// Mouse drag-to-swipe. Touch swiping already works natively via overflow scrolling.
const dragging = ref(false)
let dragStartX = 0
let dragStartScroll = 0
let dragMoved = false

function onPointerDown(e) {
  if (e.pointerType !== 'mouse' || e.button !== 0) return
  dragging.value = true
  dragMoved = false
  dragStartX = e.clientX
  dragStartScroll = track.value.scrollLeft
  track.value.setPointerCapture(e.pointerId)
}

function onPointerMove(e) {
  if (!dragging.value) return
  const dx = e.clientX - dragStartX
  if (Math.abs(dx) > 5) dragMoved = true
  track.value.scrollLeft = dragStartScroll - dx
}

function onPointerUp(e) {
  if (!dragging.value) return
  dragging.value = false
  track.value.releasePointerCapture?.(e.pointerId)
  if (dragMoved) {
    // Settle on whichever card is nearest the centre.
    activeGlobal.value = nearestIndex(track.value)
    goTo(activeGlobal.value)
  }
}

function onCardClick(g) {
  if (dragMoved) {
    dragMoved = false // The click at the end of a drag should not select a card.
    return
  }
  goTo(g)
}

function startInMiddle() {
  if (!n.value) return
  goTo(MIDDLE * n.value, 'instant') // First item of the middle copy, centred.
}

onMounted(async () => {
  await nextTick()
  startInMiddle()
  window.addEventListener('resize', update)
})
onBeforeUnmount(() => {
  clearTimeout(idleTimer)
  window.removeEventListener('resize', update)
})
</script>

<template>
  <div class="relative overflow-hidden py-16 w-full">
    <img
      :src="image"
      :alt="alt"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
    <div class="absolute inset-0 bg-night/20"></div>
    <div class="absolute inset-0 bg-coral/100 mix-blend-multiply"></div>

    <div class="relative">
      <div
        v-if="heading || subtitle"
        v-scroll-reveal
        class="mx-auto mb-8 flex max-w-6xl flex-col px-4"
        :class="headingAlignClass[headingAlign]"
      >
        <h2 v-if="heading" class="text-2xl font-display font-semibold text-cream md:text-3xl">
          {{ heading }}
        </h2>
        <p v-if="subtitle" class="mt-2 max-w-2xl text-sm text-cream/80 md:text-base">
          {{ subtitle }}
        </p>
      </div>

      <!-- Carousel track. Spans the full page width and loops endlessly. -->
      <div
        ref="track"
        @scroll.passive="update"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
        class="relative flex w-full select-none gap-5 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        :class="dragging ? 'cursor-grabbing' : 'snap-x snap-mandatory cursor-grab'"
        role="group"
        aria-roledescription="carousel"
      >
        <button
          v-for="(entry, g) in loopItems"
          :key="entry.key"
          type="button"
          @click="onCardClick(g)"
          :aria-hidden="entry.copy !== MIDDLE"
          :tabindex="entry.copy === MIDDLE ? 0 : -1"
          :aria-label="`${entry.item.title}, card ${entry.i + 1} of ${n}`"
          :aria-current="entry.i === active"
          class="group relative h-[32rem] w-80 shrink-0 snap-center overflow-hidden rounded-3xl bg-night text-left text-cream ring-1 transition-[box-shadow,filter] duration-300 focus-visible:outline-none sm:h-[36rem] sm:w-96"
          :class="entry.i === active ? 'ring-cream/40' : 'ring-transparent brightness-95 hover:brightness-100'"
        >
          <!-- Artwork -->
          <img
            :src="entry.item.image || image"
            :alt="entry.item.imageAlt || ''"
            draggable="false"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            :style="entry.item.image ? undefined : { objectPosition: cardPositions[entry.i % cardPositions.length] }"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent from-35% via-night/60 via-65% to-night"></div>

          <div class="absolute inset-x-0 bottom-0 p-6">
            <h3 class="font-display text-2xl font-semibold leading-tight">{{ entry.item.title }}</h3>
            <div class="my-3 h-px bg-cream/40"></div>
            <p class="text-base leading-snug text-cream/80">{{ entry.item.description }}</p>

            <div class="mt-4 flex items-center justify-between">
              <span class="grid h-7 w-7 place-items-center rounded-md bg-coral text-white">
                <component :is="icons[entry.item.icon]" class="h-4 w-4" />
              </span>
              <img src="@/assets/noxite-wordmark.png" alt="Noxite" class="h-5 w-auto opacity-20" draggable="false" />
            </div>
          </div>
        </button>
      </div>

      <!-- Controls -->
      <div v-if="n > 1" class="mx-auto mt-3 flex max-w-6xl items-center justify-center gap-3 px-4">
        <button
          type="button"
          @click="goTo(activeGlobal - 1)"
          aria-label="Previous"
          class="grid h-7 w-7 place-items-center rounded-full bg-night/60 text-cream transition-colors hover:bg-night"
        >
          <ChevronLeftIcon class="h-4 w-4" />
        </button>

        <div class="flex items-center gap-1.5">
          <button
            v-for="(item, i) in items"
            :key="item.id"
            type="button"
            @click="goToItem(i)"
            :aria-label="`Go to ${item.title}`"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="i === active ? 'w-4 bg-cream' : 'w-1.5 bg-cream/50 hover:bg-cream'"
          ></button>
        </div>

        <button
          type="button"
          @click="goTo(activeGlobal + 1)"
          aria-label="Next"
          class="grid h-7 w-7 place-items-center rounded-full bg-night/60 text-cream transition-colors hover:bg-night"
        >
          <ChevronRightIcon class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</template>