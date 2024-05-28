<template>
  <div>
    <div
      class="z-50 fixed right-4 bottom-4 p-2 shadow-lg backdrop-blur-lg border border-m-blue-400 rounded-full text-m-blue-300 hover:text-m-blue-100"
      v-if="!bannerOpen && !modalOpen"
      @click="modalOpen = true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
        />
      </svg>
    </div>

    <div
      v-if="bannerOpen"
      class="z-50 font-serif fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 backdrop-blur-lg p-6 ring-1 ring-white/25 md:flex-row md:items-center lg:px-8"
    >
      <p class="max-w-4xl text-pretty text-sm leading-6 text-m-blue-100">
        We use cookies and other similar technologies to enhance your browsing
        experience, serve personalised ads or content, and analyse our traffic.
        By clicking "Accept All", you consent to our use of cookies. Accepting
        our cookies is optional but recommended, as they are delicious. See our
        <NuxtLink to="/legal/cookies" class="font-semibold text-m-blue-300"
          >cookie policy</NuxtLink
        >.
      </p>
      <div class="flex flex-none items-center gap-x-5">
        <button
          @click="acceptAll"
          type="button"
          class="rounded-md bg-m-blue-400 px-3 py-2 text-sm text-white shadow-sm hover:bg-m-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-400"
        >
          Accept all
        </button>
        <button
          @click="rejectAll"
          type="button"
          class="text-sm leading-6 text-m-blue-100 hover:text-m-blue-300"
        >
          Reject all
        </button>
        <button
          @click="managePreferences"
          type="button"
          class="text-sm leading-6 text-m-blue-100 hover:text-m-blue-300"
        >
          Manage Preferences
        </button>
      </div>
    </div>

    <HeadlessTransitionRoot as="template" :show="modalOpen">
      <HeadlessDialog
        class="relative z-50 font-serif"
        @close="modalOpen = false"
      >
        <HeadlessTransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-m-blue-900 bg-opacity-75 transition-opacity"
          />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <HeadlessTransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <HeadlessDialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
              >
                <div class="mb-6">
                  <div class="text-center">
                    <HeadlessDialogTitle
                      as="h3"
                      class="text-2xl font-display text-m-blue-700"
                      >Manage Cookies</HeadlessDialogTitle
                    >
                    <div class="mt-2">
                      <p class="text-sm text-gray-700">
                        We use cookies and other similar technologies to enhance
                        your browsing experience, serve personalised ads or
                        content, and analyse our traffic. See our
                        <NuxtLink
                          to="/legal/cookies"
                          class="font-semibold text-m-blue-300"
                          >cookie policy</NuxtLink
                        >.
                      </p>
                    </div>
                  </div>
                </div>

                <div v-for="cookie in cookies" :key="cookie.id" class="mb-4">
                  <HeadlessSwitchGroup
                    as="div"
                    class="flex items-center justify-between"
                  >
                    <span class="flex flex-grow flex-col">
                      <HeadlessSwitchLabel
                        as="span"
                        class="text-sm font-medium leading-6 text-gray-900"
                      >
                        {{ cookie.name }}
                      </HeadlessSwitchLabel>
                      <HeadlessSwitchDescription
                        as="span"
                        class="text-xs text-gray-500"
                      >
                        {{ cookie.description }}
                      </HeadlessSwitchDescription>
                    </span>
                    <HeadlessSwitch
                      v-if="!cookie.required"
                      v-model="cookie.enabled"
                      :class="[
                        cookie.enabled ? 'bg-m-blue-400' : 'bg-gray-200',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-m-blue-400 focus:ring-offset-2',
                      ]"
                    >
                      <span
                        aria-hidden="true"
                        :class="[
                          cookie.enabled ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                        ]"
                      />
                    </HeadlessSwitch>
                    <div class="text-xs text-gray-400" v-else>Required</div>
                  </HeadlessSwitchGroup>
                </div>

                <div
                  class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-3 sm:gap-3"
                >
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                    @click="rejectAll"
                  >
                    Reject All
                  </button>
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                    @click="acceptSelected"
                  >
                    Accept Selected
                  </button>
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-m-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-m-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-400 sm:mt-0"
                    @click="acceptAll"
                  >
                    Accecpt All
                  </button>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>
<script>
const cookies = [
  // {
  //   id: 'a',
  //   name: 'Analytics Cookies',
  //   description: 'Tracks website usage.',
  //   enabled: false,
  //   required: false,
  //   targetedCookies: [],
  // },
  // {
  //   id: 'm',
  //   name: 'Marketing Cookies',
  //   description: 'Used for campaign tracking.',
  //   enabled: false,
  //   required: false,
  //   targetedCookies: [],
  // },
  {
    id: 'f',
    name: 'Functional Cookies',
    description: 'Ensures website functions correctly.',
    enabled: true,
    required: true,
    targetedCookies: [],
  },
]

export default {
  data() {
    return {
      bannerOpen: true,
      modalOpen: false,
      cookies: cookies,
    }
  },
  methods: {
    acceptAll() {
      this.cookies.forEach(cookie => (cookie.enabled = true))
      this.savePreferences()
      this.bannerOpen = false
      this.modalOpen = false
    },
    rejectAll() {
      this.cookies.forEach(cookie => {
        if (!cookie.required) cookie.enabled = false
      })
      this.savePreferences()
      this.bannerOpen = false
      this.modalOpen = false
    },
    managePreferences() {
      this.modalOpen = true
      this.bannerOpen = false
    },
    restoreBanner() {
      this.modalOpen = false
      this.bannerOpen = true
    },
    acceptSelected() {
      this.savePreferences()
      this.bannerOpen = false
      this.modalOpen = false
    },
    savePreferences() {
      const preferences = this.cookies.map(({ id, enabled }) => ({
        id,
        enabled,
      }))
      localStorage.setItem(
        'cookie-cop-preferences',
        JSON.stringify(preferences),
      )
    },
  },
  mounted() {
    const storedPreferences = localStorage.getItem('cookie-cop-preferences')
    if (storedPreferences) {
      const preferences = JSON.parse(storedPreferences)
      preferences.forEach(pref => {
        const cookie = this.cookies.find(c => c.id === pref.id)
        if (cookie && !cookie.required) {
          cookie.enabled = pref.enabled
        }
      })
      this.bannerOpen = false
    }
  },
  watch: {
    $route() {
      this.modalOpen = false
    },
  },
}
</script>
