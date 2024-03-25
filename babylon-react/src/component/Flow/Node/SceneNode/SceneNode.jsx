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

        if (data.cubeFunction) {
            data.cubeFunction();
        }
    };
    return (
        <>
            <Handle type="target" position={Position.Top}  />
            <div className={"node scene"}>

                <h3>Scene Node</h3>

            </div>
        </>
    );
}

export default SceneNode;