import React from "react";
import { Box, Typography } from "@mui/material";

const Practise = ()=>{
    return(
        
            <Box
             sx={{
                height: "100vh",
                width: "100%",
                display:"flex",
                flexDirection:"column",
                // position:"relative",
                backgroundColor:"red",
                // justifyContent:"center"
                alignItems:"center"
                
                
                
             }}
            >
                <Box sx={{
                    display:"flex",
                    width:"425px",
                    // height:"100vh",
                    flexDirection:"column",
                    // justifyContent:"center",
                    // alignItems:"center",
                    backgroundColor:"lightblue",
                    // marginLeft:"400px"
                }}>
                    <Box 
                    sx={{
                       
                        display:"flex",
                        flexDirection:"column",
                        height:"200px",
                        
                        // alignItems:"center",
                        // position:"absolute",
                        // justifyContent:'center',
                        overflowY: "auto",
                        "&::-webkit-scrollbar": {
                        width: "8px"
                        },
                        "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#633883",
                        borderRadius: "10px"
                        },
                        overflowX:"auto",
                        "&:: -webkit-scrollbar":{
                            width:"9px"
                        }
                    }}
                    > 
                    <Typography>heloo</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    <Typography>hiii</Typography>
                    </Box>
                    
                </Box> 
            </Box>
        
    )
}
export default Practise;