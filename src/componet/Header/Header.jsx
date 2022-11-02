import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from ".././../features/auth/authSlice";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="Nav-h">
      {user ? (
        <div className="left">
          <h2>Welcome {user && user.name}</h2>
        </div>
      ) : (
        <div className="left">
          <h2>Maya Production</h2>
          <h3>Digital Information Record System</h3>
        </div>
      )}
       <div className="right">
        {user ? (
          <button className="btn" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="  btn">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
