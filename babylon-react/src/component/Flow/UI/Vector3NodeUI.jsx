import React from 'react';
import FloatNodeUi from "./FloatNodeUi.jsx";

const Vector3NodeUI = ({title, handleChange }) => {
    return (
        <div className={"vector3input"}>
            <h5>{title}</h5>
            <FloatNodeUi name={` x:`} handleChange={handleChange} handleChangeAxies={"x"} />
            <FloatNodeUi name={` y:`} handleChange={handleChange} handleChangeAxies={"y"} />
            <FloatNodeUi name={` z:`} handleChange={handleChange} handleChangeAxies={"z"} />
        </div>
    );
};

export default Vector3NodeUI;