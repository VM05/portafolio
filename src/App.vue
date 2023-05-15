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
  import { useHead } from '@vueuse/head';
  import NavBar from './components/NavBar.vue';
  import BannerPrincipal from './layouts/BannerPrincipal.vue';
  import MisProyectos from './layouts/MisProyectos.vue';
  import ContainerView from './components/ContainerView.vue';
  import FormContacto from './components/FormContacto.vue';
  import Footer from './components/FooterView.vue';
  import SobreMi from './layouts/SobreMi.vue';
  import TecnologiasUtilizadas from './layouts/TecnologiasUtilizadas.vue';

  useHead({
    meta: [
      { property: 'og:url', content: 'Victor Portfolio' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'portafolio profesional de victor montiel' },
      {
        property: 'og:description',
        content: 'Este es el portafolio profesional de victor montiel',
      },
      { property: 'og:image', content: '/public/victorweb.webp' },
    ],
  });
</script>

<style scoped></style>
