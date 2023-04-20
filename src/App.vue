<template>
	<NavBar />
	<SobreMi />
	<section id="formacion" class="h-[500px] flex items-center bg-red-400">
		<p>seccion-2</p>
	</section>
	<section id="proyectos" class="h-[500px] flex items-center bg-green-400">
		<p>seccion-3</p>
	</section>

	<section id="contacto" class="h-[700px] flex items-center bg-yellow-400">
		<p>seccion-4</p>
	</section>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import SobreMi from './layouts/SobreMi.vue';
</script>

<style scoped></style>
