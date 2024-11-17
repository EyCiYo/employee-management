import { useState } from "react";
import InputField from "../components/InputField.jsx";
import DropDown from "../components/DropDown.jsx";
import Button from "../components/Button.jsx";
import { Departments, Roles, Status } from "../utils/constants.js";
import DatePicker from "./DatePicker.jsx";

const CreateEmployeeComponent = () => {
  const initialFormData = {
    employeeName: "",
    joiningDate: "",
    experience: "",
    department: "HR",
    role: "HR",
    status: "active",
    address: { line1: "", pincode: "" },
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
    console.log(name, value);

    if (name === "line1" || name === "pincode") {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  console.log(formData);

  return (
    <div className="main-container-style-all">
      <div className="heading-banner">
        <h2>Create Employee</h2>
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
