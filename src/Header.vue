<template>
  <nav
    class="relative flex h-20 items-center justify-between px-7 md:mx-auto md:w-4/5 md:border-b-2 md:px-0"
  >
    <div class="relative flex items-center md:hidden">
      <div class="mr-5">
        <img
          id="mobile-menu-open"
          src="/images/icon-menu.svg"
          alt="Mobile menu open"
          @click="isHidden = !isHidden"
        />
      </div>
      <div>
        <a href="index.html"
          ><img src="/images/logo.svg" alt="Logo of company"
        /></a>
      </div>
    </div>
    <div class="hidden md:flex">
      <ul class="flex items-center text-lg">
        <li>
          <a class="flex items-center md:mr-10" href="index.html"
            ><img src="/images/logo.svg" alt="Logo of company"
          /></a>
        </li>
        <li><a class="mr-4" href="#">Collections</a></li>
        <li><a class="mr-4" href="#">Men</a></li>
        <li><a class="mr-4" href="#">Women</a></li>
        <li><a class="mr-4" href="#">About</a></li>
        <li><a class="mr-4" href="#">Contact</a></li>
      </ul>
    </div>
    <div class="flex items-center">
      <!-- shopping cart icon -->

      <div>
        <img
          class="mr-5 h-6 w-6 cursor-pointer md:h-5 md:w-5"
          src="/images/icon-cart.svg"
          alt="Image of shopping cart"
          @click="shoppingCard = !shoppingCard"
          @mouseover="MouseOver"
        />
        <div class="relative -right-4 -top-8" v-show="cartQuantity">
          <div class="absolute h-5 w-5 rounded-full bg-orange-400" id="counter">
            <span
              class="mt-[2px] flex cursor-default justify-center text-xs text-white"
              >{{ cartQuantity }}
            </span>
          </div>
        </div>

        <!-- shopping cart content -->

        <div
          class="absolute left-1/2 top-24 z-10 mx-auto w-11/12 -translate-x-1/2 shadow-xl sm:max-w-lg xl:-right-1/2 xl:w-80 xl:-translate-x-1/2"
          :class="{ hidden: shoppingCard || isHidden }"
          @mouseleave="MouseLeave"
        >
          <div class="h-62 xl:h-54 rounded-md border-2 bg-white">
            <h2 class="w-full border-b-2 p-5 text-lg font-bold capitalize">
              cart
            </h2>
            <div class="xl:h-38 relative top-0 h-44">
              <p
                class="text-gray absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold opacity-70"
                :class="{ hidden: isCartClicked }"
              >
                Your cart is empty.
              </p>
              <!-- Cart content when triggerd -->
              <div
                class="flex justify-center"
                :class="{ hidden: !isCartClicked }"
              >
                <div
                  class="absolute top-1/2 w-full max-w-md -translate-y-1/2 px-4"
                >
                  <div class="flex items-center justify-around gap-2">
                    <div class="h-12 w-12">
                      <img
                        class="rounded-lg"
                        src="/images/image-product-1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="">
                      <p class="text-sm capitalize">
                        fall limited edition sneakers
                      </p>
                      <p class="text-sm">
                        $125.00 x {{ cartQuantity }} =
                        <span class="font-bold"> ${{ totalPrice() }} </span>
                      </p>
                    </div>
                    <button class="cursor-pointer">
                      <!-- @click to remove product/hide cart content while triggerd -->
                      <img
                        src="/images/icon-delete.svg"
                        alt=""
                        @click="
                          isCartClicked = false;
                          cartQuantity = 0;
                        "
                      />
                    </button>
                  </div>
                  <div
                    class="m-auto mt-4 cursor-pointer rounded-md bg-primary-0 p-3 text-center"
                  >
                    <button class="font-bold capitalize text-white">
                      checkout
                    </button>
                  </div>
                </div>
              </div>
              <!-- End cart content when triggerd -->
            </div>
          </div>
        </div>
      </div>

      <!-- End shopping cart -->

      <div
        class="hover:cursor-pointer hover:rounded-full hover:outline hover:outline-primary-0"
      >
        <img
          class="h-6 w-6 md:h-10 md:w-10"
          src="/images/image-avatar.png"
          alt="Image of person"
        />
      </div>
    </div>

    <!-- mobile menu -->
    <transition name="slide">
      <div
        id="mobile-menu"
        class="fixed left-0 top-0 z-30 h-screen w-2/3 bg-white text-lg sm:text-xl"
        v-show="isHidden"
      >
        <div class="absolute z-40">
          <img
            class="ml-7 mt-8"
            id="mobile-menu-close"
            src="/images/icon-close.svg"
            alt="Mobile menu close"
            @click="isHidden = !isHidden"
          />
        </div>

        <ul class="ml-6 mt-16 font-bold" @click="isHidden = !isHidden">
          <li class="mb-2"><a href="#">Collections</a></li>
          <li class="mb-2"><a href="#">Men</a></li>
          <li class="mb-2"><a href="#">Women</a></li>
          <li class="mb-2"><a href="#">About</a></li>
          <li class="mb-2"><a href="#">Contact</a></li>
        </ul>
      </div>
    </transition>

    <!-- End mobile menu -->
  </nav>
  <Transition name="fade">
    <div
      id="overlay"
      class="fixed left-0 top-0 z-20 h-full w-full bg-gray-500 opacity-75"
      v-show="isHidden"
    ></div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import { cartQuantity, isCartClicked } from "./components/Counter";

const isHidden = ref(false);
const shoppingCard = ref(true);
const timeoutId = ref(null);

const MouseOver = () => {
  shoppingCard.value = false;
};

const MouseLeave = () => {
  timeoutId.value = setTimeout(() => {
    shoppingCard.value = true;
  }, 150);
};

const totalPrice = () => {
  const priceItem = 125;
  return (priceItem * cartQuantity.value).toFixed(2);
};
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}

/* test */

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in;
}
</style>
