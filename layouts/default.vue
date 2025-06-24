<template>
  <header>
    <!-- <button @click="router.push(`/about`)"> About</button> -->
    <NuxtLink to="/nuxt/about">About</NuxtLink>
    <NuxtLink to="/nuxt/contact">Contacts</NuxtLink>
  </header>
  <main>
    <slot></slot>
  </main>
</template>
<script setup lang="ts">

const router = useRouter();

</script>
