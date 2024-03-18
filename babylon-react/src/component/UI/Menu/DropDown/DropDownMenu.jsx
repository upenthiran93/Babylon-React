import "./DropDownMenu-Style.css";
import {SelectedObjectContext} from "../../../../App.jsx"
import {useContext} from "react";
import {MeshBuilder} from "@babylonjs/core";
import DropDownList from "./List/DropDownList.jsx";
const DropDownMenu = () => {
    const Context = useContext(SelectedObjectContext);
    return(
        <div className={"DropDownMenu"}>
            <ul>
            <DropDownList Action={() => {MeshBuilder.CreateBox("box", {size: 2}, Context.scene);}} Text={"Box"} />
            <DropDownList Action={() => {MeshBuilder.CreateCylinder("cylinder", {height: 2, diameter: 1}, Context.scene);}} Text={"Cylinder"} />
            <DropDownList Action={() => {MeshBuilder.CreateSphere("sphere", {diameter: 1}, Context.scene);}} Text={"Sphere"} />
            <DropDownList Action={() => {MeshBuilder.CreateGround("ground", {width: 6, height: 6}, Context.scene);}} Text={"Ground"} />
            </ul>
        </div>
    );
}
export default DropDownMenu