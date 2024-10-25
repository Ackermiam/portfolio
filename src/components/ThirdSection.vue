<template>
  <section class="ThirdSection">
    <div
      v-if="!isMobile()"
      class="ThirdSection__container"
      ref="scrollableContent"
    >
      <div class="ThirdSection__slider" ref="animatedContent">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="ThirdSection__slider__project"
          :style="{ background: `url(${slide.background})` }"
          @click="redirect(slide.url)"
        >
          <h3 class="ThirdSection__slider__project__title">{{ slide.name }}</h3>
        </div>
      </div>
    </div>

    <div v-if="isMobile()" class="ThirdSection__containerMobile">
      <div class="ThirdSection__containerMobile__slider">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="ThirdSection__containerMobile__slider__project"
          :style="{
            background: `url(${slide.background})`,
          }"
          @click="redirect(slide.url)"
        >
          <h3 class="ThirdSection__containerMobile__slider__project__title">
            {{ slide.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const animatedContent = ref();
const scrollableContent = ref();

const slides: Record<string, string>[] = [
  {
    background: "/portfolio/rpgamebackground.PNG",
    url: "https://ackermiam.github.io/rp-game/",
    name: "rp-game",
  },
  {
    background: "/portfolio/egirlinvaderbackground.PNG",
    url: "https://ackermiam.github.io/egirl-invaders/",
    name: "egirl-invaders",
  },
  {
    background: "/portfolio/egirlinvaderbackground.PNG",
    url: "https://ackermiam.github.io/egirl-invaders/",
    name: "egirl-invaders",
  },
  {
    background: "/portfolio/egirlinvaderbackground.PNG",
    url: "https://ackermiam.github.io/egirl-invaders/",
    name: "egirl-invaders",
  },
  {
    background: "/portfolio/egirlinvaderbackground.PNG",
    url: "https://ackermiam.github.io/egirl-invaders/",
    name: "egirl-invaders",
  },
  {
    background: "/portfolio/egirlinvaderbackground.PNG",
    url: "https://ackermiam.github.io/egirl-invaders/",
    name: "egirl-invaders",
  },
  {
    background: "/portfolio/egirlinvaderbackground.PNG",
    url: "https://ackermiam.github.io/egirl-invaders/",
    name: "egirl-invaders",
  },
];

const isMobile = () => {
  return window.innerWidth <= 900;
};

const handleScroll = () => {
  const progress =
    animatedContent.value.offsetTop /
    (scrollableContent.value.scrollHeight - animatedContent.value.offsetHeight);

  const maxScroll = animatedContent.value.scrollWidth - window.innerWidth;

  animatedContent.value.style.transform = `translateX(${
    -progress * maxScroll
  }px)`;
};

const redirect = (url: string) => {
  window.open(url, "_blank");
};

onMounted(() => {
  if (scrollableContent.value && animatedContent.value) {
    const firstSlide = animatedContent.value.querySelector(
      ".ThirdSection__slider__project"
    );
    if (firstSlide) {
      scrollableContent.value.style.setProperty(
        "--sliderWidth",
        `${
          slides.length * firstSlide.clientWidth + slides.length * 50 + 1050
        }px`
      );
    }

    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
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

  @media (min-width: 900px) {
    padding-top: 200px;
  }

  &__container {
    display: none;

    @media (min-width: 900px) {
      display: flex;
      position: relative;
      height: 400vh;
    }
  }

  &__slider {
    position: sticky;
    top: calc(50% - 125px);
    left: 0;
    width: var(--sliderWidth);
    height: 100vh;
    display: flex;
    transition: all 0.1s ease;
    margin-left: 550px;

    &__project {
      min-width: 450px;
      height: 250px;
      position: relative;
      margin: 0 25px;
      cursor: pointer;
      overflow: hidden;
      border-radius: 8px;
      border: 3px solid rgba(255, 255, 255, 0.192);
      transition: all .4s ease;

      &::before {
        content: "";
        position: absolute;
        top: -5px;
        left: -10px;
        width: 110%;
        height: 105%;
        background: inherit;
        background-size: cover;
        background-position: center;
        filter: blur(5px);
        transition: all 0.4s ease;
      }

      &:hover {
        transform: rotateX(-20deg) rotateY(-20deg);
        &::before {

          filter: blur(0);
          left: -25px;
        }
      }

      &__title {
        position: absolute;
        width: 100%;
        text-align: center;
        font-family: "Carnavonts";
        font-size: 4em;
        color: white;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
      }
    }
  }

  &__containerMobile {
    height: 80vh;
    display: flex;
    align-items: center;

    @media (min-width: 900px) {
      display: none;
    }

    &__slider {
      width: 100vw;
      display: flex;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      &__project {
        min-width: 300px;
        height: 200px;
        position: relative;
        margin: 0 25px;
        cursor: pointer;
        overflow: hidden;
        border-radius: 8px;
        border: 3px solid rgba(255, 255, 255, 0.192);
        scroll-snap-align: center;

        &::before {
          content: "";
          position: absolute;
          top: -5px;
          left: -10px;
          width: 105%;
          height: 105%;
          background: inherit;
          background-size: cover;
          background-position: center;
          filter: blur(2px);
          transition: all 0.3s ease;
        }

        &__title {
          position: absolute;
          width: 100%;
          text-align: center;
          font-family: "Carnavonts";
          font-size: 4em;
          color: white;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          margin: 0;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
