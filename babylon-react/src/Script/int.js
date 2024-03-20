import {
    ArcRotateCamera,
    Color3,
    DirectionalLight,
    FreeCamera,
    HemisphericLight,
    MeshBuilder,
    ShadowGenerator,
    StandardMaterial,
    Vector3
} from "@babylonjs/core";


let box;

export function initScreen(scene) {
    const camera = new ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new Vector3(0, 0, 0), scene);
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);

    const light = new DirectionalLight("light", new Vector3(0, -5, 4), scene);
    light.intensity = 0.7;


    const shadowGenerator = new ShadowGenerator(1024, light);
    // shadowGenerator.addShadowCaster(box);
    // box.position.y = 0;

    const ground = MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
    ground.scaling = new Vector3(10, 10, 10);
    ground.position.y = -1;
    ground.receiveShadows = true;

    // Ensure the scene reference is accessible here

    // Return the scene object if necessary
    return scene;
}

export const selectedObject = () => {
    return box;
};
