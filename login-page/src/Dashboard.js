import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./appContext";

const Dashboard = () => {
  const navigate = useNavigate();

  const { department } = useContext(AppContext);

  return (
    <>
      {department === "Admin" ? (
        <h1>
          Dashboard
          <button onClick={() => navigate("/")}>Go back to Login</button>
        </h1>
      ) : (
        <h1>Only authorised to "Admin" and your role is {department}</h1>
      )}
    </>
  );
};

export default Dashboard;
