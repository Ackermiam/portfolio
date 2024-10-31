<template>
  <section class="ThirdSection">
    <h2>Mes projets</h2>
    <p>
      Une petite liste de mes projets developpés. Au fur et à mesure du temps
      seront listés ici les projets de jeux, petites démos et tests technique
      témoins de mon apprentissage.
    </p>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.ThirdSection {
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    margin-top: 0;
  }

  h2 {
    font-family: "Carnavonts";
    font-size: 5em;
    margin-top: 0;
    margin-bottom: 0.5em;
    color: white;
  }

  p {
    color: rgb(255, 255, 255);
    font-size: 1em;
    margin: 0;
    font-family: "Type";
    margin-bottom: 40px;

    @media (min-width: 600px) {
      font-size: 2.5vw;
    }
    @media (min-width: 900px) {
      max-width: 50%;
      font-size: 1.2vw;
    }
  }

  p,
  h2 {
    padding: 0 6vw;

    @media (min-width: 900px) {
      margin-left: 575px;
      padding: 0;
    }
  }
}
</style>
