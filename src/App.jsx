import Login from "./pages/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import HomeLayout from "./layout/HomeLayout.jsx";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent.jsx";
import EmployeeList from "./components/EmployeeList.jsx";
import EmployeeDetails from "./components/EmployeeDetails.jsx";

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
