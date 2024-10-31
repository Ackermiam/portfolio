<template>
  <section class="SecondSection">
    <div class="SecondSection__Mesh" id="three"></div>
    <div class="SecondSection__Text">
      <h3>Qui suis-je ?</h3>
      <p>
        Développeur front-end JavaScript/TypeScript, je crée surtout des
        applications avec Vue.js et Nuxt. Depuis quelque temps, la 3D m'intrigue
        fortement, je me lance donc dans l'apprentissage et la création de
        petites expériences et jeux sympas avec Three.js. J’ai aussi envie
        d’explorer des technos immersives comme la réalité virtuelle et
        augmentée pour enrichir l'expérience utilisateur.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Logic } from "../three/logic";

onMounted(() => {
  const logic = new Logic();
});
</script>

<style scoped lang="scss">
.SecondSection {
  height: 100vh;
  background-color: hsla(0, 0%, 0%, 1);
  background-image: radial-gradient(
      at 53% 50%,
      hsla(289, 57%, 47%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 97% 42%, hsla(240, 56%, 52%, 1) 0px, transparent 50%),
    radial-gradient(at 8% 43%, hsla(287, 45%, 34%, 1) 0px, transparent 50%),
    radial-gradient(at 69% 43%, hsla(340, 51%, 52%, 1) 0px, transparent 50%),
    radial-gradient(at 23% 59%, hsla(281, 61%, 51%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 60%, hsla(266, 68%, 32%, 1) 0px, transparent 50%),
    radial-gradient(at 33% 40%, hsla(288, 61%, 30%, 1) 0px, transparent 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }

  &__Mesh {
    width: 100%;
    height: 50vh;

    @media (min-width: 900px) {
      height: 100%;
      width: 50%;
    }
  }

  &__Text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 50vh;

    @media (min-width: 900px) {
      height: 100%;
      width: 50%;
    }
  }
}

h3,
p {
  padding: 0 6vw;
}

h3 {
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
  max-width: 100%;

  @media (min-width: 600px) {
    font-size: 2.5vw;
  }
  @media (min-width: 900px) {
    font-size: 1.2vw;
  }
}
</style>
