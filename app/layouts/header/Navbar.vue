<template>
  <header class="bg-transparent fixed top-0 w-full">
    <div class="flex items-center justify-between py-4 container">
      <div class="flex items-center space-x-6">
        <div class="flex items-center space-x-4">
          <button v-if="isMobile" @click="toggleMenu" class="lg:hidden focus:outline-none">
            <img src="../../assets/svgs/buger.svg" alt="burger" width="24" />
          </button>
          <NuxtLink to="/" class="mb-2 lg:text-[32px] font-bold text-black font-integral uppercase text-[25px]">
            PH.Store
          </NuxtLink>
        </div>
        <ul class="hidden lg:flex lg:space-x-6">
          <li v-for="item in navbarData" :key="item.id">
            <NuxtLink :to="item.route">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-row space-x-3">
        <img class="lg:hidden" src="../../assets/svgs/search.svg" alt="cart" width="20" height="20">
        <img src="../../assets/svgs/cart.svg" alt="cart" width="20" height="20">
        <img src="../../assets/svgs/profile.svg" alt="profile" width="20" height="20">
      </div>
    </div>

    <!-- Offcanvas menu (mobile only) -->
    <transition name="slide">
      <div
          v-if="menuOpen"
          class="fixed inset-0 bg-black/50 z-40 lg:hidden"
          @click.self="closeMenu"
      >
        <div
            class="bg-white w-1/2 h-full shadow-lg p-6 z-50"
        >
          <!-- Close button -->
          <button @click="closeMenu" class="mb-4">
            ✕ Close
          </button>

          <!-- Menu items -->
          <ul class="space-y-4">
            <li v-for="item in navbarData" :key="item.id">
              <NuxtLink :to="item.route" @click="closeMenu">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import {navbarData} from "../../constant/constant.js";
import checkbox from "daisyui/components/checkbox/index.js";

const menuOpen = ref(false);
const isMobile = ref(false);
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false;
}
function checkMobile() {
  isMobile.value = window.innerWidth < 1024;
}
onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
})
</script>


<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

</style>
