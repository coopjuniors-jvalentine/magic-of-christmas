<template>
  <header :class="navClass" class="fixed top-0 w-full z-50 font-serif">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink
          to="/buy-tickets"
          class="rounded-md bg-m-blue-400 px-3 py-2 text-sm text-white shadow-sm hover:bg-m-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-400"
        >
          Buy Tickets
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          @click="openMenu"
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-m-blue-300"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <div v-for="item in navigation">
          <Popover v-if="item.children" :item="item"></Popover>
          <a v-else :href="item._path" class="text-sm leading-6 text-white">{{
            item.title
          }}</a>
        </div>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div v-if="isMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-m-blue-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/15"
      >
        <div class="flex items-center justify-between">
          <button
            type="button"
            class="rounded-md bg-m-blue-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-m-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-600"
          >
            Buy Tickets
          </button>
          <button
            @click="closeMenu"
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-m-blue-300"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-m-blue-500/25">
            <div class="space-y-2 py-6">
              <div v-for="item in navigation">
                <div v-if="item.children">
                  <span class="text-xs block border-t border-m-blue-600 mt-6 mb-3 pt-6 font-semibold leading-6 text-m-blue-300">{{
                    item.title
                  }}</span>
                  <a
                    v-for="child in item.children"
                    :href="child._path"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-m-blue-700"
                    >{{ child.title }}</a
                  >
                </div>
                <a
                  v-else
                  :href="item._path"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-m-blue-700"
                  >{{ item.title }}</a
                >
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation(),
)
</script>

<script>
export default {
  props: {
    initialTransparent: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
      isTransparent: this.initialTransparent,
    }
  },
  computed: {
    navClass() {
      return {
        'bg-m-blue-900/0': this.isTransparent,
        'bg-m-blue-900/50 backdrop-blur-lg': !this.isTransparent,
      }
    },
  },
  mounted() {
    if (this.initialTransparent) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeDestroy() {
    if (this.initialTransparent) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    openMenu() {
      this.isMenuOpen = true
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset
      if (scrollY > 50) {
        this.isTransparent = false
      } else {
        this.isTransparent = true
      }
    },
  },
}
</script>
