<script setup>
defineProps({
    title: String,
    background: String,
})
</script>

<template>
<div class="overlay-container">
    <div class="bg-alt" :style="{ backgroundImage: `url('${ background }')` }"></div>
    <div class="bg-alt overlay red py-5 h-100"></div>
    <div class="bg-alt overlay">
        <div class="container py-5 h-100">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <div class="text-white">
                    <h3>{{ title }}</h3>
                </div>
            </div>
        </div>
    </div>
</div>
</template>