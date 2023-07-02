import { reactive, ref } from "vue";

export const counter = reactive({
  value: 0,
});

export let cartQuantity = ref(0);

export const addToCart = () => {
  cartQuantity.value += counter.value;
};

export const resetCounter = () => {
  counter.value = 0;
};

// test below

export const isCartClicked = ref(false);
