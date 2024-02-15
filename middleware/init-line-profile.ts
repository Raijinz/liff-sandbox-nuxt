import liff from "@line/liff";

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server) return;

    const liffStore = useLiffStore();
    const profile = await liff.getProfile();
    liffStore.profile = profile;
});
