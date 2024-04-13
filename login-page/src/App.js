import LoginPage from "./LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import ProtectedRoute from "./ProtectedRoute";
import { useContext, Provider } from "react";
import { AppContext } from "./appContext";
import { useState } from "react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  const role = useContext(AppContext);
  const [department, setDepartment] = useState(role);

  function dispatch(val) {
    setDepartment(val);
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ department, dispatch }}>
        <RouterProvider router={appRouter} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
