import {SelectedObjectContext} from "../../../../../App.jsx";
import {useContext, useEffect, useState} from "react";

import CreateBaseNode from "../CreateBaseNode.jsx";
import {Vector3} from "@babylonjs/core";
import TextInputNode from "../../../UI/TextInputNode.jsx";

const GltfNode = ({ data }) => {
    const Context = useContext(SelectedObjectContext);
    const[Meshes, setMeshes] = useState([]);
    const [Mesh, setMesh] = useState(null);
    const initValue = "./Astronaut.glb";
    const [Path, setPath] = useState(initValue);
    data.mesh = Mesh;
   data.clearMesh = () => {
    Meshes.forEach(mesh => mesh.dispose());
    setMeshes([]);
    console.log("Clearing Gltf mesh");
    if (Mesh) {
        console.log("Disposing Gltf mesh");
        Mesh.dispose();
        setMesh(null);
    }
}
    const CreateGltf = (position , rotation, Scale, Size) => {

        const pathParts = Path.split("/");
        const objectName = pathParts.pop();
        const path = pathParts.join("/") +"/";
        console.log("path: ", path, "objectName: ", objectName);
  Context.SceneLoader.ImportMeshAsync("", path, objectName, Context.scene, )
        .then((result) => {

            const mesh = result.meshes[0];
            mesh.position = new Vector3(position.x, position.y, position.z);
            mesh.rotation = new Vector3(rotation.x, rotation.y, rotation.z);
            mesh.scaling = new Vector3(Scale.x, Scale.y, Scale.z);
            setMesh(result.meshes[0]);
            setMeshes(result.meshes);

        });

    };
    useEffect(() => {
        if (Path && Path !== "" && Path !== initValue) {
            data.clearMesh();
            CreateGltf(data.position, data.rotation, data.scale, data.size);
        }
    }, [Path]);



    const whenTextChanged = (event) => {
        setPath(event.target.value);
        console.log("Path: ", Path);
    }

    return (
        <div className="node gltf">
            <CreateBaseNode data={data} action={CreateGltf} title={"Gltf"} />
<TextInputNode title={"Position"} OnTextChanged={whenTextChanged} initValue={Path} />
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
