<template>
  <footer
    class="text-white font-serif bg-m-blue-800 mt-24 px-8 py-24 border-t border-m-blue-600"
  >
    <div class="max-w-5xl mx-auto px-8">
      <div
        class="flex flex-wrap items-center justify-center space-x-4 md:space-x-8 space-y-4"
      >
        <img
          class="max-h-16 md:max-h-20 lg:max-h-24"
          src="/img/MagicOfChristmas.svg"
        />
        <img
          class="max-h-16 md:max-h-20 lg:max-h-24"
          src="/img/CoopJuniors.svg"
        />
        <img class="max-h-16 md:max-h-20 lg:max-h-24" src="/img/EOECoop.svg" />
      </div>

      <div
        class="flex mt-12 text-sm text-m-blue-300 items-center justify-center space-x-8"
      >
        <div v-for="item in navigation">
          <NuxtLink v-if="!item.children" :to="item._path">{{
            item.title
          }}</NuxtLink>
          <div v-else class="flex items-center justify-center space-x-8">
            <NuxtLink v-for="child in item.children" :to="child._path">{{
              child.title
            }}</NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="flex mt-6 text-xs text-m-blue-300 items-center justify-center space-x-8"
      >
        <NuxtLink to="/legal/cookies">Cookies</NuxtLink>
        <NuxtLink to="/legal/privacy">Privacy</NuxtLink>
        <NuxtLink to="/legal/terms-and-conditions"
          >Terms and Conditions</NuxtLink
        >
      </div>

      <div
        class="mt-12 pt-12 border-t border-m-blue-600 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex justify-center space-x-6 md:order-2">
          <a href="#" class="text-m-blue-300 hover:text-m-blue-200">
            <span class="sr-only">Facebook</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a href="#" class="text-m-blue-300 hover:text-m-blue-200">
            <span class="sr-only">X</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
              />
            </svg>
          </a>
        </div>
        <div class="mt-8 md:order-1 md:mt-0">
          <p class="text-center text-xs leading-5 text-m-blue-300">
            &copy; 2024 Co-op Juniors Theatre Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation(),
)
</script>
