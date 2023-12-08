<template>
    <div>
        <h2>Editar Producto {{ $route.params.id }}</h2>
        <form @submit.prevent="modificar">
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
        const {id, nombre, precio, stock, imagen} = this.$route.params
        return {
        producto: {
            id,
            nombre,
            precio,
            stock,
            imagen,
            url: 'https://MarcelaNapoli.pythonanywhere.com/productos/' + id,
        },
        };
    },
    methods: {
        modificar() {
            var options = {
            body: JSON.stringify({
                nombre: this.producto.nombre,
                precio: this.producto.precio,
                stock: this.producto.stock,
                imagen: this.producto.imagen
            }),
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
            };

            fetch(this.producto.url, options)
            .then(() => {
                alert("Registro modificado");
                console.log(this.producto.url);
                this.$router.push('/crud');
            })
            .catch((err) => {
                console.error(err);
                alert("Error al Modificar");
            });
        },
    },
};
</script>

<style scoped>

</style>