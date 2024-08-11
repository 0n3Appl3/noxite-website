<script setup>
import { onMounted } from 'vue'
import { about, faqs } from '../websiteData'
import CallToAction from '../components/CallToAction.vue'

let snackBar = ''
function copyServerIP(ip) {
	const el = document.createElement('textarea');

	el.value = ip;
	document.body.appendChild(el);
	el.select();
	document.execCommand("copy");
	document.body.removeChild(el);

	snackBar.className = "show";
	setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
}

const setScrollAnimation = () => {
    Array.from(document.querySelectorAll('*[data-type="background"]')).forEach(e => {   
		e.style.scale = window.scrollY * e.dataset.speed / window.innerHeight
    });
}

onMounted(() => {
	setScrollAnimation();
	snackBar = document.getElementById("snackbar");
})

document.addEventListener('scroll', () => {
    setScrollAnimation();
});
</script>

<template>
<header>
	<div class="overlay"></div>
	<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
		<source src="../assets/noxite-bkg.mp4" type="video/mp4">
	</video>
	<div class="container h-100">
		<div class="d-flex h-100 align-items-center">
			<div class="text-white">
				<h1>Survive together</h1>
				<p class="lead mb-0">Minecraft multiplayer hosted in New Zealand</p>
				<button type="button" @click="copyServerIP('play.noxite.co.nz')" class="btn btn-danger noxite-button px-4 py-2 mt-5">
					<i class="bi bi-arrow-right"></i>Connect
				</button>
			</div>
		</div>
	</div>
	<div id="snackbar">
		<div class="d-flex justify-content-center align-items-center">
			<i class="bi bi-clipboard-fill"></i>
			<span>IP copied to clipboard</span>
		</div>
	</div>
</header>
<CallToAction
	title="Join our community on Discord" 
	description="Send server chat messages to fellow players from the comfort of your mobile device!"
	website="https://discord.gg/xnyMD2r"
	buttonText="Join Discord"
/>
<main>
	<div class="container py-5">
		<h2>About Noxite</h2>
		<br>
		<p>Noxite is a Minecraft survival multiplayer server hosted in New Zealand.</p>
		<p>It first opened in 2015 under the old name Appl3 PvP as a small factions community. To be completely honest, it ran more like a survival server than a factions one, and the PvP community were not necessarily the nicest people to be around; that is not to say everyone was badly behaved. The server switched to survival in 2016 and has since strived to deliver an experience that is more relaxed and welcoming.</p>
	</div>
	<div class="overlay-container" v-for="content in about" :key="content.id" >
		<div class="bg grayscale" :style="{ backgroundImage: `url('${ content.image }')` }" data-type="background" data-speed=".6"></div>
		<div class="bg overlay red py-5 h-100"></div>
		<div class="bg overlay">
			<div class="container py-5 h-100">
				<div class="d-flex h-100 align-items-center">
					<div class="text-white">
						<h3 class="pb-4"><i class="bi pe-3" :class="content.icon"></i>{{ content.title }}</h3>
						<p class="lead mb-0">{{ content.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container-sm py-5">
		<h2>FAQ</h2>
		<div class="accordion accordion-flush">
			<div class="accordion-item" v-for="faq in faqs" :key="faq.id" :id="faq.id">
				<h5 class="accordion-header">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + faq.id" :aria-controls="'collapse' + faq.id" aria-expanded="false">
						{{ faq.question }}
					</button>
				</h5>
				<div :id="'collapse' + faq.id" class="accordion-collapse collapse" :data-bs-parent="'#faq' + faq.id">
					<div class="accordion-body">
						{{ faq.answer }}
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
<CallToAction
	title="Learn about our custom plugins" 
	description="All of Noxite's core plugins are custom-made and you can read all about it here."
	link="/guides"
	buttonText="Read Guides"
/>
</template>
