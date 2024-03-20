import React, {useCallback, useMemo, useState} from 'react';
import ReactFlow, {

    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge, applyNodeChanges, applyEdgeChanges,
} from 'react-flow-renderer';
import SceneNode from '../Node/SceneNode/SceneNode.jsx'; // Import SceneNode
import './FlowComponent.css';
import CubeNode  from "../Node/CudeNode/CubeNode.jsx";
const FlowComponent = () => {
    const initialNodes = [

        {
            id: '1',
            type: 'Cube',
            data: { label: 'Output Node' },
            position: { x: 250, y: 250 },
        },
        {
            id: '2',
            type: 'Scene',
            data: { label: 'Scene Node' },
            position: { x: 400, y: 125 },
        }
    ];

    const initialEdges = [
        // { id: 'e1-2', source: '1', target: '2' },
        // { id: 'e2-3', source: '2', target: '3', animated: true },

    ];

//
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    // Memoize nodeTypes to prevent unnecessary re-renders
    const NodeType = useMemo(() => ({ Scene:SceneNode ,Cube:CubeNode }), []);


    return (
        <ReactFlow
            nodes={nodes} edges={edges} fitView
            nodeTypes={NodeType}
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