import React, {useCallback, useMemo} from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from  'react-flow-renderer';
import SceneNode from '../Node/SceneNode/SceneNode'; // Import SceneNode
import './FlowComponent.css';

// Define nodeTypes outside of the component
const nodeTypes = {
    scene: SceneNode,
};

const FlowComponent = () => {
    const initialNodes = [
        { id: '1', type: 'scene', position: { x: 20, y: 0 }, data: { label: 'Scene', title: 'Title 1' } },
        { id: '2', type: 'scene', position: { x: 0, y: 100 }, data: { label: '2', title: 'Title 2' } },
    ];
    // Make sure the source and target nodes exist and have the correct handle ids
    const initialEdges = [{ id: 'e1-2', source: '1', target: '2', sourceHandle: 'a', targetHandle: 'b' }];
//
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    // Memoize nodeTypes to prevent unnecessary re-renders
    const memoizedNodeTypes = useMemo(() => nodeTypes, []);

    return (
        <ReactFlow
            defaultNodes={nodes}
            defaultEdges={edges}
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