import {createTheme} from "@mui/material";
export const theme=createTheme({
    palette:{
        
    },
    breakpoints: {
        values: {
            tablet:768
        }
    },
    components: {
MuiDrawer: {
styleOverrides: {
    paper: {
        alignItems:"center",
        width:250,
        background:"#ad8c07e8 ",
        color:"white",
        borderRadius:"0px 100px  0px  0px ",
        borderRight:'1px solid ',
        
    }
} 
},
    },
});