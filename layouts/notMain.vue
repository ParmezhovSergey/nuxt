<template>
  <header class="header">
    <NuxtLink to="/"> на главную</NuxtLink>
  </header>
  <main class="main">
    <slot />
  </main>
  <footer class="footer">pagination</footer>
</template>

<style scoped>
.header {
  height: 70px;
  background-color: blue;
  color: white;
}
.main {
  height: calc(100vh - 110px);
}
.footer {
  height: 40px;
  background-color: bisque;
}
</style>
