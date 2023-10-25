<template>
    <div class="contactUs">
      <h1>Esta es la página de Contacto</h1>
      <QuienesSomos />
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .contactUs {
      /* min-height: 100vh; */
      display: flex;
      align-items: center;
    }
  }
  </style>
  <script setup>
import QuienesSomos from '../components/quienesSomos.vue';


</script>
  