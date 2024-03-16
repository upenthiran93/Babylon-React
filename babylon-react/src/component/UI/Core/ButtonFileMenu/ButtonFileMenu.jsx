
import './ButtoFileMenu-style.css'

const ButtonFileMenu = ({Action, Text ,bg}) => {

    return (
        <button className="menu-button"
                onClick={() =>Action? Action():null}
                style={{backgroundImage: 'url("' + bg + '")', backgroundSize: 'cover'}}

        >{Text}


        </button>

    );
}
export default ButtonFileMenu
//
