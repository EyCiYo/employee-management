import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import DropDown from "../DropDown/DropDown";

import { Departments, Roles, Status } from "../../utils/constants";

import { useGetEmployeeByIdQuery } from "../api";
import { useEditEmployeeMutation } from "../../api/employee/editEmployee.api";

const UpdateEmployee = () => {
    const initialFormData = {
        name: "",
        email: "",
        password: "",
        department: 0,
        role: "HR",
        address: { line1: "", pincode: "" },
    };
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    const { id } = useParams();
    const { data } = useGetEmployeeByIdQuery(parseInt(id));
    const [editEmployee, editResponse] = useEditEmployeeMutation();
    useEffect(() => {
        if (editResponse.isSuccess) {
            alert("Updated Successfully");
        }
    }, [editResponse]);
    useEffect(() => {
        if (data) {
            const fetchedUser = {
                name: data.name,
                email: data.email,
                password: data.password,
                department: parseInt(data.department.id),
                role: data.role,
                address: {
                    line1: data.address.line1,
                    pincode: data.address.pincode,
                },
                id: parseInt(data.id),
            };
            console.log(fetchedUser);
            setFormData(fetchedUser);
        }
    }, [data]);

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
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Inside HandleSubmit:", formData);
        await editEmployee(formData);
    };

    const secondaryBtnStyles = {
        background: "white",
        color: "black",
        border: "1px solid black",
        width: "200px",
    };
    return (
        <div className="main-container-style-all">
            <div className="heading-banner">
                <h2>Edit Employee</h2>
            </div>
            <form className="employee-form" name="createEmployeeForm">
                {data && (
                    <div className="form-grid">
                        <InputField
                            name="name"
                            label="Employee Name"
                            placeholder="Employee Name"
                            value={formData.name}
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
                        <InputField
                            name="empid"
                            placeholder="Employee ID"
                            label="Employee ID"
                            type="text"
                            value={id}
                            disabled={true}
                        />
                    </div>
                )}
                <div className="form-submit-flex">
                    <Button
                        label="Save"
                        style={{
                            width: "200px",
                        }}
                        type="button"
                        handleClick={(e) => {
                            console.log("BTn clicked");

                            handleSubmit(e);
                        }}
                    />
                    <Button
                        label="Cancel"
                        style={secondaryBtnStyles}
                        type="button"
                        handleClick={() => {
                            navigate("../../employees");
                        }}
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateEmployee;
