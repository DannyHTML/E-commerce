<template>
  <div id="app">
    <div class="md:mb-20 xl:mb-0">
    <Header />
    </div>
    <div
      class="md:mx-8 md:-mt-20 md:flex md:h-screen md:items-center md:justify-around xl:justify-center xl:gap-40"
    >
      <ImageSlider />
      <div>
        <Description />
        <AppButtonCard />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import ImageSlider from "./ImageSlider.vue";
import Description from "./Description.vue";
import AppButtonCard from "./AddButtonCard.vue";

export default {
  name: "App",
  components: {
    Header,
    ImageSlider,
    Description,
    AppButtonCard,
  },
};
</script>

<style></style>
