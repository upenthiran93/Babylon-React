const ColorInput = ({ handleChange, title, initValue="#ffffff"}) => {

        return (
            <div className={"ColorInputNode"}>
                {title && <h5>{title}</h5>}

                <input
                    type="color"
                    className={"nodrag"}
                    defaultValue={initValue}
                    onChange={(e)=>handleChange(e.target.value)}
                />
            </div>
        );
}

export default ColorInput;