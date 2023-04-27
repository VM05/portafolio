<template>
  <div
    class="shadow-md bg-white px-5 py-4 md:p-5 w-full transition-all fixed z-50"
    :class="verdadero ? '-top-32' : 'top-0'"
  >
    <div class="max-w-[1280px] flex flex-row justify-between mx-auto">
      <img src="../assets/vue.svg" alt="logo marca de victor montiel" />
      <div class="flex items-center" v-if="!isMobile">
        <ul class="list-none flex flex-row items-center gap-5">
          <a
            v-for="(item, index) in links"
            :key="item.name"
            :href="item.url"
            class="hover:text-green-600 transition hover:font-semibold"
            :class="
              ({ 'text-green-600 font-semibold': activeMenuItem == item.id },
              index === 0 ? 'min-w-[60px]' : 'min-w-[80px]')
            "
          >
            {{ item.name }}
          </a>
        </ul>
        <a
          href="https://drive.google.com/file/d/1ifC1BKCF4r4c0vqU6s-Uk8GSJScaYgSf/view"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button secundario texto="Curriculum " class="text-white" icono />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { links } from '../helpers/constants';
  import Button from './Button.vue';

  const scrollPosition = ref(0);
  const initialPos = ref();
  const verdadero = ref();
  const activeMenuItem = ref('inicio');
  const isMobile = ref(false);

  const scrollHandler = () => {
    const sections = document.querySelectorAll('section');
    const options = {
      rootMargin: '-50% 0px -50% 0px',
    };
    let observer;

    if (sections) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeMenuItem.value = `${entry.target.id}`;
          }
        });
      }, options);

      sections.forEach((section) => {
        observer.observe(section);
      });
    }
  };

  // const scrollHandler = () => {
  //   const sections = document.querySelectorAll('section');

  //   sections.forEach(section => {
  //     // const rect = section.getBoundingClientRect();

  //     // if (rect.top >= 0 && rect.top <= (window.innerHeight - 200) ) {
  //     //   activeMenuItem.value = `${section.id}`;
  //     // }
  //   });
  // };

  onMounted(() => {
    window.addEventListener('resize', () => {
      window.innerWidth < 600 ? (isMobile.value = true) : (isMobile.value = false);
    });

    window.addEventListener('scroll', () => {
      initialPos.value = window.pageYOffset;
      setTimeout(() => {
        scrollPosition.value = scrollY;
      }, 100);

      initialPos.value < scrollPosition.value
        ? (verdadero.value = false)
        : (verdadero.value = true);

      scrollHandler();
    });
  });
</script>

<style scoped>
  .scrolling {
    animation: scrolling 0.3s ease;
  }

  @keyframes scrolling {
    from {
      top: -100px;
    }

    to {
      top: 0px;
    }
  }
</style>
