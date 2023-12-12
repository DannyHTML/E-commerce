<template>
  <div id="app">
    <div class="md:mb-20 ">
      <Header />
    </div>
    <div
      class="md:flex md:px-5 md:container md:justify-between md:mx-auto gap-10"
    >
      <ImageSlider />
      <div>
        <Description />
        <AppButtonCard />
      </div>
    </div>
  </div>
  <!-- class="md:mx-8 md:-mt-20 md:flex md:h-screen md:items-center md:justify-around md:gap-10 xl:gap-40" -->
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import ImageSlider from "./ImageSlider.vue";
import Description from "./Description.vue";
import AppButtonCard from "./AddButtonCard.vue";
</script>

<style></style>
