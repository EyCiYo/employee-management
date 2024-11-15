import "../styles/DropDown.css";

const DropDown = (prop) => {
    return (
        <div className="dropdown">
            {prop.label && (
                <label htmlFor={prop.name} style={{ margin: "0px 5px" }}>
                    {prop.label}
                </label>
            )}
            <select
                name={prop.name}
                className="dropdown-field"
                value={prop.selectedValue}
                onChange={(e) => {
                    prop.handleChange(e);
                }}
                style={prop.style}
            >
                {prop.placeholder && (
                    <option value="" disabled>
                        {prop.placeholder}
                    </option>
                )}
                {prop.options.map((option) => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

DropDown.propTypes = {};

export default DropDown;
