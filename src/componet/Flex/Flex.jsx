import React, { useEffect } from "react";
import "./flex.css";
import Axios from "axios";
import { useForm } from "react-hook-form";
import Nav from '../Navbar/nav'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import film from '../../Asset/flex.jpg'
import Navmob from "../Navbar/Navmob";
function Flex() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  const { register, watch, formState: { errors }  } = useForm({
    mode: "onTouched",
  });
  const pname = watch("pname");
  const mname = watch("mname");
  const pnum = watch("pnum");
  const pricek = watch("pricek");

  // handle disabled submit
  const isValid = pname && mname && pnum && pricek;

  const addMovie = () => {
    console.log("mrhuyrb");
    Axios.post("https://mayabackend12.onrender.com/film", {
      ProducerName: pname,
      Movie: mname,
      PriceF: pricek,
      PhoneF: pnum,
    });

    document.getElementById("producername").value = "";
    document.getElementById("moviename").value = "";
    document.getElementById("date").value = "";
    document.getElementById("price").value = "";
  };
  return (
    <div>
      <Nav/>
      <Navmob/>
      <div className="flex-contaner">
        <div className="register-contener">
        <center> <img src={film} alt='music' /></center>
          <h1>Register Movie</h1>
          <form>
            <label>Producer Name</label>
            <input
              type="text"
              id="producername"
         
              {...register("pname", {
                required: {
                  value: true,
                  message: "Producer name is required",
                },
              })}
            />
            <div>
             {errors.pname && <span className='red'>{errors.pname.message}</span>}
                               </div>
            <label>Movie Title</label>
            <input
              type="text"
              id="moviename"
             
              {...register("mname", {
                required: {
                  value: true,
                  message: "Movie  name is required",
                },
              })}
            />
            <div>
             {errors.mname && <span className='red'>{errors.mname.message}</span>}
                               </div>
            <label>Phone Number</label>
            <input
              type="text"
              id="date"
             
              {...register("pnum", {
                required: {
                  value: true,
                  message: "Phone Number is required",
                },
              })}
            /><div>
             {errors.pnum && <span className='red'>{errors.pnum.message}</span>}
                               </div>
            <label>Price</label>
            <input
              type="text"
              id="price"
            
              {...register("pricek", {
                required: {
                  value: true,
                  message: "price  is required !!",
                },
              })}
            /><div>
             {errors.pricek && <span className='red'>{errors.pricek.message}</span>}
                               </div>
            <button
              onClick={addMovie}
              className={!isValid ? "dbutton" : "button"}
              disabled={!isValid}
            >
              Add Movie
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Flex;
