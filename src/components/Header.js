import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { logout } from "../redux/userSlice";

function Header() {
  let [menuopen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.user);
  console.log(user);
  let dispatch=useDispatch()

  let navigate = useNavigate();

  let handleLogout = () => {
    dispatch(logout())
    navigate("/login");
  };
  return (
    <>
      <nav>
        <h1 className="title">Learning App</h1>
        <div className="menu" onClick={() => setMenuOpen(!menuopen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        
        {user.firstName ? (
          <button onClick={handleLogout} style={{ borderRadius: 7 }}>
            LogOut
          </button>
        ) : (
          <>
            <ul className={menuopen ? "open" : ""}>
              <li>
                
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </>
        )}
      </nav>
    </>
  );
}

export default Header;
