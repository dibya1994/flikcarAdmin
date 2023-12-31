import React from 'react';
import ReportStyle from './report.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {Container,Box,Grid,TextField,Button,Typography} from '@mui/material';

const page = () => {
  return (
    <>
          
        <Box className={ReportStyle.tm_report_general_info}>
            <Container maxWidth="lg">
                <Box className={ReportStyle.tm_report_header}>
                    <Container maxWidth="lg">
                        <Grid container alignItems={'center'} justifyContent={'space-between'}>
                            <Grid item md={2}>
                                <Box className={ReportStyle.tm_report_header_logo}>
                                    <Link href="/"><Image src="/header/logo.png" alt="" className='tm_images_cust' layout="fill"/></Link>                            
                                </Box>
                            </Grid>
                            <Grid item md={10}>
                                <Box className={ReportStyle.tm_report_header_text}>
                                    <Typography variant='h4'>VEHICLE INSPECTION REPORT</Typography>
                                    <Typography variant='h5'>2015, AUDI, A3, 35 TDI LIMOUSINE, Diesel, 1968cc</Typography>
                                    <Typography variant='h6'>Inspected: <Typography variant='span'>03/08/2023 13:59:21, KOLKATA</Typography></Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Grid container>
                    <Grid item md={12}>
                        <Box className={ReportStyle.tm_report_all_sec_title}>
                            <Typography variant='h2'>GENERAL INFORMATION</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>
                    <Grid item md={4}>
                        <Box className={ReportStyle.tm_report_general_info_img}>
                            <Image src="/car/car-img1.jpg" alt="Picture of the car" className='tm_images_cust' layout="fill"/>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration No.</Typography>
                                    <Typography variant='span'>WB02******</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration Statec</Typography>
                                    <Typography variant='span'>WEST BENGAL</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Odometer (kms)</Typography>
                                    <Typography variant='span'>40313</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No. of Owners</Typography>
                                    <Typography variant='span'>1</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Validity</Typography>
                                    <Typography variant='span'>Limited Period</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Valid Till</Typography>
                                    <Typography variant='span'>30/08/2025</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Insurance Type</Typography>
                                    <Typography variant='span'>Comprehensive</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registered RTO</Typography>
                                    <Typography variant='span'>PVD KOLKATA</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration No.</Typography>
                                    <Typography variant='span'>WB02******</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration Statec</Typography>
                                    <Typography variant='span'>WEST BENGAL</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Odometer (kms)</Typography>
                                    <Typography variant='span'>40313</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No. of Owners</Typography>
                                    <Typography variant='span'>1</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Validity</Typography>
                                    <Typography variant='span'>Limited Period</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Valid Till</Typography>
                                    <Typography variant='span'>30/08/2025</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Insurance Type</Typography>
                                    <Typography variant='span'>Comprehensive</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registered RTO</Typography>
                                    <Typography variant='span'>PVD KOLKATA</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>  
        <Box className={ReportStyle.tm_report_general_info}>
            <Container maxWidth="lg">
                
                <Grid container>
                    <Grid item md={12}>
                        <Box className={ReportStyle.tm_report_all_sec_title}>
                            <Typography variant='h2'>B. DOCUMENTATION</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>                    
                    <Grid item md={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration No.</Typography>
                                    <Typography variant='span'>WB02******</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration Statec</Typography>
                                    <Typography variant='span'>WEST BENGAL</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Odometer (kms)</Typography>
                                    <Typography variant='span'>40313</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No. of Owners</Typography>
                                    <Typography variant='span'>1</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Validity</Typography>
                                    <Typography variant='span'>Limited Period</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Valid Till</Typography>
                                    <Typography variant='span'>30/08/2025</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Insurance Type</Typography>
                                    <Typography variant='span'>Comprehensive</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registered RTO</Typography>
                                    <Typography variant='span'>PVD KOLKATA</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration No.</Typography>
                                    <Typography variant='span'>WB02******</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration Statec</Typography>
                                    <Typography variant='span'>WEST BENGAL</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Odometer (kms)</Typography>
                                    <Typography variant='span'>40313</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No. of Owners</Typography>
                                    <Typography variant='span'>1</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Validity</Typography>
                                    <Typography variant='span'>Limited Period</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Valid Till</Typography>
                                    <Typography variant='span'>30/08/2025</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Insurance Type</Typography>
                                    <Typography variant='span'>Comprehensive</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registered RTO</Typography>
                                    <Typography variant='span'>PVD KOLKATA</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box className={ReportStyle.tm_report_general_info}>
            <Container maxWidth="lg">
            
                <Grid container>
                    <Grid item md={12}>
                        <Box className={ReportStyle.tm_report_all_sec_title}>
                            <Typography variant='h2'>C. INSPECTION INFORMATION</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>                    
                    <Grid item md={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_title}>
                                <Typography variant='h5'>1.EXTERIOR - FRONT</Typography>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration No.</Typography>
                                    <Typography variant='span'>WB02******</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration Statec</Typography>
                                    <Typography variant='span'>WEST BENGAL</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Odometer (kms)</Typography>
                                    <Typography variant='span'>40313</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No. of Owners</Typography>
                                    <Typography variant='span'>1</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Validity</Typography>
                                    <Typography variant='span'>Limited Period</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Valid Till</Typography>
                                    <Typography variant='span'>30/08/2025</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Insurance Type</Typography>
                                    <Typography variant='span'>Comprehensive</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registered RTO</Typography>
                                    <Typography variant='span'>PVD KOLKATA</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_title}>
                                    <Typography variant='h5'>2. EXTERIOR - LEFT</Typography>
                                </Box>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration No.</Typography>
                                    <Typography variant='span'>WB02******</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration Statec</Typography>
                                    <Typography variant='span'>WEST BENGAL</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Odometer (kms)</Typography>
                                    <Typography variant='span'>40313</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No. of Owners</Typography>
                                    <Typography variant='span'>1</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Validity</Typography>
                                    <Typography variant='span'>Limited Period</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Valid Till</Typography>
                                    <Typography variant='span'>30/08/2025</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Insurance Type</Typography>
                                    <Typography variant='span'>Comprehensive</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registered RTO</Typography>
                                    <Typography variant='span'>PVD KOLKATA</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_title}>
                                    <Typography variant='h5'>3. EXTERIOR - LEFT</Typography>
                                </Box>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration No.</Typography>
                                    <Typography variant='span'>WB02******</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration Statec</Typography>
                                    <Typography variant='span'>WEST BENGAL</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Odometer (kms)</Typography>
                                    <Typography variant='span'>40313</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No. of Owners</Typography>
                                    <Typography variant='span'>1</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Validity</Typography>
                                    <Typography variant='span'>Limited Period</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Valid Till</Typography>
                                    <Typography variant='span'>30/08/2025</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Insurance Type</Typography>
                                    <Typography variant='span'>Comprehensive</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registered RTO</Typography>
                                    <Typography variant='span'>PVD KOLKATA</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_title}>
                                    <Typography variant='h5'>4. EXTERIOR - LEFT</Typography>
                                </Box>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration No.</Typography>
                                    <Typography variant='span'>WB02******</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration Statec</Typography>
                                    <Typography variant='span'>WEST BENGAL</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Odometer (kms)</Typography>
                                    <Typography variant='span'>40313</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No. of Owners</Typography>
                                    <Typography variant='span'>1</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Validity</Typography>
                                    <Typography variant='span'>Limited Period</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Valid Till</Typography>
                                    <Typography variant='span'>30/08/2025</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Insurance Type</Typography>
                                    <Typography variant='span'>Comprehensive</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registered RTO</Typography>
                                    <Typography variant='span'>PVD KOLKATA</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box className={`${ReportStyle.tm_report_general_info} ${ReportStyle.tm_report_general_info_note}`}>
            <Container maxWidth="lg">
                
                <Grid container>
                    <Grid item md={12}>
                        <Box className={ReportStyle.tm_report_all_sec_title}>
                            <Typography variant='h2'>D. NOTES</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container>                    
                    <Grid item md={12} sm={12}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_title}>
                                <Typography variant='h5'>D. NOTES</Typography>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>General</Typography>
                                    <Typography variant='span'></Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Interior</Typography>
                                    <Typography variant='span'>Car with Knee Airbags, Car with Seat Airbags</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Electricals</Typography>
                                    <Typography variant='span'></Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Engine</Typography>
                                    <Typography variant='span'></Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Radiator</Typography>
                                    <Typography variant='span'></Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Engine Oil</Typography>
                                    <Typography variant='span'></Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Towing</Typography>
                                    <Typography variant='span'></Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Transmission</Typography>
                                    <Typography variant='span'>Automatic Transmission</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Air Conditioning</Typography>
                                    <Typography variant='span'></Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Others</Typography>
                                    <Typography variant='span'></Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Vahan Verification</Typography>
                                    <Typography variant='span'>RC Status: Active</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>                    
                </Grid>
            </Container>
        </Box> 
        <Box className={`${ReportStyle.tm_report_general_info} ${ReportStyle.tm_report_general_info_disclamer}`}>
            <Container maxWidth="lg"> 
                           
                <Grid container>
                    <Grid item md={12}>
                        <Box className={ReportStyle.tm_report_all_sec_title}>
                            <Typography variant='h2'>E. DISCLAIMER</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container>                    
                    <Grid item md={12} sm={12}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_title}>
                                <Typography variant='h5'>E. DISCLAIMER</Typography>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>1</Typography>
                                    <Typography variant='span'>Interior Cleaning & General service for engines is essential refurbishment advised in every used Car.</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>2</Typography>
                                    <Typography variant='span'>Odometer readings cannot be verified & are recorded based on the current reading on the car. We do not guarantee verification of odometer reading and the possibility of the odometer being tempered in the past cannot be ruled out.</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>3</Typography>
                                    <Typography variant='span'>OtoBix will not entertain any inspection miss ticket after delivery except for Engine and GearBox related issues.</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>4</Typography>
                                    <Typography variant='span'>Accidental repairs if already done are verified practically on the Car during Inspection. Replacement of parts like Bumper / Fender / Headlights / Tail Lights /ORVM / Lower cross member, Upper cross member, Bonnet Patti / Show Panel, etc cannot be verified and do not depreciate the value of the used Car,hence no claim shall be entertained basis details available in-service history post-purchase.</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>5</Typography>
                                    <Typography variant='span'>The date of manufacturing of the Car is recorded as per the details available in RC and not as per the window or windshield glass code.</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>6</Typography>
                                    <Typography variant='span'>Operation of Cruise control cannot be checked under current conditions where inspection is being done hence not guaranteed.</Typography>
                                </Box>
                            </Box>                            
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>7</Typography>
                                    <Typography variant='span'>Poor Pick up, Clutch weak, Clutch Needs Overhaul, Clutch needs repair, etc comments mentioned in the report indicate that the Car may need to be shifted by Towing & may not be in drivable mode due to partially worn out clutch.</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>8</Typography>
                                    <Typography variant='span'>OtoBix is not the custodian of the service history of any vehicle hence is not liable for any such data or any part thereof in any manner. Accordingly, OtoBix does not provide any guarantee of any nature whatsoever on the service history of the vehicle.</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>9</Typography>
                                    <Typography variant='span'>If a Car becomes non-drivable or scrap after the date of inspection, as a result of Govt regulations around age, or any other guidelines, and such information around age was available in the Inspection Report, we will not entertain any inspection misses or return of the vehicle if less than 3 months of validity of life of the Car is left.</Typography>
                                </Box>
                            </Box> 
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>10</Typography>
                                    <Typography variant='span'>Transportation Charges, as applicable, shall apply. Please contact your Relationship Manager for further details.</Typography>
                                </Box>
                            </Box>                           
                        </Box>
                    </Grid>                    
                </Grid>
            </Container>
        </Box>
        <Box className={ReportStyle.tm_report_images}>
            <Container>
            
                <Grid container spacing={4}>
                    <Grid item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src="/car/car-img3.webp" alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>FRONT MAIN</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src="/car/car-img4.webp" alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>FRONT MAIN</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src="/car/car-img5.webp" alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>FRONT MAIN</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src="/car/car-img6.webp" alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>FRONT MAIN</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src="/car/car-img7.webp" alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>FRONT MAIN</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src="/car/car-img8.webp" alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>FRONT MAIN</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src="/car/car-img9.webp" alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>FRONT MAIN</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src="/car/car-img10.webp" alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>FRONT MAIN</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src="/car/car-img11.webp" alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>FRONT MAIN</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box className={ReportStyle.tm_report_footer}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={12} sm={12}>
                        <Box className={ReportStyle.tm_report_footer_panel}>
                            <Box className={ReportStyle.tm_report_footer_logo}>
                                <Image src="/header/logo.png" alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_footer_text}>
                                <Typography>Room No. 609, Merlin Infinite, DN-51, Salt Lake Sector V, Kolkata - 700 091, West Bengal, India.</Typography>
                                <Typography>Email: help@flikcar.com, Contact: +91 98049 06860, Website:https://flikcar.com/</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
  )
}

export default page