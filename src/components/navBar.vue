<template>
    <div class="header">
        <div class="headerRow">
            <img class="logo" src="https://previews.123rf.com/images/madabatman/madabatman2007/madabatman200700012/150920417-dise%C3%B1o-de-logotipo-de-tenis-abstracto-en-calidad-vectorial.jpg" alt="logo">
            <nav>
                <ul>
                    <RouterLink to="/">Inicio</RouterLink>
                    <RouterLink to="/products">Productos</RouterLink>
                    <RouterLink to="/about">Acerca de</RouterLink>
                    <RouterLink to="/contact">Contacto</RouterLink>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.header{
    display: flex;
    justify-content: center;
    border-top: 6px #5ced46 solid;
}
.headerRow{
    display: flex;
    justify-content: center;
    width: 80%;
}
.logo{
    width: 100px;
    height: 100px;
    cursor: pointer;
}
nav{
    background-color: #ffffff;
    flex-grow: 0.5;
}
nav ul{
    display: flex;
    justify-content: center;
}
nav ul a, a.router-link-active{
    list-style: none;
    margin: 0 15px;
    font-size: 22px;
    font-weight: 600;
    padding: 15px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: .28s;
    text-decoration: none;
    color: #0E0E0E;
}

nav ul a:hover, a.router-link-active:hover{
    background-color: #0E0E0E;
    color: #ffffff;
}
a.router-link-active{
    background-color: #4c4c4c;
    color: #ffffff;
}
nav ul a:active, a.router-link-active:active{
    background-color: #4c4c4c;
    transition: 1ms;
}
</style>