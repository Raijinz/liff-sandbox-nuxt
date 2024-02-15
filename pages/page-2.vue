<script lang="ts" setup>
import liff from '@line/liff';

interface Todos {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const route = useRoute();
const liffStore = useLiffStore();
const { pending, data: todos } = await useFetch<Todos>('https://jsonplaceholder.typicode.com/todos/1');
const profile = await liff.getProfile()
</script>

<template>
    <div v-if="pending">
        <NuxtLoadingIndicator />
    </div>
    <div v-else>
        <p>Current route: {{ route.path }}</p>
        <p>Profile name: {{ liffStore.profile?.displayName }}</p>
        <p>Example todos: {{ todos?.title }}</p>
        <ClientOnly>
            <p>Profile: {{ profile }}</p>
        </ClientOnly>
    </div>
</template>

<style></style>
