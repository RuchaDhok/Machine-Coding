import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validateLoginCreds } from "./validateLoginCreds";

const LoginPage = () => {
  const [username, setUserName] = useState();
  const [emailId, setEmailId] = useState();
  const [password, setPassword] = useState();
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  //const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleSignUp(emailId, password) {
    const message = validateLoginCreds(emailId, password);
    localStorage.setItem(emailId, password);
    setIsSignUpForm(false);
    setEmailId("");
    setPassword("");
  }
  function handleSignInClick() {
    setIsSignUpForm(!isSignUpForm);
    setEmailId("");
    setPassword("");
  }

  function handleFormSignIn() {
    const storedPassword = localStorage.getItem(emailId);
    if (password === storedPassword) {
      // setMessage("");
      navigate("/dashboard");
    } else {
      // setMessage("Invalid email or password...Try Again!!");
      // setTimeout(() => {
      //   setMessage("");
      // }, 2000);
    }
  }

  return (
    <div className="login-container">
      <div className="title"> {isSignUpForm ? "Sign Up" : "Sign In"}</div>
      <div className="body-container">
        {isSignUpForm && (
          <input
            className="input-field"
            placeholder="Full Name"
            type="text"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        )}

        <input
          className="input-field"
          placeholder="Email Id"
          type="text"
          value={emailId}
          onChange={(e) => {
            setEmailId(e.target.value);
          }}
        />
        <input
          className="input-field"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {isSignUpForm ? (
          <button
            className="button"
            onClick={() => handleSignUp(emailId, password)}
          >
            Sign Up
          </button>
        ) : (
          <button className="button" onClick={handleFormSignIn}>
            Sign In
          </button>
        )}

        <p onClick={handleSignInClick} style={{ cursor: "pointer" }}>
          {isSignUpForm
            ? "Already a member ? Sign in"
            : "New Member ? Sign Up ?"}
        </p>
        {/* <p>{message}</p> */}
      </div>
    </div>
  );
};

export default LoginPage;
