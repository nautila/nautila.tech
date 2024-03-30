// https://nuxt.com/docs/api/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/fonts"],
	app: {
		rootId: "app",
	},
	content: {
		documentDriven: true,
	},
});
