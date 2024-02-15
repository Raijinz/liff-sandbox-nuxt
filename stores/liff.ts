import { defineStore } from 'pinia'
import type { Profile } from '@liff/get-profile/lib'

export const useLiffStore = defineStore('liff', () => {
    const profile = ref<Profile>()

    return {
        profile
    }
})
