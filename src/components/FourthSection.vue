<template>
  <section class="FourthSection">
    <div
      v-if="!isMobile()"
      class="FourthSection__container"
      ref="scrollableContent"
    >
      <div class="FourthSection__slider" ref="animatedContent">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="FourthSection__slider__project"
          :style="{ background: `url(${slide.background})` }"
          @click="redirect(slide.url)"
        >
          <h3 class="FourthSection__slider__project__title">
            {{ slide.name }}
          </h3>
        </div>
      </div>
    </div>

    <div v-if="isMobile()" class="FourthSection__containerMobile">
      <div class="FourthSection__containerMobile__slider">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="FourthSection__containerMobile__slider__project"
          :style="{
            background: `url(${slide.background})`,
          }"
          @click="redirect(slide.url)"
        >
          <h3 class="FourthSection__containerMobile__slider__project__title">
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
      ".FourthSection__slider__project"
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
.FourthSection {
  display: flex;
  align-items: start;
  background-color: hsla(330, 0%, 0%, 1);
  background-image: radial-gradient(
      at 36% 45%,
      hsla(266, 49%, 25%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 54% 45%, hsla(281, 69%, 23%, 1) 0px, transparent 50%),
    radial-gradient(at 98% 48%, hsla(239, 51%, 21%, 1) 0px, transparent 50%),
    radial-gradient(at 74% 40%, hsla(260, 54%, 18%, 1) 0px, transparent 50%),
    radial-gradient(at 3% 41%, hsla(341, 58%, 21%, 1) 0px, transparent 50%),
    radial-gradient(at 11% 70%, hsla(289, 51%, 22%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 70%, hsla(288, 60%, 18%, 1) 0px, transparent 50%);

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
      transition: all 0.4s ease;

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
    display: flex;
    align-items: center;
    margin-bottom: 5em;

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
