const AddDirectionLightNode = (getId, setNodes, position = {x:250, y:550}) => {
    const newNode = {
        id: getId(),
        type: 'DirectionLight',
        position: { x: position.x, y: position.y },
        data: {
            label: 'Direction Light node',
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 },
            intensity: 1,
            direction: { x: 0, y: -1, z: 0 },
        },
    };

    setNodes((ns) => ns.concat(newNode));
};

export default AddDirectionLightNode;