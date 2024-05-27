<template>
  <div class="relative">
    <div class="z-10 relative">
      <ContentDoc>
        <template v-slot="{ doc }">
          <div>
            <article>
              <ContentRenderer :value="doc" />
            </article>
          </div>
        </template>
        <template #not-found>
          <main
            class="grid font-serif min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8"
          >
            <div class="text-center">
              <p class="text-base font-semibold text-m-purple-400">404</p>
              <h1
                class="mt-4 text-3xl tracking-tight font-display text-white sm:text-5xl"
              >
                Page not found
              </h1>
              <p class="mt-6 text-base leading-7 text-m-blue-200">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <NuxtLink
                  to="/"
                  class="rounded-md bg-m-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-m-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-500"
                  >Go back home</NuxtLink
                >
              </div>
            </div>
          </main>
        </template>
        <template #empty>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </div>
    <div class="pointer-events-none absolute inset-0">
      <div class="relative h-full w-full">
        <div
          class="absolute bottom-[40%] left-[30%] h-[10%] w-[60%] animate-glow-1 rounded-full bg-m-blue-900 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[20%] left-[60%] h-[30%] w-[20%] animate-glow-2 rounded-full bg-m-purple-900 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[30%] left-[20%] h-[40%] w-[40%] animate-glow-3 rounded-full bg-m-blue-900 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[10%] left-[12%] h-[30%] w-[80%] animate-glow-4 rounded-full bg-m-purple-900 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[70%] left-[30%] h-[20%] w-[60%] animate-glow-1 rounded-full bg-m-blue-900 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[60%] left-[5%] h-[20%] w-[20%] animate-glow-2 rounded-full bg-m-purple-900 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[55%] left-[70%] h-[20%] w-[20%] animate-glow-3 rounded-full bg-m-blue-900 mix-blend-screen blur-3xl"
        ></div>
        <div
          class="absolute bottom-[50%] left-[50%] h-[20%] w-[40%] animate-glow-4 rounded-full bg-m-purple-900 mix-blend-screen blur-3xl"
        ></div>
      </div>
    </div>
  </div>
</template>
