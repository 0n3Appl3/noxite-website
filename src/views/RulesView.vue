<script setup>
import StyledHeading from '../components/StyledHeading.vue'
import { rules } from '../websiteData'
</script>

<template>
<main class="page-full-height">
    <StyledHeading title="Server Rules" background="./src/assets/thing_5.png" />
    <div class="container-sm py-5">
        <h3>Keeping it clean</h3>
        <p>In order to keep this server as amazing as it is, everyone must obey the following rules. A lot of these are common sense and online etiquette, but it is still worth mentioning. These rules may change at any point and the moderation team have the final say.</p>
        <br>
        <div v-for="rule in rules" :key="rule.id">
            <h5>{{ rule.id }}. {{ rule.title }}</h5>
            <p>{{ rule.description }}</p>
        </div>
    </div>
</main>
</template>