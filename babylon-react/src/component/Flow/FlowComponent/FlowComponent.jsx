import React, { useCallback, useMemo, useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge, applyNodeChanges, applyEdgeChanges } from 'react-flow-renderer';
import SceneNode from '../Node/SceneNode/SceneNode.jsx'; // Import SceneNode
import CubeNode from "../Node/CudeNode/CubeNode.jsx";
import './FlowComponent.css';

const FlowComponent = () => {
    const initialNodes = [
        { id: '1', type: 'Cube', data: { label: 'Output Node' }, position: { x: 150, y: 50 } },
        { id: 'SCENE', type: 'Scene', data: { label: 'Scene Node' }, position: { x: 400, y: 125 } }
    ];

    const initialEdges = [];

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(changes => setNodes(nds => applyNodeChanges(changes, nds)), []);
    const onEdgesChange = useCallback(changes => setEdges(eds => applyEdgeChanges(changes, eds)), []);
    const onConnect = useCallback(
        (connection) => {
            console.log(connection);
            if (connection.target === '2') { // Assuming '2' is the id of your SceneNode

            }
            setEdges((eds) => addEdge(connection, eds));
        },
        [setEdges]
    );

    const nodeTypes = useMemo(() => ({ Scene: SceneNode, Cube: CubeNode }), []);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
        >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
    );
};

export default FlowComponent;
