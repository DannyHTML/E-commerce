<template>
  <div class="mb-5 flex justify-center lg:h-[600px]">
    <div class="max-w-md justify-center">
      <div class="relative">
        <img
          class="object-contain md:rounded-xl"
          :src="currentImage"
          :alt="currentImageAlt"
        />
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
          <button @click="previousSlide">
            <img
              class="rounded-[50%] bg-white p-2 md:hidden"
              src="./assets/images/icon-previous.svg"
              alt=""
            />
          </button>
          <button @click="nextSlide">
            <img
              class="rounded-[50%] bg-white p-2 md:hidden"
              src="./assets/images/icon-next.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div class="hidden md:mt-5 md:flex md:justify-between md:gap-4">
        <div
          class="hover:cursor-pointer hover:rounded-lg hover:border-2 hover:border-primary-0"
        >
          <img
            class="rounded-md hover:opacity-40"
            src="./assets/images/image-product-1-thumbnail.jpg"
            alt=""
            @click="pic1"
          />
        </div>
        <div
          class="hover:cursor-pointer hover:rounded-lg hover:border-2 hover:border-primary-0"
        >
          <img
            class="rounded-md hover:opacity-40"
            src="./assets/images/image-product-2-thumbnail.jpg"
            alt=""
            @click="pic2"
          />
        </div>
        <div
          class="hover:cursor-pointer hover:rounded-lg hover:border-2 hover:border-primary-0"
        >
          <img
            class="rounded-md hover:opacity-40"
            src="./assets/images/image-product-3-thumbnail.jpg"
            alt=""
            @click="pic3"
          />
        </div>
        <div
          class="hover:cursor-pointer hover:rounded-lg hover:border-2 hover:border-primary-0"
        >
          <img
            class="rounded-md hover:opacity-40"
            src="./assets/images/image-product-4-thumbnail.jpg"
            alt=""
            @click="pic4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const currentIndex = ref(0);
const images = [
  { src: "./src/assets/images/image-product-1.jpg", alt: "Image 1" },
  { src: "./src/assets/images/image-product-2.jpg", alt: "Image 2" },
  { src: "./src/assets/images/image-product-3.jpg", alt: "Image 3" },
  { src: "./src/assets/images/image-product-4.jpg", alt: "Image 4" },
];

const currentImage = computed(() => images[currentIndex.value].src);
const currentImageAlt = computed(() => images[currentIndex.value].alt);

const previousSlide = () =>
  (currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length);
const nextSlide = () =>
  (currentIndex.value = (currentIndex.value + 1) % images.length);

const pic1 = () => {
  console.log("pic1");
};

const pic2 = () => {
  console.log("pic2");
};

const pic3 = () => {
  console.log("pic3");
};

const pic4 = () => {
  console.log("pic4");
};
</script>

<style></style>
