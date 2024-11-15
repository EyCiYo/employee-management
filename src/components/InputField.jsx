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
                value={prop.value}
                onChange={(e) => {
                    prop.handleChange(e);
                }}
            ></input>
        </div>
    );
};

InputField.propTypes = {};

export default InputField;
