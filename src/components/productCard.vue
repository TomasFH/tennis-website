<template>
    <div class="productCard">
        <h1>Producto {{ props.nombre }}</h1>
        <input type="image" :src="props.image" alt="product image">
        <h4>Precio: {{ props.precio }}</h4>
    </div>
</template>

<style scoped>
    .productCard{
        display: flex;
        flex-direction: column;
        margin: 5% 10%;
    }
</style>

<script setup>
    const props = defineProps({
        nombre: String,
        precio: Number,
        image: String,
        marca: String,
        resumen: String,
        detalles: Object,
    })
</script>