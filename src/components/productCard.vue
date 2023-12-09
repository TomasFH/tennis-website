<template>
    <div class="productCard">
        <h1>{{ props.nombre }}</h1>
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
        margin: 5% 10%;
        border: 1px rgba(0, 0, 0, 0.3) solid;
        padding: 5px 10px;
        border-radius: 10px;
        align-items: center;
        transform: scale(1.03);
        transition: .2s;
    }
    .productCard h1{
        font-size: 30px;
        text-align: center;
    }
    
    .productCard:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }
    
    .productCard input {
        width: 80%;
    }
    @media (min-width: 481px) {
        .productCard h1{
            font-size: 20px;
        }
        .productCard h4{
            font-size: 16px;
        }
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