<template>
  <div class="products">
    <div class="seccionProducto">
          <ProductCard
          v-for="product in products"
          :key="product.id"
          :nombre="product.nombre"
          :precio="product.precio"
          :image="product.image"
          :marca="product.marca"
          :resumen="product.resumen"
          :detalles="product.detalles"
          />
      </div>
    </div>
</template>

<script setup>
  import ProductCard from "../components/productCard.vue";
  import {ref, onBeforeMount, onBeforeUnmount} from 'vue'

  const products = ref(null);
  
  onBeforeMount(() => {
    //Obtengo los productos desde una API:
    fetch(`https://nextjs13-recipe-project.vercel.app/api/tennisProducts`)
      .then(response => response.json())
      .then(data => {
        products.value = data
      })
  })
  
</script>

<style>
  .seccionProducto{
    display: grid;
    grid-template-columns: repeat(3, 30%);
    justify-content: center;
    align-items: center;
    width: 80%;
  }
@media (min-width: 1024px) {
  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>