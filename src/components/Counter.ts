import { ref } from "vue";

export const counter = ref<number>(1);

export let cartQuantity = ref<number>(0);

export const addToCart = (): void => {
  cartQuantity.value += counter.value;
};

export const resetCounter = (): void => {
  counter.value = 1;
};

export const isCartClicked = ref<boolean>(false);
