<template>
  <NavBar />
  <BannerPrincipal />
  <ContainerView>
    <SobreMi />
    <MisProyectos />
    <TecnologiasUtilizadas />
    <FormContacto />
  </ContainerView>
  <Footer />
</template>

<script setup>
  import NavBar from './components/NavBar.vue';
  import BannerPrincipal from './layouts/BannerPrincipal.vue';
  import MisProyectos from './layouts/MisProyectos.vue';
  import ContainerView from './components/ContainerView.vue';
  import FormContacto from './components/FormContacto.vue';
  import Footer from './components/FooterView.vue';
  import SobreMi from './layouts/SobreMi.vue';
  import TecnologiasUtilizadas from './layouts/TecnologiasUtilizadas.vue';
</script>

<style scoped></style>
