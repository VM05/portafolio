<template>
  <button
    class="rounded-lg py-3 px-5 text-white transition font-semibold inline-block"
    :class="{
      'cursor-pointer': !disabled,
      'bg-slate-500 hover:bg-slate-400 hover:cursor-not-allowed border-black-50': disabled,
      'bg-wave-700 hover:bg-wave-900': primario && !disabled,
      'bg-whatsapp-700 hover:bg-whatsapp-900': secundario && !disabled,
    }"
    :disabled="disabled"
  >
    {{ texto }}
  </button>
</template>

<script setup>
  const props = defineProps({
    texto: String,
    primario: Boolean,
    secundario: Boolean,
    disabled: Boolean,
  });
</script>

<style scoped></style>
