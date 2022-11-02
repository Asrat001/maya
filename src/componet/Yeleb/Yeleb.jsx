import React, { useEffect } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import Nav from "../Navbar/nav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import yeleb from '../../Asset/yelebwege.png'
function Yeleb() {
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
  const a = watch("a");
  const b = watch("b");
  const c = watch("c");
  const d = watch("d");
  const e = watch("e");
  const f = watch("f");
  const g = watch("g");
  const h = watch("h");
  const i = watch("i");
  const j = watch("j")

  // handle disabled submit
  const k = a && b && c && d && e && f && g && h && i && j
  

  const addGuest = () => {
    console.log('mrhuyrb')

 


    Axios.post("https://mayabackend12.onrender.com/guest", {
      Gust1Name:a,
      Gust1Title:b,
      Gust1Phone:c,
      Gust1Ig:d,
      Gust1Bday:e,
      Gust2Name:f,
      Gust2Title:g,
      Gust2Phone:h,
      Gust2Ig:i,
      Gust2Bday:j,
    });

    document.getElementById("gust1").value = "";
    document.getElementById("gust1t").value = "";
    document.getElementById("gust1pn").value = "";
    document.getElementById("ig1").value = "";
    document.getElementById("bday1").value = "";
    document.getElementById("gust2").value = "";
    document.getElementById("gust2t").value = "";
    document.getElementById("gust2pn").value = "";
    document.getElementById("ig2").value = "";
    document.getElementById("bday2").value = "";
  };

  return (
    <div>

      <Nav/>
  
      <div className="flex-contaner">
       
        <div className="register-contener">
        <center> <img src={yeleb} alt='music' /></center>
            <h1>Register Guest</h1>
            <form>
              <h4>Guest 1</h4>
              <label> Name</label>
              <input
                type="text"
                id="gust1"
              
                {...register("a", {
                  required: {
                    value: true,
                    message: "Song title  is required !!",
                  },
                })}
                
              />

              <label>title</label>
              <input
                type="text"
                id="gust1t"
              
                {...register("b", {
                  required: {
                    value: true,
                    message: "Song title  is required !!",
                  },
                })}
              />
              <label>Phone Number</label>
              <input
                type="text"
                id="gust1pn"
              
                {...register("c", {
                  required: {
                    value: true,
                    message: "Song title  is required !!",
                  },
                })}
              />
              <label>IG User Name</label>
              <input
                type="text"
                id="ig1"
              
                {...register("d", {
                  required: {
                    value: true,
                    message: "Song title  is required !!",
                  },
                })}
              />
              <label>Birth Day</label>
              <input
                type="text"
                id="bday1"
             
                {...register("e", {
                  required: {
                    value: true,
                    message: "Song title  is required !!",
                  },
                })}
                placeholder='year/month/day'
              />
              <br />
              <h4>Guest 2</h4>
              <label>Name</label>
              <input
                type="text"
                id="gust2"
              
                {...register("f", {
                  required: {
                    value: true,
                    message: "Song title  is required !!",
                  },
                })}
              />
              <label>title</label>
              <input
                type="text"
                id="gust2t"
             
                {...register("g", {
                  required: {
                    value: true,
                    message: "Song title  is required !!",
                  },
                })}
              />
              <label>Phone Number</label>
              <input
                type="text"
                id="gust2pn"
             
                {...register("h", {
                  required: {
                    value: true,
                    message: "Song title  is required !!",
                  },
                })}
              />
              <label>IG User Name</label>
              <input
                type="text"
                id="ig2"
            
                {...register("i", {
                  required: {
                    value: true,
                    message: "Song title  is required !!",
                  },
                })}
              />
              <label>Birth Day</label>
              <input
                type="text"
                id="bday2"
          
                {...register("j", {
                  required: {
                    value: true,
                    message: "Song title  is required !!",
                  },
                })}
                placeholder='year/month/day'
              />

              <button onClick={addGuest}     className={!k  ? "dbutton" : "button"}
              disabled={!k }>Add Guest</button>
            </form>
        
        </div>
      </div>
      
    </div>
  );
}

export default Yeleb;
