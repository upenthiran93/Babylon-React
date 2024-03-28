import {SelectedObjectContext} from "../../../../../App.jsx";
import {useContext, useState} from "react";
import {Vector3} from "@babylonjs/core";
import CreateBaseNode from "../CreateBaseNode.jsx";

const GltfNode = ({ data }) => {
    const Context = useContext(SelectedObjectContext);
    const [Mesh, setMesh] = useState(null);
    data.mesh = Mesh;
    const CreateGltf = (position , rotation, Scale, Size) => {
      Context.SceneLoader.ImportMesh("", "./", "Astronaut.glb", Context.scene, function (meshes) {
            setMesh(meshes);
        })


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
