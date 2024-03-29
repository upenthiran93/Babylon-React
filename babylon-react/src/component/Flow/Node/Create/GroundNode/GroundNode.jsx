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
const AddGroundNode = (getId, setNodes,position = {x:250,y:550}) => {
    const newNode = {
        id: getId(),
        type: 'Ground',
        position: { x: position.x, y: position.y },
        data: { label: 'Ground node',
            position: { x: 1, y: 0, z: 2 },
            rotation: { x: 0, y: 0, z: 0 },
            size:  { width:1, height:1 },
            scale: { x: 1, y: 1, z: 1 },
        },
    };

    setNodes((ns) => ns.concat(newNode));

}
export {AddGroundNode, GroundNode};
