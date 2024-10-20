import { Scene, PerspectiveCamera, Object3D, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from "three";

export class Logic {
  scene: Scene;
  camera: PerspectiveCamera;
  mesh: Object3D;
  renderer: WebGLRenderer;

  constructor() {
    const componentToMount: Element | null = document.querySelector('#three');

    if(componentToMount) {
      const { width, height } = componentToMount?.getBoundingClientRect();

      this.scene = new Scene();

      this.camera = new PerspectiveCamera(45, width / height , 0.1, 1000);
      this.camera.position.set(0, 0, 4);

      const geometry = new BoxGeometry(1, 1, 1);
      const material = new MeshBasicMaterial({wireframe: true});
      const cube = new Mesh(geometry, material);
      this.mesh = cube;


      this.renderer = new WebGLRenderer();
      this.renderer.setSize(width, height);
      componentToMount?.appendChild(this.renderer.domElement);

      this.scene.add(this.mesh);
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

  move() {
    this.mesh.rotation.x += 0.005;
    this.mesh.rotation.y += 0.005;
  }
}
