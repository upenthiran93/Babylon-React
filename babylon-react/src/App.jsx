import React, { useState, useEffect } from "react";
import { initScreen } from "./Script/int.js";
import SceneComponent from "./component/SceneComponent.jsx";
import "./App.css";
import FileMenuBar from "./component/UI/Menu/FileMenuBar/FileMenuBar.jsx";
import InspectorMenuBar from "./component/UI/Menu/Inspector-Menu-Bar.jsx";
import {GizmoManager} from "@babylonjs/core/Gizmos";

export const SelectedObjectContext = React.createContext(null);

const App = () => {
    const [isSceneReady, setIsSceneReady] = useState(false);
    const [scene, setScene] = useState(null);
    const [mesh, setMesh] = useState(null);
    const [canvas, setCanvas] = useState(null);
    const [gizmoManager, setGizmoManager] = useState(null);

    // Event listeners setup and cleanup
    useEffect(() => {
        if (canvas) {
            canvas.addEventListener("click", handleCanvasClick);
            return () => {
                canvas.removeEventListener("click", handleCanvasClick);
            };
        }
    }, [canvas]);



    // Log mesh whenever it changes
    useEffect(() => {
        console.log(mesh);
        if(mesh){
            gizmoManager.attachToMesh(mesh);
            gizmoManager.positionGizmoEnabled = true;
        }
    }, [mesh]);

    // Callback function when scene is ready
    const onSceneReady = (scene) => {
        initScreen(scene);
        setIsSceneReady(true);
    };

    // Callback function when scene is created
    const onSceneCreated = ({ newScene, canvas }) => {
        setScene(newScene);
        setCanvas(canvas);
        if(newScene){
            setGizmoManager(new GizmoManager(newScene))


        }



    };

    // Handle canvas click event
    const handleCanvasClick = () => {
        if (scene) {
            const pickInfo = scene.pick(scene.pointerX, scene.pointerY);
            if (pickInfo.hit) {
                const pickedMesh = pickInfo.pickedMesh;
                setMesh(pickedMesh);
            } else {
                setMesh(null);
            }
        }
    };
    const BJS = { mesh, gizmoManager, scene };
    return (
        <>
            <SceneComponent antialias onSceneReady={onSceneReady} onSceneCreated={onSceneCreated} id="my-canvas" />
            <SelectedObjectContext.Provider value={BJS}>
                <div id="ui-container">
                    <FileMenuBar />
                    {isSceneReady && <InspectorMenuBar />}
                </div>
            </SelectedObjectContext.Provider>
        </>
    );
};

export default App;
