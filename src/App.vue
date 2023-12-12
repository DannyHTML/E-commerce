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
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import ImageSlider from "./ImageSlider.vue";
import Description from "./Description.vue";
import AppButtonCard from "./AddButtonCard.vue";
</script>

<style></style>
