import React, {useContext, useEffect, useState} from "react";
import {SelectedObjectContext} from "../../../../../App.jsx";
import {Vector3} from "@babylonjs/core";
import CreateBaseNode from "../CreateBaseNode.jsx";
import Vector3NodeUI from "../../../UI/Vector3NodeUI.jsx";

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


    const createDirectionLight = (position , rotation, Scale, Size) => {
        const Dlight =new Context.DirectionalLight('light',new Vector3(Direction.x,Direction.y,Direction.z ), Context.scene);

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
    return (
        <div className="node cube">
            <CreateBaseNode data={data} action={createDirectionLight} title={"Direction Light"}/>
            <Vector3NodeUI title={"Direction"} name={"position"} handleChange={handlePositionChange}  />
        </div>)
};
export default DirectionLightNode;