<template>
  <div class="mb-4 flex flex-col justify-center">
    <div class="m-auto mb-4 w-4/5 max-w-[450px]">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="mr-4 text-2xl font-bold">$125.00</div>
          <div
            class="rounded-lg bg-secondary-0 px-2 py-1 text-sm font-bold text-primary-0"
          >
            50%
          </div>
        </div>
        <div>
          <div class="text-gray-400 line-through">$250.00</div>
        </div>
      </div>
    </div>
    <div class="md:flex">
      <div
        class="m-auto mb-3 flex w-4/5 max-w-[350px] justify-between rounded-lg bg-gray-100 px-3 py-3 md:mb-0 md:w-2/6"
      >
        <button @click="minus">
          <img src="./assets/images/icon-minus.svg" alt="" />
        </button>
        <span class="font-bold">{{ counter.value }}</span>
        <!-- <p class="font-bold">0</p> -->
        <button @click="plus">
          <img src="./assets/images/icon-plus.svg" alt="" />
        </button>
      </div>
      <div
        class="m-auto flex w-4/5 max-w-[350px] items-center justify-center rounded-lg bg-primary-0 px-3 py-3 md:w-1/2"
      >
        <button class="flex text-white">
          <img class="mr-3" src="./assets/images/icon-cart.svg" alt="" />
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { counter } from "./components/Counter";

const plus = () => {
  counter.value++;
};

const minus = () => {
  if (counter.value > 0) {
    counter.value--;
  }
};
</script>

<style></style>
