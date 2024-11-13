import CreateEmployeeComponent from "../components/CreateEmployeeComponent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/CreateEmployee.css";

const CreateEmployee = (prop) => {
    const { handleLogOut } = prop;
    return (
        <>
            <Navbar handleLogOut={handleLogOut} />
            <main>
                <Sidebar />
                <CreateEmployeeComponent />
            </main>
        </>
    );
};

export default CreateEmployee;
