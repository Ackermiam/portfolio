<template>
  <section class="SecondSection">
    <div class="SecondSection__Mesh">

    </div>
    <div class="SecondSection__Text"></div>
  </section>
</template>

<style scoped lang="scss">
.SecondSection {
  height: 100vh;
  background: #000;
  display: flex;
  &__Mesh {

  }

  &__Text {

  }
}

p {
  color: white;
  font-size: 4vw;
  margin: 0;
  font-family: "Jai";
  max-width: 100%;

  @media (min-width: 900px) {
    font-size: clamp(1vw, 2em, 2vw);
  }
}
</style>
