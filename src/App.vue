<template>
  <!-- Header / Barra de navegación -->
  <section>
    <NavBar/>
  </section>

  <!-- Principal/Main -->

  <section class="mainContent">
      <RouterView />
  </section>

  <!-- Footer/Pie de página -->

  <section>
    <FooterSection/>
  </section>

</template>


<script setup>
  import NavBar from './components/navBar.vue'
  import FooterSection from './components/footerSection.vue'
  import { RouterView } from 'vue-router'
</script>


<style>
  /* Este style no lleva el 'scoped' ya que quiero establecer que todas estas modificaciones se apliquen
      a todo el sitio */
  body {
    margin: 0;
    height: 100vh;
  }
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .mainContent {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 30px;
  }
</style>