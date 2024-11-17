import Button from "./Button";
import InputField from "./InputField";
import DropDown from "./DropDown";
import DatePicker from "./DatePicker";
import { useState } from "react";
import { Departments, Roles, Status } from "../utils/constants";

const UpdateEmployee = () => {
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

  const secondaryBtnStyles = {
    background: "white",
    color: "black",
    border: "1px solid black",
    width: "200px",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="main-container-style-all">
      <div className="heading-banner">
        <h2>Edit Employee</h2>
      </div>
      <form className="employee-form" name="createEmployeeForm">
        <div className="form-grid">
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
          <InputField
            name="empid"
            placeholder="Employee ID"
            label="Employee ID"
            type="text"
            value={formData.empid}
            disabled={true}
          />
        </div>
        <div className="form-submit-flex">
          <Button
            label="Save"
            style={{
              width: "200px",
            }}
            type="submit"
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

export default UpdateEmployee;
