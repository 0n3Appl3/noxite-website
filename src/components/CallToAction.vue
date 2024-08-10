<script setup>
defineProps({
    title: String,
    description: String,
    link: String,
    website: String,
    buttonText: String,
})

const openWebsite = (url) => {
    window.open(url, '_blank')
}
</script>

<template>
<div class="bg-secondary-subtle border-top border-bottom">
	<div class="container mx-auto row align-items-center py-5">
		<div class="col-md">
			<h3>{{ title }}</h3>
			<p>{{ description }}</p>
		</div>
		<div class="col-md">
			<RouterLink :to="link" v-if="link">
				<button type="button" class="btn btn-danger noxite-button float-md-end px-4 py-2 mt-3">
					<i class="bi bi-arrow-right"></i>{{ buttonText }}
				</button>
			</RouterLink>
            <button type="button" class="btn btn-danger noxite-button float-md-end px-4 py-2 mt-3" @click="openWebsite(website)" v-if="website">
                <i class="bi bi-arrow-right"></i>{{ buttonText }}
            </button>
		</div>
	</div>
</div>
</template>

<style scoped>
</style>