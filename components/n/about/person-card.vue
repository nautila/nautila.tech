<script setup lang="ts">
defineProps<{
	name: string;
	position?: string;
}>();
</script>

<template>
	<div class="flex flex-col gap-8 my-6">
		<div>
			<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">{{ name }}</h3>
			<p v-if="position" class="text-md">{{ position }}</p>
		</div>

		<slot />
	</div>
</template>
