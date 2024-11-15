import { useParams, Link } from "react-router-dom";
import "../styles/EmployeeDetails.css";
import { useEffect, useState } from "react";
// import { TestUser } from "../utils/constants";
import DetailItem from "./DetailItem";
import formatDate from "../utils/DateFormat";

const EmployeeDetails = () => {
    const { id } = useParams();
    // const testUser = TestUser;

    const [user, setUser] = useState(null);

    const formatHeading = (camelHeading) => {
        console.log(camelHeading);

        const normalCase = camelHeading.replace(/([A-Z])/g, " $1");
        console.log(normalCase);

        const result = camelHeading[0].toUpperCase() + normalCase.slice(1);
        console.log(result);
        return result;
    };

    useEffect(() => {
        fetch(`http://localhost:3000/employee/` + id)
            .then((res) => res.json())
            .then((res) => {
                const fetchedUser = {
                    name: res.name,
                    joiningDate: formatDate(res.createdAt),
                    experience: "1 Years",
                    role: user.role,
                    status: "Active",
                };
                setUser(fetchedUser);
            });
    }, [id]);
    return (
        <div className="main-container-style-all">
            <div className="heading-banner">
                <h2>Employee Details</h2>
                <Link to={`${id}`}>
                    <div
                        className="create-btn"
                        style={{
                            width: "160px",
                        }}
                    >
                        <div className="circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#10AAC0"
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
            <div
                style={{
                    padding: "1rem",
                    borderRadius: "10px",
                    background: "white",
                    boxShadow: "0px 3px 6px #9D9D9D29",
                }}
            >
                <div
                    style={{
                        padding: "1rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(5,1fr)",
                        gridAutoColumns: "1fr",
                        gridAutoRows: "auto",
                        gap: "2rem",
                    }}
                >
                    {user ? (
                        Object.entries(user).map(([key, value], index) => (
                            <DetailItem
                                heading={formatHeading(key)}
                                content={value}
                                key={index}
                            />
                        ))
                    ) : (
                        <p>Loading....</p>
                    )}
                    {/* <div className="detail-item">
                        <span className="heading">Employee Name</span>
                        <span>Alexander</span>
                    </div>

                    <div className="detail-item">
                        <span className="heading">Joining Date</span>
                        <span>10.12.2024</span>
                    </div>

                    <div className="detail-item">
                        <span className="heading">Experience</span>
                        <span>2 Years</span>
                    </div>

                    <div className="detail-item">
                        <span className="heading">Role</span>
                        <span>Full Stack</span>
                    </div>

                    <div className="detail-item">
                        <span className="heading">Status</span>
                        <span>Probation</span>
                    </div>

                    <div className="detail-item">
                        <span className="heading">Department</span>
                        <span>Development</span>
                    </div>

                    <div className="detail-item">
                        <span className="heading">Address</span>
                        <span>Alexander House</span>
                        <span>PIN: 680872</span>
                    </div>

                    <div className="detail-item">
                        <span className="heading">Employee ID</span>
                        <span>{id}</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
