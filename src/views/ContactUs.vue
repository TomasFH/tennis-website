<template>
    <div class="container2">
        <h1 class="consulta"> Escribinos!<br>
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
</template>
  
<style>
  @media (min-width: 1024px) {
    .contactUs {
      /* min-height: 100vh; */
      display: flex;
      align-items: center;
    }
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
  