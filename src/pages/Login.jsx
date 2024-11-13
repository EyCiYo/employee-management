import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import useLoginValidation from "../hooks/useLoginValidation";

const Login = (prop) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [btnAction, setBtnAction] = useState("Log In");

    const { isLogin } = prop;

    const handleUsernameInput = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const [errorUsername, errorPassword] = useLoginValidation({
        username,
        password,
    });

    // console.log("In Login:" + username);
    // console.log("In Login:" + password);

    const onLogin = () => {
        const usersObj = JSON.parse(localStorage.getItem("usersObj")) || {};
        if (usersObj.length !== 0) {
            if (usersObj[username] === password) {
                alert("Login Success");
                isLogin(true);
            }
        } else {
            isLogin(false);
        }
    };

    const onSignUp = () => {
        if (errorUsername === "" && errorPassword === "") {
            const usersObj = localStorage.getItem("usersObj")
                ? JSON.parse(localStorage.getItem("usersObj"))
                : {};
            usersObj[username] = password;
            localStorage.setItem("usersObj", JSON.stringify(usersObj));
            alert("Sign Up Successfull");
            setBtnAction("Log In");
        } else {
            alert("Validation Failed");
        }
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <img src="src/assets/kv-login.jpeg" alt="Hero Image" />

            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "500px",
                    padding: "5rem 3rem",
                    borderRadius: "5px",
                    height: "fit-content",
                }}
            >
                <img
                    src="src/assets/kv logo.png"
                    alt="KV Logo"
                    height="50px"
                    style={{
                        alignSelf: "start",
                    }}
                />
                <div style={{ width: "100%" }}>
                    <InputField
                        name="Username"
                        label="Username"
                        placeholder="Username"
                        type="text"
                        value={username}
                        handleChange={handleUsernameInput}
                    ></InputField>
                    <span style={{ color: "red" }}>{errorUsername}</span>
                </div>

                <div style={{ width: "100%" }}>
                    <InputField
                        name="Password"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        handleChange={handlePasswordInput}
                    ></InputField>
                    <span style={{ color: "red" }}>{errorPassword}</span>
                </div>
                {btnAction === "Log In" ? (
                    <Button label="Log In" handleClick={onLogin} />
                ) : (
                    <Button label="Sign Up" handleClick={onSignUp} />
                )}
                <p>
                    No Account?{" "}
                    <a
                        onClick={() => {
                            setBtnAction("Sign Up");
                        }}
                        style={{
                            color: "blue",
                            cursor: "pointer",
                        }}
                    >
                        Sign Up
                    </a>{" "}
                    now
                </p>
            </div>
        </div>
    );
};

export default Login;
