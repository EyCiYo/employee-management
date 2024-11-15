import Login from "./pages/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import HomeLayout from "./layout/HomeLayout.jsx";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent.jsx";
import EmployeeList from "./components/EmployeeList.jsx";
import EmployeeDetails from "./components/EmployeeDetails.jsx";
import UpdateEmployee from "./components/UpdateEmployee.jsx";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            errorElement: <NotFound />,
        },
        {
            path: "/app",
            element: <HomeLayout />,
            children: [
                {
                    path: "employees",
                    children: [
                        {
                            index: true,
                            element: <EmployeeList />,
                        },
                        {
                            path: ":id",
                            element: <EmployeeDetails />,
                        },
                    ],
                },
                {
                    path: "create",
                    element: <CreateEmployeeComponent />,
                },
                {
                    path: "update",
                    children: [
                        {
                            path: ":id",
                            element: <UpdateEmployee />,
                        },
                    ],
                },
            ],
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};
export default App;
