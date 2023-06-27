<template>
  <div class="mb-5 flex justify-center">
    <div class="max-w-xl justify-center">
      <div class="relative">
        <img
          class="object-contain"
          :src="currentImage"
          :alt="currentImageAlt"
        />
        <img
          v-for="(image, index) in images"
          :key="index"
          class="absolute left-0 top-0 object-contain opacity-0"
          :src="image.src"
          :alt="image.alt"
          :class="{ 'opacity-100': index === currentIndex }"
        />
        <div
          class="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-3"
        >
          <button @click="previousSlide">
            <img
              class="rounded-[50%] bg-white p-2"
              src="./assets/images/icon-previous.svg"
              alt=""
            />
          </button>
          <button @click="nextSlide">
            <img
              class="rounded-[50%] bg-white p-2"
              src="./assets/images/icon-next.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: "./src/assets/images/image-product-1.jpg", alt: "Image 1" },
        { src: "./src/assets/images/image-product-2.jpg", alt: "Image 2" },
        { src: "./src/assets/images/image-product-3.jpg", alt: "Image 3" },
        { src: "./src/assets/images/image-product-4.jpg", alt: "Image 4" },
      ],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex].src;
    },
    currentImageAlt() {
      return this.images[this.currentIndex].alt;
    },
  },
  methods: {
    previousSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>

<style></style>
