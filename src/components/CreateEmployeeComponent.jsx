import { useState } from "react";
import InputField from "../components/InputField.jsx";
import DropDown from "../components/DropDown.jsx";
import Button from "../components/Button.jsx";
import { Departments, Roles, Status } from "../utils/constants.js";
import DatePicker from "./DatePicker.jsx";

const CreateEmployeeComponent = (prop) => {
    const initialFormData = {
        employeeName: "",
        joiningDate: "",
        experience: "",
        department: "HR",
        role: "HR",
        status: "active",
        line1: "",
        pincode: "",
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    console.log(formData);

    const { heading } = prop;
    return (
        <div
            style={{
                margin: "1rem",
                width: "85%",
            }}
        >
            <div
                style={{
                    padding: "1.75rem 2rem",
                    borderRadius: "10px",
                    background: "white",
                    boxShadow: "0px 3px 6px #9D9D9D29",
                    marginBottom: "1.5rem",
                }}
            >
                <h2>{heading ? heading : "Create Employee"}</h2>
            </div>
            <form
                style={{
                    padding: "1rem",
                    borderRadius: "10px",
                    background: "white",
                    boxShadow: "0px 3px 6px #9D9D9D29",
                }}
                name="createEmployeeForm"
            >
                <div
                    style={{
                        padding: "1rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(3,1fr)",
                        gridAutoColumns: "1fr",
                        gridAutoRows: "auto",
                        gap: "2rem",
                    }}
                >
                    <InputField
                        name="employeeName"
                        label="Employee Name"
                        placeholder="Employee Name"
                        value={formData.employeeName}
                        handleChange={handleChange}
                        type="text"
                    />
                    <DatePicker
                        name="joiningDate"
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
                        placeholder="Department"
                        type="select"
                        options={Departments}
                        selectedValue={formData.department}
                        handleChange={handleChange}
                    />
                    <DropDown
                        name="role"
                        label="Role"
                        placeholder="Role"
                        type="select"
                        options={Roles}
                        selectedValue={formData.role}
                        handleChange={handleChange}
                    />
                    <DropDown
                        name="status"
                        label="Status"
                        placeholder="Status"
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
                            value={formData.line1}
                            handleChange={handleChange}
                        />
                        <InputField
                            name="pincode"
                            placeholder="Pincode"
                            type="number"
                            handleChange={handleChange}
                            value={formData.pincode}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "1rem",
                        flexDirection: "start",
                    }}
                >
                    <Button
                        label="Create"
                        style={{
                            width: "200px",
                        }}
                        type="submit"
                    />
                    <Button
                        label="Cancel"
                        style={{
                            background: "white",
                            color: "black",
                            border: "1px solid black",
                            width: "200px",
                        }}
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
