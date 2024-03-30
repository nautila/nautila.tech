<script setup lang="ts">
defineProps<{
	title?: string;
	description?: string;
}>();
</script>

<template>
	<div class="n-landing-hero py-24 sm:py-32 md:py-40 relative">
		<DContainer class="text-lg flex flex-col gap-8">
			<div>
				<DTitle>
					<slot name="title">
						{{ title }}
					</slot>
				</DTitle>

				<p v-if="description || $slots.description" class="mt-6 tracking-tight text-gray-600 dark:text-gray-300">
					<slot name="description">
						{{ description }}
					</slot>
				</p>

				<div v-if="$slots.links" class="mt-10 flex flex-wrap gap-x-6 gap-y-3">
					<slot name="links" />
				</div>
			</div>

			<slot />
		</DContainer>
	</div>
</template>
