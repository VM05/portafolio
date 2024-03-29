<template>
  <section id="contacto" class="mt-10 mb-20">
    <h2 class="text-4xl text-wave-700 font-semibold text-center my-10">
      Contacto
    </h2>
    <div class="flex flex-col md:flex-row gap-5">
      <div
        class="text-container w-full md:w-1/2 text-lg p-3 text-center md:text-left"
      >
        <p>
          <strong
            >Actualmente me encuentro en búsqueda de mi próxima oportunidad
            laboral.
          </strong>
        </p>
        <br />
        <p>
          Si tienes algún comentario con respecto a mis proyectos o mi sitio
          web, o alguna oferta laboral no dudes en contactarte conmigo,
          intentaré responder todos los mensajes lo más pronto posible.
        </p>
      </div>
      <div class="w-full md:w-1/2">
        <form
          class="flex [&>div]:py-3 flex-col bg-slate-100 p-5 rounded-lg shadow-2xl"
          id="form_contacto"
          @submit.prevent="enviarMail"
        >
          <div class="relative">
            <label for="nombre">Nombre</label>
            <input
              type="text"
              class="border border-slate-300"
              v-model="formContacto.nombre"
              name="user_name"
              id="nombre"
              @input="checkNombre"
            />

            <span
              class="absolute left-0 text-red-400 bottom-0 text-sm"
              v-if="warningNombre"
            >
              El nombre es obligatorio
            </span>
          </div>

          <div class="relative">
            <label for="email">Email</label>
            <input
              type="email"
              name="user_email"
              class="border border-slate-300"
              v-model="formContacto.email"
              @input="checkEmail"
              id="email"
            />

            <span
              class="absolute left-0 text-red-400 bottom-0 text-sm"
              v-if="warningEmail"
            >
              {{ warningEmailMessage }}
            </span>
          </div>

          <div class="relative">
            <label for="sugerencia">Mensaje</label>
            <textarea
              name="user_message"
              id="mensaje"
              rows="5"
              class="w-full rounded-lg p-3 my-3 font-light border border-slate-300"
              placeholder="mensaje"
              v-model="formContacto.mensaje"
              @input="checkMensaje"
            ></textarea>
            <span
              class="absolute left-0 text-red-400 bottom-0 text-sm"
              v-if="warningMensaje"
              >Debe ingresar un mensaje</span
            >
          </div>
          <Button
            v-if="!isLoading && !complete"
            texto="Enviar"
            secundario
            :disabled="error"
            class="max-w-[150px] w-full mx-auto mt-5"
          />
          <Loading v-else-if="isLoading && !complete" />

          <p
            v-if="!isLoading && complete"
            class="w-2/3 text-center mx-auto text-wave-700"
          >
            Muchas gracias por comunicarte conmigo! <br />
            te respondere lo mas pronto posible
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
  import Button from './Button.vue';
  import { ref, reactive, watch } from 'vue';
  import { validateEmail, isFormEmpty } from '../helpers/validaciones';
  import emailjs from '@emailjs/browser';
  import Loading from './Loading.vue';

  const formContacto = reactive({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const error = ref(true);
  const isLoading = ref(false);
  const complete = ref(false);
  const warningEmail = ref(false);
  const warningEmailMessage = ref('');
  const warningNombre = ref(false);
  const warningMensaje = ref(false);

  const checkEmail = () => {
    if (formContacto.email.length == 0) {
      warningEmailMessage.value = 'El email es obligatorio';
      warningEmail.value = true;
      return;
    } else if (!validateEmail(formContacto.email)) {
      warningEmailMessage.value = 'Debe ingresar un Email valido';
      warningEmail.value = true;
      return;
    } else {
      warningEmailMessage.value = '';
      warningEmail.value = false;
    }
  };

  const checkNombre = () => {
    formContacto.nombre.length == 0
      ? (warningNombre.value = true)
      : (warningNombre.value = false);
  };

  const checkMensaje = () => {
    formContacto.mensaje.length == 0
      ? (warningMensaje.value = true)
      : (warningMensaje.value = false);
  };

  const enviarMail = async () => {
    isLoading.value = true;
    const formulario = document.getElementById('form_contacto');

    const { status } = await emailjs.sendForm(
      'service_nxintto',
      'template_bg9hxen',
      formulario,
      'u3dYQ9aE_YOEkW79M'
    );

    if (status == 200) {
      complete.value = true;
      formContacto.nombre = '';
      formContacto.email = '';
      formContacto.mensaje = '';
    }
    isLoading.value = false;
  };

  watch(formContacto, () => {
    if (
      validateEmail(formContacto.email) &&
      !isFormEmpty(formContacto) &&
      formContacto.mensaje.trim().length > 0 &&
      formContacto.nombre.trim().length > 0
    ) {
      error.value = false;
    } else {
      error.value = true;
    }
  });
</script>

<style scoped>
  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    padding: 10px;
    border: solid 1px;
    border-color: rgb(203 213 225);
    margin: 10px 0px;
    border-radius: 5px;
  }
</style>
