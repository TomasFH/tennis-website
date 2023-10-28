<script setup>
</script>

<template>
  <main class="landingPage">
    <div class="firstHalf">.</div>
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
      <div class="secondHalf"></div>
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
    width: 70%;
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
    width: 20%;
    margin: 0 auto;
    cursor: pointer;
    transition: .25s;
    text-decoration: none;
    text-align: center;
  }
  .contentText a:hover {
    background-color: rgb(50, 50, 50);
  }
</style>