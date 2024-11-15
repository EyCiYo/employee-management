import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <h1>Page Not Found</h1>
            <h2>
                <Link to="/">Go Home</Link>
            </h2>
        </div>
    );
};

export default NotFound;
