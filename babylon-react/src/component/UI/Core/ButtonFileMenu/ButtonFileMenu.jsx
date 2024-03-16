
import './ButtoFileMenu-style.css'

const ButtonFileMenu = ({Action, Text}) => {

    return (
        <button className="menu-button" onClick={() =>Action? Action():null}>{Text}</button>

    );
}
export default ButtonFileMenu
//
