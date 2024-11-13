import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import useLoginValidation from "../hooks/useLoginValidation";

const Login = (prop) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

    console.log("In Login:" + username);
    console.log("In Login:" + password);

    const onLogin = () => {
        if (username === "alexander" && password === "password") {
            isLogin(true);
        } else {
            isLogin(false);
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
                <Button label="Log In" handleClick={onLogin} />
            </div>
        </div>
    );
};

export default Login;
