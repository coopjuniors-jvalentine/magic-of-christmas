<template>
  <div class="overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 pt-36 lg:px-8 lg:pt-48">
      <div
        class="relative mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:max-w-none lg:items-center"
      >
        <div class="relative z-10 w-full sm:max-w-3xl lg:shrink-0">
          <h1
            class="font-display text-balance text-4xl tracking-tight text-white sm:text-6xl"
          >
            <ContentSlot :use="$slots.heading" unwrap="p" />
          </h1>
          <p
            class="font-serif text-pretty mt-6 text-xl leading-8 text-m-blue-100"
          >
            <ContentSlot :use="$slots.lead" unwrap="p" />
          </p>
          <div class="mt-6 font-serif prose prose-invert lg:prose-lg relative">
            <ContentSlot :use="$slots.about" />
          </div>
        </div>
        <img
          src="/img/BigTop.svg"
          alt=""
          class="absolute top-0 right-0 md:-right-[6rem] max-w-full sm:max-w-none sm:w-[72rem]"
          width="638"
          height="321"
        />
      </div>
    </div>
  </div>
</template>
