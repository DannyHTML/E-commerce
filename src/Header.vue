<template>
  <nav class="mx-7 flex h-20 items-center justify-between md:border-b-2">
    <div class="flex items-center md:hidden">
      <div class="mr-3">
        <img
          id="mobile-menu"
          src="./assets/images/icon-menu.svg"
          alt="Mobile menu"
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
  </nav>
</template>

<script>
export default {
  mounted() {
    const mobileMenu = document.querySelector("#mobile-menu");

    mobileMenu.addEventListener("click", () => {
      console.log("test");
    });
  },
};
</script>

<style></style>
