import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import DropDown from "./DropDown/DropDown";
import formatDate from "../utils/DateFormat";
import { Status } from "../utils/constants";
import ConfirmDelete from "../modals/ConfirmDelete/ConfirmDeleteModal";

import "react-loading-skeleton/dist/skeleton.css";
import "../styles/EmployeeList.css";
import { useGetAllEmployeesQuery } from "./api";
import { useDeleteEmployeeMutation } from "../modals/ConfirmDelete/api";

const EmployeeList = () => {
    const [statusFilter, setStatusFilter] = useState("");
    const [deleteId, setDeleteId] = useState(0);
    const { data } = useGetAllEmployeesQuery();
    const [deleteEmployee, deleteResponse] = useDeleteEmployeeMutation();
    const dialogRef = useRef(null);

    let statusBackground = "";
    const navigate = useNavigate();

    useEffect(() => {
        if (deleteResponse.isSuccess) {
            dialogRef.current.close();
        }
    }, [deleteResponse]);

    const handleDelete = async () => {
        const delResp = await deleteEmployee(deleteId);
    };
    const handleCancel = () => {
        dialogRef.current.close();
    };

    const renderTableItem = (user) => {
        let status = "Active";
        if (!user.deletedAt) {
            status = "Active";
            statusBackground = "var(--active)";
        } else {
            status = "Inactive";
            statusBackground = "var(--inactive)";
        }
        if (statusFilter && status.toLowerCase() !== statusFilter) {
            return;
        }
        return (
            <div
                className="table-row"
                key={user.id}
                onClick={() => {
                    navigate(`${user.id}`);
                }}
            >
                <div>{user.name}</div>
                <div>{user.id}</div>
                <div>{formatDate(user.createdAt)}</div>
                <div>{user.role}</div>
                <div>
                    <div
                        className="status"
                        style={{
                            backgroundColor: statusBackground,
                        }}
                    >
                        {status}
                    </div>
                </div>
                <div>1 Year</div>
                <div className="action-buttons">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setDeleteId(user.id);
                            dialogRef.current.showModal();
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#FA4242"
                            className="bi bi-trash3"
                            viewBox="0 0 16 16"
                        >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(`../update/${user.id}`);
                        }}
                    >
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
                    </button>
                </div>
            </div>
        );
    };
    return (
        <>
            <ConfirmDelete
                handleDelete={handleDelete}
                handleCancel={handleCancel}
                modalRef={dialogRef}
            />
            <div className="main-container-style-all">
                <div className="heading-banner">
                    <div>
                        <h2>Employee List</h2>
                    </div>
                    <div className="heading-right">
                        <div className="filter">
                            <div style={{ minWidth: "70px" }}>Filter By </div>
                            <div>
                                <DropDown
                                    name="status"
                                    options={Status}
                                    selectedValue={statusFilter}
                                    placeholder="Status"
                                    handleChange={(e) => {
                                        setStatusFilter(e.target.value);
                                    }}
                                    style={{
                                        backgroundColor: "#EAF9FF",
                                        border: "none",
                                        outline: "none",
                                        width: "160px",
                                        borderRadius: "15px",
                                        padding: "0.25rem 1rem",
                                        appearance: "none",
                                        textAlign: "center",
                                        fontSize: "15px",
                                    }}
                                />
                            </div>
                        </div>
                        <Link to="../create">
                            <div className="create-btn">
                                <div className="circle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="currentColor"
                                        className="bi bi-plus"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                    </svg>
                                </div>
                                Create employee
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="list-content">
                    <div className="employee-table">
                        <div className="table-heading">
                            <div>Employee Name</div>
                            <div>Employee ID</div>
                            <div>Joining Date</div>
                            <div>Role</div>
                            <div>Status</div>
                            <div>Experience</div>
                            <div>Action</div>
                        </div>
                        {data ? (
                            data.map((user) => renderTableItem(user))
                        ) : (
                            <Skeleton
                                count={9}
                                height={50}
                                style={{
                                    marginBottom: "1rem",
                                }}
                                baseColor="white"
                                highlightColor="#EAF9FF"
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeeList;
