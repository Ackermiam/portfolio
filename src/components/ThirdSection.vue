<template>
  <section class="ThirdSection">
    <div v-if="!isMobile()" class="ThirdSection__container" ref="scrollableContent">
      <div class="ThirdSection__slider" ref="animatedContent">
        <div
          v-for="(_, index) in slides"
          :key="index"
          class="ThirdSection__slider__project"
          ref="slide"
        ></div>
      </div>
    </div>
    <div v-if="isMobile()" class="ThirdSection__containerMobile">
      <div class="ThirdSection__containerMobile__slider" ref="animatedContent">
        <div
          v-for="(_, index) in slides"
          :key="index"
          class="ThirdSection__containerMobile__slider__project"
          ref="slide"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const animatedContent = ref();
const scrollableContent = ref();
const slides = 7;
const slide = ref();

const isMobile = () => {
  return window.innerWidth <= 900;
}

const handleScroll = () => {
  const progress = animatedContent.value.offsetTop / (scrollableContent.value.scrollHeight - animatedContent.value.offsetHeight);

  const maxScroll = animatedContent.value.scrollWidth - window.innerWidth;

  animatedContent.value.style.transform = `translateX(${-progress * maxScroll}px)`;
}

onMounted(() => {
  scrollableContent.value.style.setProperty('--sliderWidth', `${(slides*slide.value[0].clientWidth + slides*50 + 500)}px`)
  window.addEventListener("scroll", handleScroll);
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
})
</script>

<style scoped lang="scss">
.ThirdSection {
  background: linear-gradient(
    190deg,
    rgba(0, 0, 0, 1) 25%,
    rgb(79, 31, 90) 50%,
    rgba(0, 0, 0, 1) 75%
    );
    display: flex;
    align-items: start;
    padding-top: 200px;

  &__container {
    display: none;

    @media (min-width: 900px) {
      display: flex;
      position: relative;
      height: 300vh;
    }
  }

  &__slider {
    position: sticky;
    top: calc(50% - 125px);
    left: 0;
    width: var(--sliderWidth);
    height: 100vh;
    display: flex;
    transition: all .1s ease;
    margin-left: 150px;

    &__project {
      min-width: 450px;
      height: 250px;
      background: rgba(255, 255, 255, 0.164);
      backdrop-filter: blur(20px);
      border-radius: 8px;
      margin: 0 25px;
    }
  }

  &__containerMobile {
    height: 80vh;

    @media (min-width: 900px) {
      display: none;
    }

    &__slider {

    }
  }
}
</style>
