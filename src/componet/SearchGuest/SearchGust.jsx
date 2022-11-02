import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./search.css";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardActionArea,
  CardContent,

  Container,
  Grid,
  Typography,
} from "@mui/material";
import Spinner from "../Spinner";

function SearchGust() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://mayabackend12.onrender.com/searchguest?q=${query}`
      );

      if (query === "") {
        setData([]);
      } else {
        setData(res.data);
      }
    };
    const Post = async () => {
      try {
        await axios("https://mayabackend12.onrender.com/searchguestall").then((response) => {
          console.log(response.data);
          setData(response.data);
        });
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (query.length > 1) {
      fetchData();
    } else {
      Post();
    }
  }, [query]);

  return (
    <div>
      <div className="backarrow">
        <NavLink to="/display" className="item">
          <AiOutlineArrowLeft /> Back to Display
        </NavLink>
      </div>

      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Guest ..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <div className="searchicon">
          {query.length === 0 ? (
            <BsSearch color="white" size={25} />
          ) : (
            <AiOutlineCloseCircle color="white" size={25} />
          )}
        </div>
      </div>

      <Container
        sx={{
          boxShadow: 4,
          borderRadius: 6,
          p: 2,
          minWidth: 300,
          my: 6,
          position: "sticky",
          backgroundColor: "lightblue",
          display: " grid",
          gridTemplateColumns: { md: " repeat(3,3fr)", xs: "repeat(1,1fr)" },
          columnGap: 3,
          rowGap: 4,
        }}
        fixed
      >
        {loading ? (
          <>
            {data.map((val, index) => {
              return (
                <Grid
                  container
                  //  justifyContent="center"
                  // alignItems="center"
                  rowSpacing="4"
                  position="sticky"
                  key={index}
                  sx={{
                    marginTop: 3,
                    justifyContent: { xs: "center", md: "normal" },
                    alignItems: { xs: "center", md: "normal" },
                    
                  }}
                >
                  <Grid item xs={12} md={8}>
                    <Card
                      sx={{
                        maxWidth: { xs: 700, md: 700 },
                        width: { xs: 320, md: 330 },
                        backgroundColor: "#111b6e",
                        color: "lightblue",
                        borderRadius: 4,
                        boxShadow: "10px 10px 10px #ccc",
                        border: "2px solid yellow",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            maxLength={400}
                          >
                            Yelb Weg Guest`s
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{ color: "white", marginTop: 2 }}
                          >
                            Guest 1
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{ display: "flex" }}
                          >
                            <h4> Name</h4> : {val.name1}
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{ display: "flex" }}
                          >
                            <h4>Title</h4> : {val.marege1}
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{ display: "flex" }}
                          >
                            <h4> Phone Number</h4> :{val.number1}
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{ display: "flex" }}
                          >
                            <h4>Birthday</h4> : {val.bday1}
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{
                              display: "flex",
                            }}
                          >
                            <h4> IG</h4> : {val.igname1}
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{ color: "white", marginTop: 2 }}
                          >
                            Guest 2
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{ display: "flex" }}
                          >
                            <h4> Name</h4> : {val.name2}
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{ display: "flex" }}
                          >
                            <h4>Title</h4> : {val.marege2}
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{ display: "flex" }}
                          >
                            <h4> Phone Number</h4> : {val.number2}
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{ display: "flex" }}
                          >
                            <h4>Birthday</h4> : {val.bday2}
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{ display: "flex" }}
                          >
                            <h4>IG</h4> : {val.igname2}
                          </Typography>
                          <Typography
                            variant="body2"
                            maxLength={100}
                            sx={{ display: "flex", textAlign: "center" }}
                          >
                            {val.date}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              );
            })}
          </>
        ) : (
          <div>
             <Spinner/>
          </div>
        )}
      </Container>
    </div>
  );
}

export default SearchGust;
