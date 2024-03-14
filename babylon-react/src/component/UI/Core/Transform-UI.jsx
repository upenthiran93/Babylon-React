import Vector3Input from "./Vector3Input.jsx";
import React, {useEffect, useState} from "react";
const TransformUI = ({ selectedObject }) => {
    const [object, setObject] = useState(selectedObject());

    useEffect(() => {
        setObject(selectedObject());
    }, [selectedObject]);

    function setPosition([x, y, z]) {
        // Check if the object exists
        if (object) {
            object.position.x = x;
            object.position.y = y;
            object.position.z = z;
        }
    }

    function setRotation([x, y, z]) {
        // Check if the object exists
        if (object) {
            object.rotation.x = x;
            object.rotation.y = y;
            object.rotation.z = z;
        }
    }
    function setScaling([x, y, z]) {
        // Check if the object exists
        if (object) {
            object.scaling.x = x;
            object.scaling.y = y;
            object.scaling.z = z;
        }
    }

    return (
        <div>
            <h3>Transform</h3>
            <Vector3Input id="position" label="Position" onChange={setPosition} initVal={[0, 0, 0]} />
            <Vector3Input id="rotation" label="Rotation" onChange={setRotation} initVal={[0, 0, 0]} />
            <Vector3Input id="scaling" label="Scaling" onChange={setScaling} initVal={[1, 1, 1]} />
        </div>
    );
};

export default TransformUI;