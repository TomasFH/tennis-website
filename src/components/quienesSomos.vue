<template>
    <div>
        <h1>Quiénes somos</h1>
            <div class="grid-container">
              <div class="item1"><p>Nuestro objetivo es que disfrutes de nuestras <em>clases de tenis</em>, pensadas para jugadores de todas las edades y niveles. </p> 
              <p>Queremos transmitirte la misma pasión que tenemos por este deporte, que puedas mejorar tanto en tu técnica como en tu estrategia y mentalidad dentro de la cancha.</p>
              <p>Para llevarte a tu mas alto nivel contamos con clases particulares y grupales. Podrás compartir con tus amigos o familia una divertida y sana actividad física.</p>
              <p><em>Permitinos acompañarte en este camino.</em></p>
            </div>
              <div class="item2">
                <img src="../assets/img/German.jpeg" width="200" height="250">
              </div>
              <div class="item3">
                <img src="../assets/img/Nacho.jpeg" width="200" height="250">
              </div>  
              <div class="item4">
                <img src="../assets/img/OIP.jpeg" width="210" height="260">
              </div>
              <div class="item5">
                <img src="../assets/img/final.jpg" width="200" height="270">
              </div>
    </div>
</div>
</template>
<style scoped>
 .grid-container {
          display: grid;
          grid-template-columns: 600px 200px 200px;
          gap: 10px;
          background-color: #f6faf9;
          padding: 10px;
        }
        
        .grid-container > div {
          background-color: rgba(255, 255, 255, 0.8);
          text-align: center;
          padding: 5px;
          font-size: 25px;
        }
        
        .item1 {
          grid-row: 1 / 4;
        }
        
        h1{font-size: 30px;}
</style>