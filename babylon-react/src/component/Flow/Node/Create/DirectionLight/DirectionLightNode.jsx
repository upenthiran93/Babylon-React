import React, {useContext, useEffect, useState} from "react";
import {SelectedObjectContext} from "../../../../../App.jsx";
import {Vector3 , Color3} from "@babylonjs/core";
import CreateBaseNode from "../CreateBaseNode.jsx";
import Vector3NodeUI from "../../../UI/Vector3NodeUI.jsx";
import ColorInput from "../../../UI/ColorInput.jsx";
import FloatNodeUi from "../../../UI/FloatNodeUi.jsx";

const DirectionLightNode = ({data}) => {
    const Context = useContext(SelectedObjectContext);
    const [Dlight, setDlight] = useState(null);
    const [Direction, setDirection] = useState({x: -1, y: -1, z: 0});
    data.mesh = Dlight;


    useEffect(() => {
        if (Dlight) {
            Dlight.direction = new Vector3(Direction.x, Direction.y, Direction.z);
        }
    }, [Direction, Dlight]);


    const createDirectionLight = (position, rotation, Scale, Size) => {
        const Dlight = new Context.DirectionalLight('light', new Vector3(Direction.x, Direction.y, Direction.z), Context.scene);
        Context.AllShadowGenerators.push(new Context.ShadowGenerator(1024, Dlight));
        Dlight.intensity = 1;
        setDlight(Dlight);
    };
    const handlePositionChange = (axis, event) => {
        setDirection(prevPosition => ({
            ...prevPosition,
            [axis]: parseFloat(event.target.value)
        }));
    };

    data.clearMesh = () => {
        console.log("Clearing Direction Light mesh");
        if (Dlight) {
            console.log("Disposing Direction Light mesh");
            Context.scene.removeLight(Dlight);
            setDlight(null);
        }
    }
    const SetColor = (color) => {

        //color to Color3
        const color3 = Color3.FromHexString(color);


        console.log("Setting color", color);
        if (Dlight) {
            Dlight.diffuse = color3;
        }

    }

    return (
        <div className="node cube">
            <CreateBaseNode data={data} action={createDirectionLight} title={"Direction Light"}/>
            <Vector3NodeUI title={"Direction"} name={"position"} handleChange={handlePositionChange}/>
               <FloatNodeUi title={"Intensity"}  handleChange={(event) => { if (Dlight) Dlight.intensity = parseFloat(event.target.value)}}/>
            <ColorInput title={"Color"} name={"Color"} handleChange={(color) => SetColor(color)}/>
        </div>)
};
const AddDirectionLightNode = (getId, setNodes, position = {x: 250, y: 550}) => {
    const newNode = {
        id: getId(),
        type: 'DirectionLight',
        position: {x: position.x, y: position.y},
        data: {
            label: 'Direction Light node',
            intensity: 1,
            direction: {x: 0, y: -1, z: 0},
        },
    };

    setNodes((ns) => ns.concat(newNode));
};

export {DirectionLightNode, AddDirectionLightNode};