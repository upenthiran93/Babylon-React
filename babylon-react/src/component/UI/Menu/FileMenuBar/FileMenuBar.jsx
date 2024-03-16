import "./FileMenuBar-Style.css"
import ButtonFileMenu from "../../Core/ButtonFileMenu/ButtonFileMenu.jsx";
import { useContext, useCallback } from "react";
import { SelectedObjectContext } from "../../../../App.jsx";

export default function FileMenuBar() {
    const Context = useContext(SelectedObjectContext);
    const gizmoManager = Context.gizmoManager;
    const toggleCanSelect = useCallback(Context.setCanSelect, []);

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

    const GizmoSelectActivate = () => {
        gizmoManager.positionGizmoEnabled = false;
        gizmoManager.rotationGizmoEnabled = false;
        gizmoManager.scaleGizmoEnabled = false;
        toggleCanSelect(true);
    }

    return (
        <div className="UI menu" id="file-menu-bar">
            <div className={"Toolbar"}>
                <ButtonFileMenu Text={"P"} Action={GizmoSelectActivate} />
                <ButtonFileMenu Text={"M"} Action={GizmoMoveActivate} />
                <ButtonFileMenu Text={"R"} Action={GizmoRotateActivate} />
                <ButtonFileMenu Text={"S"} Action={GizmoScaleActivate} />
            </div>
        </div>
    );
}
