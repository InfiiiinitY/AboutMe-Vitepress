/** @type {import('vite').UserConfig} */
export default {
    build: {
        rollupOptions: {
            external: ["primevue/timeline", "primevue/card"],
        },
    },
};
