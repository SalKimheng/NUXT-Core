<template>
  <div>
    <Navbar/>
    <!-- output the pages content  -->
    <div class="containe">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./header/Navbar.vue";
</script>
