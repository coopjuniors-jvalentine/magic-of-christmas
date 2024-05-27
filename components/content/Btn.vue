<template>
  <NuxtLink
    :to="to"
    class="not-prose rounded-md bg-m-blue-400 px-3 py-2 text-sm text-white shadow-sm hover:bg-m-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-400"
  >
    {{ text }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>
