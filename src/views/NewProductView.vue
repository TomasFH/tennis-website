<template>
    <div class="container" id="app">
      <div class="d-flex justify-content-center align-items-center h-100">
        <form
          style="
            background-color: aliceblue;
            width: 400px;
            padding: 20px;
          "
        >
          <h1 class="text-center mb-4">Nuevo Producto</h1>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" name="nombre" id="nombre" class="form-control" v-model="nombre" />
          </div>
          <div class="mb-3">
            <label for="precio" class="form-label">Precio</label>
            <input type="number" name="precio" id="precio" class="form-control" v-model="precio" />
          </div>
  
          <div class="mb-3">
            <label for="stock" class="form-label">Stock</label>
            <input type="number" name="stock" id="stock" class="form-control" v-model="stock" />
          </div>
          <div class="mb-3">
            <label for="imagen" class="form-label">Imagen</label>
            <input type="text" name="imagen" id="imagen" class="form-control" v-model="imagen" />
            <img width="100" :src="imagen" alt="" class="mt-2" />
          </div>
          <button type="button" class="btn btn-success" @click="grabar">Grabar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        url: 'https://MarcelaNapoli.pythonanywhere.com/productos',
        nombre: '',
        precio: 0,
        stock: 0,
        imagen: '',
      };
    },
    methods: {
      grabar() {
        const producto = {
          nombre: this.nombre,
          precio: this.precio,
          stock: this.stock,
          imagen: this.imagen,
        };
  
        const options = {
          body: JSON.stringify(producto),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          redirect: 'follow',
        };
  
        fetch(this.url, options)
          .then(() => {
            alert('Registro grabado');
            this.$router.push('/crud');
          })
          .catch((err) => {
            console.error(err);
            alert('Error al Grabar');
          });
      },
    },
  };
  </script>
  
  <style scoped>
    /* Estilos específicos del componente */
  </style>
  