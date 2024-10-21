<template>
  <section class="SecondSection">
    <div class="SecondSection__Mesh" id="three"></div>
    <div class="SecondSection__Text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
  background: linear-gradient(170deg, rgba(0,0,0,1) 25%, rgb(79, 31, 90) 50%, rgba(0,0,0,1) 75%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }

  &__Mesh {
    width: 100%;
    height: 50%;

    @media (min-width: 900px) {
      height: 100%;
      width: 50%;
    }
  }

  &__Text {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;

    @media (min-width: 900px) {
      height: 100%;
      width: 50%;
    }
  }
}

p {
  padding: 0 6vw;
  color: white;
  font-size: 5vw;
  margin: 0;
  font-family: "Nostal";
  max-width: 100%;

  @media (min-width: 900px) {
    font-size: 1.5vw;
  }
}
</style>
