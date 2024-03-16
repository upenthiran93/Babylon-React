import { useEffect, useRef, useState } from "react";
import { Engine, Scene } from "@babylonjs/core";
import { GizmoManager } from "@babylonjs/core/Gizmos";

export default function SceneComponent({ antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady,onSceneCreated, ...rest }) {
    const reactCanvas = useRef(null);
    const [newScene, setScene] = useState(null);
    const [canvas, setCanvas] = useState(null);

    // set up basic engine and scene
    useEffect(() => {
        const { current: canvas } = reactCanvas;

        if (!canvas) return;
        setCanvas(preCanvas => {
            if (preCanvas) {
                preCanvas.dispose();
            }
            return canvas;
        });
        const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);
        const scene = new Scene(engine, sceneOptions);



        setScene(prevScene => {
            if (prevScene) {
                prevScene.dispose(); // Dispose the previous scene to avoid memory leaks
            }
            return scene;
        });

        const gizmoManager = new GizmoManager(scene);
        gizmoManager.positionGizmoEnabled = true;

        if (scene.isReady()) {
            onSceneReady(scene);
        } else {
            scene.onReadyObservable.addOnce(scene => onSceneReady(scene));
        }



        engine.runRenderLoop(() => {
            if (typeof onRender === "function") onRender(scene);
            scene.render();
        });

        const resize = () => {
            scene.getEngine().resize();
        };

        window.addEventListener("resize", resize);

        return () => {

            scene.getEngine().dispose();
            window.removeEventListener("resize", resize);
        };
    }, []);


    // Console log the correct variable (scene)
    useEffect(() => {
        onSceneCreated({ newScene ,canvas});
    }, [newScene]);

    return (
        <>
            <canvas ref={reactCanvas} {...rest} />
        </>
    );
}
