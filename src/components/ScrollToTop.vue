<script setup lang="ts">
import { ref } from 'vue'

let show = ref(false)

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        show.value = true
    } else {
        show.value = false
    }
})
</script>

<template>
    <Transition name="scroll-top">
        <div v-if="show" class="scroll-top__container">
            <a href="#">
                Go To Top
                <i class="bi bi-arrow-up-circle-fill"></i>
            </a>
        </div>
    </Transition>
</template>

<style scoped>
a {
    display: flex;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0 0.6rem;
    border-radius: 2rem;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--color-text);
    background-color: var(--color-text);
    color: var(--color-background);
    transition: all 0.15s ease-in-out;
}
a:hover {
    background-color: var(--color-background);
    color: var(--color-text);
}
i {
    font-size: 1.5rem;
    margin-left: 0.5rem;
}
.scroll-top__container {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
}
.scroll-top-enter-active, .scroll-top-leave-active  {
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.scroll-top-enter-from, .scroll-top-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>