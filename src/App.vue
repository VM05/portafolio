<template>
  <NavBar />

  <BannerPrincipal />
  <ContainerView>
    <section id="formacion" class="h-[500px] flex items-center bg-red-400">
      <p>seccion-2</p>
    </section>
    <section id="proyectos" class="py-10 flex flex-col relative">
      <MisProyectos
        v-for="{ titulo, link, descripcion } in videoItems"
        :key="titulo"
        :titulo="titulo"
        :descripcion="descripcion"
        :link="link"
      />
    </section>
    <section id="contacto" class="h-[700px] flex items-center bg-yellow-400">
      <p>seccion-4</p>
    </section>
  </ContainerView>
</template>

<script setup>
  import NavBar from './components/NavBar.vue';
  import BannerPrincipal from './layouts/BannerPrincipal.vue';
  import MisProyectos from './layouts/MisProyectos.vue';
  import ContainerView from './components/ContainerView.vue';
  import { videoItems } from './helpers/constants';
</script>

<style scoped></style>
