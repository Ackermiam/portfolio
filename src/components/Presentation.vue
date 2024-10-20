<template>
  <section class="Presentation">
    <div class="Presentation__textcontainer">
      <h1>AckerProd</h1>
      <div class="Presentation__textcontainer__text">
        <p>Station de développement web et 3D</p>
        <button><img src="../assets/fleche-vers-le-haut.png"/></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped lang="scss">
.Presentation {
  height: 100vh;
  background: linear-gradient(155deg, rgba(2,0,36,0.15) 20%, rgba(0,0,0,1) 65%),
    url("../assets/portfoliobackground.jpg") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: end;
  align-items: end;

  &__textcontainer {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 15vw 15em 0;

    &__text {
      margin-left: 30px;
    }
  }
}

h1 {
  font-family: "Carnavonts";
  margin: 0;
  font-size: clamp(10vw, 10em, 15vw);
  line-height: 1em;
  filter: drop-shadow(#fff)
}

h1,
p {
  color: white;
}

p {
  font-size: clamp(1vw, 2em, 2vw);
  margin: 0;
  font-family: 'Jai';
}

button {
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 25px;
  animation: click 1s infinite;

  & img {
    height: 50px;
    width: auto;
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
    filter: drop-shadow(2px 2px 8px #cc00ffb6)
  }
}

@keyframes click {
0% {
  transform: translateY(0px)
}
80% {
  transform: translateY(10px)
}
100% {
  transform: translateY(0px)
}
}
</style>
