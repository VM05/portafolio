<template>
  <section id="inicio" class="h-[100vh] flex items-center relative">
    <div class="wave h-[90vh] w-full bg-wave-700 relative top-32">
      <WaveIcons />
    </div>
    <div class="flex justify-between gap-5 relative -z-1 max-w-[1280px] w-full mx-auto">
      <div class="text-intro w-1/2 text-white font-semibold px-3">
        <h1 class="text-6xl font-bold">
          <span class="text-3xl">Hola! soy</span><br />Victor Montiel
        </h1>
        <h2 class="text-4xl mt-2">Front-End Developer</h2>
        <div class="icons mt-5 flex justify-between max-w-[300px] text-5xl">
          <FontIcon
            v-for="({ icon, name }, index) in icons"
            :key="name"
            :icon="icon"
            :index="index"
          />
        </div>
      </div>
      <div class="portfolio-picture relative w-1/2">
        <img src="../assets/victorrecortado.webp" alt="" class="ml-auto -top-20" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import { icons } from '../helpers/constants';
  import FontIcon from '../components/FontIcon.vue';
  import WaveIcons from '../components/WaveIcons.vue';
</script>

<style scoped>
  .wave {
    position: absolute;
    z-index: -1;
    animation: waves 5s ease-in-out forwards;
    transition: all 0.3s ease;
    top: 4rem;
  }

  .portfolio-picture::before {
    content: '';
    position: absolute;
    background: url('../assets/static-blob.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    top: -10rem;
    right: -8rem;
    width: 600px;
    height: 600px;
    z-index: -1;
  }

  img {
    width: 350px;
    position: relative;

    z-index: 0;
    filter: drop-shadow(2px 0px 10px rgb(0 0 0 / 0.4));
  }

  @keyframes waves {
    0% {
      clip-path: polygon(
        100% 0%,
        0% 0%,
        0% 92.27%,
        2% 92.24%,
        4% 92.14%,
        6% 91.98%,
        8% 91.76%,
        10% 91.48%,
        12% 91.14%,
        14% 90.75%,
        16% 90.3%,
        18% 89.81%,
        20% 89.29%,
        22% 88.72%,
        24% 88.13%,
        26% 87.52%,
        28% 86.88%,
        30% 86.24%,
        32% 85.59%,
        34% 84.95%,
        36% 84.31%,
        38% 83.69%,
        40% 83.1%,
        42% 82.53%,
        44% 81.99%,
        46% 81.49%,
        48% 81.03%,
        50% 80.63%,
        52% 80.28%,
        54% 79.98%,
        56% 79.74%,
        58% 79.56%,
        60% 79.45%,
        62% 79.4%,
        64% 79.42%,
        66% 79.5%,
        68% 79.64%,
        70% 79.85%,
        72% 80.12%,
        74% 80.45%,
        76% 80.83%,
        78% 81.26%,
        80% 81.73%,
        82% 82.25%,
        84% 82.81%,
        86% 83.39%,
        88% 84%,
        90% 84.63%,
        92% 85.27%,
        94% 85.92%,
        96% 86.56%,
        98% 87.2%,
        100% 87.83%
      );
    }
    100% {
      clip-path: polygon(
        100% 0%,
        0% 0%,
        0% 92.27%,
        2% 92.18%,
        4% 91.88%,
        6% 91.4%,
        8% 90.75%,
        10% 89.94%,
        12% 89.01%,
        14% 87.98%,
        16% 86.88%,
        18% 85.76%,
        20% 84.63%,
        22% 83.54%,
        24% 82.53%,
        26% 81.61%,
        28% 80.83%,
        30% 80.2%,
        32% 79.74%,
        34% 79.47%,
        36% 79.4%,
        38% 79.53%,
        40% 79.85%,
        42% 80.36%,
        44% 81.03%,
        46% 81.86%,
        48% 82.81%,
        50% 83.85%,
        52% 84.95%,
        54% 86.08%,
        56% 87.2%,
        58% 88.28%,
        60% 89.29%,
        62% 90.18%,
        64% 90.95%,
        66% 91.55%,
        68% 91.98%,
        70% 92.22%,
        72% 92.27%,
        74% 92.11%,
        76% 91.76%,
        78% 91.23%,
        80% 90.53%,
        82% 89.69%,
        84% 88.72%,
        86% 87.67%,
        88% 86.56%,
        90% 85.43%,
        92% 84.31%,
        94% 83.24%,
        96% 82.25%,
        98% 81.37%,
        100% 80.63%
      );
    }
  }
</style>
