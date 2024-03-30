<template>
	<div class="d-md-content">
		<slot />
	</div>
</template>

<style>
.d-md-content > div > * + * {
	margin-top: 1rem;
}
</style>
