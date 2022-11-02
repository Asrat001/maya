import React,{ useState }  from "react";
import maya from ".././../Asset/maya150.png";
import "./nav.css";
import { NavLink } from "react-router-dom";
import {AiOutlineBars} from 'react-icons/ai'

function Nav() {

const [showLink , setShowLink]= useState(false)

  return (
    <div>
      <div className="Navbar" >
        <div className="left-nav">
          <div className="links" id={showLink ? 'id':''}>
          <NavLink to="/" className="item ">
            Home
          </NavLink>
          <NavLink to="/movie" className="item">
            MayaFlicks
          </NavLink>
          <NavLink to="/music" className="item">
            MayaMusic
          </NavLink>
          <NavLink to="/guest" className="item">
            YelebWege
          </NavLink>
          <NavLink to="/display" className="item">
            Display
          </NavLink>
          </div>
       <button onClick={()=>{setShowLink(!showLink)}}><AiOutlineBars size={45}/> Menu</button>
        </div>
        <div className="right-nav">
          <img src={maya} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
