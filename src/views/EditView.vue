<template>
    <div>
        <h2>Editar Producto {{ $route.params.id }}</h2>
        <form @submit.prevent="editarProducto">
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre:</label>
            <input type="text" v-model="producto.nombre" class="form-control" id="nombre" required>
        </div>
        <div class="mb-3">
            <label for="precio" class="form-label">Precio:</label>
            <input type="number" v-model="producto.precio" class="form-control" id="precio" required>
        </div>
        <div class="mb-3">
            <label for="stock" class="form-label">Stock:</label>
            <input type="number" v-model="producto.stock" class="form-control" id="stock" required>
        </div>
        <div class="mb-3">
            <label for="imagen" class="form-label">URL de la Imagen:</label>
            <input type="url" v-model="producto.imagen" class="form-control" id="imagen" required>
        </div>
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            producto: {
                id: 0,  // Puedes inicializarlo con el ID correcto obtenido de la ruta o mediante alguna lógica
                nombre: '',
                precio: 0,
                stock: 0,
                imagen: '',
            },
            };
        },
        methods: {
            // Puedes implementar la lógica de obtener el producto por ID desde tu fuente de datos (API, Vuex, etc.)
            obtenerProductoPorId(productId) {
            // Aquí puedes realizar una solicitud a tu API o cargar el producto desde donde lo almacenes
            // Simulación de carga de datos
            this.producto = {
                id: productId,
                nombre: 'Nombre del Producto',
                precio: 20,
                stock: 50,
                imagen: 'https://example.com/imagen.jpg',
            };
            },
            editarProducto() {
            // Puedes implementar la lógica para enviar la actualización a tu fuente de datos (API, Vuex, etc.)
            console.log('Guardando cambios para el producto:', this.producto);
            // Aquí deberías realizar una solicitud a tu API o enviar la actualización donde sea necesario
            // Después de guardar, puedes redirigir al usuario a la página de detalles o a donde prefieras
            },
        },
        created() {
            // Obtén los parámetros de la ruta
            const { id, nombre, precio, stock, imagen } = this.$route.params;
            console.log(this.$route.params)

            // Asigna los parámetros al objeto producto
            this.producto = {
                id: parseInt(id),
                nombre: nombre,
                precio: parseFloat(precio),
                stock: parseInt(stock),
                imagen: imagen
            };
        },
    };
</script>

<style scoped>

</style>