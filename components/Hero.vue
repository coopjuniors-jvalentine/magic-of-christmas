<template>
  <div
    class="relative font-serif w-full bg-gradient-to-t from-m-blue-900 to-m-blue-600"
  >
    <div
      class="z-20 max-w-3xl px-8 text-center text-pretty mx-auto pt-20 pb-48 flex flex-col items-center justify-center"
    >
      <img
        :class="logoClass"
        class="w-full"
        src="/img/MagicOfChristmas-3D.png"
        alt=""
      />
      <h2
        class="font-display mt-12 text-3xl font-medium tracking-tight text-m-blue-50 sm:text-4xl"
      >
        {{ subheading }}
      </h2>
      <NuxtLink
        v-if="enableButton"
        to="/buy-tickets"
        class="rounded-md mt-6 bg-m-blue-400 px-3 py-2 text-sm text-white shadow-sm hover:bg-m-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-400"
      >
        Buy Tickets
      </NuxtLink>
    </div>

    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="relative h-full w-full">
        <!-- Bouncy Icon-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="z-20 text-white absolute bottom-[5%] left-[50%] animate-bounce -ml-3 h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>

        <!-- Gradient fade-->
        <div
          class="z-10 absolute bottom-[0%] left-[0%] h-[25%] w-[100%] bg-gradient-to-t from-m-blue-900 to-transparent"
        ></div>
        <!-- Background blur -->
        <div
          class="absolute bottom-[40%] left-[30%] h-[10%] w-[60%] animate-glow-1 rounded-full bg-m-blue-500 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[20%] left-[60%] h-[30%] w-[20%] animate-glow-2 rounded-full bg-m-purple-500 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[30%] left-[20%] h-[40%] w-[40%] animate-glow-3 rounded-full bg-m-blue-500 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[10%] left-[12%] h-[30%] w-[80%] animate-glow-4 rounded-full bg-m-purple-500 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[70%] left-[30%] h-[20%] w-[60%] animate-glow-1 rounded-full bg-m-blue-500 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[60%] left-[5%] h-[20%] w-[20%] animate-glow-2 rounded-full bg-m-purple-500 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[55%] left-[70%] h-[20%] w-[20%] animate-glow-3 rounded-full bg-m-blue-500 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[50%] left-[50%] h-[20%] w-[40%] animate-glow-4 rounded-full bg-m-purple-500 mix-blend-screen blur-3xl"
        ></div>
        <!-- Floaties -->
        <div
          class="absolute bottom-[10%] left-[10%] aspect-square w-[20%] animate-blob-1 rounded-full bg-m-blue-100 mix-blend-screen blur-lg"
        ></div>
        <div
          class="absolute bottom-[30%] left-[20%] aspect-square w-[12%] animate-blob-2 rounded-full bg-m-purple-100 mix-blend-screen blur-md"
        ></div>
        <div
          class="absolute bottom-[50%] left-[30%] aspect-square w-[10%] animate-blob-3 rounded-full bg-m-blue-100 mix-blend-screen blur-lg"
        ></div>
        <div
          class="absolute bottom-[55%] left-[50%] aspect-square w-[30%] animate-blob-4 rounded-full bg-gradient-to-tr from-m-purple-300 to-white/20 mix-blend-screen blur-sm"
        ></div>
        <div
          class="absolute bottom-[60%] left-[30%] aspect-square w-[2.5%] animate-blob-1 rounded-full bg-m-purple-100 mix-blend-screen blur-sm"
        ></div>
        <div
          class="absolute bottom-[40%] left-[60%] aspect-square w-[2%] animate-blob-1 rounded-full bg-m-blue-100 mix-blend-screen blur-sm"
        ></div>
        <div
          class="absolute bottom-[35%] left-[65%] aspect-square w-[1.5%] animate-blob-2 rounded-full bg-m-purple-100 mix-blend-screen blur-sm"
        ></div>
        <div
          class="absolute bottom-[25%] left-[80%] aspect-square w-[5%] animate-blob-3 rounded-full bg-m-blue-100 mix-blend-screen blur-md"
        ></div>
        <div
          class="absolute bottom-[15%] left-[80%] aspect-square w-[10%] animate-blob-4 rounded-full bg-m-purple-100 mix-blend-screen blur-lg"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as HERO_SETTINGS from '/content/site-settings/hero.json'

export default {
  props: {
    subheading: {
      type: String,
      default:
        HERO_SETTINGS.subheading ||
        'Journey to another world where your Christmas wishes come true!',
    },
    enableButton: {
      type: Boolean,
      default: HERO_SETTINGS.enableButton || true,
    },
    logoSize: {
      type: String,
      default: 'large',
    },
  },
  computed: {
    logoClass() {
      if (this.logoSize === 'small') {
        return 'max-w-lg'
      } else if (this.logoSize === 'medium') {
        return 'max-w-xl'
      } else {
        return 'max-w-2xl'
      }
    },
  },
}
</script>
