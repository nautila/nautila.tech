<script setup lang="ts">
useHead({
	htmlAttrs: { lang: "en" },
	meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
});
</script>

<template>
	<app-header />

	<app-main>
		<NuxtPage />
	</app-main>

	<app-footer />
</template>

<style>
#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

#app-main {
	flex: 1;
}
</style>
