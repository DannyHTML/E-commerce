<template>
  <nav
    class="relative flex h-20 items-center justify-between px-7 md:mx-7 md:border-b-2 md:px-0"
  >
    <div class="relative flex items-center md:hidden">
      <div class="mr-5">
        <img
          id="mobile-menu-open"
          src="./assets/images/icon-menu.svg"
          alt="Mobile menu open"
        />
      </div>
      <div class="absolute z-40">
        <img
          class="hidden"
          id="mobile-menu-close"
          src="./assets/images/icon-close.svg"
          alt="Mobile menu close"
        />
      </div>
      <div>
        <a href="index.html"
          ><img src="./assets/images/logo.svg" alt="Logo"
        /></a>
      </div>
    </div>
    <div class="hidden md:flex">
      <ul class="flex items-center text-lg">
        <li>
          <a class="flex items-center md:mr-10" href="index.html"
            ><img src="./assets/images/logo.svg" alt="Logo"
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
      <div class="">
        <img
          class="mr-5 h-6 w-6 cursor-pointer md:h-5 md:w-5"
          src="./assets/images/icon-cart.svg"
          alt="Image of shopping cart"
        />
        <div class="relative -right-4 -top-8">
          <div class="absolute h-4 w-4 rounded-full bg-orange-400">
            <span class="flex cursor-default justify-center text-xs text-white"
              >1</span
            >
          </div>
        </div>
      </div>
      <div>
        <img
          class="h-6 w-6 md:h-10 md:w-10"
          src="./assets/images/image-avatar.png"
          alt="Image of person"
        />
      </div>
    </div>
    <div
      id="mobile-menu"
      class="fixed left-0 top-0 z-30 hidden h-screen w-2/3 bg-white text-lg sm:text-xl"
    >
      <ul class="ml-6 mt-16 font-bold">
        <li class="mb-2"><a href="">Collections</a></li>
        <li class="mb-2"><a href="">Men</a></li>
        <li class="mb-2"><a href="">Women</a></li>
        <li class="mb-2"><a href="">About</a></li>
        <li class="mb-2"><a href="">Contact</a></li>
      </ul>
    </div>
  </nav>
  <div
    id="overlay"
    class="fixed left-0 top-0 z-20 hidden h-full w-full bg-gray-500 opacity-75"
  ></div>
</template>

<script>
export default {
  mounted() {
    const mobileMenuOpen = document.querySelector("#mobile-menu-open");
    const mobileMenu = document.querySelector("#mobile-menu");
    const mobileMenuClose = document.querySelector("#mobile-menu-close");
    const overlay = document.querySelector("#overlay");

    mobileMenuOpen.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenuClose.classList.toggle("hidden");
      mobileMenuOpen.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    });
    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenuClose.classList.toggle("hidden");
      mobileMenuOpen.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    });
  },
};
</script>

<style></style>
