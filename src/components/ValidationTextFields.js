import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './style.css';
import { Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { Message } from '@mui/icons-material';


 const  ValidationTextFields = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit(data =>{
    console.log(data)
  })

  const handleSubmit = ()=>{
    console.log("hi")

  }
  return (
    <FormProvider {...methods}>
      <form 
      onSubmit={e =>e.preventDefault()}
      noValidate
      autoComplete='off'
      className='container'
      >
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField  type="date"
         
          
          />
        <TextField
      
        />
      </div>
      <div>
        <TextField
          error
       
        />
        <TextField
          error
          id="filled-error-helper-text"
       
        />
        <Button variant="contained" onClick={handleSubmit}>
        Send
        </Button>
      </div>
      <div>
       
        
      </div>
    </Box>
    </form>
    </FormProvider>
  )
}

export default ValidationTextFields;