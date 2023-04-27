<template>
  <section id="proyectos">
    <div class="py-10 flex flex-col relative">
      <h2 class="text-wave-700 font-semibold text-center text-4xl my-10">Proyectos Destacados</h2>
      <CardProyectoDestacado
        v-for="{ titulo, link, descripcion, iconos } in data"
        :key="titulo"
        :titulo="titulo"
        :descripcion="descripcion"
        :link="link"
        :iconosCard="iconos"
      />
    </div>
    <div>
      <h2 class="text-wave-700 font-semibold text-center text-4xl my-10">Otros Proyectos</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <CardProyecto
          v-for="{ titulo, link, descripcion, iconos } in data"
          :key="titulo"
          :titulo="titulo"
          :descripcion="descripcion"
          :link="link"
          :iconosCard="iconos"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  import CardProyecto from '../components/CardProyecto.vue';
  import CardProyectoDestacado from '../components/CardProyectoDestacado.vue';
  const props = defineProps({
    data: Array,
  });
</script>

<style lang="scss" scoped></style>
