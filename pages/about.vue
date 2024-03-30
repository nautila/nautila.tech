<template>
	<ContentDoc path="/about" v-slot="{ doc }">
		<NLandingHero :title="doc.title">
			<DMdContent>
				<ContentRenderer :value="doc" />
			</DMdContent>
		</NLandingHero>
	</ContentDoc>

	<NLandingSection title="Folk">
		<div>
			<ContentList path="/about/_people" v-slot="{ list }">
				<NAboutPersonCard v-for="person in list" :key="person.id" :name="person.title" :position="person.position">
					<DMdContent>
						<ContentRenderer :value="person" />
					</DMdContent>
				</NAboutPersonCard>
			</ContentList>
		</div>
	</NLandingSection>
</template>
