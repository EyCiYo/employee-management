import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateEmployeeMutation } from "./api.js";
import InputField from "../InputField/InputField.jsx";
import DropDown from "../DropDown/DropDown.jsx";
import Button from "../Button/Button.jsx";
import { Departments, Roles, Status } from "../../utils/constants.js";

const CreateEmployeeComponent = () => {
    const initialFormData = {
        name: "",
        email: "",
        password: "",
        department: 0,
        role: "",
        address: { line1: "", pincode: "" },
    };
    const [formData, setFormData] = useState(initialFormData);
    const [addUser, createResponse] = useCreateEmployeeMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (createResponse.isSuccess) navigate("../employees");
    }, [createResponse, navigate]);

    const secondaryBtnStyles = {
        background: "white",
        color: "black",
        border: "1px solid black",
        width: "200px",
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
                department: parseInt(value),
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };
    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser(formData);
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
                    <InputField
                        name="email"
                        label="Email ID"
                        placeholder="Email ID"
                        value={formData.email}
                        handleChange={handleChange}
                        type="email"
                    />
                    <InputField
                        name="password"
                        label="Password"
                        placeholder="Password"
                        value={formData.password}
                        handleChange={handleChange}
                        type="password"
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
                        handleChange={() => {}}
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
