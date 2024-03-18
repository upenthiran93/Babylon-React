import {MeshBuilder} from "@babylonjs/core";

const DropDownList = ({Action,Text}) => {

    return (
        <li>
            <button onClick={() => Action()}>{Text}
            </button>
        </li>
    )
}
export default DropDownList