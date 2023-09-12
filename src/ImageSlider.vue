<template>
  <div class="mb-5 flex justify-center md:mb-0">
    <div class="max-w-sm justify-center">
      <div class="relative">
        <img
          class="cursor-pointer object-contain md:rounded-xl"
          :src="currentImage"
          :alt="currentImageAlt"
          @click="isClickable && openLightbox(currentIndex)"
        />
        <div
          class="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-3"
        >
          <button
            class="flex h-8 w-8 items-center justify-center rounded-full bg-white leading-none md:hidden"
            @click="previousSlide"
          >
            <img class="-ml-1 h-4 w-3" src="/images/icon-previous.svg" alt="" />
          </button>
          <button
            class="flex h-8 w-8 items-center justify-center rounded-full bg-white leading-none md:hidden"
            @click="nextSlide"
          >
            <img class="-mr-1 h-4 w-3" src="/images/icon-next.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="mt-5 hidden justify-center md:flex">
        <div class="flex gap-4">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="hover:cursor-pointer hover:rounded-lg hover:outline hover:outline-primary-0"
            @click="openLightbox(index)"
          >
            <img
              class="rounded-md hover:opacity-40"
              :src="image.src"
              :alt="image.alt"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox overlay -->
    <div
      v-if="showLightbox"
      class="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75"
    >
      <div class="md:max-w-sm lg:max-w-md">
        <div class="relative">
          <img
            class="object-contain md:rounded-xl"
            :src="currentImage"
            :alt="currentImageAlt"
          />
          <button class="absolute -top-12 right-0" @click="closeLightbox">
            <img
              class="h-5 w-5 brightness-200"
              src="/images/icon-close.svg"
              alt=""
            />
          </button>

          <img
            v-for="(image, index) in images"
            :key="index"
            class="absolute left-0 top-0 rounded-xl object-contain opacity-0"
            :src="image.src"
            :alt="image.alt"
            :class="{ 'opacity-100': index === currentIndex }"
          />
          <div
          class="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-3"
        >
          <button class="rounded-full bg-white w-8 h-8 flex justify-center items-center leading-none" @click="previousSlide">
            <img
              class="h-4 w-3 -ml-1"
              src="/images/icon-previous.svg"
              alt=""
            />
          </button>
          <button class="rounded-full bg-white w-8 h-8 flex justify-center items-center leading-none" @click="nextSlide">
            <img
              class="h-4 w-3 -mr-1 "
              src="/images/icon-next.svg"
              alt=""
            />
          </button>
        </div>
        </div>
        <div class="mt-5 flex justify-center">
          <div class="flex gap-4">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="mr-3 mt-4 h-20 w-20 hover:cursor-pointer hover:rounded-lg hover:outline hover:outline-primary-0"
              @click="openLightbox(index)"
            >
              <img
                class="rounded-md hover:opacity-40"
                :src="image.src"
                :alt="image.alt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const currentIndex = ref(0);
const images = [
  { src: "./images/image-product-1.jpg", alt: "Image 1" },
  { src: "./images/image-product-2.jpg", alt: "Image 2" },
  { src: "./images/image-product-3.jpg", alt: "Image 3" },
  { src: "./images/image-product-4.jpg", alt: "Image 4" },
];

const currentImage = computed(() => images[currentIndex.value].src);
const currentImageAlt = computed(() => images[currentIndex.value].alt);

const previousSlide = () =>
  (currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length);
const nextSlide = () =>
  (currentIndex.value = (currentIndex.value + 1) % images.length);

const openLightbox = (index) => {
  currentIndex.value = index;
  showLightbox.value = true;
};

const closeLightbox = () => {
  showLightbox.value = false;
};

const showLightbox = ref(false);

// Disable lightbox before md breakpoint, 768px

const isClickable = ref(false);

const checkBreakpoint = () => {
  isClickable.value = window.innerWidth >= 768;
};

onMounted(() => {
  checkBreakpoint(); //Otherwise the function only works after resizing the browser and not instant.
  window.addEventListener("resize", checkBreakpoint);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkBreakpoint);
});
</script>

<style></style>
