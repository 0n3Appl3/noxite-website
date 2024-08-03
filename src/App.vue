<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<nav class="navbar z-3 fixed-top navbar-expand-lg bg-light border-bottom">
		<div class="container">
			<a class="navbar-brand" href="#">
				<img alt="Noxite logo" src="@/assets/noxite-wordmark.png" width="150px"/>
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul class="navbar-nav align-items-center">
					<li class="nav-item">
						<RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/rules">Rules</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/guides">Guides</RouterLink>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://x.com/appl3pvp" target="_blank"><i class="bi bi-twitter-x h4"></i></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://discord.gg/xnyMD2r" target="_blank"><i class="bi bi-discord h4"></i></a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<div>
		<RouterView />
	</div>
	<footer class="bg-dark" data-bs-theme="dark">
		<div class="container pt-4 pb-3" data-bs-theme="dark">
			<div class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
				<p class="col-md-4 mb-0 text-body-secondary">&copy; 2024 Noxite, by 0n3Appl3</p>
				<a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
					<img src="../src/assets/noxite-icon.png" class="bi me-2" alt="Noxite Logo" width="40px" height="40px">
				</a>
				<ul class="nav col-md-4 justify-content-end">
					<li class="nav-item">
						<RouterLink class="nav-link px-2 text-body-secondary" to="/">Home</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link px-2 text-body-secondary" to="/rules">Rules</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link px-2 text-body-secondary" to="/guides">Guides</RouterLink>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style scoped>

</style>
