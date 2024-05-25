<template>
  <HeadlessPopover class="relative">
    <HeadlessPopoverButton
      class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
    >
      <span>{{ item.title }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="size-5"
      >
        <path
          fill-rule="evenodd"
          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </HeadlessPopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <HeadlessPopoverPanel
        class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
      >
        <div
          class="w-screen max-w-sm flex-auto overflow-hidden rounded-3xl bg-m-blue-900 text-sm leading-6 shadow-lg ring-1 ring-white/15"
        >
          <div class="p-4">
            <div
              v-for="child in item.children"
              :key="child._id"
              class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-m-blue-800"
            >
              <div>
                <a :href="child._path" class="font-semibold text-white">
                  {{ child.title }}
                  <span class="absolute inset-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </HeadlessPopoverPanel>
    </transition>
  </HeadlessPopover>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
