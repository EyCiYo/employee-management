import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img
                src="/src/assets/kv logo.png"
                alt="logo"
                height="50px"
                style={{
                    margin: "0.5rem",
                    marginLeft: "2rem",
                }}
            />
            <NavLink
                to="employees"
                className={({ isActive }) => (isActive ? "active" : "pending")}
            >
                <div className="sidebar-item">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-person-circle"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                            fillRule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                    </svg>
                    <span>Employee List</span>
                </div>
            </NavLink>
            <NavLink
                to="create"
                className={({ isActive }) => (isActive ? "active" : "pending")}
            >
                <div className="sidebar-item">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-person-plus-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        <path
                            fillRule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                        />
                    </svg>
                    <span>Create Employee</span>
                </div>
            </NavLink>
        </div>
    );
};

export default Sidebar;
