import React, {useEffect, useState, useCallback} from "react";
import {Vector3} from "@babylonjs/core";
import FloatNodeUi from "../../UI/FloatNodeUi.jsx";
import Vector3NodeUI from "../../UI/Vector3NodeUI.jsx";
import {Handle, Position} from "react-flow-renderer";

const CreateBaseNode = ({data, action,title}) => {
    const [Title, setTitle] = useState(title||"Mesh");
    const [position, setPosition] = useState(data.position||{ x: 0, y: 0, z: 0 });
    const [rotation, setRotation] = useState(data.rotation|| { x: 0, y: 0, z: 0 });
    const [Scale, setScale] = useState(data.Scale||{ x: 1, y: 1, z: 1 });
    const [Size, setSize] = useState(data.Size||{ width: 1, height: 1 });
    const [mesh, setMesh] = useState(null);
    useEffect(() => {

    }, []);

    useEffect(() => {
        if (  data.mesh ) {
            data.mesh.position = new Vector3(position.x, position.y, position.z);
            data.mesh.scaling = new Vector3(Scale.x, Scale.y, Scale.z);
            data.mesh.rotation = new Vector3(rotation.x, rotation.y, rotation.z);

        }
    }, [position, Scale, rotation, mesh]);

    const handlePositionChange = (axis, event) => {
        setPosition(prevPosition => ({
            ...prevPosition,
            [axis]: parseFloat(event.target.value)
        }));
    };

    const handleSizeChange = (axis, event) => {
        setScale(prevSize => ({
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

    const createMesh = useCallback(() => {
        if (!mesh) {
            console.log("Creating new mesh in Babylon.js");
         setMesh(   action(position , rotation, Scale, Size ));
        } else {
            console.log("Moving existing mesh in Babylon.js");
        }
    }, [mesh, action]);



    return(
        <>
            <div className="node cube">
                <h5>{Title}</h5>
                <Vector3NodeUI title={"Position"} name={"position"} handleChange={handlePositionChange} intiValue={position} />
                <Vector3NodeUI title={"Scale"} name={"Scale"} handleChange={handleSizeChange} initValue={Scale} />
                <Vector3NodeUI title={"Rotation"} name={"rotation"} handleChange={handleRotationChange} intiValue={rotation} />
                <Handle
                    type="source"
                    position={Position.Right}
                    onConnect={(connection) => {
                        if (connection.target === "SCENE") {
                            console.log("Connected to Scene!!");
                            createMesh();
                        }
                    }}
                />
            </div>
        </>
    );
};

export default CreateBaseNode;