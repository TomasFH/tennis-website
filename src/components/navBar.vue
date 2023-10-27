<script setup>
    import { library } from '@fortawesome/fontawesome-svg-core'

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    import { faBars } from '@fortawesome/free-solid-svg-icons'

    library.add(faBars)

    //Toggle Btn para abrir y/o cerrar el menú
    function toggleMenu() {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    };

</script>

<template>
    <div class="header">
        <div class="headerRow">
            <a href="/">
                <img class="logo" src="https://previews.123rf.com/images/madabatman/madabatman2007/madabatman200700012/150920417-dise%C3%B1o-de-logotipo-de-tenis-abstracto-en-calidad-vectorial.jpg" alt="logo">
            </a>
            <nav>
                <ul>
                    <RouterLink to="/">Inicio</RouterLink>
                    <RouterLink to="/products">Productos</RouterLink>
                    <RouterLink to="/about">Acerca de</RouterLink>
                    <RouterLink to="/contact">Contacto</RouterLink>
                </ul>
            </nav>
            <div class="menu">
                <ul>
                    <li><RouterLink to="/">Inicio</RouterLink></li>
                    <li><RouterLink to="/products">Productos</RouterLink></li>
                    <li><RouterLink to="/about">Acerca de</RouterLink></li>
                    <li><RouterLink to="/contact">Contacto</RouterLink></li>
                    <div class="menu-close-btn" v-on:click="toggleMenu">&#10006;</div>
                </ul>
            </div>
            <button v-on:click="toggleMenu" class="menuBtn">
                <font-awesome-icon icon="fa-solid fa-bars" class="menuBars" />
            </button>
        </div>
    </div>
</template>

<style scoped>
    .menuBtn {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .menuBars {
        height: 2rem;
        cursor: pointer;
    }
    .menu {
        display: none;
        position: absolute;
        top: 5px;
        left: 0;
        animation: slideDown 0.28s ease;
        background-color: #5ced46;
        width: 100%;
    }

    .menu.active {
        display: block;
        background-color: #5ced46;
    }
    .menu.active ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 30px;
    }
    .menu.active ul li{
        list-style-type: none;
    }
    .menu.active ul li a{
        text-decoration: none;
        color: black;
        font-weight: 700;
        font-size: 1rem;
    }

    @keyframes slideDown {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
    .menu-close-btn {
        cursor: pointer;
    }
    .header{
        display: flex;
        justify-content: center;
        border-top: 6px #5ced46 solid;
    }
    .headerRow{
        display: flex;
        justify-content: space-between;
        width: 80%;
        font-family: 'Nunito', sans-serif;
        align-items: center;
    }
    .logo{
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
    nav{
        background-color: #ffffff;
        /* flex-grow: 0.5; */
    }
    nav ul{
        display: flex;
        justify-content: center;
        display: none;
    }
    
    @media (min-width: 875px) {
        .menuBars, .menu ul {
            display: none;
        }
        .header{
        display: flex;
        justify-content: center;
        border-top: 6px #5ced46 solid;
        }
        .headerRow{
            display: flex;
            justify-content: center;
            width: 80%;
            font-family: 'Nunito', sans-serif;
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
            display: visible;
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
    }
</style>