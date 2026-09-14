import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
    pages: {
        path: './Pages',
        extension: ['.vue', '.ts'],
        lazy: true,
    },
})
