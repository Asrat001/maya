import React, { useEffect } from "react";
import "./music.css";
import Axios from "axios";
import { useForm } from "react-hook-form";
import Nav from '../Navbar/nav'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import music from '../../Asset/music.jpg'
import Navmob from "../Navbar/Navmob";

function Music() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  const { register, watch ,formState: { errors } } = useForm({
    mode: "onTouched",
  });
  const musick = watch("musick");
  const singerk = watch("singerk");
  const phonek = watch("phonek");
  const pricek = watch("pricek");
  const percentk = watch("percentk");


  // handle disabled submit
  const isValid = musick && singerk && phonek && pricek && percentk;

  const addMusic = () => {
    console.log("mrhuyrb");
   
    Axios.post("https://mayabackend12.onrender.com/music", {
      song: musick,
      Phone: phonek,
      Price: pricek,
      Percent: percentk,
      singer: singerk,
    });

    document.getElementById("songnume").value = "";
    document.getElementById("phonenum").value = "";
    document.getElementById("price").value = "";
    document.getElementById("percent").value = "";
    document.getElementById("singer").value = "";
  };

  return (
    <div>
      <Nav/>
      <Navmob/>
      <div className="flex-contaner">
        <div className="register-contener">
          <center> <img src={music} alt='music' /></center>
         
        {  <h1>Register Music</h1> }
          <form >
            <label>Song title</label>
            <input
              type="text"
              id="songname"
           
              {...register("musick", {
                required: {
                  value: true,
                  message: "Song title  is required !!",
                },
              })}
            />
             <div>
         {errors.musick && <span className='red'>{errors.musick.message}</span>}
                               </div>
            <label>Singer Name</label>
            <input
              type="text"
              id="singer"
            
              {...register("singerk", {
                required: {
                  value: true,
                  message: "Singer name is required !!",
                },
              })}
            />
                  <div>
         {errors.singerk && <span className='red'>{errors.singerk.message}</span>}
                               </div>
            <label>Phone Number</label>
            <input
              type="text"
              id="phonenum"
          
              {...register("phonek", {
                required: {
                  value: true,
                  message: "Phone Number is required !!",
                },
              })}
            />
                  <div>
         {errors.phonek && <span className='red'>{errors.phonek.message}</span>}
                               </div>
            <label>Price</label>
            <input
              type="text"
              id="price"
           
              {...register("pricek", {
                required: {
                  value: true,
                  message: "Price is required !!",
                },
              })}
            />
                  <div>
         {errors.pricek&& <span className='red'>{errors.pricek.message}</span>}
                               </div>
            <label>Precent</label>
            <input
              type="text"
              id="percent"
           
              {...register("percentk", {
                required: {
                  value: true,
                  message: "Percent is required !!",
                },
              })}
            />
                  <div>
         {errors.percentk && <span className='red'>{errors.percentk.message}</span>}
                               </div>
            <button
              onClick={addMusic}
              className={!isValid ? "dbutton" : "button"}
              disabled={!isValid}
            >
              Add Music
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Music;
