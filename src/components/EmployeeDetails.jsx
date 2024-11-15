import { useParams } from "react-router-dom";
import "../styles/EmployeeDetails.css";
import { useEffect, useState } from "react";
// import { TestUser } from "../utils/constants";
import DetailItem from "./DetailItem";

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
        fetch(`https://dummyjson.com/users/` + id)
            .then((res) => res.json())
            .then((res) => {
                const fetchedUser = {
                    name: res.firstName + " " + res.lastName,
                    age: res.age,
                    email: res.email,
                };
                setUser(fetchedUser);
            });
    }, [id]);
    return (
        <div className="main-container-style-all">
            <div
                style={{
                    padding: "1.75rem 1.5rem",
                    borderRadius: "10px",
                    background: "white",
                    boxShadow: "0px 3px 6px #9D9D9D29",
                    marginBottom: "1.5rem",
                }}
            >
                <h2>Employee Details</h2>
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
