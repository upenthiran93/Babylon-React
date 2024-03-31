import React, {useContext, useRef, useState,} from 'react';
import { SelectedObjectContext } from '../../../../../App.jsx';

import CreateBaseNode from "../CreateBaseNode.jsx";
import {Vector3} from "@babylonjs/core";

function CubeNode({ data }) {
    const Context = useContext(SelectedObjectContext);
    const Mesh = useRef(null);
    data.mesh = Mesh;


    const createBox = (position , rotation, Scale, Size) => {
        const newCube = Context.MeshBuilder.CreateBox('cube',Scale , Context.scene);
        newCube.position = new Vector3(position.x, position.y, position.z);
        newCube.rotation = new Vector3(rotation.x, rotation.y, rotation.z);
        newCube.scaling = new Vector3(Scale.x, Scale.y, Scale.z);
       Mesh.current = newCube;
        Context.meshList.current.push(Mesh.current);
        console.log("Creating Cube mesh", Context.meshList.current);

    };


    data.clearMesh = () => {
        console.log("Clearing Cube mesh");
        if (Mesh) {
            console.log("Disposing ground mesh");

            if (Context.meshList.current.includes(Mesh.current)) {
                console.log("Removing from mesh list");
                Context.meshList.current = Context.meshList.current.filter(mesh => mesh !== Mesh.current);
                console.log("Disposing ground mesh", Context.meshList.current);
            }
            Mesh.current.dispose();
           Mesh.current = null;
        }
    };

    return (
        <div className="node cube">
            <CreateBaseNode data={data} action={createBox} title={"Cube"} />
        </div>
    );
}

const AddCubeNode = (getId, setNodes, position = {x:250, y:550}) => {
    const newNode = {
        id: getId(),
        type: 'Cube',
        position: { x: position.x, y: position.y },
        data: {
            label: 'Cube node',
            position: { x: 1, y: 0, z: 2 },
            rotation: { x: 0, y: 0, z: 0 },
            size: 1,
            scale: { x: 1, y: 1, z: 1 },
        },
    };

    setNodes((ns) => ns.concat(newNode));
};



export  {AddCubeNode, CubeNode};

