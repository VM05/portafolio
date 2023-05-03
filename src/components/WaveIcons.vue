<template>
  <div class="transition h-[80vh] w-[95vw] top-0 absolute icon-animation text-wave-700">
    <font-awesome-icon
      icon="fa-brands fa-square-js"
      class="absolute bottom-10 md:bottom-20 left-5 md:left-10 wave-icon"
    />
    <font-awesome-icon icon="fa-brands fa-square-js" class="absolute top-20 left-[52%] wave-icon" />
    <font-awesome-icon
      icon="fa-brands fa-node-js"
      class="absolute top-5 md:top-10 left-5 md:left-20 wave-icon"
    />
    <font-awesome-icon
      icon="fa-brands fa-github"
      class="absolute top-52 left-5 md:top-20 md:left-[33%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-brands fa-php"
      class="absolute top-[43%] left-[88%] md:left-[10%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-brands fa-sass"
      class="absolute top-[35%] -right-5 md:right-0 wave-icon"
    />
    <font-awesome-icon icon="fa-brands fa-sass" class="absolute top-[35%] right-[52%] wave-icon" />
    <font-awesome-icon
      icon="fa-brands fa-wordpress-simple"
      class="absolute bottom-20 right-44 wave-icon"
    />
    <font-awesome-icon
      icon="fa-brands fa-bootstrap"
      class="absolute top-28 md:top-32 right-0 md:right-[35%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-brands fa-bootstrap"
      class="absolute bottom-60 md:bottom-32 left-8 md:left-[25%] wave-icon"
    />
    <img
      src="../assets/tailwind-css-icon.svg"
      alt=""
      class="h-10 absolute bottom-60 md:bottom-32 left-3 md:left-[38%] wave-icon"
    />
    <img
      src="../assets/tailwind-css-icon.svg"
      alt=""
      class="h-10 absolute top-[50%] md:top-[40%] left-[80%] md:left-[48%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-solid fa-code-compare"
      class="h-10 absolute top-44 md:top-[40%] right-80 md:right-[40%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-brands fa-css3-alt"
      class="absolute bottom-20 right-10 md:right-[38%] wave-icon"
    />
    <font-awesome-icon icon="fa-brands fa-html5" class="absolute top-10 right-[18%] wave-icon" />
    <font-awesome-icon
      icon="fa-brands fa-css3"
      class="absolute bottom-[24%] right-3 md:right-[52%] wave-icon"
    />
    <font-awesome-icon icon="fa-solid fa-code" class="absolute top-10 right-[52%] wave-icon" />
    <font-awesome-icon
      icon="fa-solid fa-laptop-code"
      class="absolute top-10 md:top-28 left-10 md:left-[17%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-solid fa-code-branch"
      class="absolute bottom-32 md:bottom-20 left-8 md:left-[18%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-solid fa-code-branch"
      class="absolute md:top-10 right-[18%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-solid fa-code-merge"
      class="absolute bottom-72 md:bottom-20 left-[78%] md:left-[58%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-brands fa-vuejs"
      class="absolute top-24 md:top-10 right-[5%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-brands fa-vuejs"
      class="absolute bottom-44 md:bottom-[30%] right-[5%] wave-icon"
    />
    <font-awesome-icon
      icon="fa-brands fa-vuejs"
      class="absolute bottom-10 md:bottom-32 left-[8%] wave-icon"
    />
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
    opacity: 0;
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
      opacity: 1;
      filter: drop-shadow(3px 4px 5px rgb(0 0 0 / 1));
    }

    100% {
      filter: drop-shadow(0px 0px 0px rgb(0 0 0 / 0));
    }
  }

  @media (max-width: 500px) {
    .wave-icon {
      font-size: 40px;
    }
  }
</style>
