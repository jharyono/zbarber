<template>
  <div class="flex items-center justify-between px-4 py-3">
    <div>
      <div class="inline-flex flex-2">
        <router-link class="p-4" to="/">Home</router-link>
        <router-link class="p-4" to="/about">About Us</router-link>
        <router-link class="p-4" to="/service">Services</router-link>
      </div>
    </div>
    <div class="flex-1">
      <h1>This Logo</h1>
    </div>
    <div>
      <nav class="flex-2">
        <router-link class="p-4" to="/gallery">Gallery</router-link>
        <router-link class="p-4" to="/contact">Contact Us</router-link>
        <router-link class="p-4" to="/location">Location</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
