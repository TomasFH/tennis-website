<template>
  <div>
      <h1>Quiénes somos</h1>
      <div class="who-container">
          <div class="item1">
              <p>Nuestro objetivo es que disfrutes de nuestras <em>clases de tenis</em>, pensadas para jugadores de todas las edades y niveles. </p>
              <p>Queremos transmitirte la misma pasión que tenemos por este deporte, que puedas mejorar tanto en tu técnica como en tu estrategia y mentalidad dentro de la cancha.</p>
              <p>Para llevarte a tu mas alto nivel contamos con clases particulares y grupales. Podrás compartir con tus amigos o familia una divertida y sana actividad física.</p>
              <p><em>Permitinos acompañarte en este camino.</em></p>
          </div>
          <div class="imagenes">
              <div class="item2">
                <img src="../assets/img/German.jpeg" width="200px" height="250px">
            </div>
            <div class="item3">
                <img src="../assets/img/Nacho.jpeg" width="200px" height="250px">
            </div>
            <div class="item4">
                <img src="../assets/img/OIP.jpeg" width="200px" height="260px">
            </div>
            <div class="item5">
                <img src="../assets/img/final.jpg" width="200px" height="270px">
            </div>
          </div>
          
      </div>
  </div>
</template>

<style scoped>
  .who-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      background-color: #f6faf9;
      padding: 10px;
      text-align: center;
  }

  .who-container > div {
      background-color: rgba(255, 255, 255, 0.8);
      font-size: 25px;
  }

  h1 {
      font-size: 30px;
      text-align: center;
  }

  .item1 {
    grid-row: 1/4;
  }

  .imagenes {
    display: grid;
    grid-template-columns: repeat(1, 100%);
  }

  @media (min-width: 500px) {
    .imagenes {
      display: grid;
      grid-template-columns: repeat(2, 50%);
    }
  }

  @media (min-width: 1125px) {
      .who-container {
          grid-template-columns: 600px 200px 200px;
      }

      .who-container > div {
          text-align: left;
      }
      .imagenes {
        display: grid;
        grid-template-columns: repeat(2, 100%);
        gap: 10px;
      }

      .item2, .item3, .item4, .item5 {
        width: 100%;
      }
  }
</style>
