// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/Global.css";
// import CreateEmployee from "./pages/CreateEmployee.jsx";
// import Login from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <App />
    // </StrictMode>,
);
