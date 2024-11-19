import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomeLayout from "./layout/HomeLayout.jsx";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent.jsx";
import EmployeeList from "./components/EmployeeList.jsx";
import EmployeeDetails from "./components/EmployeeDetails.jsx";
import UpdateEmployee from "./components/UpdateEmployee.jsx";
import store from "./stores/store.js";

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
        <Provider store={store}>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </Provider>
    );
};
export default App;
