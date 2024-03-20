import "./DropDownMenu-Style.css";
import {SelectedObjectContext} from "../../../../App.jsx"
import {useContext} from "react";
import DropDownList from "./List/DropDownList.jsx";
const DropDownMenu = ({Options }) => {
    const Context = useContext(SelectedObjectContext);
    return(
        <ul>
            { Options.map((list, index) => {
                return <DropDownList key={index} Text={list.text} Action={list.action} Src={list.Src} />;
            })}
        </ul>
    );
}
export default DropDownMenu