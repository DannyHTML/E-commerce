<template>
  <div class="mb-4 flex flex-col justify-center">
    <div class="m-auto mb-4 w-4/5 max-w-md md:w-full md:max-w-lg">
      <div class="flex items-center justify-between md:block">
        <div class="flex items-center">
          <div class="mr-4 text-2xl font-bold">$125.00</div>
          <div
            class="rounded-lg bg-secondary-0 px-2 py-1 text-sm font-bold text-primary-0"
          >
            50%
          </div>
        </div>
        <div class="md:mt-2">
          <div class="text-gray-400 line-through">$250.00</div>
        </div>
      </div>
    </div>
    <div class="md:flex md:gap-4">
      <div
        class="m-auto mb-3 flex w-4/5 max-w-sm justify-between rounded-lg bg-gray-100 px-3 py-3 md:mb-0 md:w-2/5"
      >
        <button @click="minus">
          <img src="/images/icon-minus.svg" alt="button minus" />
        </button>
        <span class="font-bold">{{ counter }}</span>
        <button @click="plus">
          <img src="/images/icon-plus.svg" alt="button plus" />
        </button>
      </div>
      <div
        class="m-auto flex w-4/5 max-w-sm items-center justify-center rounded-lg bg-primary-0 px-3 py-3 hover:cursor-pointer md:w-3/5"
        @click="addToCartClicked"
      >
        <button class="flex text-white">
          <img class="mr-3" src="/images/icon-cart.svg" alt="" />
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  counter,
  addToCart,
  resetCounter,
  isCartClicked,
} from "./components/Counter";

const plus = (): void => {
  counter.value++;
};

const minus = (): void => {
  if (counter.value > 1) {
    counter.value--;
  }
};

const addToCartClicked = (): void => {
  addToCart();
  resetCounter();
  isCartClicked.value = true;
};
</script>

<style></style>
