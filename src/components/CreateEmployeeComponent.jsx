import { useState } from "react";
import InputField from "../components/InputField.jsx";
import DropDown from "../components/DropDown.jsx";
import Button from "../components/Button.jsx";
import { Departments, Roles, Status } from "../utils/constants.js";
import DatePicker from "./DatePicker.jsx";
import { useDispatch } from "react-redux";
import { addEmployee } from "../stores/action.js";
import { useNavigate } from "react-router-dom";

const CreateEmployeeComponent = () => {
    const initialFormData = {
        name: "",
        createdAt: "",
        experience: "",
        department: { name: "" },
        role: "",
        status: "",
        address: { line1: "", pincode: "" },
        id: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const secondaryBtnStyles = {
        background: "white",
        color: "black",
        border: "1px solid black",
        width: "200px",
    };
    const genrateID = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        if (name === "line1" || name === "pincode") {
            setFormData({
                ...formData,
                address: {
                    ...formData.address,
                    [name]: value,
                },
            });
        } else if (name === "department") {
            setFormData({
                ...formData,
                department: {
                    ...formData.department,
                    name: value,
                },
            });
        } else if (name === "createdAt") {
            const date = new Date(value);
            setFormData({ ...formData, [name]: date.toISOString() });
        } else {
            setFormData({
                ...formData,
                [name]: value,
                id: genrateID(11, 1000000),
            });
        }
    };
    console.log(formData);

    const handleSubmit = () => {
        dispatch(addEmployee(formData));
        navigate("../employees");
    };

    return (
        <div className="main-container-style-all">
            <div className="heading-banner">
                <h2>Create Employee</h2>
            </div>
            <form className="employee-form" name="createEmployeeForm">
                <div className="form-grid">
                    <InputField
                        name="name"
                        label="Employee Name"
                        placeholder="Employee Name"
                        value={formData.employeeName}
                        handleChange={handleChange}
                        type="text"
                    />
                    <DatePicker
                        name="createdAt"
                        label="Joining Date"
                        handleChange={handleChange}
                    />
                    <InputField
                        name="experience"
                        label="Experience(Yrs)"
                        placeholder="Experience"
                        value={formData.experience}
                        handleChange={handleChange}
                        type="number"
                    />
                    <DropDown
                        name="department"
                        label="Department"
                        placeholder="Choose Department"
                        type="select"
                        options={Departments}
                        selectedValue={formData.department.name}
                        handleChange={handleChange}
                    />
                    <DropDown
                        name="role"
                        label="Role"
                        placeholder="Choose Role"
                        type="select"
                        options={Roles}
                        selectedValue={formData.role}
                        handleChange={handleChange}
                    />
                    <DropDown
                        name="status"
                        label="Status"
                        placeholder="Choose Status"
                        type="select"
                        options={Status}
                        selectedValue={formData.status}
                        handleChange={handleChange}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                        }}
                    >
                        <InputField
                            name="line1"
                            label="Address"
                            placeholder="Flat No / House Address"
                            type="text"
                            value={formData.address.line1}
                            handleChange={handleChange}
                        />
                        <InputField
                            name="pincode"
                            placeholder="Pincode"
                            type="number"
                            handleChange={handleChange}
                            value={formData.address.pincode}
                        />
                    </div>
                </div>
                <div className="form-submit-flex">
                    <Button
                        label="Create"
                        style={{
                            width: "200px",
                        }}
                        type="submit"
                        handleClick={handleSubmit}
                    />
                    <Button
                        label="Cancel"
                        style={secondaryBtnStyles}
                        type="button"
                        handleClick={() => {
                            setFormData(initialFormData);
                        }}
                    />
                </div>
            </form>
        </div>
    );
};

CreateEmployeeComponent.propTypes = {};

export default CreateEmployeeComponent;
