import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import "../styles/Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <Button
                label="Log Out"
                style={{
                    width: "100px",
                }}
                handleClick={() => {
                    navigate("/");
                }}
            />
        </nav>
    );
};

export default Navbar;
