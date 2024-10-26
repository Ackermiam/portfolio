import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  AmbientLight,
  PointLight,
  AnimationMixer,
  Clock,
} from "three";

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { useScroll } from "../composable/useScroll";

const { isScrollDown, scrollDown } = useScroll();

export class Logic {
  scene: Scene;
  camera: PerspectiveCamera;
  mesh: any;
  renderer: WebGLRenderer;
  animation: any;
  mixer: AnimationMixer | null = null; // AnimationMixer instance
  clock = new Clock(); // Clock to handle animation timing

  constructor() {
    const componentToMount: Element | null = document.querySelector("#three");

    if (componentToMount) {
      isScrollDown();

      const { width, height } = componentToMount?.getBoundingClientRect();

      this.scene = new Scene();

      this.camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
      window.innerWidth > 900 ? this.camera.position.set(0, 40, 300) : this.camera.position.set(0, 40, 200);


      const loader = new GLTFLoader();

      loader.load('/portfolio/models/arch.gltf', (gltf: any) => {
        this.mesh = gltf.scene;
        this.animation = gltf.animations
        this.mesh.scale.x = 0.1;
        this.mesh.scale.y = 0.1;
        this.mesh.scale.z = 0.1;
        this.mesh.rotation.x += .2;
        this.mesh.rotation.z += .2;
        console.log(this.mesh, this.animation)

        this.scene.add(this.mesh);

        if (gltf.animations.length > 0) {
          this.mixer = new AnimationMixer(this.mesh);
          const action = this.mixer.clipAction(gltf.animations[0]);
          action.play();
        }
      });

      this.renderer = new WebGLRenderer({ antialias: true });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setSize(width, height);
      componentToMount?.appendChild(this.renderer.domElement);

      const pointLight1 = new PointLight(0x9132a8, 10, 100);
      pointLight1.position.set(0, 5, 5);
      this.scene.add(pointLight1);

      const pointLight2 = new PointLight(0x9132a8, 10, 100);
      pointLight2.position.set(5, 5, 5);
      this.scene.add(pointLight2);

      const pointLight3 = new PointLight(0x9132a8, 10, 100);
      pointLight3.position.set(-5, 5, 5);
      this.scene.add(pointLight3);

      const pointLight4 = new PointLight(0x9132a8, 10, 100);
      pointLight4.position.set(0, -5, 5);
      this.scene.add(pointLight4);

      const directionalLight = new DirectionalLight(0x9132a8, 3);
      directionalLight.position.set(0, 10, 10).normalize();
      this.scene.add(directionalLight);

      window.addEventListener("scroll", this.moveOnScroll.bind(this));
      this.tick();
    }
  }

  tick() {
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => {
      if(this.mesh) {
        this.move();
      }
      if (this.mixer) {
        const delta = this.clock.getDelta();
        this.mixer.update(delta);
      }
      this.tick();
    });
  }

  moveOnScroll() {
    if(this.mesh) {
      if (scrollDown.value === true) {
        this.mesh.rotation.y += 0.02;
      } else {
        this.mesh.rotation.y -= 0.02;
      }
    }
  }

  move() {
    this.mesh.rotation.y += 0.001;
  }
}
