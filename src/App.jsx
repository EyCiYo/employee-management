import { useState } from "react";
import CreateEmployee from "./pages/CreateEmployee.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (value) => {
        if (!value) {
            console.log("This is false value");
        }
        setIsLoggedIn(value);
    };
    return (
        <>{isLoggedIn ? <CreateEmployee /> : <Login isLogin={handleLogin} />}</>
    );
};
export default App;
