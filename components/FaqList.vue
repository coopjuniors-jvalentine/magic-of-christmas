<template>
  <div class="mt-12">
    <div class="relative mb-12 rounded-md shadow-sm">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5 text-m-blue-300"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <button
        type="button"
        v-if="searchQuery"
        @click="clearSearch"
        class="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5 text-m-blue-300"
        >
          <path
            d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
          />
        </svg>
      </button>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search FAQs"
        class="block bg-transparent w-full rounded-md border-0 py-3 px-10 text-white ring-inset ring-m-blue-400 ring-2 placeholder:text-m-blue-300 focus:ring-2 focus:ring-inset focus:ring-m-blue-400 sm:text-lg sm:py-4 sm:leading-6"
      />
    </div>

    <div v-if="!searchQuery" class="mb-12">
      <nav class="grid grid-cols-1 sm:grid-cols-3 gap-4" aria-label="Tabs">
        <button
          type="button"
          v-for="category in categories"
          :key="category"
          :class="[
            category === selectedCategory
              ? 'bg-white border-m-blue-200 text-m-blue-900 border-4'
              : 'text-m-blue-100 border-m-blue-400 border-2 hover:text-m-blue-300',
            'rounded-md border px-8 py-3 text-lg md:text-xl lg:text-2xl font-display',
          ]"
          @click="changeCategory(category)"
          :aria-current="category === selectedCategory ? 'page' : undefined"
        >
          {{ category }}
        </button>
      </nav>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <div
        v-for="(item, index) in filteredFaqs"
        :key="index"
        class="bg-m-blue-500/20 border border-m-blue-400 rounded-lg"
      >
        <button
          type="button"
          @click="toggle(index)"
          class="text-m-blue-300 hover:text-white p-4 flex items-center justify-between w-full text-left"
        >
          <h2 class="text-white font-display text-lg md:text-xl">
            {{ item.question }}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            :class="{ 'rotate-180': openedIndices.includes(index) }"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        <div
          class="border-t border-m-blue-400"
          v-if="openedIndices.includes(index)"
        >
          <p class="p-4 max-w-prose leading-7 text-m-blue-200">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faqs from '~/content/plan-your-visit/_faq-items.json'

export default {
  data() {
    return {
      faqs: faqs.questions,
      selectedCategory: '',
      openedIndices: [],
      searchQuery: '',
    }
  },
  computed: {
    categories() {
      return [...new Set(this.faqs.map(faq => faq.category))]
    },
    filteredFaqs() {
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        return this.faqs.filter(
          faq =>
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query),
        )
      }
      return this.faqs.filter(faq => faq.category === this.selectedCategory)
    },
  },
  methods: {
    changeCategory(category) {
      this.selectedCategory = category
      this.resetOpenIndices()
    },
    resetOpenIndices() {
      this.openedIndices = []
    },
    toggle(index) {
      const position = this.openedIndices.indexOf(index)
      if (position === -1) {
        this.openedIndices.push(index)
      } else {
        this.openedIndices.splice(position, 1)
      }
    },
    clearSearch() {
      this.searchQuery = ''
    },
  },
  mounted() {
    if (this.categories.length > 0) {
      this.selectedCategory = this.categories[0]
    }
  },
}
</script>
