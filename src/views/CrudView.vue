<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div>
        <header id="header">
        <!-- place navbar here -->
            <!-- <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <div class="container">
                <a class="navbar-brand" href="index.html">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                <a class="nav-link active" href="index.html" aria-current="page">Home <span

                class="visually-hidden">(current)</span></a>

                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="productos.html">Produtos</a>
                <a class="dropdown-item" href="#">Action 2</a>
                </div>
                </li>
                </ul>
                <form class="d-flex my-2 my-lg-0">
                <input class="form-control me-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0"

                type="submit">Search</button>
                </form>

                </div>
                </div>
            </nav> -->
        </header>
        <main>
            <div id="app" class="container">
                <h1>Productos</h1>
                <br>
                <router-link class="btn btn-primary" to="/crud/newProduct">Nuevo</router-link>
                <br><br>

                <div v-if="error">
                    <p>Lo sentimos , ........</p>
                </div>
                <div v-else>
                    <section v-if="cargando">
                        <div class="spinner-border"></div>
                        <p>Cargando .....</p>
                    </section>
                    <section v-else>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="" v-for="producto in productos" :key="producto.id">
                                        <td scope="row">{{producto.id}}</td>
                                        <td>{{producto.nombre}}</td>
                                        <td>{{producto.precio}}</td>
                                        <td>{{producto.stock}}</td>
                                        <td>
                                            <img width="60" :src="producto.imagen" :alt="producto.nombre">
                                        </td>
                                        <td>
                                            <router-link class="btn btn-primary"
                                                :to="{
                                                    name:'edit-product',
                                                    params: { id: producto.id, nombre: producto.nombre, precio: producto.precio, stock: producto.stock, imagen: producto.imagen }
                                                    }"
                                                    >Editar</router-link>
                                            <button type="button" class="btn btn-danger"
                                                v-on:click="eliminar(producto.id)">Eliminar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    </div>
</template>
  
<script>
    export default {
        data() {
        return {
            productos: [],
            url: 'https://MarcelaNapoli.pythonanywhere.com/productos',
            error: false,
            cargando: true,
            id: 0,
            nombre: '',
            imagen: '',
            stock: 0,
            precio: 0,
        };
        },
        methods: {
        fetchData(url) {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.productos = data;
                this.cargando = false;
            })
            .catch((err) => {
                console.error(err);
                this.error = true;
            });
        },
        eliminar(producto) {
            const url = this.url + '/' + producto;
            var options = {
            method: 'DELETE',
            };
            fetch(url, options)
            .then((res) => res.text())
            .then(() => {
                location.reload();
            });
        },
        grabar() {
            let producto = {
            nombre: this.nombre,
            precio: this.precio,
            stock: this.stock,
            imagen: this.imagen,
            };
            var options = {
            body: JSON.stringify(producto),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            };
            fetch(this.url, options)
            .then(() => {
                alert('Registro grabado');
            })
            .catch((err) => {
                console.error(err);
                alert('Error al Grabar');
            });
        },
        },
        created() {
        this.fetchData(this.url);
        },
    };
</script>
  
<style scoped>

</style>