<template>
  <div class="container2">
      <h1 class="consulta"> ¡Escribinos!<br>
          Dejanos tus datos y nos contactaremos para brindarte un mejor asesoramiento<br>
      </h1>
        <form action="#" class="formulari">
            <fieldset>
              <input type="text" placeholder="Escribe tu nombre" name="firstname" class="nombre" required><br>
              <input type="phone" placeholder="Escribe tu teléfono" name="phone" class="telefono" required><br>
              <input type="email" placeholder="Escribe tu mail" class="mail" required><br>
              <div class="buttonok">
                <button type="submit" id="btnEnviar">Enviar</button>
              </div>
            </fieldset>
        </form>
  </div>
  <div class="mapaContainer">
    <div class="mapa">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.5384490378833!2d-58.47782644119257!3d-34.51290612899931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb14518118f17%3A0x260ad6e3989fe521!2sAntonio%20Malaver%20401%2C%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1698356848110!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      
    </div>
    <div class="mapaText">
      <h1>O también...</h1>
      <p>
        podes encontrarnos en Antonio Malaver 401, Olivos. ¡Te esperamos!
      </p>
    </div>
  </div>
</template>

<style>
  .mapaContainer {
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    align-items: center;
  }
  .mapa {
    border: 2px black solid;
  }
  .mapaText {
    margin: 0 30px;
  }
  .mapaText h1 {
    font-size: 3rem;
  }
  .mapaText p {
    font-size: 2rem;
  }
@media (min-width: 1024px) {
  .container2 {
    display: grid;
    grid-gap: 140px;
    padding: 20px 10px 69px 30px;
    grid-template-columns: 220px 220px 220px;
    background-color: white;
    grid-template-areas:
      "consulta consulta formulario"
      "consulta consulta formulario";
  }
  .consulta {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 60px;
    margin: 0;
    font-size: 40px;
    background-color: white;
    grid-area: consulta;
    font-family: 'Nunito', sans-serif;
  }
  .formulari {
    background-color: white;
    display: flex;
    justify-content: center;
    grid-area: formulario;
  }
  .formulari input {
    padding: 5px;
    margin: 10px;
    width: 30vw;
    background-color: #c8e3c5;
    color: black;
    font-size: 20px;
  }

  .formulari fieldset {
    padding: 5px;
    background-color: white;
    color: black;
    font-size: 20px;
  }

  .formulari button {
    background-color: green;
    color: white;
    padding: 9px;
    margin: 30px;
    font-size: 1.5rem;
    font-family: 'Nunito', sans-serif;
    border-radius: .5em;
  }

  .buttonok {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>

  