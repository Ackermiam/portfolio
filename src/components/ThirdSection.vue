<template>
  <section class="ThirdSection">

  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ThirdSection {
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }

  &__Mesh {
    width: 100%;
    height: 100%;

    @media (min-width: 900px) {
      width: 50%;
    }
  }

  &__Text {
    width: 50%;
  }
}

p {
  padding: 0 6vw;
  color: white;
  font-size: 2vw;
  margin: 0;
  font-family: "Nostal";
  max-width: 100%;

  @media (min-width: 900px) {
    font-size: 1.5vw;
  }
}
</style>
