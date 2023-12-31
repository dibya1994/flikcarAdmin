"use client"
import React, { useState ,useEffect  } from 'react';
import ReportStyle from './report.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {Container,Box,Grid,TextField,Button,Typography} from '@mui/material';
import {vehicleApi} from '../../../../../app/service/vehicle';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { format } from 'date-fns';

const Page = ({ params }) => {

const router = useRouter();
const [inspectionData, setInspectionData]=useState(null);
const [inspectionDate, setInspectionDate]=useState(null);
const [disclaimer, setDisclaimer]=useState([]);

useEffect(() => {
    const userToken = localStorage.getItem('token');
    if(!userToken) {
        router.push("/");
    }
    getInspectionReport();
    getDisclaimers();
}, []); 

const getInspectionReport = async () => {
    try {
        const data={id:params.id};
        const response = await vehicleApi.getInspectionReport(data);
            console.log(response.data.data);
        if (response.data.status === 200) {
            setInspectionData(response.data.data);
            if(response.data.data?.createdAt!=null)
            {
            //   const date = new Date(response.data.data.createdAt).getTime();
              const date = format(new Date(response.data.data.createdAt), 'dd/MM/yyyy');
            //   console.log(date);
              setInspectionDate(date);
            }
        }
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const getDisclaimers = async () => {
    try {
        const response = await vehicleApi.getDisclaimers();
            // console.log(response.data.data);
         if (response.data.status === 200) {
            setDisclaimer(response.data.data.title);
        }
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

  return (
    <>
          
        <Box className={ReportStyle.tm_report_general_info}>
            <Container maxWidth="lg">
                <Box className={ReportStyle.tm_report_header}>
                    <Container maxWidth="lg">
                        <Grid container alignItems={'center'} justifyContent={'space-between'}>
                            <Grid item md={2}>
                                <Box className={ReportStyle.tm_report_header_logo}>
                                    <Image src={"/sidebar/logo.png"} alt="" className='tm_images_cust' layout="fill"/>                           
                                </Box>
                            </Grid>
                            <Grid item md={10}>
                                <Box className={ReportStyle.tm_report_header_text}>
                                    <Typography variant='h4'>VEHICLE INSPECTION REPORT</Typography>
                                    <Typography variant='h5'>{inspectionData?.basicDocuments?.registrationYear}, {inspectionData?.basicDocuments?.brand}, {inspectionData?.basicDocuments?.model}, {inspectionData?.basicDocuments?.variant}, {inspectionData?.basicDocuments?.fuelType}, {inspectionData?.basicDocuments?.engineCC}cc</Typography>
                                    <Typography variant='h6'>Inspected: <Typography variant='span'>{inspectionDate}, {inspectionData?.basicDocuments?.city}</Typography></Typography>
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
                    <Grid item md={4} sm={11}>
                        <Box className={ReportStyle.tm_report_general_info_img}>
                            <Image src={inspectionData?.basicDocuments.imagePath} alt="Picture of the car" className='tm_images_cust' layout="fill"/>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration No.</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.regNo.slice(0, 4)}*****</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registration Statec</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.regState}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Odometer (kms)</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.kmsDriven}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No. of Owners</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.ownerType}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Validity</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.roadTax}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Tax Valid Till</Typography>
                                    {inspectionData?.basicDocuments?.roadTaxValidity!=null ? (<>
                                        <Typography variant='span'>{format(new Date(inspectionData?.basicDocuments?.roadTaxValidity), 'dd/MM/yyyy')}</Typography>
                                    </>):(<>
                                        <Typography variant='span'></Typography>
                                    </>)}
                                    
                                    
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Insurance Type</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.insurance}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Registered RTO</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.rtoLocation}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Color</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.color}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Duplicate Key</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.duplicateKey}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Fittness Upto</Typography>
                                    {inspectionData?.basicDocuments?.fittnessUpto!=null ? (<>
                                        <Typography variant='span'>{format(new Date(inspectionData?.basicDocuments?.fittnessUpto), 'dd/MM/yyyy')}</Typography>
                                    </>):(<><Typography variant='span'></Typography></>)}
                                    
                                    
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Hypothecation</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.hypoDetails}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Missmatch in Insurance</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.missmatchInsurance}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Missmatch in RC</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.missmatchRC}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No Claim Bonus</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.noClaimBonus}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>NOC</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.noc}</Typography>
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
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Body Type</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.bodyType}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Chassis No</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.chassisNo.slice(0, 4)}******</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Max Power</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.maxPower}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Max Torque</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.maxTorque}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Mileage</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.mileage}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>MFG Month</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.mfgMonth} - {inspectionData?.basicDocuments?.manufacturingYear}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Transmission</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.transmission}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Inspection Score</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.inspectionScore}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>RC Availability</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.rcAvailablilty}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>RC Condition</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.rcCondition}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Reg Owner Name</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.regOwnerName}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Reg Type</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.regType}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>RTO Noc</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.rtoNoc}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>RTO Noc Issue Date</Typography>
                                    {inspectionData?.basicDocuments?.rtoNocIssueDate !=null ? (<>
                                        <Typography variant='span'>{format(new Date(inspectionData?.basicDocuments?.rtoNocIssueDate), 'dd/MM/yyyy')}</Typography>
                                    </>):(<><Typography variant='span'></Typography></>)}
                                    
                                    
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Seat</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.seat}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>To be Scrapped</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.tobeScraped}</Typography>
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
                            <Typography variant='h2'>C. COMFORT DETAILS</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>                    
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Manual AC</Typography>
                                    <Typography variant='span'>{inspectionData?.comfortDetails?.manualAC}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Climate Controll AC</Typography>
                                    <Typography variant='span'>{inspectionData?.comfortDetails?.climateControl}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>External Speaker</Typography>
                                    <Typography variant='span'>{inspectionData?.comfortDetails?.externalSpeaker}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Inbuilt Speaker</Typography>
                                    <Typography variant='span'>{inspectionData?.comfortDetails?.inbuiltSpeaker}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                        <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Music System</Typography>
                                    <Typography variant='span'>{inspectionData?.comfortDetails?.musicSystem}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Steering Mounted Audio Control</Typography>
                                    <Typography variant='span'>{inspectionData?.comfortDetails?.steeringMountedAudioControl} </Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Stereo</Typography>
                                    <Typography variant='span'>{inspectionData?.comfortDetails?.stereo}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Sunroof</Typography>
                                    <Typography variant='span'>{inspectionData?.comfortDetails?.sunroof}</Typography>
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
                            <Typography variant='h2'>D. ELECTRICAL & INTERIOR DETAILS</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>                    
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Electricals</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.electricals}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Fabric Seats</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.fabricSeats}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Fuel Level</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.fuelLevel}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Leather Seats</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.leatherSeats}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rear Defogger</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.rearDefogger}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rear Wiper</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.rearWiper}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                        <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Front Power Window</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.lhsFrontPowerWindow}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Rear Power Window</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.lhsRearPowerWindow} </Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Odometer Reading</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.odometerReading}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Power Window</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.powerWindow}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Front Power Window</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.rhsFrontPowerWindow}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Rear Power Window</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.rhsRearPowerWindow}</Typography>
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
                            <Typography variant='h2'>E. ENGINE & TRANSMISSION DETAILS</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>                    
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Battery</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.battery}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Brake</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.brake}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Clutch</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.clutch}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Coolant</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.coolant}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Engine</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.engine}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Engine Blow</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.engineBlow}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Suspension</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.suspension}</Typography>
                                </Box>
                            </Box>
                            
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                        <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Engine Mount</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.engineMount}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Engine Oil</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.engineOil} </Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Engine Oil Dipstick</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.engineOilDipstick}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Exhaust Smoke</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.exhaustSmoke}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Gear</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.gear}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Radiator</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.radiator}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Steering</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.steering}</Typography>
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
                            <Typography variant='h2'>F. SAFETY DETAILS</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>                    
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>ABS</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.abs}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Co-Driver Side Airbag</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.coDriverSide}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Driver Side Airbag</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.driverSide}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs A Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.lhsApillar}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs B Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.lhsBpillar}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs C Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.lhsCpillar}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                        <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Reverse Parking Camera</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.reverseParkingCamera}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs A Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.rhsApillar} </Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs B Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.rhsBpillar}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs C Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.rhsCpillar}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>No Of Airbags</Typography>
                                    <Typography variant='span'>{inspectionData?.safetyDetails?.noOfAirbags}</Typography>
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
                            <Typography variant='h2'>G. EXTERIOR INFORMATION</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>                    
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_title}>
                                <Typography variant='h5'>1.EXTERIOR - FRONT</Typography>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Bonnet</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.bonnet}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Boot Door</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.bootDoor}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Boot Floor</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.bootFloor}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Cowl Top</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.cowlTop}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Firewall</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.firewall}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>FrontBumper</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.frontBumper}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Front Windshield</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.frontWindshield}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Headlight Support</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.headlightSupport}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_title}>
                                    <Typography variant='h5'>2. EXTERIOR - REAR</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Upper Cross Member</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.upperCrossMember}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lower Cross Member</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lowerCrossMember}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Radiator Support</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.radiatorSupport}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rear Bumper</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rearBumper}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rear Windshield</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rearWindshield}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Roof</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.roof}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Spare Tyre</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.spareTyre}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_title}>
                                    <Typography variant='h5'>3. EXTERIOR - LEFT</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs A Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsAPillar}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs B Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsBPillar}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs C Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsCPillar}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Apron</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsApron}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Fender</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsFender}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs FogLamp</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsFogLamp}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Front Alloy</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsFrontAlloy}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Front Door</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsFrontDoor}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Front Tyre</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsFrontTyre}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs HeadLamp</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsHeadLamp}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Orvm</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsOrvm}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Quarter Panel</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsQuarterPanel}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Rear Alloy</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsRearAlloy}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Rear Door</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsRearDoor}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Rear Tyre</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsRearTyre}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Running Board</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsRunningBoard}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Lhs Tail Lamp</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.lhsTailLamp}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_title}>
                                    <Typography variant='h5'>4. EXTERIOR - RIGHT</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs A Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsAPillar}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs B Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsBPillar}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs C Pillar</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsCPillar}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Apron</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsApron}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Fender</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsFender}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs FogLamp</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsFogLamp}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Front Alloy</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsFrontAlloy}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Front Door</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsFrontDoor}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Front Tyre</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsFrontTyre}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs HeadLamp</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsHeadLamp}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Orvm</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsOrvm}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Quarter Panel</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsQuarterPanel}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Rear Alloy</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsRearAlloy}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Rear Door</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsRearDoor}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Rear Tyre</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsRearTyre}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs Running Board</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsRunningBoard}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Rhs TailLamp</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.rhsTailLamp}</Typography>
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
                            <Typography variant='h2'>H. NOTES</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container>                    
                    <Grid item md={12} sm={12}>
                        <Box className={ReportStyle.tm_report_general_info_text}>
                            <Box className={ReportStyle.tm_report_general_info_text_title}>
                                <Typography variant='h5'> NOTES</Typography>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Comments On Basic</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.commentsOnBasic.join(', ')}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Comments On Comfort</Typography>
                                    <Typography variant='span'>{inspectionData?.comfortDetails?.commentsOnComfort.join(', ')}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Comments On Electricals</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.commentsOnElectrical.join(', ')}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Comments On Interior</Typography>
                                    <Typography variant='span'>{inspectionData?.electicalInteriorDetails?.commentsOnInterior.join(', ')}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Comments On Engine</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.commentsOnEngine.join(', ')}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Comments On Exterior</Typography>
                                    <Typography variant='span'>{inspectionData?.exteriorDetails?.commentsOnExterior.join(', ')}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Comments On Transmission</Typography>
                                    <Typography variant='span'>{inspectionData?.engineAndTransmissionDetails?.commentsOnTransmission.join(', ')}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Car Description</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.carDescription}</Typography>
                                </Box>
                            </Box>
                            <Box className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>Inspection Report</Typography>
                                    <Typography variant='span'>{inspectionData?.basicDocuments?.inspectionReport}</Typography>
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
                            {disclaimer.map((item, index) => (
                            <>
                            <Box key={index} className={ReportStyle.tm_report_general_info_text_panel_main}>
                                <Box className={ReportStyle.tm_report_general_info_text_panel}>
                                    <Typography variant='span'>{index+1}</Typography>
                                    <Typography variant='span'>{item}</Typography>
                                </Box>
                            </Box>
                            </>
                            
                            ))}
                            
                            
                        </Box>
                    </Grid>                    
                </Grid>
            </Container>
        </Box>
        <Box className={`${ReportStyle.tm_report_images} ${'tm_report_images_gb'}`}>
            <Container>
                <Grid container spacing={4}>

                {inspectionData?.basicDocuments?.chassisImages.length>0 &&  inspectionData?.basicDocuments?.chassisImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>CHASSIS IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}

                {inspectionData?.basicDocuments?.duplicateKeyImages.length>0 &&  inspectionData?.basicDocuments?.duplicateKeyImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>DUPLICATE KEY IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}

                {inspectionData?.basicDocuments?.hypoImages.length>0 &&  inspectionData?.basicDocuments?.hypoImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>HYPOTHECATION IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}

                {inspectionData?.basicDocuments?.insuranceImages.length>0 &&  inspectionData?.basicDocuments?.insuranceImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>INSURANCE IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}

                {inspectionData?.basicDocuments?.rcAvailabilityImages.length>0 &&  inspectionData?.basicDocuments?.rcAvailabilityImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>RC AVAILABILITY IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}

                {inspectionData?.basicDocuments?.roadTaxValidityImages.length>0 &&  inspectionData?.basicDocuments?.roadTaxValidityImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>ROAD TAX VALIDITY IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}

                {inspectionData?.basicDocuments?.roadTaxValidityImages.length>0 &&  inspectionData?.basicDocuments?.roadTaxValidityImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>ROAD TAX VALIDITY IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}

                {inspectionData?.basicDocuments?.rtoNocImages.length>0 &&  inspectionData?.basicDocuments?.rtoNocImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>RTO NOC IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}


                    
                </Grid>
            </Container>
        </Box>

        {inspectionData?.comfortDetails?.comfortImages.length>0 ? (<>
            <Box className={`${ReportStyle.tm_report_images} ${'tm_report_images_gb'}`}>
                <Container>
                    <Grid container>
                        <Grid item md={12}>
                            <Box className={ReportStyle.tm_report_all_sec_title}>
                                <Typography variant='h2'>COMFORT IMAGES</Typography>
                            </Box>
                        </Grid>
                    </Grid> 
                    <Grid container spacing={4}>
                    {inspectionData?.comfortDetails?.comfortImages.length>0 &&  inspectionData?.comfortDetails?.comfortImages.map((item, index) => (
                        <Grid key={index} item md={4} sm={4}>
                            <Box className={ReportStyle.tm_report_images_panel}>
                                <Box className={ReportStyle.tm_report_images_panel_img}>
                                    <Image src={item.path} alt="" className='tm_images_cust' layout="fill"/>
                                </Box>
                                <Box className={ReportStyle.tm_report_images_panel_text}>
                                <Typography variant='span'>COMFORT IMAGES</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </Box>
        </>):(<></>)}
        

        {inspectionData?.electicalInteriorDetails?.interiorImages.length>0 ? (<>
            <Box className={`${ReportStyle.tm_report_images} ${'tm_report_images_gb'}`}>
            <Container>
                <Grid container>
                    <Grid item md={12}>
                        <Box className={ReportStyle.tm_report_all_sec_title}>
                            <Typography variant='h2'>ELECTRICAL & INTERIOR IMAGES</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>
                {inspectionData?.electicalInteriorDetails?.interiorImages.length>0 &&  inspectionData?.electicalInteriorDetails?.interiorImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item.path} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>INTERIOR IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </Box>
        </>):(<></>)}
        

        {inspectionData?.engineAndTransmissionDetails?.engineImages.length>0 ? (<>
            <Box className={`${ReportStyle.tm_report_images} ${'tm_report_images_gb'}`}>
            <Container>
                <Grid container>
                    <Grid item md={12}>
                        <Box className={ReportStyle.tm_report_all_sec_title}>
                            <Typography variant='h2'>ENGINE & TRANSMISSION IMAGES</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>
                {inspectionData?.engineAndTransmissionDetails?.engineImages.length>0 &&  inspectionData?.engineAndTransmissionDetails?.engineImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item.path} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>ENGINE IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </Box>
        </>):(<></>)}
        

        {inspectionData?.exteriorDetails?.exteriorImages.length>0 ? (<>
            <Box className={`${ReportStyle.tm_report_images} ${'tm_report_images_gb'}`}>
            <Container>
                <Grid container>
                    <Grid item md={12}>
                        <Box className={ReportStyle.tm_report_all_sec_title}>
                            <Typography variant='h2'>EXTERIOR IMAGES</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>
                {inspectionData?.exteriorDetails?.exteriorImages.length>0 &&  inspectionData?.exteriorDetails?.exteriorImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item.path} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>EXTERIOR IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </Box>
        </>):(<></>)}

        {inspectionData?.exteriorDetails?.tyreImages.length>0 ? (<>
            <Box className={`${ReportStyle.tm_report_images} ${'tm_report_images_gb'}`}>
            <Container>
                <Grid container>
                    <Grid item md={12}>
                        <Box className={ReportStyle.tm_report_all_sec_title}>
                            <Typography variant='h2'>TYRE IMAGES</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>
                {inspectionData?.exteriorDetails?.tyreImages.length>0 &&  inspectionData?.exteriorDetails?.tyreImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item.path} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>TYRE IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </Box>
        </>):(<></>)}
        

        {inspectionData?.safetyDetails?.safetyImages.length>0 ? (<>
            <Box className={`${ReportStyle.tm_report_images} ${'tm_report_images_gb'}`}>
            <Container>
                <Grid container>
                    <Grid item md={12}>
                        <Box className={ReportStyle.tm_report_all_sec_title}>
                            <Typography variant='h2'>SAFETY IMAGES</Typography>
                        </Box>
                    </Grid>
                </Grid> 
                <Grid container spacing={4}>
                {inspectionData?.safetyDetails?.safetyImages.length>0 &&  inspectionData?.safetyDetails?.safetyImages.map((item, index) => (
                    <Grid key={index} item md={4} sm={4}>
                        <Box className={ReportStyle.tm_report_images_panel}>
                            <Box className={ReportStyle.tm_report_images_panel_img}>
                                <Image src={item.path} alt="" className='tm_images_cust' layout="fill"/>
                            </Box>
                            <Box className={ReportStyle.tm_report_images_panel_text}>
                            <Typography variant='span'>SAFETY IMAGES</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </Box>
        </>):(<></>)}
        
        <Box className={ReportStyle.tm_report_footer}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={12} sm={12}>
                        <Box className={ReportStyle.tm_report_footer_panel}>
                            <Box className={ReportStyle.tm_report_footer_logo}>
                                <Image src={"/sidebar/logo.png"} alt="" className='tm_images_cust' layout="fill"/>
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

export default Page