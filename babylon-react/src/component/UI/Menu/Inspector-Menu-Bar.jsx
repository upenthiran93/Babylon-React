import React, { useState, useEffect } from 'react';
import FloatInput from "../Core/FloatInput.jsx";
import Vector3Input from "../Core/Vector3Input.jsx";
import {selectedObject} from "../../../Script/int.js";
import TransformUI from "../Core/Transform-UI.jsx";

export default function InspectorMenuBar() {





    return (
        <div className=" UI menu" id="inspector-menu-bar" >

                <div>

                    <TransformUI selectedObject={selectedObject} />

                </div>

        </div>
    );
}