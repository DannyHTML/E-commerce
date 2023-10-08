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
      <div ref="lightbox">
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
              <button
                class="flex h-8 w-8 items-center justify-center rounded-full bg-white leading-none"
                @click="previousSlide"
              >
                <img
                  class="-ml-1 h-4 w-3"
                  src="/images/icon-previous.svg"
                  alt=""
                />
              </button>
              <button
                class="flex h-8 w-8 items-center justify-center rounded-full bg-white leading-none"
                @click="nextSlide"
              >
                <img class="-mr-1 h-4 w-3" src="/images/icon-next.svg" alt="" />
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";

const lightbox = ref<null>(null);

onMounted(() => {
  onClickOutside(lightbox, () => {
    closeLightbox();
    console.log("test");
  });
});

const currentIndex = ref<number>(0);

interface Images {
  src: string;
  alt: string;
}

const images = ref<Images[]>([
  { src: "./images/image-product-1.jpg", alt: "Image 1" },
  { src: "./images/image-product-2.jpg", alt: "Image 2" },
  { src: "./images/image-product-3.jpg", alt: "Image 3" },
  { src: "./images/image-product-4.jpg", alt: "Image 4" },
]);

const currentImage = computed<string>(
  () => images.value[currentIndex.value].src
);
const currentImageAlt = computed<string>(
  () => images.value[currentIndex.value].alt
);

const previousSlide = (): void => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const nextSlide = (): void => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const openLightbox = (index: number): void => {
  currentIndex.value = index;
  showLightbox.value = true;
};

const closeLightbox = (): void => {
  showLightbox.value = false;
};

const showLightbox = ref<boolean>(false);

const mobileMenuEsc = (event: KeyboardEvent): void => {
  if (event.key === "Escape" && showLightbox.value) {
    closeLightbox();
  }
};

onMounted(() => window.addEventListener("keydown", mobileMenuEsc));

// Disable lightbox before md breakpoint, 768px

const isClickable = ref<boolean>(false);

const checkBreakpoint = (): void => {
  isClickable.value = window.innerWidth >= 768;
};

onMounted((): void => {
  checkBreakpoint(); //Otherwise the function only works after resizing the browser and not instant.
  window.addEventListener("resize", checkBreakpoint);
});

onUnmounted((): void => {
  window.removeEventListener("resize", checkBreakpoint);
});
</script>

<style scoped></style>
