<template>
  <NavBar />

  <BannerPrincipal />
  <p>{{ ios }}</p>
  <ContainerView>
    <SobreMi />
    <MisProyectos />
    <TecnologiasUtilizadas />
    <FormContacto />
  </ContainerView>
  <Footer />
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import NavBar from './components/NavBar.vue';
  import BannerPrincipal from './layouts/BannerPrincipal.vue';
  import MisProyectos from './layouts/MisProyectos.vue';
  import ContainerView from './components/ContainerView.vue';
  import FormContacto from './components/FormContacto.vue';
  import Footer from './components/FooterView.vue';
  import SobreMi from './layouts/SobreMi.vue';
  import TecnologiasUtilizadas from './layouts/TecnologiasUtilizadas.vue';

  let ios = ref();
  onMounted(() => {
    ios.value = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);
    let safariAgent = navigator.userAgent.indexOf('Safari') > -1;
    console.log(ios.value);
  });
</script>

<style scoped></style>
