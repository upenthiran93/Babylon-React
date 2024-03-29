import React from "react";

const TextInputNode =  ({ OnTextChanged, title, initValue="Text"}) => {


    return (
        <div className={"FloatInputNode"}>
            {title && <h5>{title}</h5>}
            <input
                type="text"
                className={"nodrag text-input"}
                defaultValue={initValue}
                onBlur={(event) =>OnTextChanged(event)}
            />
        </div>
    );
}
export default TextInputNode;