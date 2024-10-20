<template>
  <section class="Presentation">
    <div class="Presentation__textcontainer">
      <h1>AckerProd</h1>
      <div class="Presentation__textcontainer__text">
        <p>Station de développement web et 3D</p>
        <button><img src="../assets/fleche-vers-le-haut.png" /></button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.Presentation {
  height: 100vh;
  background: linear-gradient(
      160deg,
      rgba(2, 0, 36, 0.15) 35%,
      rgba(0, 0, 0, 1) 55%
    ),
    url("../assets/portfoliobackground.jpg") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: end;

  @media (min-width: 900px) {
    justify-content: end;
  }

  &__textcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 15em 0;

    @media (min-width: 900px) {
      align-items: start;
      padding: 0 15vw 15em 0;
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 900px) {
        align-items: start;
        margin-left: 40px;
      }
    }
  }
}

h1 {
  font-family: "Carnavonts";
  margin: 0;
  font-size: 20vw;
  line-height: 1em;
  filter: drop-shadow(#fff);

  @media (min-width: 900px) {
    font-size: clamp(10vw, 12vw, 15vw);
  }
}

h1,
p {
  color: white;
}

p {
  font-size: 4vw;
  margin: 0;
  font-family: "Nostal";
  max-width: 100%;

  @media (min-width: 900px) {
    font-size: clamp(1vw, 2em, 2vw);
  }
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
    filter: drop-shadow(2px 2px 8px #cc00ffb6);
  }
}

@keyframes click {
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
