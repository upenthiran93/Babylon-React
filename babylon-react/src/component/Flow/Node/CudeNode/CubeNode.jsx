import React, { useContext, useState, useEffect } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { SelectedObjectContext } from '../../../../App.jsx';
import { Vector3 } from '@babylonjs/core';
import FloatNodeUi from "../../UI/FloatNodeUi.jsx";
import Vector3NodeUI from "../../UI/Vector3NodeUI.jsx";


function CubeNode({ data }) {
    const Context = useContext(SelectedObjectContext);
    const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
    const [size, setSize] = useState(1);
    const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
    const [Cube, setCube] = useState(null);

    useEffect(() => {
        if (Cube) {
            Cube.position = new Vector3(position.x, position.y, position.z);
            Cube.scaling = new Vector3(size, size, size);
            Cube.rotation = new Vector3(rotation.x, rotation.y, rotation.z);
        }
    }, [position, size, rotation, Cube]);

    const handlePositionChange = (axis, event) => {
        setPosition(prevPosition => ({
            ...prevPosition,
            [axis]: parseFloat(event.target.value)
        }));
    };

    const handleSizeChange = event => {
        setSize(parseFloat(event.target.value));
    };

    const handleRotationChange = (axis, event) => {
        setRotation(prevRotation => ({
            ...prevRotation,
            [axis]: parseFloat(event.target.value)
        }));
    };

    const createBox = () => {
        if (!Cube) {
            console.log("Creating new cube in Babylon.js");
            const options = { size: size };
            const newCube = Context.MeshBuilder.CreateBox('cube', options, Context.scene);
            setCube(newCube);
        } else {
            console.log("Moving existing cube in Babylon.js");
        }
    };

    return (
        <div className="node cube">
            <h5>Cube</h5>

            <Vector3NodeUI title={"Position"} name={"position"} handleChange={handlePositionChange} />


            <FloatNodeUi title={"size"} handleChange={handleSizeChange} />
            <Vector3NodeUI title={"Rotation"} name={"rotation"} handleChange={handleRotationChange} />
            <Handle
                type="source"
                position={Position.Right}
                onConnect={(connection) => {
                    if (connection.target === "SCENE") {
                        console.log("Connected to Scene");
                        createBox();
                    }
                }}
            />
        </div>
    );
}

export default CubeNode;
