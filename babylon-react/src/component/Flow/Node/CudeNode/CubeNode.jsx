import { useCallback, useState, useEffect } from 'react';
import { Handle, Position } from 'react-flow-renderer';
//import './CubeNode.css';

function CubeNode ({ data }) {
    const [position, setPosition] = useState({x: 0, y: 0, z: 0});
    const [size, setSize] = useState(1);
    const [rotation, setRotation] = useState({x: 0, y: 0, z: 0});

    const handlePositionChange = (axis, event) => {
        setPosition(prevPosition => ({...prevPosition, [axis]: Number(event.target.value)}));
    };


    return (
        <>
            <div className={"node cube"}>
                <h3>Cube</h3>

                <h5>Position</h5>
                <div>
                    <label>x: </label>
                    <input type="number" value={1} onChange={(event) => handlePositionChange('x', event)} />
                    <label>y: </label>
                    <input type="number" value={1} onChange={(event) => handlePositionChange('y', event)} />
                    <label>z: </label>
                    <input type="number" value={1} onChange={(event) => handlePositionChange('z', event)} />
                </div>
                <Handle type="source" position={Position.Right} />
            </div>
        </>
    );
}

export default CubeNode;