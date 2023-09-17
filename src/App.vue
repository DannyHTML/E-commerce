<template>
  <div id="app">
    <div class="md:mb-20 xl:mb-0">
      <Header />
    </div>
    <div
      class="md:mx-8 md:-mt-20 md:flex md:h-screen md:items-center md:justify-around md:gap-10 xl:justify-center xl:gap-40"
    >
      <ImageSlider />
      <div>
        <Description />
        <AppButtonCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import ImageSlider from "./ImageSlider.vue";
import Description from "./Description.vue";
import AppButtonCard from "./AddButtonCard.vue";
</script>

<style></style>
