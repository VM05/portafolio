<template>
  <div
    class="border flex flex-col gap-3 rounded-lg overflow-hidden items-center border-slate-200 hover:-translate-y-1 transition text-wave-700 shadow-lg"
  >
    <img src="../assets/ryq.webp" alt="ryq" class="h-[200px] w-full object-cover" />

    <div class="p-3">
      <div class="flex justify-between items-center">
        <h4 class="text-2xl self-start font-semibold">{{ titulo }}</h4>
        <FontIcon
          icon="fa-regular fa-eye"
          class="bg-wave-700 p-2 rounded-full w-10 text-center text-white"
        />
      </div>
      <p class="my-5">
        {{ descripcion }}
      </p>
      <div class="flex mt-4 flex-col flex-wrap">
        <h4 class="font-semibold">Tecnologias Utilizadas</h4>

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
  });
</script>

<style scoped></style>
