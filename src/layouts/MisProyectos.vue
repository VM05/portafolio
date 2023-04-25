<template>
  <section id="proyectos" class="py-10 flex flex-col relative">
    <h2 class="text-wave-700 font-semibold text-center text-4xl my-10">Algunos Proyectos</h2>
    <CardProyectoDestacado
      v-for="{ titulo, link, descripcion, iconos } in data"
      :key="titulo"
      :titulo="titulo"
      :descripcion="descripcion"
      :link="link"
      :iconosCard="iconos"
    />
  </section>
</template>

<script setup>
  import { onMounted } from 'vue';
  import CardProyectoDestacado from '../components/CardProyectoDestacado.vue';
  const props = defineProps({
    data: Array,
  });

  onMounted(() => {
    console.log(props.data);
  });
</script>

<style lang="scss" scoped></style>
