import React from 'react';

const FloatNodeUi = ({name, handleChange, handleChangeAxies="", title}) => {
    return (
        <>
            {title && <h5>{title}</h5>}
            <label>{name} </label>
            <input
                type="number"
                className={"nodrag"}
                onChange={handleChangeAxies === "" ?
                    (event) => handleChange(event) :
                    (event) => handleChange(handleChangeAxies, event)
                }
            />
        </>
    );
};

export default FloatNodeUi;