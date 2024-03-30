<script setup lang="ts">
import { useRuntimeConfig, useContent, useContentHead, useRequestEvent } from "#imports";
import type { LayoutKey } from "#build/types/layouts";

const { contentHead } = useRuntimeConfig().public.content;
const { page, layout } = useContent();

// Page not found
if (!(page as any).value) {
	// Set head title
	useHead({
		title: "404 - Page not found",
	});

	// Set correct status code on SSR
	if (import.meta.server) {
		const event = useRequestEvent();
		if (event) event.res.statusCode = 404;
	}
}

if (contentHead) {
	useContentHead(page);
}
</script>

<template>
	<!-- <NuxtLayout :name="layout as LayoutKey || 'default'"> -->
	<ContentRenderer v-if="page" :key="(page as any)._id" :value="page">
		<template #empty="{ value }">
			<DocumentDrivenEmpty :value="value" />
		</template>
	</ContentRenderer>

	<DSection v-else>
		<d-container>
			<h1>404 - Page not found</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
		</d-container>
	</DSection>
	<!-- </NuxtLayout> -->
</template>
