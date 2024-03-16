import { useEffect, useRef, useState } from "react";
import { Engine, Scene } from "@babylonjs/core";
import { GizmoManager } from "@babylonjs/core/Gizmos";

export default function SceneComponent({ antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady,onSceneCreated, selectedObject, ...rest }) {
    const reactCanvas = useRef(null);
    const [mesh, setMesh] = useState(null);
    const [newEngine, setEngine] = useState(null);
    const [newScene, setScene] = useState(null);

    // set up basic engine and scene
    useEffect(() => {
        const { current: canvas } = reactCanvas;

        if (!canvas) return;

        const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);
        const scene = new Scene(engine, sceneOptions);

        setEngine(prevEngine => {
            if (prevEngine) {
                prevEngine.dispose(); // Dispose the previous engine to avoid memory leaks
            }
            return engine;
        });

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

        const handleCanvasClick = (event) => {
            const pickInfo = scene.pick(scene.pointerX, scene.pointerY);
            if (pickInfo.hit) {
                const pickedMesh = pickInfo.pickedMesh;
                if (pickedMesh) {
                    setMesh(pickedMesh);
                }
            } else {
                setMesh(null);
            }
        };

        canvas.addEventListener("click", handleCanvasClick);

        engine.runRenderLoop(() => {
            if (typeof onRender === "function") onRender(scene);
            scene.render();
        });

        const resize = () => {
            scene.getEngine().resize();
        };

        window.addEventListener("resize", resize);

        return () => {
            canvas.removeEventListener("click", handleCanvasClick);
            scene.getEngine().dispose();
            window.removeEventListener("resize", resize);
        };
    }, []);

    // Call selectedObject whenever pickmesh changes
    useEffect(() => {
        selectedObject(mesh);
    }, [mesh]);

    // Console log the correct variable (scene)
    useEffect(() => {
        onSceneCreated( newScene);
    }, [newScene]);

    return (
        <>
            <canvas ref={reactCanvas} {...rest} />
        </>
    );
}
