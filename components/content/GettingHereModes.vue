<template>
  <div class="font-serif">
    <div class="mx-auto max-w-7xl px-8">
      <dl
        class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl sm:grid-cols-2"
      >
        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-white text-lg">
            <ContentSlot :use="$slots.carName" unwrap="p" />
          </dt>
          <dd class="mt-4 prose prose-invert lg:prose-lg">
            <ContentSlot :use="$slots.carInfo" />
          </dd>
        </div>

        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-white text-lg">
            <ContentSlot :use="$slots.trainName" unwrap="p" />
          </dt>
          <dd class="mt-4 prose prose-invert lg:prose-lg">
            <ContentSlot :use="$slots.trainInfo" />
          </dd>
        </div>

        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-white text-lg">
            <ContentSlot :use="$slots.taxiName" unwrap="p" />
          </dt>
          <dd class="mt-4 prose prose-invert lg:prose-lg">
            <ContentSlot :use="$slots.taxiInfo" />
          </dd>
        </div>

        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-white text-lg">
            <ContentSlot :use="$slots.busName" unwrap="p" />
          </dt>
          <dd class="mt-4 prose prose-invert lg:prose-lg">
            <ContentSlot :use="$slots.busInfo" />
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
