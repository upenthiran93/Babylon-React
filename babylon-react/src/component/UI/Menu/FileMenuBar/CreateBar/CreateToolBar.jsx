import ButtonFileMenu from "../../../Core/ButtonFileMenu/ButtonFileMenu.jsx";
import DropDownMenu from "../../DropDown/DropDownMenu.jsx";
import {MeshBuilder} from "@babylonjs/core";
import {SelectedObjectContext} from "../../../../../App.jsx";
import {useContext} from "react";


const CreateToolBar = () => {
    const Context = useContext(SelectedObjectContext);
    const CreateOptions = [
        { action:  () => MeshBuilder.CreateBox("box", { size: 2 }, Context.scene),text: "Box",Src:"../../../../../../public/icon/cube.png"} ,
        { action: () => MeshBuilder.CreateCylinder("cylinder", { height: 2, diameter: 1 }, Context.scene), text :"Cylinder",Src:"../../../../../../public/icon/cylinder.png"},
        { action:   () => MeshBuilder.CreateSphere("sphere", { diameter: 1 }, Context.scene),  text :"Sphere" ,Src:"../../../../../../public/icon/Spheare.png" },
        { action: () => MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, Context.scene), text :"Ground" ,Src:"../../../../../../public/icon/squire.png"},
    ];
    return (
        <div className={"Create"}>
            <ButtonFileMenu Action={()=>{Context.toggleVisibility() }} Text={"C"}/>
             <DropDownMenu Options={CreateOptions}/>
        </div>
    );
}
export default CreateToolBar;