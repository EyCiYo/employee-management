import "./Button.css";
import React from "react";

const Button = (prop) => {
    const { label } = prop;
    return (
        <button
            data-testid="button-test-id"
            className="login-btn"
            type={prop.type}
            style={prop.style}
            onClick={prop.handleClick}
        >
            {label}
        </button>
    );
};

export default Button;
