import {useContext} from "react";
import {SelectedObjectContext} from "../../../App.jsx";

const InspectorTitle = () => {
    const selectedObjectContext = useContext(SelectedObjectContext);

    return (
        selectedObjectContext.mesh ? (   <div className="transform-container">
            <h2>{selectedObjectContext.mesh.name}</h2>
        </div>): null
    );
}
export default InspectorTitle