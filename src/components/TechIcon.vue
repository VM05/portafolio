<template>
  <img v-if="tipo == 'webp'" :src="`/tech-icons/${icon}.webp`" :alt="name" />
  <img v-else :src="`/tech-icons/${icon}.svg`" :alt="name" />
</template>

<script setup>
  const props = defineProps({
    icon: String,
    name: String,
    tipo: {
      type: String,
      default: 'webp',
    },
  });
</script>
