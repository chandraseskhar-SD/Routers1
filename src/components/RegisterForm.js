import React, {useState} from 'react';
import { TextField, Button,Box,Typography, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import './style.css'
 
 
const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [surname, setSurname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password) 
        if(firstName){
            console.log(firstName)
        }
        else{
            console.log("error")
        }
    }
    const handleReset = (ans)=>{
       
        setFirstName("")
        setLastName("")
        setEmail("")
        setDateOfBirth("")
        setPassword("")
        alert(ans);
      
        
    }
 
    return (
        <Box sx={{ height:"100vh"}}>
            <Typography className='title'>Register Form</Typography>
           <Box className='form' flex={5} sx={{ overflow:"auto"}}>
            <form onSubmit={handleSubmit}  >    
                <Stack spacing={5} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        // fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        // fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Surname"
                        onChange={e => setSurname(e.target.value)}
                        value={surname}
                        // fullWidth
                        required
                    />
                </Stack>
                <Stack spacing={5} direction="row" sx={{marginBottom: 4}}>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    // fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    // fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    // label="Date of Birth"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    // fullWidth
                    required
                    sx={{mb: 4}}
                />
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginLeft: 8, marginBottom: 4}} style={{display:"flex", justifyContent:"center"}}>
                <Button variant="outlined" color="primary" type="submit">Register</Button>
                <Button variant="outlined" color="primary" type="submit" onClick={handleReset}>Reset</Button>

                </Stack>
               
            </form>
         
            
            {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
            </Box>
        </Box>
    )
}
 
export default RegisterForm;