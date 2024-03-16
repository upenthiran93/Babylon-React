import './ButtoFileMenu-style.css';
import { useState } from "react";

const ButtonFileMenu = ({ Action, Text, bg }) => {
    const [cn, setClassName] = useState("menu-button");

    const handleClick = (e) => {
        if (Action) {
            // Deactivate all buttons
            const btns = document.getElementsByClassName("menu-button");
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("active");
            }

            // Activate the clicked button
            e.currentTarget.classList.add("active");

            // Call the provided action
            Action(e);

            // Update the state to reflect the active button
            setClassName(prevState => "menu-button active");
        }
    };

    return (
        <button
            className={cn}
            onClick={handleClick}
            style={{ backgroundImage: 'url("' + bg + '")', backgroundSize: 'cover' }}
        >
            {Text}
        </button>
    );
}

export default ButtonFileMenu;
