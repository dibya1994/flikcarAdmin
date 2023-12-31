"use client"
import React, { useState ,useEffect  } from 'react';
import ImageUploading from 'react-images-uploading';

import Image from 'next/image';
import dashboardStyles from '../../../dashboard.module.css';
import {Box,Grid,TextField,Button,Typography} from '@mui/material';
import '../../../../globals.css';
import Sidebar from '../../../../../../components/Sidebar';
import Header from '../../../../../../components/Header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import {vehicleApi} from '../../../../../app/service/vehicle';
import { useRouter } from 'next/navigation';
import NativeSelect from '@mui/material/NativeSelect';




function Update({ params }) {  

  const router = useRouter()
  
  const [docId,setDocid]=useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(null);

 
  useEffect(() => {
    getInspectorbyId();
  },[]); 

  const getInspectorbyId = async () => {
    try {
      const data={id:params.id};
        setDocid(params.id);
      const response = await vehicleApi.getInspectorbyId(data);
      const result=response.data.data;
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setName(response.data.data.name);
        setEmail(response.data.data.email);
        setPhone(response.data.data.phone);
        setPassword(response.data.data.password);
        setStatus(response.data.data.status);

  
      } 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  

  

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


    const formData={docId,name,email,phone,password,status};
    // console.log(formData);
    
    const response = await vehicleApi.updateInspector(formData);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      confirm("Inspector updated successfully");
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
                  <Typography variant='h3'>Update User  </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  
                  <Grid item md={4}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Name*</Typography>
                    <TextField id="outlined-basic" onChange={handleInput} name='name' type="text" value={name} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Email*</Typography>
                    <TextField id="outlined-basic" onChange={handleInput} name='email' type="text" value={email} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Phone*</Typography>
                    <TextField id="outlined-basic" onChange={handleInput} name='phone' type="text" value={phone} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Password*</Typography>
                    <TextField id="outlined-basic" onChange={handleInput} name='password' type="text" value={password} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                      <FormControl fullWidth>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Status*</Typography>
                          <Select
                            value={status}
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

export default Update