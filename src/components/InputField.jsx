import "../styles/InputField.css";

const InputField = (prop) => {
    return (
        <div className="input">
            {prop.label && (
                <label htmlFor={prop.name} style={{ margin: "0px 5px" }}>
                    {prop.label}
                </label>
            )}
            <input
                type={prop.type}
                placeholder={prop.placeholder}
                className="input-field"
                name={prop.name}
                id={prop.name}
                value={prop.value}
                onChange={(e) => {
                    prop.handleChange(e);
                }}
                disabled={prop.disabled}
            ></input>
        </div>
    );
};

InputField.propTypes = {};

export default InputField;
