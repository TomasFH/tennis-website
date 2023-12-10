<script setup>

  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /* import specific icons */
  import { faPhone } from '@fortawesome/free-solid-svg-icons'

  /* add icons to the library */
  library.add(faPhone)

  import { reactive, ref } from 'vue';
  
  const formData = reactive({
    name: '',
    phone: '',
    email: ''
    // Otros campos del formulario
  });

  const nameError = ref(null);
  const phoneError = ref(null);
  const emailError = ref(null);
  // Otras referencias para errores de validación

  const textRegex = /^[a-zA-Z]{1,50}$/;

  const validateName = () => {
    if (textRegex.test(formData.name)) {
      nameError.value = '';
    } else {
      nameError.value = 'El nombre debe ser menor a 50 caracteres y no deben haber números'
    }
  }

  const validateNumber = () => {
    const numberRegex = /^[0-9]+$/;
    if (numberRegex.test(formData.phone)) {
      phoneError.value = '';
    } else {
      phoneError.value = 'Ingrese solo caracteres numéricos';
    }
  }
  
  
  const validateEmail = () => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(formData.email)) {
    emailError.value = 'Ingrese una dirección de correo electrónico válida.';
  } else {
    emailError.value = null;
    }
  };

  

</script>

<template>
    <div class="container2">
      <h1 class="consulta">
        ¡Escribinos!<br>
        Dejanos tus datos y nos contactaremos para brindarte un mejor asesoramiento<br>
      </h1>
      <form action="#" class="formulari">
        <fieldset>
          <input type="text" v-model="formData.name" @input="validateName" placeholder="Escribe tu nombre" name="firstname" class="nombre" required><br>
          <span class="errorMsg" v-if="nameError">{{ nameError }}</span>
          <input type="phone" v-model="formData.phone" @input="validateNumber" placeholder="Escribe tu teléfono" name="phone" class="telefono" required><br>
          <span class="errorMsg" v-if="phoneError">{{ phoneError }}</span>
          <input type="email" v-model="formData.email" @input="validateEmail" placeholder="Escribe tu mail" class="mail" required><br>
          <span class="errorMsg" v-if="emailError">{{ emailError }}</span>
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
      <div class="contactoNumero">
        <font-awesome-icon icon="fa-solid fa-phone" class="iconoTelefono"/>
        <h4>11-5049-5355</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .mapaContainer {
    padding: 10px; /* Reduzco el padding para pantallas más pequeñas */
    display: flex;
    flex-direction: column; /* Cambio la dirección a columna para tamaños pequeños */
    align-items: center;
    background-color: #5ced46;
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
  .contactoNumero {
    display: flex;
    align-items: center;
  }
  .contactoNumero h4 {
    margin-left: 20px;
    font-size: 3rem;
  }
  .iconoTelefono {
    height: 2rem;
  }
  .errorMsg {
    color: red;
  }

  .container2 {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }

  .consulta {
    font-size: 1.5rem;
  }

  .formulari {
    max-width: 600px;
    margin: 0 auto;
  }

  .formulari input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }

  .errorMsg {
    color: red;
    display: block;
    margin-top: 5px;
  }

  .buttonok {
    text-align: center;
  }

  .buttonok button {
    background-color: #5ced46;
  }

  @media (max-width: 768px) {
    .consulta {
      font-size: 1.2rem;
    }

    .formulari {
      max-width: 100%;
    }
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
      background-color: #5ced46;
      color: black;
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
  @media (min-width: 768px) {
    .mapaContainer {
      padding: 0 80px; /* Restauro el padding original para pantallas más grandes */
      flex-direction: row; /* Vuelvo a la dirección por defecto para tamaños mayores */
    }
  }
</style>