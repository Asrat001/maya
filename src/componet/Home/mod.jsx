import { Avatar, Button, IconButton, Modal, styled,  Typography } from '@mui/material'
import React, { useState } from 'react';
import {Add as AddIcon, Google,MobileFriendly, Telegram} from "@mui/icons-material"
import { Box } from '@mui/system';
const StyledModal=styled(Modal)(
    {
        display:"flex",
        alignItems:"center",
        justifyContent:"center"

    }
    
)
const UserBox=styled(Box)(
    {
        display:"flex",
        alignItems:"center"
        

    })
        const Mod =()=>{
            const [open, setOpen]=useState(false)
            return(
                <>
                <Button onClick={e=>setOpen(true)}  variant="contained" color="primary" >about developers</Button>
                
                <StyledModal
    open={open}
    onClose={e=>setOpen(false)}
    arial-labelledby="modal-modal-title"
    arial-describedby="modal-modal-descrirtion"
    
    >
       <Box  width={500} height={380} bgcolor={"silver"} color={"text.primary"} borderRadius={5} p={3}>
            <Typography id="modal-modal-title" variant="h6" component="h2" color="gray" textAlign="center">
                Contact Developers
            </Typography>
            <UserBox>
               <Avatar 
               src=""
               sx= {{width: 30, height:30}}/>
               <Typography fontWeight={500} variant="span" m={1}>
                   Asrat Adane <MobileFriendly/>  0916562124 
               </Typography>
               <IconButton href="#google" sx={{marginLeft:4}}>
               <Google/>
               </IconButton>
               <IconButton>
               <Telegram/>
               </IconButton>
               </UserBox>
               <UserBox>
               <Avatar 
               src=""
               sx= {{width: 30, height:30 }}/>
               <Typography fontWeight={500} variant="span" m={1}>
                   Aron Hunde <MobileFriendly/>  0941390824
               </Typography>
               
               <IconButton sx={{marginLeft:4}}>
               <Google/>
               </IconButton>
               <IconButton>
               <Telegram/>
               </IconButton>
               
               </UserBox>
               <UserBox>
               <Avatar 
               src=""
               sx= {{width: 30, height:30 }}/>
               <Typography fontWeight={500} variant="span" m={1}>
                   Henok Sisay <MobileFriendly/> 0916262403
               </Typography>
               
               <IconButton sx={{marginLeft:4}}>
               <Google/>
               </IconButton>
               <IconButton>
               <Telegram/>
               </IconButton>
               </UserBox>
               <UserBox>
               <Avatar 
               src=""
               sx= {{width: 30, height:30 }}/>
              
              <Typography fontWeight={500} variant="span" m={1}>
            Dawit Admasu <MobileFriendly/> 092 318 8365 
               </Typography>
               <IconButton>
               <Google/>
               </IconButton>
               <IconButton>
               <Telegram/>
               </IconButton>
               </UserBox>
               
            </Box> 

    </StyledModal>
                </>
            )
        }
        export default Mod