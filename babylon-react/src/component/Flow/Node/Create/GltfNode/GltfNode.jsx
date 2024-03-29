import {SelectedObjectContext} from "../../../../../App.jsx";
import {useContext, useState} from "react";

import CreateBaseNode from "../CreateBaseNode.jsx";
import {Vector3} from "@babylonjs/core";

const GltfNode = ({ data }) => {
    const Context = useContext(SelectedObjectContext);
    const [Mesh, setMesh] = useState(null);
    data.mesh = Mesh;
    const CreateGltf = (position , rotation, Scale, Size) => {
        console.log("Start Creating Gltf mesh");
   const newMesh =   Context.SceneLoader.ImportMeshAsync("", "./", "Astronaut.glb", Context.scene, )
        .then((result) => {
            const mesh = result.meshes[0];
            mesh.position = new Vector3(position.x, position.y, position.z);
            mesh.rotation = new Vector3(rotation.x, rotation.y, rotation.z);
            mesh.scaling = new Vector3(Scale.x, Scale.y, Scale.z);
            setMesh(result.meshes[0]);

        });

    };

    data.clearMesh = () => {
        console.log("Clearing Gltf mesh");
        if (Mesh) {
            console.log("Disposing Gltf mesh");
            Mesh.forEach(mesh => mesh.dispose());
            setMesh(null);
        }
    }


    return (
        <div className="node gltf">
            <CreateBaseNode data={data} action={CreateGltf} title={"Gltf"} />
        </div>
    );

}
const AddGltfNode = (getId, setNodes, position = {x:250, y:550}) => {
    const newNode = {
        id: getId(),
        type: 'Gltf',
        position: { x: position.x, y: position.y },
        data: {
            label: 'Gltf node',
            position: { x: 1, y: 0, z: 2 },
            rotation: { x: 0, y: 0, z: 0 },
            size: 1,
            scale: { x: 1, y: 1, z: 1 },
        },
    };
    setNodes((ns) => ns.concat(newNode));

}

export {GltfNode , AddGltfNode};
