<template>
  <div class="burger" :class="cambiar ? 'change' : ''" @click="change">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script setup>
  const emits = defineEmits(['clickToggle']);
  const props = defineProps({
    cambiar: Boolean,
  });

  const change = (e) => {
    emits('clickToggle', e.target);
  };
</script>

<style scoped>
  .burger {
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 25px;
    height: 3px;
    border-radius: 10px;
    background-color: #183153;
    margin: 4px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    transform: translate(0, 5px) rotate(-45deg);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: translate(0, -10px) rotate(45deg);
  }
</style>
