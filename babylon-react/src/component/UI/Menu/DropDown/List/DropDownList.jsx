import "./DropDownList-Style.css"

const DropDownList = ({Action,Text ,Src}) => {

    return (
        <li>

            <button onClick={() => Action()}>  <img src={Src?Src:""} width={"32px"} height={"32px"} alt={Text} /><p>{Text}</p>
            </button>
        </li>
    )
}
export default DropDownList