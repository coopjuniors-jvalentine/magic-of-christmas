<template>
  <div>
    <div
      class="pointer-events-none h-[75vh] relative w-full bg-gradient-to-t from-[#031883] to-[#02073C]"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <img
          class="w-full max-w-2xl"
          src="https://www.magic-of-christmas.co.uk/wp-content/uploads/2023/12/MAgic-of-Christmas-LANDSCAPE-TITLE_web.png"
          alt=""
        />
      </div>

      <div class="absolute inset-0 overflow-hidden">
        <div class="relative h-full w-full">
          <!-- Background blur -->
          <div
            class="absolute bottom-[40%] left-[30%] h-[10%] w-[60%] animate-glow-1 rounded-full bg-[#55316D] mix-blend-screen blur-3xl"
          ></div>
          <div
            class="absolute bottom-[20%] left-[60%] h-[30%] w-[20%] animate-glow-2 rounded-full bg-[#2659A7] mix-blend-screen blur-3xl"
          ></div>
          <div
            class="absolute bottom-[30%] left-[20%] h-[40%] w-[40%] animate-glow-3 rounded-full bg-[#523497] mix-blend-screen blur-3xl"
          ></div>
          <div
            class="absolute bottom-[10%] left-[12%] h-[30%] w-[80%] animate-glow-4 rounded-full bg-[#3A3D9C] mix-blend-screen blur-3xl"
          ></div>
          <div
            class="absolute bottom-[70%] left-[30%] h-[20%] w-[60%] animate-glow-1 rounded-full bg-[#3A3D9C] mix-blend-screen blur-3xl"
          ></div>
          <div
            class="absolute bottom-[60%] left-[5%] h-[20%] w-[20%] animate-glow-2 rounded-full bg-[#2659A5] mix-blend-screen blur-3xl"
          ></div>
          <div
            class="absolute bottom-[55%] left-[70%] h-[20%] w-[20%] animate-glow-3 rounded-full bg-[#2659A5] mix-blend-screen blur-3xl"
          ></div>
          <div
            class="absolute bottom-[50%] left-[50%] h-[20%] w-[40%] animate-glow-4 rounded-full bg-[#4D3193] mix-blend-screen blur-3xl"
          ></div>
          <!-- Floaties -->
          <div
            class="absolute bottom-[10%] left-[10%] aspect-square w-[20%] animate-blob-1 rounded-full bg-white mix-blend-screen blur-lg"
          ></div>
          <div
            class="absolute bottom-[30%] left-[20%] aspect-square w-[12%] animate-blob-2 rounded-full bg-white mix-blend-screen blur-md"
          ></div>
          <div
            class="absolute bottom-[50%] left-[30%] aspect-square w-[10%] animate-blob-3 rounded-full bg-white mix-blend-screen blur-lg"
          ></div>
          <div
            class="absolute bottom-[55%] left-[50%] aspect-square w-[30%] animate-blob-4 rounded-full bg-gradient-to-tr from-[#905FB6] to-white/20 mix-blend-screen blur-sm"
          ></div>
          <div
            class="absolute bottom-[60%] left-[30%] aspect-square w-[2.5%] animate-blob-1 rounded-full bg-white mix-blend-screen blur-sm"
          ></div>
          <div
            class="absolute bottom-[40%] left-[60%] aspect-square w-[2%] animate-blob-1 rounded-full bg-white mix-blend-screen blur-sm"
          ></div>
          <div
            class="absolute bottom-[35%] left-[65%] aspect-square w-[1.5%] animate-blob-2 rounded-full bg-white mix-blend-screen blur-sm"
          ></div>
          <div
            class="absolute bottom-[25%] left-[80%] aspect-square w-[5%] animate-blob-3 rounded-full bg-white mix-blend-screen blur-md"
          ></div>
          <div
            class="absolute bottom-[15%] left-[80%] aspect-square w-[10%] animate-blob-4 rounded-full bg-white mix-blend-screen blur-lg"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    heading: {
      type: String,
      required: false,
    },
  },
}
</script>
