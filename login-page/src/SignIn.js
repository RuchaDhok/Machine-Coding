import { useContext, useState } from "react";
import mockData from "./mockData.json";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./appContext";

const SignIn = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("Select domain");

  const navigate = useNavigate();

  const { dispatch } = useContext(AppContext);

  function handleSubmit() {
    const validateInput = mockData.filter(
      (item) => item.userName === userName && item.password === password
    );

    if (validateInput.length == 1) {
      const token = Math.random() * 100;
      localStorage.setItem("token", token);
      dispatch(role);
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Login
      <input
        type="text"
        placeholder="Enter Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Select domain">Select domain</option>
        <option value="Admin">Admin</option>
        <option value="HR">HR</option>
        <option value="Student">Student</option>
      </select>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default SignIn;
