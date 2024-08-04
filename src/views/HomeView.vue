<script setup>
import { onMounted } from 'vue'
import CallToAction from '../components/CallToAction.vue'

const aboutContents = [
	{ 
		id: 1,
		icon: 'bi-shield-fill-check',
		title: 'Land Claiming',
		image: './src/assets/thing_2.png',
		description: 'A custom-made land protection and management system, created with intuition and convenience in mind which keeps griefers from looting.'
	},
	{ 
		id: 2,
		icon: 'bi-piggy-bank-fill',
		title: 'Player Economy',
		image: './src/assets/thing_3.png',
		description: 'The server runs on a completely player-operated diamond currency economy with a custom-made chest shop buy and sell system.'
	},
	{ 
		id: 3,
		icon: 'bi-discord',
		title: 'Discord Integration',
		image: './src/assets/thing_1.png',
		description: 'Start a conversation from any mobile device while you are not on the server; a convenient blend of Minecraft and Discord.'
	},
]
const faqs = [
	{
		id: 1,
		question: 'Why is it called Noxite?',
		answer: 'Naming servers with "Craft", "SMP" and "PvP" in the name is getting old. The server\'s previous name, Appl3 PvP, came from an era when factions was a trendy gameplay style. Yes, you may know the name from the Noxcrew, but this server is not associated with them.'
	},
	{
		id: 2,
		question: 'The server is whitelisted, how can I join?',
		answer: 'Join our Discord server and share your Minecraft username in the chat to be whitelisted.'
	},
	{
		id: 3,
		question: 'How long does it take to update the server to version 1.X?',
		answer: 'Optimistically, up to four weeks. I am very fortunate to be able to develop my own plugins, which speeds up the updating process. Although, the server also uses plugins made by other developers who may take longer to update to the latest version, so it is sometimes difficult to give an ETA.'
	},
	{
		id: 4,
		question: 'Where do I report server connection and plugin problems?',
		answer: 'Please let 0n3Appl3 know on the Noxite discord server and he will resolve it at his earliest convenience.'
	},
	{
		id: 5,
		question: 'I want to be a moderator, where do I apply?',
		answer: 'Moderator applications are not available at this time. The server is not busy enough to warrant a dedicated moderation team.'
	},
	{
		id: 6,
		question: 'Hello, I am from Planet Minecraft and I am reviewing your server. May I have OP?',
		answer: 'Nice try. This is not 2015 anymore.'
	},
]
const snackBar = document.getElementById("snackbar");
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
	<div id="snackbar">IP saved to clipboard</div>
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
		<p>It first opened in 2015 under the old name Appl3 PvP as a small factions community. To be completely honest, it ran more like a survival server than a factions one, and the PvP community were not necessarily the nicest people to be around; that is not to say everyone was badly behaved. The server made the switch to survival in 2016 and have since strived to deliver an experience that is more relaxed and welcoming.</p>
	</div>
	<div class="overlay-container" v-for="content in aboutContents" :key="content.id" >
		<div class="bg grayscale" v-bind:style="{ backgroundImage: 'url(' + content.image + ')' }" data-type="background" data-speed=".6"></div>
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
