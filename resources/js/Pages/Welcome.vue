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
            <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <span class="text-lg font-semibold tracking-tight text-[#141414]">
                    {{ appName }}
                </span>
                <span
                    class="rounded-md bg-[#cdc1a7]/30 px-3 py-1 text-xs font-medium text-[#141414]"
                >
                    CRM MVP
                </span>
            </div>
        </header>

        <main class="mx-auto max-w-5xl px-6 py-16">
            <div class="rounded-xl border border-[#e5e0d5] bg-white p-10 shadow-sm">
                <p class="text-sm font-medium uppercase tracking-wider text-[#bea98a]">
                    Welcome
                </p>
                <h1 class="mt-2 text-3xl font-semibold text-[#141414]">
                    Sales & company relationship CRM
                </h1>
                <p class="mt-4 max-w-2xl text-base leading-relaxed text-[#333333]">
                    Your Laravel + Inertia + Vue stack is running. Next steps: authentication,
                    companies, visits, customer queries, and orders.
                </p>
                <ul class="mt-8 grid gap-3 sm:grid-cols-2">
                    <li class="rounded-lg border border-[#e5e0d5] bg-[#f6f6f6] px-4 py-3 text-sm">
                        Companies &amp; KAM assignment
                    </li>
                    <li class="rounded-lg border border-[#e5e0d5] bg-[#f6f6f6] px-4 py-3 text-sm">
                        Visit plans &amp; updates
                    </li>
                    <li class="rounded-lg border border-[#e5e0d5] bg-[#f6f6f6] px-4 py-3 text-sm">
                        Customer queries &amp; follow-ups
                    </li>
                    <li class="rounded-lg border border-[#e5e0d5] bg-[#f6f6f6] px-4 py-3 text-sm">
                        Orders, milestones &amp; payments
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>
