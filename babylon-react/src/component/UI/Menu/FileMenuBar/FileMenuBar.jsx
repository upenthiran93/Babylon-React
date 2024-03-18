import "./FileMenuBar-Style.css"
import ButtonFileMenu from "../../Core/ButtonFileMenu/ButtonFileMenu.jsx";
import {useContext, useCallback, useState} from "react";
import { SelectedObjectContext } from "../../../../App.jsx";
import DropDownMenu from "../DropDown/DropDownMenu.jsx";



export default function FileMenuBar() {
    const Context = useContext(SelectedObjectContext);
    const gizmoManager = Context.gizmoManager;
    const toggleCanSelect = useCallback(Context.setCanSelect, []);
    const [showDropDown, setShowDropDown] = useState(false);
    const handleButtonClick = () => {
        setShowDropDown(!showDropDown);
    }

    const GizmoMoveActivate = () => {
        gizmoManager.positionGizmoEnabled = true;
        gizmoManager.rotationGizmoEnabled = false;
        gizmoManager.scaleGizmoEnabled = false;
        toggleCanSelect(false);
    }

    const GizmoRotateActivate = () => {
        gizmoManager.positionGizmoEnabled = false;
        gizmoManager.rotationGizmoEnabled = true;
        gizmoManager.scaleGizmoEnabled = false;
        toggleCanSelect(false);
    }

    const GizmoScaleActivate = () => {
        gizmoManager.positionGizmoEnabled = false;
        gizmoManager.rotationGizmoEnabled = false;
        gizmoManager.scaleGizmoEnabled = true;
        toggleCanSelect(false);
    }

    const GizmoSelectActivate = (e) => {

        gizmoManager.positionGizmoEnabled = false;
        gizmoManager.rotationGizmoEnabled = false;
        gizmoManager.scaleGizmoEnabled = false;
        toggleCanSelect(true);
    }

    return (
        <div className="UI menu" id="file-menu-bar">

            <div className={"Create"}>
                <ButtonFileMenu Action={handleButtonClick} Text={"C"} />
                {showDropDown && <DropDownMenu />} {/* Render dropdown based on showDropDown state */}
            </div>
            <div className={"Toolbar"}>
                <ButtonFileMenu Action={GizmoSelectActivate} bg={"../public/icon/Select.png"}/>
                <ButtonFileMenu Action={GizmoMoveActivate} bg={"../public/icon/Move.png"}/>
                <ButtonFileMenu Action={GizmoRotateActivate} bg={"../public/icon/Rotate.png"}/>
                <ButtonFileMenu Action={GizmoScaleActivate} bg={"../public/icon/Scal.png"}/>
            </div>
        </div>
    );
}
