<template>
  <NavBar />

  <BannerPrincipal />
  <ContainerView>
    <section id="formacion" class="h-[500px] flex items-center bg-red-400">
      <p>seccion-2</p>
    </section>
    <MisProyectos :data="videoItems" />
    <FormContacto />
  </ContainerView>
</template>

<script setup>
  import NavBar from './components/NavBar.vue';
  import BannerPrincipal from './layouts/BannerPrincipal.vue';
  import MisProyectos from './layouts/MisProyectos.vue';
  import ContainerView from './components/ContainerView.vue';
  import { videoItems } from './helpers/constants';
  import FormContacto from './components/FormContacto.vue';
</script>

<style scoped></style>
