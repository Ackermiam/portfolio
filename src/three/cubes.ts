import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Object3D,
  DirectionalLight,
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  PointLight
} from "three";

export class Cubes {
  renderer: WebGLRenderer;
  scene: Scene;
  camera: PerspectiveCamera;
  mesh: Object3D[];

  constructor(ref: HTMLCanvasElement) {
    this.scene = new Scene();
    this.mesh = [];

    const { width, height } = ref.getBoundingClientRect();

    this.camera = new PerspectiveCamera(
      45,
      width / height
    );

    this.camera.position.set(0, 0, 5);

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);

    const geometry = new BoxGeometry(.4, .4, .4);
    const material = new MeshPhongMaterial({ color: 0xff8ff4, shininess: 70, specular: 0xffabf7});

    const directionalLight = new DirectionalLight(0xffffff, 3);
    directionalLight.position.set(0, 10, 10).normalize();
    this.scene.add(directionalLight);

    const pointLight1 = new PointLight(0x00fff2, 10, 100);
    pointLight1.position.set(0, 0, 5);
    this.scene.add(pointLight1);

    const pointLight2 = new PointLight(0xffffff, 10, 100);
    pointLight2.position.set(5, 0, 5);
    this.scene.add(pointLight2);

    const pointLight3 = new PointLight(0xffffff, 10, 100);
    pointLight3.position.set(-5, 0, 5);
    this.scene.add(pointLight3);

    for(let i = -9; i < 9; i += 0.7) {
      for(let j = -1; j < 1; j += 0.7) {
        const cube = new Mesh(geometry, material);
        cube.position.set(i, j, 0);
        this.mesh.push(cube);
      }
    }

    this.scene.add(...this.mesh);

    ref.appendChild(this.renderer.domElement);

    window.addEventListener("scroll", () => {
      this.moveOnScroll();
    });

    //const fetchedCanvas = document.querySelector("canvas");

    /*ref.addEventListener("mousemove", (e) => {
      console.log(e.clientX, e.clientY);

    })*/

    this.tick();
  }

  tick() {
    this.renderer.render(this.scene, this.camera);
    this.move();

    requestAnimationFrame(() => {
      this.tick();
    });
  }

  move() {
    this.mesh.forEach(e => e.rotateY(0.005))
  }

  moveOnScroll() {
    this.mesh.forEach(e => {
      e.rotateY(0.02);
      e.rotateX(0.02);
    })
  }
}
