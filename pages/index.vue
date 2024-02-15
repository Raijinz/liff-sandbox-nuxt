<script setup lang="ts">
definePageMeta({
    middleware: 'init-line-profile'
})
const route = useRoute()
const liffStore = useLiffStore()
</script>

<template>
    <div>
        <NuxtLink to="/page-2" replace>To page 2</NuxtLink>
        <h1>Index page</h1>
        <ClientOnly>
            <p>Current route: {{ route.path }}</p>
        </ClientOnly>
        <p>Profile:</p>
        <ul>
            <ClientOnly>
                <li>Display name: {{ liffStore.profile?.displayName }}</li>
                <li>User ID: {{ liffStore.profile?.userId }}</li>
                <li>Picture: {{ liffStore.profile?.pictureUrl }}</li>
                <li>Status: {{ liffStore.profile?.statusMessage }}</li>
            </ClientOnly>
        </ul>
    </div>
</template>
