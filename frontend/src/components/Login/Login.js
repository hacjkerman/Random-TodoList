import { useState } from "react";
import AuthPage from "./AuthPage";
import fetchUsers from "../fetchUsers";
import createNewUser from "./createNewUser";
import userLogin from "./userLogin";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pageType, setPageType] = useState("Login");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pageType === "Register") {
      if (username !== "" && password !== "") {
        createNewUser(username, password);
        alert("Registration successful!");
      } else {
        setError("Invalid username or password");
      }
    } else if (pageType === "Login") {
      const loginResult = userLogin(username, password);
      if (loginResult !== null) {
        props.setIsLoggedIn(true);
      } else {
        alert("Login unsuccessful");
      }
    }
  };

  const handleRegister = (e) => {
    setPageType("Register");
    e.preventDefault();
  };

  const handleSignIn = (e) => {
    setPageType("Login");
    e.preventDefault();
  };
  return (
    <>
      <AuthPage
        page={pageType}
        email={email}
        setEmail={setEmail}
        setPage={setPageType}
        user={username}
        setUser={setUsername}
        setPass={setPassword}
        pass={password}
        error={error}
        handleSubmit={handleSubmit}
        handleRegister={handleRegister}
        handleSignIn={handleSignIn}
      />
    </>
  );
}

export default LoginPage;
