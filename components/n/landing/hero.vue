<script setup lang="ts">
defineProps<{
	title?: string;
	description?: string;
}>();
</script>

<template>
	<div class="n-landing-hero py-24 sm:py-32 md:py-40 relative">
		<DContainer>
			<h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
				<slot name="title">
					{{ title }}
				</slot>
			</h1>

			<p v-if="description || $slots.description" class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
				<slot name="description">
					{{ description }}
				</slot>
			</p>

			<div v-if="$slots.links" class="mt-10 flex flex-wrap gap-x-6 gap-y-3">
				<slot name="links" />
			</div>
		</DContainer>
	</div>
</template>
