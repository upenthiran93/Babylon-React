import React, { useCallback, useMemo, useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge, applyNodeChanges, applyEdgeChanges } from 'react-flow-renderer';
import SceneNode from '../Node/SceneNode/SceneNode.jsx'; // Import SceneNode
import CubeNode from "../Node/CudeNode/CubeNode.jsx";
import './FlowComponent.css';
import GroundNode from "../Node/GroundNode/GroundNode.jsx";
import FlowToolMenu from "./FLowToolMenu/FlowToolMenu.jsx";
let id = 0;

const FlowComponent = () => {
    const initialNodes = [
        { id: '1', type: 'Cube', data: { label: 'Output Node' }, position: { x: 250, y: 250 } },
        { id: '2', type: 'Ground', data: { label: 'Output Node' }, position: { x: 250, y: 50 } },
        { id: 'SCENE', type: 'Scene', data: { label: 'Scene Node' }, position: { x: 800, y: 125 } }
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

    const nodeTypes = useMemo(() => ({ Scene: SceneNode, Cube: CubeNode ,Ground:GroundNode}), []);
    const getId = () => `dndnode_${id++}`;

    const addCubeNode = () => {
        const newNode = {
            id: getId(),
            type: 'Cube',
            position: { x: 250, y: 250 },
            data: { label: 'Cube node' },
        };

        setNodes((ns) => ns.concat(newNode));
    };

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}

            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
        >

                <Controls      />
                <MiniMap
                    nodeColor={(n) => {
                        if (n.type === 'Scene') return 'blue';
                        return 'red';

                    }
                }
                    // style={{ position: 'absolute', top: 0, right: 50 }}

                />

            <Background variant="dots" gap={25} size={2}/>
           < FlowToolMenu/>
            <button id={"Cube-Button"} onClick={addCubeNode}> Cube</button>
        </ReactFlow>
    );
};

export default FlowComponent;
