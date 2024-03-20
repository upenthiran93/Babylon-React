import { useCallback,useContext } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import './SceneNode.css';
import {SelectedObjectContext} from "../../../../App.jsx";
//test
const handleStyle = { left: 10 };

function SceneNode ({ data }) {
    const Context = useContext(SelectedObjectContext);


    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);
    const handleClick = () => {
        console.log("Button clicked");
        // Create a cube in the Babylon.js scene
        const size = 1; // Set the size of the cube
        const options = { size: size }; // Options for the cube
        const cube = Context.MeshBuilder.CreateBox('cube', options, Context.scene); // Create the cube
        cube.position = new Context.Vector3(0, 0, 0); // Set the position of the cube
    };
    return (
        <>
            <Handle type="target" position={Position.Top}  />
            <div className={"node scene"}>
                <h3>Scene Node</h3>
                <button onClick={handleClick}>update</button>
            </div>
        </>
    );
}

export default SceneNode;