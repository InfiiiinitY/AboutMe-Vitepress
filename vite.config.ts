/** @type {import('vite').UserConfig} */
export default {
    build: {
        rollupOptions: {
            external: ["primevue/Timeline", "primevue/Card"],
        },
    },
};
