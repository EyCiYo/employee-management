import { useState, useRef, useEffect } from "react";

const useLoginValidation = ({ username, password }) => {
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErroPassword] = useState("");
    const isInitialRender = useRef({ usernameChk: true, pswChk: true });

    useEffect(() => {
        if (isInitialRender.current.usernameChk) {
            isInitialRender.current.usernameChk = false;
        } else {
            if (username.length < 8) {
                setErrorUsername("Username Length should be greater than 8");
            } else {
                setErrorUsername("");
            }
        }
    }, [username]);

    useEffect(() => {
        if (isInitialRender.current.pswChk) {
            isInitialRender.current.pswChk = false;
        } else {
            if (password.length < 8) {
                setErroPassword("Password Length should be greater than 8");
            } else {
                setErroPassword("");
            }
        }
    }, [password]);

    return [errorUsername, errorPassword];
};

export default useLoginValidation;
