<template>
  <nav
    class="relative flex h-20 items-center justify-between px-7 md:mx-auto md:w-4/5 md:border-b-2 md:px-0"
  >
    <div class="relative flex items-center md:hidden">
      <div class="mr-5">
        <img
          id="mobile-menu-open"
          src="./assets/images/icon-menu.svg"
          alt="Mobile menu open"
          @click="isHidden = !isHidden"
        />
      </div>
      <div>
        <a href="index.html"
          ><img src="./assets/images/logo.svg" alt="Logo of company"
        /></a>
      </div>
    </div>
    <div class="hidden md:flex">
      <ul class="flex items-center text-lg">
        <li>
          <a class="flex items-center md:mr-10" href="index.html"
            ><img src="./assets/images/logo.svg" alt="Logo of company"
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
      <!-- shopping cart -->

      <div>
        <img
          class="mr-5 h-6 w-6 cursor-pointer md:h-5 md:w-5"
          src="./assets/images/icon-cart.svg"
          alt="Image of shopping cart"
          @click="shoppingCard = !shoppingCard"
        />
        <div class="relative -right-4 -top-8">
          <div class="absolute h-4 w-4 rounded-full bg-orange-400">
            <span class="flex cursor-default justify-center text-xs text-white"
              >1</span
            >
          </div>
        </div>

        <div
          class="absolute left-1/2 top-24 z-10 mx-auto w-11/12 -translate-x-1/2 sm:max-w-lg xl:-right-1/2 xl:w-80 xl:-translate-x-1/2"
          :class="{ hidden: shoppingCard }"
        >
          <div class="h-64 rounded-md border-2 bg-white xl:h-52">
            <h2 class="w-full border-b-2 p-5 text-lg font-bold capitalize">
              cart
            </h2>
            <div class="relative top-0 h-36">
              <p
                class="text-gray absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold opacity-70"
              >
                Your cart is empty.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- End shopping cart -->

      <div>
        <img
          class="h-6 w-6 md:h-10 md:w-10"
          src="./assets/images/image-avatar.png"
          alt="Image of person"
        />
      </div>
    </div>

    <!-- mobile menu -->
    <transition name="slide">
      <div
        id="mobile-menu"
        class="fixed left-0 top-0 z-30 h-screen w-2/3 bg-white text-lg sm:text-xl"
        v-show="!isHidden"
      >
        <div class="absolute z-40">
          <img
            class="ml-7 mt-8"
            id="mobile-menu-close"
            src="./assets/images/icon-close.svg"
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
      v-show="!isHidden"
    ></div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const isHidden = ref(true);
const shoppingCard = ref(true);
</script>

<style scoped>
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-enter-active {
  transition: all 0.3s ease-in;
}

.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.slide-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.3s ease-in;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 0.3s ease-out;
}
</style>
