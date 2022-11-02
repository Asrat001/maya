import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Divider, IconButton,Drawer, List, ListItemButton, ListItemText, ThemeProvider } from "@mui/material";
import {theme} from "./theme"
import { Link } from "react-router-dom"
import './nav.css'

const Navmob = () =>{
    const [openMobiel,setOpenMobile]=useState(false);
    return(
        <>
        <ThemeProvider theme={theme}>
        <IconButton
            onClick={e=>setOpenMobile(true)}
                size="large"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                sx={{mr:2 , display:{tablet:"none"}, marginTop:3}}
                >
                    <MenuIcon size={40}/> Menu
                </IconButton>

                
<Drawer variant="body1" open={openMobiel}
onClose={(e)=>setOpenMobile(false)}
sx={{mr:2 , display:{tablet:"none"}}}
>
            <List sx={{marginTop:'10%'}}>
            <Link to="/"  >
                <ListItemButton>
                    <ListItemText >
                        Home
                    </ListItemText>
                </ListItemButton>
                </Link>
                <Divider variant="middle"/>
                <Link to="/music">
                <ListItemButton>
                    <ListItemText >
                        MayaMusic
                    </ListItemText>
                </ListItemButton>
                </Link>
                <Divider variant="middle"/>
                <Link to="/movie">
                <ListItemButton>
                    <ListItemText >
                        MayaFlicks
                    </ListItemText>
                </ListItemButton>
                </Link>
                <Divider variant="middle"/>
                <Link to="/guest">
                <ListItemButton>
                    <ListItemText >
                        YelbWeg
                    </ListItemText>
                </ListItemButton>
                </Link>
                <Divider variant="middle"/>
                <Link to="/display">
                <ListItemButton>
                    <ListItemText >
                        Display
                    </ListItemText>
                </ListItemButton>
                </Link>
                
            </List>
        </Drawer>
        </ThemeProvider>
        </>
    );
};
export default Navmob;