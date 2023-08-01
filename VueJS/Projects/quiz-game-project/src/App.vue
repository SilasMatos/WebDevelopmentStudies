<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
 <NavBar />

</template>

<style lang="scss">
$bg-color: red;

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content{
  flex-direction: row;
}
.radio-group {
  display: flex;
}

.radio-group label {
  margin-right: 10px;
}
</style>
