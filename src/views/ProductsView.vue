<template>
  <div class="products">
    <div class="seccionProducto">
          <ProductCard
          v-for="product in products"
          :key="product.id"
          :nombre="product.nombre"
          :precio="product.precio"
          :image="product.imagen"
          :marca="product.marca"
          :resumen="product.resumen"
          :detalles="product.detalles"
          />
      </div>
    </div>
</template>

<script setup>
  import ProductCard from "../components/productCard.vue";
  import {ref, onBeforeMount} from 'vue'

  const products = ref(null);
  
  onBeforeMount(() => {
    //Obtengo los productos desde una API:
    fetch(`https://marcelanapoli.pythonanywhere.com/productos`)
      .then(response => response.json())
      .then(data => {
        products.value = data
        console.log(products.value)
      })
  })
  
</script>

<style>
  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
  .seccionProducto{
    display: grid;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
  @media (min-width: 481px) {
    .products {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seccionProducto{
    display: grid;
    grid-template-columns: repeat(2, 50%);
    justify-content: center;
    align-items: center;
    width: 80%;
  }
}
@media (min-width: 1024px) {
  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seccionProducto{
    display: grid;
    grid-template-columns: repeat(3, 30%);
    justify-content: center;
    align-items: center;
    width: 80%;
  }
}
@media (min-width: 1281px) {
  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seccionProducto{
    display: grid;
    grid-template-columns: repeat(3, 30%);
    justify-content: center;
    align-items: center;
    width: 80%;
  }
}
</style>