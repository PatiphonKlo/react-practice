import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// styles and material ui
import AddIcon from "../assets/add-icon.svg";
import DashboardIcon from "../assets/dashboard-icon.svg";
import Avatar from "./Avatar";
import "./SideBar.css";

export default function SideBar() {
  const  { user } = useAuthContext();
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="user">
            <Avatar src={user.photoURL}/>
            <p>{user.displayName}</p>
          </div>
          <nav className="links">
            <ul>
              <li>
                <NavLink to="/">
                  <img src={DashboardIcon} alt="dashboard icon" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/create">
                  <img src={AddIcon} alt="add project icon" />
                  <span>New Project</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
