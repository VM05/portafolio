<template>
  <section id="contacto" class="my-10">
    <h2 class="text-4xl text-wave-700 font-semibold text-center my-10">Contacto</h2>
    <div class="flex gap-5">
      <div class="text-container w-1/2"></div>
      <div class="w-1/2">
        <form class="flex gap-5 flex-col bg-slate-100 p-5 rounded-lg shadow-2xl">
          <div>
            <label for="nombre">Nombre</label>
            <input type="text" class="border border-slate-300" v-model="formContacto.nombre" />
          </div>

          <div>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              class="border border-slate-300"
              v-model="formContacto.email"
            />
          </div>

          <div>
            <label for="sugerencia">Mensaje</label>
            <textarea
              name=""
              id=""
              rows="5"
              class="w-full rounded-lg p-3 font-light border border-slate-300"
              placeholder="mensaje"
              v-model="formContacto.mensaje"
            ></textarea>
          </div>
          <Button
            texto="Enviar"
            secundario
            :disabled="error"
            class="max-w-[150px] w-full mx-auto"
          />
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
  import Button from './Button.vue';
  import { ref, reactive } from 'vue';

  const formContacto = reactive({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const error = ref(true);
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
