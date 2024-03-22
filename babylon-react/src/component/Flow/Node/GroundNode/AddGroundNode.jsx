const AddGroundNode = (getId, setNodes,position = {x:250,y:550}) => {
    const newNode = {
        id: getId(),
        type: 'Ground',
        position: { x: position.x, y: position.y },
        data: { label: 'Ground node' },
    };

    setNodes((ns) => ns.concat(newNode));

}
export default AddGroundNode;