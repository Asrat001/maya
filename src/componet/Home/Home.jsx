import React from "react";
import "./home.css";
import digital from "../../Asset/server.png";
import security from "../../Asset/security.png";
import fast from "../../Asset/fast.png";
import home from '../../Asset/mayahome.png'
import Nav from "../Navbar/nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navmob from "../Navbar/Navmob";
import Mod from "./mod";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  return (
    <div>
      <Nav />
      <Navmob/>
      <div className="cont">
        <div className="box-1">
          <h2>Maya Production</h2>
          <span> Digital Information Record System</span>
          <p>
         This Digital System is Developed for Digitalizing the Traditional Paper Work Into More efficent and Securied Digital System
          </p>
         <Mod/>
        </div>
        <div className="box-2">
          <img src={home} alt="" />
        </div>
      </div>
      <div className="about">
        <h2> Why This System</h2>
        <div className="abt-cont">
          <div className="serv">
            <img src={digital} alt="" />
            <h4>Digital</h4>
            <p>
    this System is 100% Digital and free from any paper work
            </p>
          </div>
          <div className="serv">
            <img src={security} alt="" />
            <h4>Security</h4>
            <p>
             with Mongodb Atlas powerfull and Secured cloud based data host. your data is in Good Hand 
            </p>
          </div>
          <div className="serv">
            <img src={fast} alt="" />
            <h4>Fast</h4>
            <p>
             with our Easy to use Searching Mechanism . client can get any data from database
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
