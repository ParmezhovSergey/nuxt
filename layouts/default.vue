<template>
  <header>
    <nav>
      <!-- <button @click="router.push(`/about`)"> About</button> -->
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contacts</NuxtLink>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>
<script setup lang="ts">
const router = useRouter();
</script>
