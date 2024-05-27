<template>
  <div class="pt-24 pb-12 sm:pt-32 font-serif">
    <div class="mx-auto max-w-7xl px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="pr-4 lg:pr-0 lg:order-2">
          <div
            class="relative overflow-hidden rounded-3xl w-full bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
          >
            <NuxtImg
              class="absolute inset-0 h-full w-full object-cover"
              src="img/TrinityPark.jpg"
              width="640"
              height="360"
              :placeholder="[64, 36, 75, 5]"
              format="webp"
              alt="Arial view of Trinity Park"
            />

            <div
              class="absolute bottom-0 left-0 h-2/3 w-full bg-gradient-to-t from-m-blue-900/80 to-transparent"
            ></div>
            <div class="relative isolate">
              <div class="">
                <p class="text-xl font-display leading-8 text-white">
                  <ContentSlot :use="$slots.venueName" unwrap="p" />
                </p>
                <p class="text-m-blue-200">
                  <ContentSlot :use="$slots.venueAddress" unwrap="p" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="lg:max-w-lg">
            <h1
              class="font-display text-pretty text-4xl tracking-tight text-white sm:text-6xl"
            >
              Find Us
            </h1>
            <p class="mt-6 text-xl text-pretty leading-8 text-m-blue-200">
              <ContentSlot :use="$slots.info" unwrap="p" />
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <a
                href="https://www.google.com/maps/place/Ipswich+IP3+8UH/"
                class="rounded-md bg-m-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-m-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-400"
                >Open on Google Maps</a
              >
              <a
                href="https://what3words.com/remaining.providing.clouds"
                class="text-sm font-semibold leading-6 text-m-blue-200"
                >What3Words <span aria-hidden="true">→</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
