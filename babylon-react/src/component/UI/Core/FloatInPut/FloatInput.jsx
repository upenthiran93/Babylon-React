import React, { useEffect, useState } from 'react';

const FloatInput = ({ id, name, label, value, onChange, labelStyle, inputStyle }) => {
    const [inputValue, setInputValue] = useState(value || 0.0);

    useEffect(() => {
        setInputValue(value || 0.0);
    }, [value]);

    const handleChange = (event) => {
        const newValue = parseFloat(event.target.value);
        if (isNaN(newValue)) {
            return;
        }
        setInputValue(newValue);
        onChange(newValue); // Propagate change to parent component
    };

    return (
        <div className="FloatInput" id={id}>
            <label htmlFor={id} style={labelStyle}>{label}</label>
            <input
                type="number"
                id={id}
                name={name}
                step="0.1"
                value={inputValue}
                onChange={handleChange}
                style={inputStyle}
            />
        </div>
    );
};

export default FloatInput;
