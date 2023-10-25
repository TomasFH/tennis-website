<template>
  <div class="about">
    <QuienesSomos />
  </div>
</template>

<style>
  .about{
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    .about {
      /* min-height: 100vh; */
      display: flex;
      align-items: center;
    }
}
</style>

<script setup>
  import QuienesSomos from '../components/quienesSomos.vue';
</script>