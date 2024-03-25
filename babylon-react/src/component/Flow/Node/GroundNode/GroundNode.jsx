import React, {useContext, useEffect, useState} from 'react';
import {Handle, Position} from 'react-flow-renderer';
import {SelectedObjectContext} from '../../../../App.jsx';
import {Vector3} from '@babylonjs/core';
import FloatNodeUi from "../../UI/FloatNodeUi.jsx";
import Vector3NodeUI from "../../UI/Vector3NodeUI.jsx";

function GroundNode({ data }) {

    const Context = useContext(SelectedObjectContext);
    const [position, setPosition] = useState(data.position||{ x: 0, y: 0, z: 0 });
    const [size, setSize] = useState(data.size||{ width: 1, height: 1 });
    const [rotation, setRotation] = useState(data.rotation||{ x: 0, y: 0, z: 0 });
    const [ground, setGround] = useState(null);

    useEffect(() => {
        if (ground) {
            ground.position = new Vector3(position.x, position.y, position.z);
            ground.scaling = new Vector3(size.width, 1, size.height);
            ground.rotation = new Vector3(rotation.x, rotation.y, rotation.z);
        }
    }, [position, size, rotation, ground]);

    const handlePositionChange = (axis, event) => {
        setPosition(prevPosition => ({
            ...prevPosition,
            [axis]: parseFloat(event.target.value)
        }));
    };

    const handleSizeChange = (axis, event) => {
        setSize(prevSize => ({
            ...prevSize,
            [axis]: parseFloat(event.target.value)
        }));
    };

    const handleRotationChange = (axis, event) => {
        setRotation(prevRotation => ({
            ...prevRotation,
            [axis]: parseFloat(event.target.value)
        }));
    };

    const createGround = () => {
        if (!ground) {
            console.log("Creating new ground in Babylon.js");
            const options = { width: size.width, height: size.height };
            const newGround = Context.MeshBuilder.CreateGround('ground', options, Context.scene);
            setGround(newGround);
        } else {
            console.log("Moving existing ground in Babylon.js");
        }
    };

  // Add clearMesh function to data
        data.clearMesh = () => {
            console.log("Clearing ground mesh");
            if (ground) {
                console.log("Disposing ground mesh");
                ground.dispose();
                setGround(null);
            }
        };


    return (
        <div className="node ground">
            <h5>Ground</h5>
            <Vector3NodeUI title={"Position"} name={"position"} handleChange={handlePositionChange} intiValue={position} />
            <FloatNodeUi title={"Width"} handleChange={(event) => handleSizeChange('width', event)} initValue={size.width} />
            <FloatNodeUi title={"Height"} handleChange={(event) => handleSizeChange('height', event)} initValue={size.height} />
            <Vector3NodeUI title={"Rotation"} name={"rotation"} handleChange={handleRotationChange} />
            <Handle
                type="source"
                position={Position.Right}
                onConnect={(connection) => {
                    if (connection.target === "SCENE") {
                        console.log("Connected to Scene");
                        createGround();
                    }
                }}
            />
        </div>
    );
}

export default GroundNode;
