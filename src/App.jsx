import { useState } from "react";
import CreateEmployee from "./pages/CreateEmployee.jsx";
import Login from "./pages/Login.jsx";
// import Home from "./pages/Home.jsx";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (value) => {
        if (!value) {
            console.log("You are logged out");
        }
        setIsLoggedIn(value);
    };
    return (
        <>
            {isLoggedIn ? (
                <CreateEmployee handleLogOut={handleLogin} />
            ) : (
                <Login isLogin={handleLogin} />
            )}
        </>
        // <Home />
    );
};
export default App;
