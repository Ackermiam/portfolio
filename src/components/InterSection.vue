<template>
  <section class="InterSection" ref="instancedCubes">

  </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {Cubes} from "../three/cubes";

const instancedCubes = ref();

onMounted(() => {
  const cubes = new Cubes(instancedCubes.value);

  console.log(cubes)
})
</script>

<style scoped lang="scss">
.InterSection {
  height: 50vh;
}
</style>
