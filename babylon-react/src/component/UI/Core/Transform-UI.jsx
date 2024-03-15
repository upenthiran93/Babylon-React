import Vector3Input from "./Vector3Input.jsx";
import React, { useEffect, useState } from "react";

const TransformUI = ({ selectedObject }) => {
    const [object, setObject] = useState(selectedObject);

    useEffect(() => {
        setObject(selectedObject);
    }, [selectedObject]);

    function setPosition([x, y, z]) {
        if (object) {
            object.position.x = x;
            object.position.y = y;
            object.position.z = z;
        }
    }

    function setRotation([x, y, z]) {
        if (object) {
            object.rotation.x = x;
            object.rotation.y = y;
            object.rotation.z = z;
        }
    }

    function setScaling([x, y, z]) {
        if (object) {
            object.scaling.x = x;
            object.scaling.y = y;
            object.scaling.z = z;
        }
    }

    // Set initial values based on the object's properties
    const positionInitVal = object ? [object.position.x, object.position.y, object.position.z] : [0, 0, 0];
    const rotationInitVal = object ? [object.rotation.x, object.rotation.y, object.rotation.z] : [0, 0, 0];
    const scalingInitVal = object ? [object.scaling.x, object.scaling.y, object.scaling.z] : [1, 1, 1];

    return (
        object ? (
            <div>
                <h3>Transform: {object.name}</h3>
                <Vector3Input id="position" label="Position" onChange={setPosition} initVal={positionInitVal} />
                <Vector3Input id="rotation" label="Rotation" onChange={setRotation} initVal={rotationInitVal} />
                <Vector3Input id="scaling" label="Scaling" onChange={setScaling} initVal={scalingInitVal} />
            </div>
        ) : null
    );
};

export default TransformUI;
