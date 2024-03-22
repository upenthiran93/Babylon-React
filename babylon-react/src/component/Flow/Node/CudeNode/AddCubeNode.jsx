const AddCubeNode = (getId, setNodes,position = {x:250,y:550}) => {
    const newNode = {
        id: getId(),
        type: 'Cube',
        position: { x: position.x, y: position.y },
        data: { label: 'Cube node' },
    };

    setNodes((ns) => ns.concat(newNode));
};

export default AddCubeNode;