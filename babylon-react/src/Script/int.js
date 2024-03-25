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
    camera.inertia = 0.0;
    camera.inertialPanningX = 0.1;
    camera.inertialPanningY = 0.1;
    camera.angularSensibilityX = 50;
    camera.angularSensibilityY = 50;
    camera.panningSensibility = 50;

    camera.zoomingSensibility = 0.01;
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);

    const light = new DirectionalLight("light", new Vector3(0, -5, 4), scene);
    light.intensity = 0.7;


    const shadowGenerator = new ShadowGenerator(1024, light);

    return scene;
}

export const selectedObject = () => {
    return box;
};
