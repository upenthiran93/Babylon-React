import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges
} from 'react-flow-renderer';
import {AddCubeNode, CubeNode} from "../Node/Create/CudeNode/Cube.jsx";
import {AddGroundNode, GroundNode} from "../Node/Create/GroundNode/Ground.jsx";
import {DirectionLightNode, AddDirectionLightNode} from "../Node/Create/DirectionLight/DirectionLight.jsx";
import './FlowComponent.css';
import FlowToolMenu from "./FLowToolMenu/FlowToolMenu.jsx";
import SceneNode from "../Node/SceneNode/SceneNode.jsx";
import {SelectedObjectContext} from "../../../App.jsx";

let id = 0;

const FlowComponent = () => {
    const initialNodes = [

        {
            id: '2',
            type: 'Ground',
            data: {
                label: 'Output Node',
                position: {x: 0, y: 0, z: 0},
                size: {width: 4, height: 1},
                rotation: {x: 0, y: 0, z: 0}
            },
            position: {x: 250, y: 50}
        },
        {id: 'SCENE', type: 'Scene', data: {label: 'Scene Node'}, position: {x: 800, y: 125}}
    ];
    const Context = useContext(SelectedObjectContext);
    const initialEdges = [];
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(changes => setNodes(nds => applyNodeChanges(changes, nds)), []);
    const onEdgesChange = useCallback(changes => setEdges(eds => applyEdgeChanges(changes, eds)), []);

    useEffect(() => {
        if (Context.scene){
            console.log("nodes", Context.scene.lights);
        }

    }, [nodes]);


    const onConnect = useCallback((connection) => {

            if (connection.target === '2') { // Assuming '2' is the id of your SceneNode

            }
            setEdges((eds) => addEdge(connection, eds));
        }, [setEdges]);

    const onEdgeDelete = useCallback((edge) => {
console.log("called onEdgeDelete",edge,nodes);

        if (edge[0].target === "SCENE") {

            const sourceNode = nodes.find(node => node.id === edge[0].source);

            if (sourceNode && sourceNode.data.clearMesh) {
                sourceNode.data.clearMesh();
            }
        }

    }, [nodes])
    const nodeTypes = useMemo(() => ({Scene: SceneNode, Cube: CubeNode, Ground: GroundNode, DirectionLight: DirectionLightNode }), []);
    const getId = () => `dndnode_${id++}`;

    const ListOfAddNode = [{
        text: "cube", action: () => {
            AddCubeNode(getId, setNodes)
        }
    }, {
        text: "Ground", action: () => {
            AddGroundNode(getId, setNodes)
        }
    }, { text: "Direction Light", action: () => {
            AddDirectionLightNode(getId, setNodes)
        }
    }];

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onEdgesDelete={onEdgeDelete}
        >
            <Controls/>
            <MiniMap
                nodeColor={(n) =>
                {
                    if (n.type === 'Scene') return 'blue';
                        return 'red';
                    }
                }

            />

            <Background variant="dots" gap={25} size={2}/>
            < FlowToolMenu Prop={ListOfAddNode}/>
            <button id={"Cube-Button"} onClick={() => AddCubeNode(getId, setNodes)}> Cube</button>
            <button id={"Ground-Button"} className={"NoodeToolButton"}
                    onClick={() => AddGroundNode(getId, setNodes)}> Ground
            </button>
        </ReactFlow>
    );
};

export default FlowComponent;
