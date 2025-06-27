<template>
  <header class="header">
    <div>NUXT</div>
  </header>
  <main class="main">
    <slot />
  </main>
  <footer class="footer">разработчик: @SParmezhov</footer>
</template>
<script setup lang="ts"></script>

<style scoped>
.header {
  height: 70px;
  background-color: blue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.main {
  height: calc(100vh - 90px);
}
.footer {
  height: 20px;
  background-color: blue;
  color: white;
}
</style>
