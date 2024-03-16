import Vector3Input from "../Core/Vector3/Vector3Input.jsx";
import React, { useEffect, useState, useContext } from "react";
import {SelectedObjectContext} from "../../../App.jsx";

const TransformUI = () => {

    const Context = useContext(SelectedObjectContext);
    const selectedObjectContext = Context.mesh;





    function setPosition([x, y, z]) {
        if (selectedObjectContext) {
            selectedObjectContext.position.x = x;
            selectedObjectContext.position.y = y;
            selectedObjectContext.position.z = z;
            // Ensure state update triggers re-render

        }
    }

    function setRotation([x, y, z]) {
        if (selectedObjectContext) {
            selectedObjectContext.rotation.x = x;
            selectedObjectContext.rotation.y = y;
            selectedObjectContext.rotation.z = z;
            // Ensure state update triggers re-render

        }
    }

    function setScaling([x, y, z]) {
        if (selectedObjectContext) {
            selectedObjectContext.scaling.x = x;
            selectedObjectContext.scaling.y = y;
            selectedObjectContext.scaling.z = z;
            // Ensure state update triggers re-render

        }
    }


    const positionInitVal = selectedObjectContext ? [selectedObjectContext.position.x, selectedObjectContext.position.y, selectedObjectContext.position.z] : [0, 0, 0];
    const rotationInitVal = selectedObjectContext ? [selectedObjectContext.rotation.x, selectedObjectContext.rotation.y, selectedObjectContext.rotation.z] : [0, 0, 0];
    const scalingInitVal = selectedObjectContext ? [selectedObjectContext.scaling.x, selectedObjectContext.scaling.y, selectedObjectContext.scaling.z] : [1, 1, 1];

    return (
        selectedObjectContext ? (
            <div className={"transform-container"}>
                <h2>Transform</h2>
                <Vector3Input id="position" label="Position" onChange={setPosition} initVal={positionInitVal} />
                <Vector3Input id="rotation" label="Rotation" onChange={setRotation} initVal={rotationInitVal} />
                <Vector3Input id="scaling" label="Scaling" onChange={setScaling} initVal={scalingInitVal} />
            </div>
        ) : null
    );
};

export default TransformUI;
