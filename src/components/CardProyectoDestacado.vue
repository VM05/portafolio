<template>
  <div
    class="md:py-10 py-5 flex flex-col-reverse group md:odd:flex-row-reverse md:even:flex-row relative group project-container mb-5"
  >
    <div
      class="bg-blue w-full md:w-2/5 p-10 bg-wave-700 md:absolute md:group-odd:left-0 md:group-even:right-0 md:z-10 md:top-1/2 md:-translate-y-1/2 text-white rounded-b-xl md:rounded-xl contenedor-texto"
    >
      <div class="flex justify-between mb-5 items-center">
        <h3
          class="text-2xl md:text-4xl md:group-odd:text-left md:group-even:text-right font-semibold"
        >
          {{ titulo }}
        </h3>
        <a :href="link" v-if="link" target="_blank" :name="titulo">
          <FontIcon
            icon="fa-regular fa-eye"
            class="bg-white text-wave-700 p-2 rounded-full text-center"
          />
        </a>
      </div>
      <p>
        {{ descripcion }}
      </p>

      <div class="flex mt-4 flex-col flex-wrap">
        <h4 class="font-semibold">Tecnologías Utilizadas</h4>
        <div class="flex mt-4 items-center flex-wrap gap-3">
          <TechIcon
            v-for="{ icon, name, tipo } in iconosCard"
            :key="name"
            :icon="icon"
            :name="name"
            class="object-cover w-auto"
            :class="icon == 'tailwind' ? 'h-7' : 'h-8'"
            :tipo="tipo"
          />
        </div>
      </div>
    </div>

    <video
      :src="video"
      class="rounded-t-2xl md:rounded-2xl z-0 grayscale transition max-w-[800px] w-full h-auto contenedor-texto"
      muted
      playsinline
    ></video>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import TechIcon from './TechIcon.vue';
  import FontIcon from './FontIcon.vue';
  const props = defineProps({
    titulo: String,
    descripcion: String,
    video: String,
    iconosCard: Array,
    link: String,
  });

  const playVideo = (entries) => {
    let entry = entries[0];
    const video = entry.target.lastChild;
    if (entry.isIntersecting) {
      entry.target.lastChild.classList.remove('grayscale');
      video.play();
      video.addEventListener('ended', () => {
        video.play();
      });
    } else {
      entry.target.lastChild.classList.add('grayscale');
      entry.target.lastChild.pause();
    }
  };

  onMounted(() => {
    const projectContainer = document.querySelectorAll('.project-container');

    let observer = new IntersectionObserver(playVideo, {
      rootMargin: '0px',
      threshold: 1.0,
    });

    projectContainer.forEach((project) => {
      const video = project.querySelector('video');
      observer.observe(project);
      video.playbackRate = 1.3;
      // project.addEventListener('mouseover', function () {
      //   video.play();
      //   video.addEventListener('ended', () => {
      //     video.play();
      //   });
      // });

      // project.addEventListener('mouseout', function () {
      //   video.pause();
      // });

      // project.addEventListener('touchstart', function () {
      //   video.play();
      // });

      // project.addEventListener('touchend', function () {
      //   video.pause();
      // });
    });
  });
</script>

<style scoped>
  .contenedor-texto {
    box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    .contenedor-texto {
      box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);
    }
  }
</style>
