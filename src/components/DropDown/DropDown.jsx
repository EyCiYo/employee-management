import { useState } from "react";
import "./DropDown.css";

const DropDown = (prop) => {
    const [selected, setSelected] = useState("");
    return (
        <div className="dropdown">
            {prop.label && (
                <label htmlFor={prop.name} style={{ margin: "0px 5px" }}>
                    {prop.label}
                </label>
            )}
            <div className="custom-dropdown">
                <select
                    name={prop.name}
                    className={`dropdown-field ${
                        selected === "" ? "placeholder" : "selected"
                    }`}
                    value={prop.selectedValue}
                    onChange={(e) => {
                        setSelected(e.target.value);
                        prop.handleChange(e);
                    }}
                    style={prop.style}
                    id={prop.name}
                >
                    {/* {prop.placeholder && (
                        <option value="" disabled>
                            {prop.placeholder}
                        </option>
                    )} */}
                    {prop.options.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

DropDown.propTypes = {};

export default DropDown;
