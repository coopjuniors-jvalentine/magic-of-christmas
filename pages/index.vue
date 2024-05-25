<template>
  <Hero></Hero>
  <div
    class="font-serif px-8 prose prose-invert max-w-prose mx-auto lg:prose-lg xl:prose-xl"
  >
    <ContentDoc />
  </div>
  <div class="flex font-serif items-center justify-center">
    <NuxtLink
      to="/buy-tickets"
      class="rounded-md mt-6 bg-m-blue-400 px-3 py-2 text-sm text-white shadow-sm hover:bg-m-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-400"
    >
      Buy Tickets
    </NuxtLink>
  </div>
</template>
