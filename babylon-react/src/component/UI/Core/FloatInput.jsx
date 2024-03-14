import React, { useState } from 'react';

const FloatInput = ({ id, name, label, value, onChange, labelStyle, inputStyle }) => {
    const [inputValue, setInputValue] = useState(value || 0.0); // Set default to 0.0

    const handleChange = (event) => {
        const newValue = parseFloat(event.target.value);
        if (isNaN(newValue)) {
            return; // Prevent invalid input from updating state
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
                step="0.1" // Set a step for finer control (optional)
                value={inputValue}
                onChange={handleChange}
                style={inputStyle}
            />
        </div>
    );
};

export default FloatInput;