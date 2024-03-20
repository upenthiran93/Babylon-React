import React, { useContext, useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { SelectedObjectContext } from '../../../../App.jsx';
import { Vector3 } from '@babylonjs/core';

function CubeNode({ data }) {
    const Context = useContext(SelectedObjectContext);
    const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

    const handlePositionChange = (axis, event) => {
        setPosition(prevPosition => ({ ...prevPosition, [axis]: parseFloat(event.target.value) }));
    };

    const createBox = () => {
        console.log("Cube Created in Babylon.js");
        const size = 1; // Set the size of the cube
        const options = { size: size }; // Options for the cube
        const cube = Context.MeshBuilder.CreateBox('cube', options, Context.scene); // Create the cube
        cube.position = new Vector3(position.x, position.y, position.z); // Set the position of the cube
    };

    return (
        <div className="node cube">
            <h5>Cube</h5>
            <p>Position</p>
            <div>
                <label>x: </label>
                <input type="text" value={0} onChange={(event) => handlePositionChange('x', event)} />
                <label>y: </label>
                <input type="text"  value={-5} onChange={(event) => handlePositionChange('y', event)} />
                <label>z: </label>
                <input type="text" value={5} onChange={(event) => handlePositionChange('z', event)} />
            </div>

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
