<script setup lang="ts">
useHead({
	htmlAttrs: { lang: "en" },
	meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }]
})
</script>

<template>
	<Header />

	<UMain>
		<NuxtPage />
	</UMain>

	<Footer />
</template>
