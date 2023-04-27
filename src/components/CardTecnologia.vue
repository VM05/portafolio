<template>
  <div
    class="flex flex-col items-center border p-3 gap-5 rounded-xl max-w-[200px] w-full justify-center border-slate-200 shadow-lg h-full transition hover:-translate-x-1 hover:-translate-y-1"
  >
    <img
      v-if="tipo == 'svg'"
      :src="`/tech-icons/${icono}.svg`"
      alt="bootstrap"
      class="min-w-[60px] max-h-[60px]"
    />
    <img
      v-else
      :src="`/tech-icons/${icono}.webp`"
      alt="bootstrap"
      class="max-w-[60px] max-h-[60px]"
    />
    <h5 class="text-wave-700 font-semibold">{{ texto }}</h5>
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

<style scoped></style>
