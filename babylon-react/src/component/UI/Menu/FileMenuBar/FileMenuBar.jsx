import "./FileMenuBar-Style.css"
import ButtonFileMenu from "../../Core/ButtonFileMenu/ButtonFileMenu.jsx";

export default function FileMenuBar() {
  return (
    <div className=" UI menu" id="file-menu-bar" >
      <div className={"Toolbar"}>
          <ButtonFileMenu Text={"M"}/>
          <ButtonFileMenu Text={"R"}/>
          <ButtonFileMenu Text={"S"}/>

      </div>
    </div>
  );
}
