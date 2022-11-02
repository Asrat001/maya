import React, { useEffect } from 'react'
import './display.css'
import {NavLink, useNavigate} from 'react-router-dom'
import Nav from '../Navbar/nav'
import { useDispatch, useSelector } from 'react-redux';
import Navmob from '../Navbar/Navmob';



function Display() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  return(
 <div>  
<Nav/>
<Navmob/>
<div className="head">  
<h2>Wellcome to Display Section</h2>
 <p>This Section is Called Display Section here you Have Three Button  </p>
 <p>Each of Them Direct you the Respective Search bar</p></div>
<div className="sbutton">
<NavLink to='/smusic' className='button btn'>Search Music</NavLink>
    <NavLink to ='/sguest' className='button btn'>Search Guest</NavLink>
    <NavLink to ='/smovie' className='button btn'>Search Movie</NavLink>
 
</div>


    </div>
  )
}

export default Display