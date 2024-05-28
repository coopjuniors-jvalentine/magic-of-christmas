<template>
  <div>
    <div class="relative isolate">
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 lg:px-8 lg:pt-32">
          <div
            class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
          >
            <div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h2
                class="font-display text-balance text-3xl tracking-tight text-white sm:text-5xl"
              >
                <ContentSlot :use="$slots.heading" unwrap="p" />
              </h2>
              <p
                class="font-serif text-pretty mt-6 text-xl leading-8 text-m-blue-100 sm:max-w-md lg:max-w-none"
              >
                <ContentSlot :use="$slots.lead" unwrap="p" />
              </p>
              <div
                class="mt-6 font-serif prose prose-invert lg:prose-lg relative max-w-full sm:max-w-md lg:max-w-none"
              >
                <ContentSlot :use="$slots.about" />
              </div>
            </div>
            <div
              class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
            >
              <div
                class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
              >
                <div class="relative">
                  <NuxtImg
                    class="aspect-[2/3] w-full rounded-xl bg-gray-white/10 object-cover shadow-lg"
                    :src="image1"
                    width="720"
                    height="1280"
                    sizes="264px"
                    :placeholder="[128, 72, 75, 5]"
                    format="webp"
                    alt=""
                  />

                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15"
                  />
                </div>
              </div>
              <div
                class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
              >
                <div class="relative">
                  <NuxtImg
                    class="aspect-[2/3] w-full rounded-xl bg-gray-white/10 object-cover shadow-lg"
                    :src="image2"
                    width="720"
                    height="1280"
                    sizes="264px"
                    :placeholder="[128, 72, 75, 5]"
                    format="webp"
                    alt=""
                  />
                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15"
                  />
                </div>
                <div class="relative">
                  <NuxtImg
                    class="aspect-[2/3] w-full rounded-xl bg-gray-white/10 object-cover shadow-lg"
                    :src="image3"
                    width="720"
                    height="1280"
                    sizes="264px"
                    :placeholder="[128, 72, 75, 5]"
                    format="webp"
                    alt=""
                  />
                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15"
                  />
                </div>
              </div>
              <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div class="relative">
                  <NuxtImg
                    class="aspect-[2/3] w-full rounded-xl bg-gray-white/10 object-cover shadow-lg"
                    :src="image4"
                    width="720"
                    height="1280"
                    sizes="264px"
                    :placeholder="[128, 72, 75, 5]"
                    format="webp"
                    alt=""
                  />
                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15"
                  />
                </div>
                <div class="relative">
                  <NuxtImg
                    class="aspect-[2/3] w-full rounded-xl bg-gray-white/10 object-cover shadow-lg"
                    :src="image5"
                    width="720"
                    height="1280"
                    sizes="264px"
                    :placeholder="[128, 72, 75, 5]"
                    format="webp"
                    alt=""
                  />
                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
    image4: {
      type: String,
      required: true,
    },
    image5: {
      type: String,
      required: true,
    },
  },
}
</script>
