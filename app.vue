<template>
  <NuxtLayout>
    <NuxtPage />
    <CookieControl locale="en" />
  </NuxtLayout>
</template>

<script setup>
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl();


provideHeadlessUseId(() => useId())
useHead({
  bodyAttrs: {
    class: 'bg-m-blue-900'
  }
})
</script>
