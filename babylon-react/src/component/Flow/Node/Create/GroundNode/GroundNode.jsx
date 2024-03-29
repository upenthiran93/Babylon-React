import React, {useContext, useState} from 'react';
import {SelectedObjectContext} from '../../../../../App.jsx';
import CreateBaseNode from "../CreateBaseNode.jsx";

function GroundNode({ data }) {
    const Context = useContext(SelectedObjectContext);
    const [Mesh, setMesh] = useState(null);
    data.mesh = Mesh;

    const createGround = (position, rotation, scale, size) => {
        console.log("Creating Ground mesh",data);
        const options = { width: 1, height: 1 };
        setMesh( Context.MeshBuilder.CreateGround('ground', options, Context.scene));
    };

    data.clearMesh = () => {
        console.log("Clearing Ground mesh");
        if (Mesh) {
            console.log("Disposing ground mesh");
            Mesh.dispose();
            setMesh(null);
        }
    };

    return (
        <CreateBaseNode data={data} action={createGround} title={"Ground"} />
    );
}

export default GroundNode;