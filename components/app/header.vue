<script setup lang="ts"></script>

<template>
	<header
		id="app-header"
		class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
		<div
			class="mx-auto py-2 px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
			<div class="flex gap-2 items-center">
				<div class="font-bold text-xl">
					<NuxtLink to="/">Nautila Tech</NuxtLink>
				</div>
				<UBadge label="Compiling..." variant="subtle" />
			</div>

			<nav class="flex gap-3 items-center">
				<ul class="hidden md:flex gap-1">
					<li><UButton to="/services" color="white" variant="link">Tjenester</UButton></li>
					<li><UButton to="/projects" color="white" variant="link">Prosjekter</UButton></li>
					<li><UButton to="/about" color="white" variant="link">Om oss</UButton></li>
				</ul>

				<UButton to="/contact" color="primary" class="text-md">Kontakt</UButton>

				<UButton color="white" variant="ghost" class="block md:hidden text-sm">
					<UIcon name="i-heroicons-bars-3-20-solid" />
				</UButton>
			</nav>
		</div>
	</header>
</template>
