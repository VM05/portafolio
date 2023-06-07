<template>
  <div
    class="flex flex-col items-center p-3 gap-5 rounded-xl max-w-[200px] w-full justify-center h-full"
  >
    <img
      v-if="tipo == 'svg'"
      :src="`/tech-icons/${icono}.svg`"
      alt="bootstrap"
      class="min-w-[60px] max-h-[60px] sombra"
      draggable="false"
    />
    <img
      v-else
      :src="`/tech-icons/${icono}.webp`"
      alt="bootstrap"
      class="max-w-[60px] max-h-[60px] sombra"
      draggable="false"
    />
    <p class="text-wave-700 font-semibold">{{ texto }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    icono: String,
    texto: String,
    tipo: {
      type: String,
      default: 'webp',
    },
  });
</script>

<style scoped>
  .sombra {
    filter: drop-shadow(3px 4px 1px rgb(0 0 0 / 0.1));
  }
</style>
