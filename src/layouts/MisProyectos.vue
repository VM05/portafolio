<template>
  <section id="proyectos">
    <div class="pb-10 flex flex-col relative">
      <h2 class="text-wave-700 font-semibold text-center text-4xl my-10">Proyectos Destacados</h2>
      <CardProyectoDestacado
        v-for="{ titulo, link, descripcion, iconos, video } in videoItems"
        :key="titulo"
        :titulo="titulo"
        :descripcion="descripcion"
        :video="video"
        :iconosCard="iconos"
        :link="link"
      />
    </div>
    <div class="md:mb-32">
      <h2 class="text-wave-700 font-semibold text-center text-4xl my-10">Otros Proyectos</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10" v-if="!isMobile">
        <CardProyecto
          v-for="{ titulo, link, descripcion, iconos, foto } in dataProyectos"
          :key="titulo"
          :titulo="titulo"
          :descripcion="descripcion"
          :link="link"
          :iconosCard="iconos"
          :foto="foto"
        />
      </div>
      <carousel :items-to-show="1" :breakpoints="breakpoints" v-else>
        <slide v-for="slide in dataProyectos" :key="slide" class="py-5">
          <CardProyecto
            :key="slide.titulo"
            :titulo="slide.titulo"
            :descripcion="slide.descripcion"
            :link="slide.link"
            :iconosCard="slide.iconos"
            :foto="slide.foto"
            class="h-full w-full max-w-[450px] mx-3"
          />
        </slide>
        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination } from 'vue3-carousel';
  import CardProyecto from '../components/CardProyecto.vue';
  import CardProyectoDestacado from '../components/CardProyectoDestacado.vue';
  import { videoItems, dataProyectos } from '../helpers/constants';
  const props = defineProps({
    data: Array,
    dataProyectos: Array,
  });

  const isMobile = ref();

  const breakpoints = {
    // 700px and up
    700: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
  };

  onMounted(() => {
    window.innerWidth < 600 ? (isMobile.value = true) : (isMobile.value = false);
    window.addEventListener('resize', () => {
      window.innerWidth < 600 ? (isMobile.value = true) : (isMobile.value = false);
    });
  });
</script>

<style lang="scss" scoped></style>
