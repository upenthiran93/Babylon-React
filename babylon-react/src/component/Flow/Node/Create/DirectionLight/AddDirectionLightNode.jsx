const AddDirectionLightNode = (getId, setNodes, position = {x:250, y:550}) => {
    const newNode = {
        id: getId(),
        type: 'DirectionLight',
        position: { x: position.x, y: position.y },
        data: {
            label: 'Direction Light node',
            intensity: 1,
            direction: { x: 0, y: -1, z: 0 },
        },
    };

    setNodes((ns) => ns.concat(newNode));
};

export default AddDirectionLightNode;