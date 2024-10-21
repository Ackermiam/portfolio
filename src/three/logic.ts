import {
  Scene,
  PerspectiveCamera,
  Object3D,
  WebGLRenderer,
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  DirectionalLight,
  AmbientLight,
  Color,
} from "three";

import { useScroll } from "../composable/useScroll";

const { isScrollDown, scrollDown } = useScroll();

export class Logic {
  scene: Scene;
  camera: PerspectiveCamera;
  mesh: Object3D;
  renderer: WebGLRenderer;

  constructor() {
    const componentToMount: Element | null = document.querySelector("#three");

    if (componentToMount) {
      isScrollDown();

      const { width, height } = componentToMount?.getBoundingClientRect();

      this.scene = new Scene();

      this.camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
      this.camera.position.set(0, 0, 4);

      const color = new Color("#ffb3f2");
      const geometry = new BoxGeometry(0.2, 0.2, 0.2);
      const material = new MeshPhongMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.8,
        specular: new Color(0xffffff),
        shininess: 100,
      });
      const cube = new Mesh(geometry, material);
      this.mesh = cube;
      this.mesh.scale.x = 4;
      this.mesh.scale.y = 4;
      this.mesh.scale.z = 4;

      this.renderer = new WebGLRenderer({ antialias: true });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setSize(width, height);
      componentToMount?.appendChild(this.renderer.domElement);

      this.scene.add(this.mesh);

      const directionalLight = new DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5).normalize();
      this.scene.add(directionalLight);

      const ambientLight = new AmbientLight(0x404040);
      this.scene.add(ambientLight);

      window.addEventListener("scroll", this.moveOnScroll.bind(this));
      this.tick();
    }
  }

  tick() {
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => {
      this.move();
      this.tick();
    });
  }

  moveOnScroll() {
    if (scrollDown.value === true) {
      if (this.mesh.scale.x >= 7) {
      } else {
        this.mesh.scale.x += 0.1;
        this.mesh.scale.y += 0.1;
        this.mesh.scale.z += 0.1;
      }

      this.mesh.rotation.x += 0.02;
      this.mesh.rotation.y += 0.02;
    } else {
      if (this.mesh.scale.x <= 3) {
      } else {
        this.mesh.scale.x -= 0.1;
        this.mesh.scale.y -= 0.1;
        this.mesh.scale.z -= 0.1;
      }
      this.mesh.rotation.x -= 0.02;
      this.mesh.rotation.y -= 0.02;
    }
  }

  move() {
    this.mesh.rotation.x += 0.001;
    this.mesh.rotation.y += 0.001;
  }
}
