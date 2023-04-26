<template>
  <section id="contacto" class="my-10">
    <h2 class="text-4xl text-wave-700 font-semibold text-center my-10">Contacto</h2>
    <div class="flex gap-5">
      <div class="text-container w-1/2"></div>
      <div class="w-1/2">
        <form
          class="flex gap-5 flex-col bg-slate-100 p-5 rounded-lg shadow-2xl"
          id="form_contacto"
          @submit.prevent="enviarMail"
        >
          <div>
            <label for="nombre">Nombre</label>
            <input
              type="text"
              class="border border-slate-300"
              v-model="formContacto.nombre"
              name="user_name"
              id="nombre"
            />
          </div>

          <div>
            <label for="email">Email</label>
            <input
              type="email"
              name="user_email"
              class="border border-slate-300"
              v-model="formContacto.email"
              id="email"
            />
          </div>

          <div>
            <label for="sugerencia">Mensaje</label>
            <textarea
              name="user_message"
              id="mensaje"
              rows="5"
              class="w-full rounded-lg p-3 font-light border border-slate-300"
              placeholder="mensaje"
              v-model="formContacto.mensaje"
            ></textarea>
          </div>
          <Button
            v-if="!isLoading && !complete"
            texto="Enviar"
            secundario
            :disabled="error"
            class="max-w-[150px] w-full mx-auto"
          />
          <Loading v-else-if="isLoading && !complete" />

          <p v-if="!isLoading && complete" class="w-2/3 text-center mx-auto text-wave-700">
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

  watch(formContacto, () => {
    if (validateEmail(formContacto.email) && !isFormEmpty(formContacto)) {
      error.value = false;
    } else {
      error.value = true;
    }
  });

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
