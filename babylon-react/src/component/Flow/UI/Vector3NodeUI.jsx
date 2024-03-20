import React from 'react';
import FloatNodeUi from "./FloatNodeUi.jsx";

const Vector3NodeUI = ({title, handleChange }) => {
    return (
        <div className={"vector3InputNode"}>
            <h5>{title}</h5>
            <div className={"axies"}>
                <FloatNodeUi name={` x:`} handleChange={handleChange} handleChangeAxies={"x"} />
                <FloatNodeUi name={` y:`} handleChange={handleChange} handleChangeAxies={"y"} />
                <FloatNodeUi name={` z:`} handleChange={handleChange} handleChangeAxies={"z"} />
            </div>

        </div>
    );
};

export default Vector3NodeUI;