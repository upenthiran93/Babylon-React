import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
//test
const handleStyle = { left: 10 };

function SceneNode ({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
            <Handle type="target" position={Position.Top} id="a" style={handleStyle} /> {/* Add id to the handle */}
            <div style={"" }>
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" />
            </div>
        </>
    );
}
export  default SceneNode;