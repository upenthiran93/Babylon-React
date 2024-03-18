import "./FileMenuBar-Style.css"
import ButtonFileMenu from "../../Core/ButtonFileMenu/ButtonFileMenu.jsx";
import {useContext, useCallback, useState} from "react";

import DropDownMenu from "../DropDown/DropDownMenu.jsx";
import ToolBar from "./ToolBar/ToolBar.jsx";



export default function FileMenuBar() {
    const [showDropDown, setShowDropDown] = useState(false);
    const handleButtonClick = () => {
        setShowDropDown(!showDropDown);
    }



    return (
        <div className="UI menu" id="file-menu-bar">

            <div className={"Create"}>
                <ButtonFileMenu Action={handleButtonClick} Text={"C"} />
                {showDropDown && <DropDownMenu />} {/* Render dropdown based on showDropDown state */}
            </div>
            <ToolBar/>
        </div>
    );
}
