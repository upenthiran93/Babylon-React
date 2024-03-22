import "./FlowToolMenu.css";
const FlowToolMenu=({Prop})=>{
    return(
        <div className="flow-tool-menu menu">

            <div className="flow-tool-menu">
                {Prop && Prop.map((item, index) => {
                    return (
                        <div key={index} className="menu-item">
                            <button onClick={item.action} className="menu-button">{item.text}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default FlowToolMenu;