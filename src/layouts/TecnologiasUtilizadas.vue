<template>
  <h2 class="text-center text-4xl font-semibold text-wave-700 my-10">Conocimientos</h2>
  <div class="grid justify-items-center gap-4 mb-32">
    <CardTecnologia
      v-for="{ name, tipo, icon } in tecnologias"
      :key="name"
      :icono="icon"
      :tipo="tipo"
      :texto="name"
    />
  </div>
</template>

<script setup>
  import CardTecnologia from '../components/CardTecnologia.vue';
  import { tecnologias } from '../helpers/constants';
</script>

<style scoped>
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 500px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
  }
</style>
