<script setup lang="ts">
const { page } = useContent();
</script>

<template>
	<NLandingHero
		v-if="page?.hero !== false"
		:title="page?.hero?.title ?? page?.title"
		:description="page?.hero?.description" />

	<DContainer>
		<slot />
	</DContainer>
</template>
