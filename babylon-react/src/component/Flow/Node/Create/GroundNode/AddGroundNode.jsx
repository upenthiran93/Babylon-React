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
export default AddGroundNode;