<script setup lang="ts"></script>

<template>
	<div>
		<NLandingHero
			title="Digitale Løsninger"
			description="Med vår metode kan vi levere høykvalitets teknologi til lav pris">
			<template #links>
				<UButton to="/contact" size="xl" variant="solid">Contact</UButton>
				<UButton to="/services" size="lg" variant="ghost">Read more about our services</UButton>
			</template>
		</NLandingHero>

		<NLandingSection title="Services" description="The stuff we can do"></NLandingSection>
		<NLandingSection title="Testimonials" description="What our clients say"></NLandingSection>

		<!-- <ULandingSection title="Tjenester" icon="i-heroicons-bars-3-20-solid">
			<ULandingGrid>
				<ULandingCard
					class="col-span-4"
					title="Web"
					description="Trenger du en proff nettside? Vi er eksperter på dette og kan tilby alt fra enkle nettsider til nettbutikker til web-apper." />
				<ULandingCard
					class="col-span-4"
					title="Apputvikling"
					description="Mobilapper har blitt en stor del av hverdagen vår, og vi legger mye stolthet i brukeropplevelse, funksjon og utseende. Vi bygger appen som lar deg skille deg ut fra dine konkurrenter." />
				<ULandingCard
					class="col-span-4"
					title="Tilpasset prosjekt"
					description="Vi leverer også teknologi på prosjektbasis, og kan leies inn på nye og eksisterende prosjekter." />
			</ULandingGrid>
		</ULandingSection> -->

		<!-- <ULandingSection title="Kundeopplevelser">
			<ULandingGrid>
				<ULandingTestimonial
					class="col-span-4"
					quote="Vi har hatt en veldig god opplevelse i forbindelse med vårt prosjekt med Nautila. De hadde en god metode, leverte raskt, god kvalitet til en veldig god pris, jobber gjerne med Nautila igjen!"
					:author="{
						name: 'Lisa Larsen',
						description: 'Prosjektleder i Oslo Kommune',
					}" />
				<ULandingTestimonial
					class="col-span-4"
					quote="Vi likte veldig godt å jobbe med Nautila. Prosessen deres var god. De inkluderte og ledet oss gjennom prosjektet, og endte opp med et veldig godt resultat."
					:author="{
						name: 'Håkon Kavli',
						description: 'Daglig leder i Flip',
					}" />
				<ULandingTestimonial
					class="col-span-4"
					quote="Vi har brukt Nautila i bygging av vårt produkt og er veldig fornøyd med prosess og resultater."
					:author="{
						name: 'Fredrik Gilhuus',
						description: 'Daglig Leder i ‍Styretavla AS',
					}" />
			</ULandingGrid>
		</ULandingSection> -->
	</div>
</template>
