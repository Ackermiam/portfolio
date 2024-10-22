<template>
  <section class="ThirdSection">

  </section>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
.ThirdSection {
  height: 100vh;
  background: linear-gradient(190deg, rgba(0,0,0,1) 25%, rgb(79, 31, 90) 50%, rgba(0,0,0,1) 75%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }
}
</style>
