import React, { useEffect, useState } from 'react';
import FloatInput from "./FloatInput.jsx";

const Vector3Input = ({ initVal, label, onChange }) => {
    const [x, setX] = useState(initVal[0]);
    const [y, setY] = useState(initVal[1]);
    const [z, setZ] = useState(initVal[2]);

    // Update local state and propagate changes to parent component when values change
    useEffect(() => {
        if (onChange) {
            onChange([x, y, z]);
        }
    }, [x, y, z, onChange]);

    // Update local state when initVal prop changes
    useEffect(() => {
        setX(initVal[0]);
        setY(initVal[1]);
        setZ(initVal[2]);
    }, [initVal]);

    return (
        <div className="UI menu" id="inspector-menu-bar">
            <div className="vectorInput">
                <h3>{label}</h3>
                <FloatInput
                    id="x"
                    name="x"
                    label="X"
                    value={x}
                    onChange={setX}
                    labelStyle={{ backgroundColor: 'red' }}
                    inputStyle={{ borderColor: 'red' }}
                />
                <FloatInput
                    id="y"
                    name="y"
                    label="Y"
                    value={y}
                    onChange={setY}
                    labelStyle={{ backgroundColor: 'green' }}
                    inputStyle={{ borderColor: 'green' }}
                />
                <FloatInput
                    id="z"
                    name="z"
                    label="Z"
                    value={z}
                    onChange={setZ}
                    labelStyle={{ backgroundColor: 'blue' }}
                    inputStyle={{ borderColor: 'blue' }}
                />
            </div>
        </div>
    );
};

export default Vector3Input;
