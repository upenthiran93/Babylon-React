import React, { useState } from "react";
import { initScreen } from "./Script/int.js";
import SceneComponent from "./component/SceneComponent.jsx";
import "./App.css";
import FileMenuBar from "./component/UI/Menu/File-Menu-Bar.jsx";
import InspectorMenuBar from "./component/UI/Menu/Inspector-Menu-Bar.jsx";

const App = () => {
    const [isSceneReady, setIsSceneReady] = useState(false);
    const [selectedObject, setSelectedObject] = useState(null);

    const onSceneReady = (scene) => {
        initScreen(scene);
        setIsSceneReady(true);
    };

    const handleSelectedObject = (obj) => {
        setSelectedObject(obj);
    };

    return (
        <>
            <SceneComponent antialias onSceneReady={onSceneReady} selectedObject={handleSelectedObject} id="my-canvas" />
            <div id="ui-container">
                <FileMenuBar />
                {isSceneReady && <InspectorMenuBar object={selectedObject} />}
            </div>
        </>
    );
};

export default App;
