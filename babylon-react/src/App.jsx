import React, {useState} from "react";
//import { FreeCamera, Vector3, HemisphericLight, MeshBuilder,ArcRotateCamera,ShadowGenerator ,DirectionalLight} from "@babylonjs/core";
import {initScreen} from "./Script/int.js";

import SceneComponent from "./component/SceneComponent.jsx";
// uses above component in same directory
import "./App.css";
import FileMenuBar from "./component/UI/Menu/File-Menu-Bar.jsx";
import InspectorMenuBar from "./component/UI/Menu/Inspector-Menu-Bar.jsx";

const onSceneReady = (scene) => {
    initScreen(scene);
};
const onRender = (scene) => {

};
export default () =>{
    const [isSceneReady, setIsSceneReady] = useState(false);

    const onSceneReady = (scene) => {
        initScreen(scene);
        setIsSceneReady(true);
    };

    return(
<>

    <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
    <div id="ui-container">
        <FileMenuBar/>
        {isSceneReady&& <InspectorMenuBar/>}
    </div>

</>

);}