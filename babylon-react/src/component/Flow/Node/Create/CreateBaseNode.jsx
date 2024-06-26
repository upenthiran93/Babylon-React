import React, {useEffect, useState, useCallback} from "react";
import {Vector3} from "@babylonjs/core";
import Vector3NodeUI from "../../UI/Vector3NodeUI.jsx";
import {Handle, Position} from "react-flow-renderer";

const CreateBaseNode = ({data, action,title}) => {
    const [Title, setTitle] = useState(title||"Mesh");
    const [position, setPosition] = useState(data.position);
    const [rotation, setRotation] = useState(data.rotation);
    const [scale, setScale] = useState(data.scale);
    const [Size, setSize] = useState(data.Size);
    const [mesh, setMesh] = useState(null);


    useEffect(() => {
        if (  data.mesh ) {
// console.log("Updating mesh in Babylon.js",data);
            data.mesh.position =position? new Vector3(position.x, position.y, position.z) : new Vector3(0, 0, 0);
            data.mesh.scaling =scale? new Vector3(scale.x, scale.y, scale.z): new Vector3(1, 1, 1);
            data.mesh.rotation = rotation? new Vector3(rotation.x, rotation.y, rotation.z): new Vector3(0, 0, 0);

        }
    }, [position, scale, rotation, mesh]);

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
         setMesh(   action(position , rotation, scale, Size ));

        } else {
            console.log("Moving existing mesh in Babylon.js");
        }
    }, [mesh, action]);



    return(
        <>
            <div className="node cube">
                <h5>{Title}</h5>
                {position && <Vector3NodeUI title={"Position"} name={"position"} handleChange={handlePositionChange} intiValue={position} />}
                {scale && <Vector3NodeUI title={"Scale"} name={"Scale"} handleChange={handleSizeChange} initValue={scale} />}
                {rotation && <Vector3NodeUI title={"Rotation"} name={"rotation"} handleChange={handleRotationChange} intiValue={rotation} />}
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