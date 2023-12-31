"use client"
import React, { useState ,useEffect, useRef } from 'react';
import ImageUploading from 'react-images-uploading';

import Image from 'next/image';
import dashboardStyles from '../../dashboard.module.css';
import {Box,Grid,TextField,Button,Typography} from '@mui/material';
import '../../../globals.css';
import Sidebar from '../../../../../components/Sidebar';
import Header from '../../../../../components/Header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import { Margin } from '@mui/icons-material';
import {vehicleApi} from '../../../../app/service/vehicle';
import 'react-calendar/dist/Calendar.css';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation';




function Create() {  

  const router = useRouter()

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(null);

  

  const handleInput= async(e)=>{
    
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'phone') {
      setPhone(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
    if (e.target.name === 'status') {
      setStatus(e.target.value);
    }
    
  }
  
  

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const formData={name,email,phone,password,status};
    // console.log(formData);
    const response = await vehicleApi.addInspector(formData);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      confirm("Inspector added successfully");
      router.push("/dashboard/inspectors");
    }
  };

  return (
    <>
      <Box className={dashboardStyles.tm_dashboard_main}>        
        <Grid container> 
          <Sidebar/>         
          <Grid item md={10}>
            <Box className={dashboardStyles.tm_dashboard_rightbar_main}>
              <Header/>
              <Box className={dashboardStyles.tm_dashboard_rightbar_form_main}>
                <Box className={dashboardStyles.tm_dashboard_rightbar_form_title}>
                  <Typography variant='h3'>Add Inspector!</Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  
                  <Grid item md={4}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <TextField id="outlined-basic" label="Name" onChange={handleInput} name='name' type="text" value={name} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <TextField id="outlined-basic" label="Email" onChange={handleInput} name='email' type="text" value={email} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <TextField id="outlined-basic" label="Phone" onChange={handleInput} name='phone' type="text" value={phone} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <TextField id="outlined-basic" label="Password" onChange={handleInput} name='password' type="text" value={password} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Status*</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status*"
                            onChange={handleInput}
                            name='status'
                            required
                          >
                            
                            <MenuItem value='ACTIVE'>Active</MenuItem>
                            <MenuItem value='INACTIVE'>Inactive</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                  </Grid>
                  
                  
                </Grid>
               

                <Box sx={{margin:'50px 0 0'}}>
                  <Box className={dashboardStyles.tm_dashboard_rightbar_form_submit_btn}>
                    <Button variant="contained" type='submit'>submit</Button>           
                  </Box>
                </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>      
      
      </Box>
    </>
  )
}

export default Create