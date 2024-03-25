import React from 'react';
import FloatNodeUi from "./FloatNodeUi.jsx";

const Vector3NodeUI = ({title, handleChange , intiValue ={ x: 0, y: 0, z: 0 }}) => {
    return (
        <div className={"vector3InputNode"}>
            <h5>{title}</h5>
            <div className={"axies"}>
                <FloatNodeUi name={` x:`} handleChange={handleChange} handleChangeAxies={"x"} initValue={intiValue.x}  />
                <FloatNodeUi name={` y:`} handleChange={handleChange} handleChangeAxies={"y"} initValue={intiValue.y   } />
                <FloatNodeUi name={` z:`} handleChange={handleChange} handleChangeAxies={"z"} initValue={intiValue.z} />
            </div>

        </div>
    );
};

export default Vector3NodeUI;