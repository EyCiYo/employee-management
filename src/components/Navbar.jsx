import Button from "./Button";

const Navbar = (prop) => {
    const { handleLogOut } = prop;
    return (
        <nav
            style={{
                width: "100%",
                background: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 1rem",
            }}
        >
            <img
                src="src/assets/kv logo.png"
                alt="logo"
                height="50px"
                style={{
                    margin: "0.5rem",
                    marginLeft: "2rem",
                }}
            />
            <Button
                label="Log Out"
                style={{
                    width: "100px",
                }}
                handleClick={() => {
                    handleLogOut(false);
                }}
            />
        </nav>
    );
};

export default Navbar;
