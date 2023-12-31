"use client"
import React, { useState,useEffect  } from 'react';
import Image from 'next/image';
import dashboardStyles from '../dashboard.module.css';
import {Box,Grid,TextField,Button,Typography} from '@mui/material';
import '../../globals.css';
import Sidebar from '../../../../components/Sidebar';
import Header from '../../../../components/Header';
import Paper from '@mui/material/Paper';
import {vehicleApi} from '../../../app/service/vehicle';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRouter } from 'next/navigation';

function Auctionvehicle() {  
  const router = useRouter();
  const [inspectionData,setInspectionData]=useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    if(!userToken) {
        router.push("/");
    }
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await vehicleApi.getInspectionList();
            // console.log(response.data.data);
      if (response.data.status === 200) {
          setInspectionData(response.data.data.reverse());
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    // alert(id);
    const userConfirmed = confirm("Do you want to delete this car?");
    if (userConfirmed) {
      // Perform the action when the user clicks OK
      const formData={id};
      const response = await vehicleApi.deleteInspectionVehicle(formData);
      if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
        // console.log(response);
        alert("car has been deleted");
        fetchData();
        
      }
    } 
  }

 
  return (
    <>
      <Box className={dashboardStyles.tm_dashboard_main}>        
        <Grid container> 
          <Sidebar/>         
          <Grid item md={10}>
            <Box className={dashboardStyles.tm_dashboard_rightbar_main}>
              <Header/>
              <Box className={dashboardStyles.tm_auctionvehicle_table_main}>
                <Box className={dashboardStyles.tm_auctionvehicle_table_main_top}>
                  <Box className={dashboardStyles.tm_auctionvehicle_table_main_top_title}>
                    <Typography variant='h4'>Inspection Vehicle List</Typography>
                  </Box>
                  <Box className={dashboardStyles.tm_auctionvehicle_table_main_top_btn}>
                    <Link href="/dashboard/inspection/create"><Button variant="contained">Add</Button></Link>
                  </Box>
                </Box>
                 
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>            
                  <TableContainer sx={{ maxHeight: 800 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center" colSpan={8}>Inspection List</TableCell>
                          {/* <TableCell align="center" colSpan={3}>List</TableCell> */}
                        </TableRow>
                        <TableRow>
                            <TableCell  align="center" style={{ top: 57, minWidth: 170 }}>Id</TableCell>
                            <TableCell  align="center" style={{ top: 57, minWidth: 170 }}>Image</TableCell>
                            <TableCell  align="center" style={{ top: 57, minWidth: 170 }}>Brand Model Variant	</TableCell>
                            <TableCell  align="center" style={{ top: 57, minWidth: 170 }}>Kms Driven</TableCell>
                            <TableCell  align="center" style={{ top: 57, minWidth: 170 }}>Reg Year</TableCell>
                            <TableCell  align="center" style={{ top: 57, minWidth: 170 }}>View All Bids</TableCell>
                            <TableCell  align="center" style={{ top: 57, minWidth: 170 }}>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      
                      <TableBody>
                                {inspectionData.map((data,key) => (
                                    <TableRow key={key}>
                                      <TableCell align="center" component="th" scope="row">{data.id}</TableCell>
                                      <TableCell align="center" ><Image src={data.carDetails.imagePath} alt='Image' height={50} width={50}  /></TableCell>
                                      <TableCell align="center">{data.carDetails.brand} {data.carDetails.model} {data.carDetails.variant}</TableCell>
                                      <TableCell align="center">{data.carDetails.kmsDriven}</TableCell>
                                      <TableCell align="center">{data.carDetails.registrationYear}</TableCell>
                                      <TableCell align="center"><Link as={`bid/${data.id}`} href={`bid?id=${data.id}`}><RemoveRedEyeIcon /></Link> </TableCell>
                                      <TableCell align="center"><Link as={`update/${data.id}`} href={`update?id=${data.id}`}><EditIcon /></Link> <DeleteIcon onClick={(e) => handleDelete(`${data.id}`)} /></TableCell>
                                    </TableRow>
                                  ))}
                      </TableBody>
                    </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={inspectionData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>        
      </Box>
    </>
  )
}

export default Auctionvehicle