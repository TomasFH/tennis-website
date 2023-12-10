<script setup>
</script>

<template>
  <main class="landingPage">
    <div class="firstHalf"></div>
    <div class="content">
      <div class="contentImg">
        <img src="../assets/img/raquetas.jpg" alt="raquetas landing page">
      </div>
      <div class="contentText">
        <h1>¡Bienvenido!</h1>
        <p>¿Querés aprender tenis?<br>
          ¿Querés entrenar?<br>
          ¿Queres perfeccionar tu estilo?<br>
          <br>
          ¡Chequeá nuestras opciones!</p>
        <RouterLink to="/products">Ver más</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>

  .landingPage {
    width: 100%;
    /* background-color: gray; */
    flex: 1;
    display: flex;
    position: relative;
  }
  .firstHalf {
    background-color: #5ced46;
    width: 100%;
    color: #5ced46;
  }
  .content {
    position: absolute;
    width: 80%;
    left: 10%;
    display: flex;
    padding-top: 5%;
  }
  .contentImg img{
    width: 100%;
    border-radius: 10px;
  }
  .contentText {
    padding: 0 3rem;
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .contentText h1 {
    font: 700;
    font-size: 3em;
    text-decoration: underline;
  }
  .content p {
    font: 500;
    font-size: 1.75em;
  }
  .contentText a {
    background-color: black;
    color: white;
    font: bold;
    font-size: 21px;
    border-radius: 20px;
    padding: 20px 15px;
    margin: 0 auto;
    cursor: pointer;
    transition: .25s;
    text-decoration: none;
    text-align: center;
  }
  .contentText a:hover {
    background-color: rgb(50, 50, 50);
  }
  
@media (max-width: 1024px) {
  .landingPage {
    width: 100%;
    /* background-color: gray; */
    flex: 1;
    display: flex;
    position: relative;
  }

  .firstHalf {
    display: none;
    background-color: #5ced46;
    width: 100%;
    color: #5ced46;
    position: absolute;
    height: 100%;
  }

  .content {
    position: static;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 20px;
    width: 100%; /* Cambiado a 100% para adaptarse horizontalmente */
    max-width: 1200px; /* Ajusta el ancho máximo según tus necesidades */
    margin: 0 auto; /* Centra el contenido horizontalmente */
    background-color: #5ced46;
  }

  .contentImg {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .contentImg img {
    width: 80%;
    max-width: 100%; /* Ajuste para que la imagen no se achique demasiado */
  }

  .contentText {
    padding: 2rem; /* Añadido un padding general */
    width: 80%; /* Cambiado a 100% para adaptarse horizontalmente */
    text-align: center; /* Centrado horizontalmente */
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrado verticalmente */
  }

  .contentText h1 {
    font: 700;
    font-size: 3em;
    text-decoration: underline;
  }

  .content p {
    font: 500;
    font-size: 1.75em;
  }

  .contentText a {
    background-color: black;
    color: white;
    font: bold;
    font-size: 21px;
    border-radius: 20px;
    padding: 20px 15px;
    width: 70%; /* Cambiado a 70% para adaptarse horizontalmente */
    max-width: 300px; /* Ajusta el ancho máximo según tus necesidades */
    margin-top: 20px; /* Añadido margen superior */
    cursor: pointer;
    transition: .25s;
    text-decoration: none;
    text-align: center;
  }

  .contentText a:hover {
    background-color: rgb(50, 50, 50);
  }
}
</style>