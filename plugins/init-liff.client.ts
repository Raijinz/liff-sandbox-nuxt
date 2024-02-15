import liff from '@line/liff'
import { LiffMockPlugin } from '@line/liff-mock'

export default defineNuxtPlugin(async (nuxtApp) => {
    const runtimeConfig = useRuntimeConfig()
    const route = useRoute()
    const liffState = decodeURIComponent(route.query['liff.state']?.toString() ?? '')
    const incomingPath = route.path && route.path !== '/'
        ? route.path
        : liffState.split('?')[0]
    let liffId = ''

    if (incomingPath.match(/^\/compact/i)) {
        liffId = runtimeConfig.public.compactLiffId
    } else {
        liffId = runtimeConfig.public.mainLiffId
    }

    liff.use(new LiffMockPlugin());

    await liff.init({
        liffId,
        mock: import.meta.dev,
    })

    if (!liff.isInClient()) {
        liff.login()
    }
})
