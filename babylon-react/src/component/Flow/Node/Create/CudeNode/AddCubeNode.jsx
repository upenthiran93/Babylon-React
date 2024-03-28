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
            Scale: { x: 1, y: 1, z: 1 },
        },
    };

    setNodes((ns) => ns.concat(newNode));
};

export default AddCubeNode;