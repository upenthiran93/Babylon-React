import TransformUI from "../Inspector-Component/Transform-UI.jsx";
import InspectorTitle from "../Inspector-Component/Inspector-Title.jsx";


export default function InspectorMenuBar() {

    return (
        <div className=" UI menu" id="inspector-menu-bar" >

                <div>
                    <InspectorTitle/>

                    <TransformUI  />
                </div>

        </div>
    );
}