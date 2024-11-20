import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetEmployeeByIdQuery } from "../api";

import Skeleton from "react-loading-skeleton";
import formatDate from "../../utils/DateFormat";
import "./EmployeeDetails.css";
import "react-loading-skeleton/dist/skeleton.css";

const EmployeeDetails = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const { data } = useGetEmployeeByIdQuery(parseInt(id));

    useEffect(() => {
        if (data) {
            const fetchedUser = {
                name: data.name,
                joiningDate: formatDate(data.createdAt),
                experience: "1 Years",
                role: data.role,
                status: data.deletedAt ? "Inactive" : "Active",
                department: data.department.name,
                line1: data.address.line1,
                pincode: data.address.pincode,
            };
            setUser(fetchedUser);
        }
    }, [data]);

    const renderUserDetails = () => {
        return (
            <>
                <div className="detail-item">
                    <span className="detail-heading">Employee Name</span>
                    <span>{user ? user.name : <Skeleton />}</span>
                </div>

                <div className="detail-item">
                    <span className="detail-heading">Joining Date</span>
                    <span>{user ? user.joiningDate : <Skeleton />}</span>
                </div>

                <div className="detail-item">
                    <span className="detail-heading">Experience</span>
                    <span>{user ? user.experience : <Skeleton />}</span>
                </div>

                <div className="detail-item">
                    <span className="detail-heading">Role</span>
                    <span>{user ? user.role : <Skeleton />}</span>
                </div>

                <div className="detail-item">
                    <span className="detail-heading">Status</span>
                    <span>{user ? user.status : <Skeleton />}</span>
                </div>

                <div className="detail-item">
                    <span className="detail-heading">Department</span>
                    <span>{user ? user.department : <Skeleton />}</span>
                </div>

                <div className="detail-item">
                    <span className="detail-heading">Adddatas</span>
                    <span>{user ? user.line1 : <Skeleton />}</span>
                    <span>{user ? user.pincode : <Skeleton />}</span>
                </div>

                <div className="detail-item">
                    <span className="detail-heading">Employee ID</span>
                    <span>{user ? id : <Skeleton />}</span>
                </div>
            </>
        );
    };
    return (
        <div className="main-container-style-all">
            <div className="heading-banner">
                <h2>Employee Details</h2>
                <Link to={`../../update/${id}`}>
                    <div
                        className="create-btn"
                        style={{
                            width: "160px",
                        }}
                    >
                        <div className="circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="white"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                            </svg>
                        </div>
                        Edit
                    </div>
                </Link>
            </div>
            <div className="employee-details-container">
                <div className="details-grid">{renderUserDetails()}</div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
