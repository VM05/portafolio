<template>
  <div class="text-wave-700 transition h-[80vh] w-[95vw] top-0 absolute icon-animation">
    <font-awesome-icon icon="fa-brands fa-square-js" class="absolute bottom-20 left-10 wave-icon" />
    <font-awesome-icon icon="fa-brands fa-node-js" class="absolute top-10 left-20 wave-icon" />
    <font-awesome-icon icon="fa-brands fa-github" class="absolute top-20 left-[33%] wave-icon" />

    <font-awesome-icon icon="fa-brands fa-php" class="absolute top-[43%] left-[10%] wave-icon" />

    <font-awesome-icon icon="fa-brands fa-sass" class="absolute top-[35%] right-0 wave-icon" />

    <font-awesome-icon
      icon="fa-brands fa-wordpress-simple"
      class="absolute bottom-20 right-44 wave-icon"
    />

    <font-awesome-icon
      icon="fa-brands fa-bootstrap"
      class="absolute top-32 right-[35%] wave-icon"
    />

    <img
      src="../assets/tailwind-css-icon.svg"
      alt=""
      class="h-10 absolute top-[40%] right-[48%] wave-icon"
    />

    <font-awesome-icon
      icon="fa-solid fa-code-compare"
      class="h-10 absolute top-[40%] right-[40%] wave-icon"
    />

    <font-awesome-icon
      icon="fa-brands fa-css3-alt"
      class="absolute bottom-20 right-[38%] wave-icon"
    />

    <font-awesome-icon icon="fa-brands fa-html5" class="absolute top-10 right-[18%] wave-icon" />

    <font-awesome-icon
      icon="fa-brands fa-css3"
      class="absolute bottom-[24%] right-[52%] wave-icon"
    />

    <font-awesome-icon icon="fa-solid fa-code" class="absolute top-10 right-[52%] wave-icon" />

    <font-awesome-icon
      icon="fa-solid fa-laptop-code"
      class="absolute top-28 left-[17%] wave-icon"
    />

    <font-awesome-icon
      icon="fa-solid fa-code-branch"
      class="absolute bottom-20 left-[18%] wave-icon"
    />

    <font-awesome-icon
      icon="fa-brands fa-vuejs"
      class="absolute bottom-[40%] right-[5%] wave-icon"
    />

    <font-awesome-icon icon="fa-brands fa-vuejs" class="absolute bottom-32 left-[28%] wave-icon" />

    <font-awesome-icon
      icon="fa-solid fa-terminal"
      class="absolute bottom-10 right-[22%] wave-icon"
    />
  </div>
</template>

<script setup></script>

<style scoped>
  .wave-icon {
    font-size: 60px;
  }

  .wave-icon:nth-child(odd) {
    animation: waveicons 5s ease-in-out infinite;
    animation-delay: 2s;
  }

  .wave-icon:nth-child(even) {
    animation: waveicons 5s ease-in-out infinite;
    animation-delay: 4s;
  }

  @keyframes waveicons {
    0% {
      filter: drop-shadow(0px 0px 0px rgb(0 0 0 / 0));
    }

    50% {
      filter: drop-shadow(3px 4px 5px rgb(0 0 0 / 1));
    }

    100% {
      filter: drop-shadow(0px 0px 0px rgb(0 0 0 / 0));
    }
  }
</style>
