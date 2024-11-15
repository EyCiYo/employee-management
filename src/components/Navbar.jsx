import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav
            style={{
                width: "100%",
                background: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                alignItems: "center",
                padding: "0.5rem 1rem",
            }}
        >
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
