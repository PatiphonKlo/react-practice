import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import DashBoard from "./pages/DashBoard/DashBoard";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import CreateProject from "./pages/CreateProject/CreateProject";
import Project from "./pages/Project/Project";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import OnlineUser from "./components/OnlineUser";

// styles
import "./App.css";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      <div className="App">
        {authIsReady && (
          <BrowserRouter>
            {user && <SideBar />}
            <div className="container">
              <NavBar />
              <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route
                  path="/"
                  element={user ? <DashBoard /> : <Navigate to="/login" />}
                />
                <Route
                  path="/create"
                  element={user ? <CreateProject /> : <Navigate to="/login" />}
                />
                <Route
                  path="/project/:id"
                  element={user ? <Project /> : <Navigate to="/login" />}
                />
                <Route
                  path="/login"
                  element={user ? <Navigate to="/" /> : <LogIn />}
                />
                <Route
                  path="/signup"
                  element={user ? <Navigate to="/" /> : <SignUp />}
                />
              </Routes>
            </div>
            {user && <OnlineUser />}
          </BrowserRouter>
        )}
      </div>
    </>
  );
}

export default App;
