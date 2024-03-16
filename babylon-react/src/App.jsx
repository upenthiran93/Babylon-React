import React, {useState, useContext, useRef, useEffect} from "react";
import { Engine, Scene } from "@babylonjs/core";
import { initScreen } from "./Script/int.js";
import SceneComponent from "./component/SceneComponent.jsx";
import "./App.css";
import FileMenuBar from "./component/UI/Menu/FileMenuBar/FileMenuBar.jsx";
import InspectorMenuBar from "./component/UI/Menu/Inspector-Menu-Bar.jsx";

export const SelectedObjectContext = React.createContext(null);

const App = () => {
    const [isSceneReady, setIsSceneReady] = useState(false);
    const [selectedObject, setSelectedObject] = useState(null);
    const [scene, setScene] = useState(null);
    const [mesh, setMesh] = useState(null);
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        if (canvas) {
            canvas.addEventListener("click",()=> handleCanvasClick(scene));
        }
        return () => {
            if (canvas) {
                canvas.removeEventListener("click",()=> handleCanvasClick(scene));
            }
        }

    }, [scene,canvas]);

    useEffect(() => {
        console.log(mesh);
    }, [mesh]);





    const onSceneReady = (scene) => {
        initScreen(scene);
        setIsSceneReady(true);
    };

    const handleSelectedObject = (obj) => {
        setSelectedObject(obj);
    };
    const onSceneCreated = ({newScene ,canvas}) => {

            setScene(newScene);
            setCanvas(canvas);

        }

    const handleCanvasClick = (scene) => {
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

    return (
        <>
            <SceneComponent antialias onSceneReady={onSceneReady} selectedObject={handleSelectedObject}  onSceneCreated={onSceneCreated}  id="my-canvas" />
            <SelectedObjectContext.Provider value={selectedObject}>
            <div id="ui-container">
                <FileMenuBar />
                {isSceneReady && <InspectorMenuBar  />}
            </div>
            </SelectedObjectContext.Provider>
        </>
    );
};

export default App;
