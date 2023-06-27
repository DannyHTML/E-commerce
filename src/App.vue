<template>
  <div id="app">
    <Header />
    <ImageSlider />
    <Description />
    <AppButtonCard />
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
