<template>
  <div class="about">
    <QuienesSomos />
  </div>
</template>

<style>
  .about{
    margin: 20px 0;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    .about {
      margin: 0;
      display: flex;
      align-items: center;
    }
}
</style>

<script setup>
  import QuienesSomos from '../components/quienesSomos.vue';
</script>