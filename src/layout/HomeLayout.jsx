import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "./HomeLayout.css";

const HomeLayout = () => {
    return (
        <div className="page-align">
            <Sidebar />
            <main>
                <div className="container">
                    <Navbar />
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default HomeLayout;
