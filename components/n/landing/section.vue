<script setup lang="ts">
defineProps<{
	title?: string;
	description?: string;
}>();
</script>

<template>
	<div class="n-landing-section py-24 sm:py-32">
		<DContainer>
			<DSubtitle
				v-if="title || $slots.title"
				class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
				<slot name="title">
					{{ title }}
				</slot>
			</DSubtitle>

			<p v-if="description || $slots.description" class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
				<slot name="description">
					{{ description }}
				</slot>
			</p>

			<slot />
		</DContainer>
	</div>
</template>
