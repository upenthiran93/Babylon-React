import React, { useEffect, useState } from 'react';
import FloatInput from "./FloatInput.jsx";

const Vector3Input = ({ initVal, label, onChange }) => {
    const [x, setX] = useState(initVal[0]);
    const [y, setY] = useState(initVal[1]);
    const [z, setZ] = useState(initVal[2]);

    // State to manage the initial values passed as props
    const [initialValues, setInitialValues] = useState(initVal);

    useEffect(() => {
        if (onChange) {
            onChange([x, y, z]);
        }
    }, [x, y, z]);

    // useEffect to update the local state when the initVal prop changes
    useEffect(() => {
        setInitialValues(initVal);
        // Set the local state to the new initial values when initVal changes
        setX(initVal[0]);
        setY(initVal[1]);
        setZ(initVal[2]);
    }, [initVal]);

    return (
        <div className=" UI menu" id="inspector-menu-bar">
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
