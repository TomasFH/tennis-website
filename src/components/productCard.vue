<template>
    <div class="productCard">
        <h1>Producto {{ props.nombre }}</h1>
        <input type="image" :src="props.image" alt="product image">
        <h4>Precio: {{ props.precio }}</h4>
    </div>
</template>

<style scoped>
    .productCard{
        height: 90%;
        background-color: white;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        margin: 5% 10%;
        border: 1px rgba(0, 0, 0, 0.3) solid;
        padding: 5px 10px;
        border-radius: 10px;
        align-items: center;
        transform: scale(1.03);
        transition: .2s;
    }
    .productCard:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }
    
    .productCard input {
        width: 80%;
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