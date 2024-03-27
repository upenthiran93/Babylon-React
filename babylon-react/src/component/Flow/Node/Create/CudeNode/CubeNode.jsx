import React, {useContext, useState,} from 'react';
import { SelectedObjectContext } from '../../../../../App.jsx';

import CreateBaseNode from "../CreateBaseNode.jsx";
import {Vector3} from "@babylonjs/core";

function CubeNode({ data }) {
    const Context = useContext(SelectedObjectContext);
    const [Mesh, setMesh] = useState(null);
    data.mesh = Mesh;


    const createBox = (position , rotation, Scale, Size) => {
        const newCube = Context.MeshBuilder.CreateBox('cube',Scale , Context.scene);
        newCube.position = new Vector3(position.x, position.y, position.z);
        newCube.rotation = new Vector3(rotation.x, rotation.y, rotation.z);
        newCube.scaling = new Vector3(Scale.x, Scale.y, Scale.z);
        setMesh(newCube);

    };


    data.clearMesh = () => {
        console.log("Clearing Cube mesh");
        if (Mesh) {
            console.log("Disposing ground mesh");
            Mesh.dispose();
            setMesh(null);
        }
    };

    return (
        <div className="node cube">
            <CreateBaseNode data={data} action={createBox} title={"Cube"} />
        </div>
    );
}

export default CubeNode;