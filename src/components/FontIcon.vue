<template>
  <a
    :href="link"
    class="hover:opacity-80 hover:scale-105 transition"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="nombre"
  >
    <font-awesome-icon :icon="icon" class="transition" />
  </a>
</template>

<script setup>
  import { ref } from 'vue';
  const props = defineProps({
    icon: String,
    index: Number,
    link: String,
    nombre: String,
  });

  const intervalo = ref(props.index * 0.2 + 's');
</script>

<style scoped>
  .icons svg {
    opacity: 0;
    animation: moveup 1s ease-in-out forwards;
    animation-delay: v-bind(intervalo);
  }

  @keyframes moveup {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }

    50% {
      opacity: 0.5;
      transform: translateY(-5px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
