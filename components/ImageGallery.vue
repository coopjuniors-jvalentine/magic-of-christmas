<template>
  <div class="flex flex-col max-w-4xl p-8 mx-auto mt-12">
    <img
      :src="selectedImage.src"
      :alt="selectedImage.alt"
      class="aspect-[4/3] w-full object-cover rounded-lg"
      :class="selectedImage.position"
    />

    <div class="grid grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-6 mt-4">
      <div v-for="image in images" :key="image.src" tabindex="0">
        <img
          :src="image.src"
          :alt="image.alt"
          @click="selectedImage = image"
          class="aspect-square w-full object-cover rounded-lg cursor-pointer"
          :class="{ 'border-white border-2': image == selectedImage }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import galleryImages from '~/content/_gallery-images.json'

export default {
  data() {
    return {
      images: galleryImages.images,
      selectedImage: galleryImages.images[0],
    }
  },
}
</script>
