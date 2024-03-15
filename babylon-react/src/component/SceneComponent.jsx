import { useEffect, useRef, useState } from "react";
import { Engine, Scene } from "@babylonjs/core";

export default function SceneComponent({ antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, selectedObject, ...rest }) {
    const reactCanvas = useRef(null);
    const [pickmesh, setMesh] = useState(null);

    // set up basic engine and scene
    useEffect(() => {
        const { current: canvas } = reactCanvas;

        if (!canvas) return;

        const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);
        const scene = new Scene(engine, sceneOptions);
        if (scene.isReady()) {
            onSceneReady(scene);
        } else {
            scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
        }

        // Click event handler for canvas
        const handleCanvasClick = (event) => {
            // Calculate click coordinates relative to canvas
            const pickInfo = scene.pick(scene.pointerX, scene.pointerY);
            if (pickInfo.hit) {
                const mesh = pickInfo.pickedMesh;
                if (mesh) {
                    // Update <p> element with mesh information
                    setMesh(mesh);
                }
            } else {
                // Update <p> element with scene information
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

        if (window) {
            window.addEventListener("resize", resize);
        }

        return () => {
            canvas.removeEventListener("click", handleCanvasClick);
            scene.getEngine().dispose();

            if (window) {
                window.removeEventListener("resize", resize);
            }
        };
    }, []);

    // Call selectedObject whenever pickmesh changes
    useEffect(() => {
        selectedObject(pickmesh);

    }, [pickmesh]);

    return (
        <>
            <canvas ref={reactCanvas} {...rest} />
        </>
    );
}