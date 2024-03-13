import React, { useState, useEffect } from 'react';
import FloatInput from "../Core/FloatInput.jsx";
import Vector3Input from "../Core/Vector3Input.jsx";


export default function InspectorMenuBar() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);
    const updateVector = (vector) => {
        setX(vector[0]);
        setY(vector[1]);
        setZ(vector[2]);
    };


    useEffect(() => {
        console.log(x, y, z);
    }, [x, y, z]);

    return (
        <div className=" UI menu" id="inspector-menu-bar" >
            <form>

                <div>
                    <Vector3Input id="vector3" name="vector3" label="Vector3" value={{x, y, z}} onChange={updateVector }  />

                </div>

              </form>
        </div>
    );
}