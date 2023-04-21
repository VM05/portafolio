<template>
  <div class="py-10 flex group odd:flex-row-reverse even:flex-row relative group project-container">
    <div
      class="bg-blue w-2/5 p-10 bg-wave-700 absolute group-odd:left-0 group-even:right-0 z-10 top-1/2 -translate-y-1/2 text-white rounded-xl"
    >
      <h3 class="text-4xl text-right mb-10">{{ titulo }}</h3>

      <p>
        {{ descripcion }}
        {{ link }}
      </p>
    </div>

    <video
      :src="link"
      height="400"
      width="800"
      class="rounded-2xl grayscale group-hover:grayscale-0 z-0 transition"
      muted
    ></video>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  const props = defineProps({
    titulo: String,
    descripcion: String,
    link: String,
  });

  onMounted(() => {
    const projectContainer = document.querySelectorAll('.project-container');

    projectContainer.forEach((project) => {
      const video = project.querySelector('video');
      project.addEventListener('mouseover', function () {
        video.play();
        video.addEventListener('ended', () => {
          video.play();
        });
      });

      project.addEventListener('mouseout', function () {
        video.pause();
      });

      project.addEventListener('touchstart', function () {
        video.play();
      });

      project.addEventListener('touchend', function () {
        video.pause();
      });
    });
  });
</script>

<style scoped></style>
