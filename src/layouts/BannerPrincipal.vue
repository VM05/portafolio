<template>
  <section id="inicio" class="h-[100vh] flex items-center relative">
    <div class="wave h-[90vh] w-full bg-wave-700 relative top-32">
      <WaveIcons />
    </div>
    <div
      class="flex md:flex-row flex-col-reverse md:justify-between relative -top-10 -z-1 max-w-[1280px] w-full mx-auto px-5 md:px-12"
    >
      <div
        class="text-intro w-full md:w-1/2 text-white font-semibold md:px-3 text-center md:text-left"
      >
        <h1 class="text-4xl md:text-6xl font-bold">
          <span class="md:text-3xl">Hola! soy</span><br />Victor Montiel
        </h1>
        <h2 class="md:text-4xl mt-2">Front-End Developer</h2>
        <div
          class="icons mt-5 flex justify-around md:justify-between max-w-[300px] md:text-5xl text-2xl mx-auto md:mx-0"
        >
          <FontIcon
            v-for="({ icon, name }, index) in icons"
            :key="name"
            :icon="icon"
            :index="index"
          />
        </div>
      </div>
      <div
        class="portfolio-picture relative max-h-[300px] md:max-h-[400px] max-w-[320px] md:max-w-[420px] flex items-center justify-center mx-auto"
      >
        <!-- <div
          class="blob-background absolute z-0 left-0 -top-14 h-[400px] w-[400px] bg-greenblob-700 overflow-hidden"
        >
          <img
            src="../assets/victor-mejorado.webp"
            alt="victor-montiel"
            class="animacion-victor absolute -bottom-16 left-10"
          />
        </div> -->
        <!-- <div class="portfolio-picture relative">
        <div
          class="blob-background absolute z-0 -top-14 h-[400px] w-[400px] bg-greenblob-700"
        ></div>
        <img
          src="../assets/victor-mejorado.webp"
          alt="victor-montiel"
          class="animacion-victor absolute -top-14"
        />
      </div> -->
        <img
          src="../assets/vitoco.webp"
          alt="victor-montiel"
          class="animacion-victor md:absolute md:left-10 md:-top-10 w-full"
        />
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

  .blob-background {
    border-radius: 66% 34% 62% 38% / 53% 47% 53% 47%;
  }

  .animacion-victor {
    transform: translateX(50px);
    animation: appear 1s forwards;
    opacity: 0;
    animation-delay: 1s;
  }

  /* .portfolio-picture::before {
    content: '';
    position: absolute;
    background: url('');
    background-size: 100%;
    background-repeat: no-repeat;
    top: -10rem;
    right: -8rem;
    width: 600px;
    height: 600px;
    z-index: -1;
  } */

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  .animacion-victor {
    /* width: 350px; */
    position: relative;
    z-index: 0;
    filter: drop-shadow(2px 0px 10px rgb(0 0 0 / 0.4));
    right: 0;
    margin: 0 !important;
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
