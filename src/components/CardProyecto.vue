<template>
  <div
    class="border flex flex-col gap-3 rounded-lg overflow-hidden items-center border-slate-200 hover:scale-105 transition text-wave-700 shadow-lg"
  >
    <img :src="foto" alt="ryq" class="h-[200px] w-full object-cover" />

    <div class="p-3 h-full flex flex-col flex-grow">
      <div class="flex justify-between items-center">
        <h3 class="text-2xl font-semibold">{{ titulo }}</h3>

        <FontIcon
          icon="fa-regular fa-eye"
          class="bg-wave-700 p-2 rounded-full w-10 text-center text-white"
          :link="link"
          :nombre="titulo"
        />
      </div>
      <p class="my-5">
        {{ descripcion }}
      </p>
      <div class="flex flex-col mt-auto">
        <h4 class="font-semibold self-start">Tecnologías Utilizadas</h4>

        <div class="flex items-center flex-wrap gap-3 my-2">
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
  </div>
</template>

<script setup>
  import TechIcon from './TechIcon.vue';
  import FontIcon from './FontIcon.vue';
  const props = defineProps({
    titulo: String,
    descripcion: String,
    link: String,
    iconosCard: Array,
    foto: String,
  });
</script>

<style scoped></style>
