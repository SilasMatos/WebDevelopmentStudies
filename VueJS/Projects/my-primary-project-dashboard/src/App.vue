<template>
  <div>
    <!-- Importe e utilize o componente Navbar aqui -->
    <Navbar />
    <div class="content">
      <!-- Conteúdo do site vai aqui -->
      <p>Bem-vindo ao meu site!</p>
    </div>
    <Section />
  </div>
</template>

<script>
// Importe o componente Navbar aqui
import Navbar from './components/navbar.vue';
import Section from './components/section.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Section
  },
  
};
</script>

<style>
.content {
  padding: 20px;
}
</style>
