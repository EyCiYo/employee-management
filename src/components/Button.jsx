import "../styles/Button.css";

const Button = (prop) => {
    const { label } = prop;
    return (
        <button
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
