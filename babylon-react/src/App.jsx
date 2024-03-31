import React, { useState, useEffect, useRef } from "react";
import { initScreen } from "./Script/int.js";
import SceneComponent from "./component/SceneComponent.jsx";
import "./App.css";
import FileMenuBar from "./component/UI/Menu/FileMenuBar/FileMenuBar.jsx";
import InspectorMenuBar from "./component/UI/Menu/Inspector-Menu-Bar.jsx";
import { GizmoManager } from "@babylonjs/core/Gizmos";
import {
    HighlightLayer,
    Color3,
    MeshBuilder,
    ShadowGenerator,
    DirectionalLight,
    SceneLoader,
} from "@babylonjs/core";

import  "@babylonjs/loaders/glTF";
import "@babylonjs/loaders/OBJ";
import {GLTFFileLoader} from "@babylonjs/loaders";
const gltfLoader = new GLTFFileLoader();
SceneLoader.RegisterPlugin(gltfLoader);
import FlowComponent from "./component/Flow/FlowComponent/FlowComponent.jsx";

export const SelectedObjectContext = React.createContext(null);

const App = () => {
    const [isSceneReady, setIsSceneReady] = useState(false);
    const [scene, setScene] = useState(null);
    const [highlightLayer, setHighlightLayer] = useState(null);
    const [mesh, setMesh] = useState(null);
    const meshList = useRef([]);
    const [canvas, setCanvas] = useState(null);
    const [gizmoManager, setGizmoManager] = useState(null);
    const [canSelect, setCanSelect] = useState(false);
    const canSelectRef = useRef(canSelect);
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        canSelectRef.current = canSelect;
        if (gizmoManager) {
            gizmoManager.attachToMesh(mesh);
        }
    }, [canSelect]);
    useEffect(() => {
        const handleCanvasClick = () => {
            if (scene && canSelectRef.current) {
                const pickInfo = scene.pick(scene.pointerX, scene.pointerY);
                if (pickInfo.hit) {
                    const pickedMesh = pickInfo.pickedMesh;
                    setMesh(pickedMesh);
                } else {
                    setMesh(null);
                }
            }
        };
        setHighlightLayer(new HighlightLayer("hl1", scene))
        //reduce Higlight Layer




        if (canvas) {
            canvas.addEventListener("click", handleCanvasClick);
            return () => {
                canvas.removeEventListener("click", handleCanvasClick);
            };
        }
    }, [canvas, scene]);
    useEffect(() => {
        if (gizmoManager) {
            gizmoManager.usePointerToAttachGizmos = false;
        }
    }, [gizmoManager]);
    useEffect(() => {

        if (highlightLayer)
        {
            highlightLayer.removeAllMeshes();
            highlightLayer.innerGlow = false;
            highlightLayer.blurHorizontalSize = 0.5;
            highlightLayer.blurVerticalSize = 0.5 ;
            highlightLayer.renderOutline = true;
        

        }


        if (highlightLayer && mesh)
        {
            highlightLayer.addMesh(mesh, new Color3(1, 0.5, 0));
        }

    }, [mesh]);
    useEffect(() => {
        console.log("meshList", meshList);

    }, [meshList]);


    const onSceneReady = (scene) => {
        initScreen(scene);
        setIsSceneReady(true);

       

    };

    const onSceneCreated = ({ newScene, canvas }) => {
        setScene(newScene);
        setCanvas(canvas);
        if (newScene) {
            setGizmoManager(new GizmoManager(newScene));


        }
    };
    const toggleVisibility = () => { // New function to toggle visibility
        console .log("toggle")
        setIsVisible(!isVisible);
    };

    const bjsData = {
        mesh,
        gizmoManager,
        scene,
        setCanSelect,
        toggleVisibility,
        MeshBuilder,
        DirectionalLight,
        ShadowGenerator,
        SceneLoader,
        meshList,
        AllShadowGenerators: [],
    };

    return (
        <>
            <SceneComponent antialias onSceneReady={onSceneReady} onSceneCreated={onSceneCreated} id="my-canvas" />
            <SelectedObjectContext.Provider value={bjsData}>
                <div id="ui-container">
                    <FileMenuBar/>
                    {isSceneReady && <InspectorMenuBar/>}
                    <div className={isVisible ? "FC" : "FC hide"}>
                        <FlowComponent/>
                    </div>
                </div>
            </SelectedObjectContext.Provider>
        </>
    );
};

export default App;
