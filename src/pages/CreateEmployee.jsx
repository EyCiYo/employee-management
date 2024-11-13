import CreateEmployeeComponent from "../components/CreateEmployeeComponent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/CreateEmployee.css";

const CreateEmployee = () => {
    return (
        <>
            <Navbar />
            <main>
                <Sidebar />
                <CreateEmployeeComponent />
            </main>
        </>
    );
};

export default CreateEmployee;
