<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

defineProps<{
    appName: string
}>()
</script>

<template>
    <Head title="Welcome" />

    <div class="min-h-screen bg-[#f6f6f6] text-[#141414]">
        <header class="border-b border-[#e5e0d5] bg-white">
            <div class="mx-auto flex max-w-5xl items-center px-6 py-4">
                <span class="text-lg font-semibold tracking-tight text-[#141414]">
                    {{ appName }}
                </span>
            </div>
        </header>

        <main class="mx-auto max-w-5xl px-6 py-16">
            <div class="rounded-xl border border-[#e5e0d5] bg-white p-10 shadow-sm">
                <p class="text-sm font-medium uppercase tracking-wider text-[#bea98a]">
                    Welcome
                </p>
                <h1 class="mt-2 text-3xl font-semibold text-[#141414]">
                    {{ appName }}
                </h1>
                <p class="mt-4 max-w-2xl text-base leading-relaxed text-[#333333]">
                    The application is running.
                </p>
            </div>
        </main>
    </div>
</template>
