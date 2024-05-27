<template>
  <div class="mt-12">
    <div class="mb-6">
      <!-- Mobile dropdown for categories -->
      <div class="sm:hidden">
        <label for="categories" class="sr-only">Select a category</label>
        <select
          id="categories"
          name="categories"
          class="block w-full rounded-md bg-m-blue-900 text-white border-m-blue-400 focus:border-m-blue-400 focus:ring-m-blue-400"
          v-model="selectedCategory"
          @change="resetOpenIndices"
        >
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Tabs for larger screens -->
      <div class="hidden sm:block">
        <div class="border-b border-m-blue-400">
          <nav class="-mb-px flex" aria-label="Tabs">
            <button
              v-for="category in categories"
              type="button"
              :key="category"
              :class="[
                category === selectedCategory
                  ? 'border-blue-400 text-blue-400'
                  : 'border-transparent text-white hover:border-m-blue-300 hover:text-m-blue-200',
                'w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium',
              ]"
              @click="changeCategory(category)"
              :aria-current="category === selectedCategory ? 'page' : undefined"
            >
              {{ category }}
            </button>
          </nav>
        </div>
      </div>
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
          class="text-m-blue-300 hover:text-white p-4 flex items-center justify-between w-full"
        >
          <h2 class="text-white">{{ item.question }}</h2>
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
          <p class="p-4 max-w-prose leading-7 text-sm text-m-blue-200">
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
      faqs,
      selectedCategory: '',
      openedIndices: [],
    }
  },
  computed: {
    categories() {
      return [...new Set(this.faqs.map(faq => faq.category))]
    },
    filteredFaqs() {
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
  },
  mounted() {
    if (this.categories.length > 0) {
      this.selectedCategory = this.categories[0]
    }
  },
}
</script>
