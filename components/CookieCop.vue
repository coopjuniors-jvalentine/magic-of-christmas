<template>
  <div>
    <div
      v-if="bannerOpen"
      class="z-50 font-serif fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-m-blue-500 p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8"
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
          class="text-sm leading-6 text-m-blue-100"
        >
          Reject all
        </button>
        <button
          @click="managePreferences"
          type="button"
          class="text-sm leading-6 text-m-blue-100"
        >
          Manage Preferences
        </button>
      </div>
    </div>

    <HeadlessTransitionRoot as="template" :show="modalOpen">
      <HeadlessDialog class="relative z-50 font-serif" @close="restoreBanner">
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
                      class="text-base font-semibold leading-6 text-gray-900"
                      >Manage Cookies</HeadlessDialogTitle
                    >
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        We use cookies and other similar technologies to enhance
                        your browsing experience, serve personalised ads or
                        content, and analyse our traffic.<br />See our
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
                    class="inline-flex w-full justify-center rounded-md bg-m-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-m-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-400"
                    @click="acceptAll"
                  >
                    Accecpt All
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
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                    @click="rejectAll"
                  >
                    Reject All
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
  {
    id: 'a',
    name: 'Analytics Cookies',
    description: 'Tracks website usage.',
    enabled: false,
    required: false,
  },
  {
    id: 'm',
    name: 'Marketing Cookies',
    description: 'Used for campaign tracking.',
    enabled: false,
    required: false,
  },
  {
    id: 'f',
    name: 'Functional Cookies',
    description: 'Ensures website functions correctly.',
    enabled: true,
    required: true,
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
}
</script>
