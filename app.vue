<template>
  <NuxtLayout>
    <NuxtPage />
    <CookieCop />
  </NuxtLayout>
</template>

<script setup>
provideHeadlessUseId(() => useId())
useHead({
  bodyAttrs: {
    class: 'bg-m-blue-900'
  }
})
</script>
