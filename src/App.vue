<template>
  <NavBar />

  <BannerPrincipal />
  <ContainerView>
    <SobreMi />
    <MisProyectos :data="videoItems" />
    <FormContacto />
  </ContainerView>
  <Footer />
</template>

<script setup>
  import NavBar from './components/NavBar.vue';
  import BannerPrincipal from './layouts/BannerPrincipal.vue';
  import MisProyectos from './layouts/MisProyectos.vue';
  import ContainerView from './components/ContainerView.vue';
  import { videoItems } from './helpers/constants';
  import FormContacto from './components/FormContacto.vue';
  import Footer from './components/Footer.vue';
  import SobreMi from './layouts/SobreMi.vue';
</script>

<style scoped></style>
