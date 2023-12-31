"use client"
import React, { useState ,useEffect  } from 'react';
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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {vehicleApi} from '../../../../app/service/vehicle';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

import { useRouter } from 'next/navigation';




function Create() {  

  const router = useRouter()
  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef(null);
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const [isLoader,setLoader]=useState(false);
  const [isLoader2,setLoader2]=useState(false);
  const [brandlist, setBrandlist] = useState([]);
  const [brand, setBrand] = useState(null);
  const [modellist, setModelList] = useState([]);
  const [model, setModel] = useState(null);
  const [variantList, setVariantList] = useState([]);
  const [variant, setVariant] = useState(null);
  
  const [years, setYears] = useState([]);
  const [regYear, setregYear] = useState(null);
  const [bodyTypelist, setbodyTypelist]=useState([]);
  const [bodyType, setbodyType]=useState(null);
  const [fuelTypelist, setfuelTypelist]=useState([]);
  const [fuelType, setfuelType]=useState(null);
  const [transmission, setTransmission]=useState(null);
  const [ownerTypelist, setownerTypelist]=useState([]);
  const [ownerType, setownerType]=useState(null);
  const [colorList, setcolorList]=useState([]);
  const [color, setColor]=useState(null);
  const [rtoList, setrtoList]=useState([]);
  const [rto, setRto]=useState(null);
  const [cityList, setCityList]=useState([]);
  const [city, setCity]=useState(null);
  const [kmsDriven, setkmsDriven]=useState(null);
  const [carPrice, setcarPrice]=useState(null);
  const [oneClickBuyPrice, setOneClickBuyPrice]=useState(null);
  const [description, setDescription]=useState(null);
  const [seatList, setseatList]=useState([]);
  const [seat, setSeat]=useState(null);

  const [mileage, setMileage]=useState(null);
  const [engine, setEngine]=useState(null);
  const [maxPower, setmaxPower]=useState(null);
  const [maxTorque, setMaxTorque]=useState(null);
  const [noc, setNoc]=useState(null);
  const [mfgYear, setmfgYear]=useState(null);
  const [inspectionReport, setInspectionReport]=useState(null);
  const [insuranceValidity, setInsuranceValidity]=useState(null);
  const [roadTaxValidity, setRoadTaxValidity]=useState(null);
  const [inspectionScore, setInspectionScore]=useState(null);

  const [auctionStartTime, setAuctionStartTime]=useState(null);
  const [auctionEndTime, setAuctionEndTime]=useState(null);
  

  const [comforts, setComforts] = useState([]);
  const [safety, setSafety] = useState([]);
  const [interior, setInterior] = useState([]);
  const [exterior, setExterior] = useState([]);
  const [entertainment, setEntertainment] = useState([]);

  const [comfortList, setComfortList] = useState([]);
  const [safetyList, setSafetyList] = useState([]);
  const [interiorList, setInteriorList] = useState([]);
  const [exteriorList, setExteriorList] = useState([]);
  const [entertainmentList, setEntertainmentList] = useState([]);

  const [popupOpen, setPopupopen] = useState(false);
  const [ThumbnailPhotos, setThumbnailPhotos] = useState([]);
  const [ExteriorPhotos , setExteriorPhotos] = useState([]);
  const [InteriorPhotos  , setInteriorPhotos ] = useState([]);
  const [EnginePhotos  , setEnginePhotos ] = useState([]);
  const [TyresPhotos  , setTyresPhotos ] = useState([]);
  const [DentsPhotos  , setDentsPhotos ] = useState([]);

  const [engineVideo  , setEngineVideo ] = useState(null);
  const [silencerVideo  , setSilencerVideo ] = useState(null);
  

  const [allCarImage, setAllcarImage] = useState([]);
  const [thumbImage, setThumbImage] = useState([]);

  const [allCarVideo, setAllcarVideo] = useState([]);

  const [error, setError] = useState("");
  
  useEffect(() => {
    getMakeModel();
    getBodytype();
    getFueltype();
    getOwnertype();
    getColor();
    getRto();
    getCity();
    getSeat();


    getCarFeatureList([]);
  
    const currentYear = new Date().getFullYear();
    const startYear = 2000;
    const yearsArray = [];
    for (let year = startYear; year <= currentYear; year++) {
      yearsArray.push(year);
    }
    setYears(yearsArray);

  }, []); 


  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
  };


  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];

  const handleEditorChange = (newContent) => {
    setDescription(newContent);
  };
  const handleEditorChange2 = (newContent) => {
    setInspectionReport(newContent);
  };



  const getMakeModel = async () => {
    try {
      const response = await vehicleApi.getMakeModel();
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setBrandlist(response.data.data);
        // console.log(response.data.data);
      } 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getBodytype = async () => {
    try {
      const response = await vehicleApi.getBodytype();
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setbodyTypelist(response.data.data);
        // console.log(response.data);
      } 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getFueltype = async () => {
    try {
      const response = await vehicleApi.getFueltype();
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setfuelTypelist(response.data.data);
        // console.log(response.data);
      } 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getOwnertype = async () => {
    try {
      const response = await vehicleApi.getOwnertype();
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setownerTypelist(response.data.data);
        // console.log(response.data);
      } 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getColor = async () => {
    try {
      const response = await vehicleApi.getColor();
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setcolorList(response.data.data);
        // console.log(response.data);
      } 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getRto = async () => {
    try {
      const response = await vehicleApi.getRto();
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setrtoList(response.data.data);
        // console.log(response.data);
      } 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getCity = async () => {
    try {
      const response = await vehicleApi.getCity();
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setCityList(response.data.data);
        // console.log(response.data);
      } 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  const getSeat = async () => {
    try {
      const response = await vehicleApi.getSeat();
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setseatList(response.data.data);
        // console.log(response.data);
      } 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getCarFeatureList = async () => {
    try {
      const response = await vehicleApi.getCarFeature();
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setComfortList(response.data.data[0].labels);
        setSafetyList(response.data.data[1].labels);
        setInteriorList(response.data.data[2].labels);
        setExteriorList(response.data.data[3].labels);
        setEntertainmentList(response.data.data[4].labels);
        // console.log(response.data.data[0].labels);
      } 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInput= async(e)=>{
    
    if (e.target.name === 'brand') {
      setBrand(e.target.value);
    
      const filteredResult = brandlist.filter((item) => item.name == e.target.value);
      // console.log(filteredResult[0].models);
      setModelList(filteredResult[0].models);
    }
    if (e.target.name === 'model') {
      setModel(e.target.value);
    
      const filteredResult = modellist.filter((item) => item.name == e.target.value);
      // console.log(filteredResult[0].variants.length);
      if(filteredResult[0].variants.length>0)
      {
        setVariantList(filteredResult[0].variants);
      }
      
    }
    if(e.target.name === "variant")
    {
      setVariant(e.target.value);
    }
    if (e.target.name === 'regYear') {
      setregYear(e.target.value);
    }
    if (e.target.name === 'bodyType') {
      setbodyType(e.target.value);
    }
    if (e.target.name === 'fuelType') {
      setfuelType(e.target.value);
    }
    if (e.target.name === 'transmission') {
      setTransmission(e.target.value);
    }
    if (e.target.name === 'ownerType') {
      setownerType(e.target.value);
    }
    if (e.target.name === 'color') {
      setColor(e.target.value);
    }
    if (e.target.name === 'rto') {
      setRto(e.target.value);
    }
    if (e.target.name === 'city') {
      setCity(e.target.value);
    }
    if (e.target.name === 'kmsDriven') {
      if(e.target.value!="")
      {
        setkmsDriven(Number(e.target.value));
      }
      else
      {
        setkmsDriven(null);
      }
    }
    if (e.target.name === 'carPrice') {
      setcarPrice(e.target.value);
    }
    if (e.target.name === 'oneClickBuyPrice') {
      setOneClickBuyPrice(e.target.value);
    }
    
    
    if (e.target.name === 'seat') {
      setSeat(e.target.value);
    }
    if (e.target.name === 'mileage') {
      setMileage(e.target.value);
    }
    if (e.target.name === 'engine') {
      setEngine(e.target.value);
    }
    if (e.target.name === 'maxPower') {
      setmaxPower(e.target.value);
    }
    if (e.target.name === 'maxTorque') {
      setMaxTorque(e.target.value);
    }
    if (e.target.name === 'noc') {
      setNoc(e.target.value);
    }
    if (e.target.name === 'mfgYear') {
      setmfgYear(e.target.value);
    }
    if (e.target.name === 'inspectionReport') {
      setInspectionReport(e.target.value);
    }
    if (e.target.name === 'inspectionScore') {
      setInspectionScore(e.target.value);
    }
    if (e.target.name === 'comforts') {
      if (e.target.checked) {
        setComforts([...comforts, e.target.value]);
      } else {
        setComforts(comforts.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }

    if (e.target.name === 'safety') {
      if (e.target.checked) {
        setSafety([...safety, e.target.value]);
      } else {
        setSafety(safety.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }

    if (e.target.name === 'interior') {
      if (e.target.checked) {
        setInterior([...interior, e.target.value]);
      } else {
        setInterior(interior.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }

    if (e.target.name === 'exterior') {
      if (e.target.checked) {
        setExterior([...exterior, e.target.value]);
      } else {
        setExterior(exterior.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }

    if (e.target.name === 'entertainment') {
      if (e.target.checked) {
        setEntertainment([...entertainment, e.target.value]);
      } else {
        setEntertainment(entertainment.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }

    if (e.target.name === 'ThumbnailPhotos' && e.target.files.length > 0) {
      // console.log(e.target.files);
      
      // console.log(e.target.files[0].size);
      if(e.target.files[0].size<5000000)
      {
          setThumbnailPhotos([...ThumbnailPhotos, e.target.files[0]]);
          uploadAuctionImage(e.target.files[0]);
      }
      else
      {
          alert("Image size should be less than 5MB!")
      }
      
      
    }

    if (e.target.name === 'ExteriorPhotos' && e.target.files.length > 0) {
      // console.log(e.target.files);
      if(e.target.files[0].size<5000000)
      {
          setExteriorPhotos([...ExteriorPhotos, e.target.files[0]]);
          uploadAuctionImage2(e.target.files[0]);
      }
      else
      {
          alert("Image size should be less than 5MB!")
      }
      
    }

    if (e.target.name === 'InteriorPhotos' && e.target.files.length > 0) {
      // console.log(e.target.files);
      if(e.target.files[0].size<5000000)
      {
          setInteriorPhotos([...InteriorPhotos, e.target.files[0]]);
          uploadAuctionImage3(e.target.files[0]);
      }
      else
      {
          alert("Image size should be less than 5MB!")
      }
      
    }

    if (e.target.name === 'EnginePhotos' && e.target.files.length > 0) {
      // console.log(e.target.files);
      if(e.target.files[0].size<5000000)
      {
          setEnginePhotos([...EnginePhotos, e.target.files[0]]);
          uploadAuctionImage4(e.target.files[0]);
      }
      else
      {
          alert("Image size should be less than 5MB!")
      }
      
    }

    if (e.target.name === 'TyresPhotos' && e.target.files.length > 0) {
      // console.log(e.target.files);
      if(e.target.files[0].size<5000000)
      {
          setTyresPhotos([...TyresPhotos, e.target.files[0]]);
          uploadAuctionImage5(e.target.files[0]);
      }
      else
      {
          alert("Image size should be less than 5MB!")
      }
    }

    if (e.target.name === 'DentsPhotos' && e.target.files.length > 0) {
      // console.log(e.target.files);
      if(e.target.files[0].size<5000000)
      {
          setDentsPhotos([...DentsPhotos, e.target.files[0]]);
          uploadAuctionImage6(e.target.files[0]);
      }
      else
      {
          alert("Image size should be less than 5MB!")
      }
    }

    if (e.target.name === 'engineVideo' && e.target.files.length > 0) {
     
      // console.log(e.target.files);
      if(e.target.files[0].size<15000000)
      {
          // setEngineVideo(e.target.files[0]);
          setLoader(true);
          uploadAuctionVideo1(e.target.files[0]);
      }
      else
      {
          alert("Image size should be less than 15MB!")
      }
    }
    if (e.target.name === 'silencerVideo' && e.target.files.length > 0) {
     
      // console.log(e.target.files);
      if(e.target.files[0].size<15000000)
      {
          setLoader2(true);
          uploadAuctionVideo2(e.target.files[0]);
      }
      else
      {
          alert("Image size should be less than 15MB!")
      }
    }

    


  }

  const handleRemoveImage = async (id) => {
    setThumbnailPhotos(ThumbnailPhotos.filter((element) => element.name !== id.name));
    setExteriorPhotos(ExteriorPhotos.filter((element) => element.name !== id.name));
    setInteriorPhotos(InteriorPhotos.filter((element) => element.name !== id.name));
    setEnginePhotos(EnginePhotos.filter((element) => element.name !== id.name));
    setTyresPhotos(TyresPhotos.filter((element) => element.name !== id.name));
    setDentsPhotos(DentsPhotos.filter((element) => element.name !== id.name));
  };

  const handleInsuranceDate = (newDate) => {
    setInsuranceValidity(newDate);
    // console.log("current "+newDate);
  };
  const handleRoadTaxValidityDate = (newDate) => {
    setRoadTaxValidity(newDate);
  };
  const handleAuctionStartTime = (newDate) => {
    setAuctionStartTime(newDate);
  };
  const handleAuctionEndTime = (newDate) => {
    setAuctionEndTime(newDate);
  };

  
const uploadAuctionImage= async (data)=>{
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    // setAllcarImage(response.data.data);
    setAllcarImage([...allCarImage, response.data.data]);
    setThumbImage([...thumbImage, response.data.data]);
    setError();
    // console.log(response.data.data);
  }
}

const uploadAuctionImage2= async (data)=>{
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage2(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    setAllcarImage([...allCarImage, response.data.data]);
    // console.log(response.data.data);
  }
}

const uploadAuctionImage3= async (data)=>{
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage3(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    setAllcarImage([...allCarImage, response.data.data]);
    // console.log(response.data.data);
  }
}

const uploadAuctionImage4= async (data)=>{
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage4(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    setAllcarImage([...allCarImage, response.data.data]);
    // console.log(response.data.data);
  }
}

const uploadAuctionImage5= async (data)=>{
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage5(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    setAllcarImage([...allCarImage, response.data.data]);
    // console.log(response.data.data);
  }
}

const uploadAuctionImage6= async (data)=>{
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage6(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    setAllcarImage([...allCarImage, response.data.data]);
    // console.log(response.data.data);
  }
}

const uploadAuctionVideo1= async (data)=>{
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionVideo1(formData);
  setLoader(false);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    setEngineVideo(response.data.data.path);
    setAllcarVideo([...allCarVideo, response.data.data]);
    
    // console.log(response.data.data);
  }
}

const uploadAuctionVideo2= async (data)=>{
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionVideo2(formData);
  setLoader2(false);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    setSilencerVideo(response.data.data.path);
    setAllcarVideo([...allCarVideo, response.data.data]);
    
    // console.log(response.data.data);
  }
}


const handleRemoveVideo = async ()=>{
  setEngineVideo(null);
  setAllcarVideo(prevArray => prevArray.filter(item => item.path !== engineVideo));
}
const handleRemoveVideo2 = async ()=>{
  setSilencerVideo(null);
  setAllcarVideo(prevArray => prevArray.filter(item => item.path !== silencerVideo));
}


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if(thumbImage.length==0)
    {
        setError("Thumbnail Photo is required!")
    }
    else
    {

      setError("");

    const formData={allCarVideo,auctionStartTime,auctionEndTime,thumbImage,allCarImage,brand,model,variant,regYear,bodyType,fuelType,transmission,ownerType,color,rto,city,kmsDriven,carPrice,oneClickBuyPrice,description,seat,mileage,engine,maxPower,maxTorque,noc,mfgYear,inspectionReport,insuranceValidity,roadTaxValidity,inspectionScore,comforts,safety,interior,exterior,entertainment};
    
    // console.log(formData);
  
    
    const response = await vehicleApi.addAuctionVehicle(formData);
    // console.log(response);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    //   // console.log("ok");
      // setPopupopen(true);
      confirm("Car added successfully");
      router.push("/dashboard/auctionvehicle");

    }

    }
  };
    

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

   
const handleCloseBtn = () => {
  setPopupopen(false);
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
                  <Typography variant='h3'>List your car!</Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Brand *</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={brand}
                          label="Select Brand *"
                          onChange={handleInput}
                          name='brand'
                          required
                        >
                          {brandlist.length > 0 && brandlist.map((data,key) => (
                            <MenuItem key={key} value={data.name}>{data.name}</MenuItem>
                          ))}
                          
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Model *</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={model}
                          label="Select Model *"
                          onChange={handleInput}
                          name='model'
                          required
                        >
                          {modellist.length > 0 && modellist.map((data,key) => (
                            <MenuItem key={key} value={data.name}>{data.name}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Variant *</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={variant}
                          label="Select Variant *"
                          onChange={handleInput}
                          name='variant'
                          required
                        >
                          
                          {variantList.length > 0 && variantList.map((data,key) => (
                            <MenuItem key={key} value={data}>{data}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Registration Year *</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={regYear}
                          label="Registration Year *"
                          onChange={handleInput}
                          name='regYear'
                          required
                        >
                          {years.map((year) => (
                              <MenuItem key={year} value={year}>{year}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Body Type *</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={bodyType}
                          label="Select Body Type *"
                          onChange={handleInput}
                          name='bodyType'
                          required
                        >
                          {bodyTypelist.length > 0 && bodyTypelist.map((data,key) => (
                            <MenuItem key={key} value={data.name}>{data.name}</MenuItem>
                          ))}
                          
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Fuel Type *</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={fuelType}
                          label="Select Fuel Type *"
                          onChange={handleInput}
                          name='fuelType'
                          required
                        >
                          {fuelTypelist.length > 0 && fuelTypelist.map((data,key) => (
                            <MenuItem key={key} value={data.name}>{data.name}</MenuItem>
                          ))}
                          
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Transmission*</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={transmission}
                          label="Select Transmission *"
                          onChange={handleInput}
                          name='transmission'
                          required
                        >
                          <MenuItem value="Manual">Manual</MenuItem>
                          <MenuItem value="Automatic">Automatic</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>                  
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Owner Type*</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={ownerType}
                          label="Select Owner Type *"
                          onChange={handleInput}
                          name='ownerType'
                          required
                        >
                          {ownerTypelist.length > 0 && ownerTypelist.map((data,key) => (
                            <MenuItem key={key} value={data.type}>{data.type}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Color*</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={color}
                          label="Select Color *"
                          onChange={handleInput}
                          name='color'
                          required
                        >
                          {colorList.length > 0 && colorList.map((data,key) => (
                            <MenuItem key={key} value={data.name}>{data.name}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select City*</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={city}
                          label="Select City*"
                          onChange={handleInput}
                          name='city'
                          required
                        >
                          {cityList.length > 0 && cityList.map((data,key) => (
                            <MenuItem key={key} value={data.name}>{data.name}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select RTO*</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={rto}
                          label="Select RTO*"
                          onChange={handleInput}
                          name='rto'
                          required
                        >
                          {rtoList.length > 0 && rtoList.map((data,key) => (
                            <MenuItem key={key} value={data.rtoName}>{data.rtoName} ({data.rtoCode})</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <TextField id="outlined-basic" label="Kilometers Driven" onChange={handleInput} name='kmsDriven' type="number" value={kmsDriven} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <TextField id="outlined-basic" label="Your Selling Price" onChange={handleInput} name='carPrice' type="number" value={carPrice} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <TextField id="outlined-basic" label="One Click Buy Price (Optional)" onChange={handleInput} name='oneClickBuyPrice' type="number" value={oneClickBuyPrice} variant="outlined" fullWidth/>
                      <Typography variant='span' sx={{color:'red', marginTop:'5px', display:'block'}}>Note : If you put any value then this car will not show in auction</Typography>
                    </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    {/* <TextField id="outlined-basic" label="Description" onChange={handleInput} name='description' value={description} variant="outlined" required fullWidth/> */}
                    <InputLabel id="demo-simple-select-label">Description</InputLabel> 
                      <QuillEditor
                      name='description'
                      value={description}
                      onChange={handleEditorChange}
                      modules={quillModules}
                      formats={quillFormats}
                      className="w-full h-[70%] mt-10 bg-white"
                    />
                    </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                     <InputLabel id="demo-simple-select-label">Inspection Report</InputLabel> 
                      <QuillEditor
                      name='inspectionReport'
                      value={inspectionReport}
                      onChange={handleEditorChange2}
                      modules={quillModules}
                      formats={quillFormats}
                      className="w-full h-[70%] mt-10 bg-white"
                    />
                    </Box>
                  </Grid>

                 
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Seating Capacity *</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={seat}
                            label="Seating Capacity*"
                            onChange={handleInput}
                            name='seat'
                            required
                          >
                            {seatList.length > 0 && seatList.map((data,key) => (
                            <MenuItem key={key} value={data.noOfSeats}>{data.noOfSeats}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>   
                    
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <TextField id="outlined-basic" label="Mileage in kmpl" onChange={handleInput} name='mileage' type="number" value={mileage} variant="outlined" fullWidth/>
                      </Box>
                  </Grid>                 
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <TextField id="outlined-basic" label="Engine (CC)" onChange={handleInput} name='engine' type="number" value={engine} variant="outlined" required fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <TextField id="outlined-basic" label="Max Power" onChange={handleInput} name='maxPower' type="number" value={maxPower} variant="outlined" fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <TextField id="outlined-basic" label="Max Torque" onChange={handleInput} name='maxTorque' type="number" value={maxTorque} variant="outlined" fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Noc*</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={noc}
                            label="Noc *"
                            onChange={handleInput}
                            name='noc'
                            required
                          >
                            
                            <MenuItem value='true'>True</MenuItem>
                            <MenuItem value='false'>False</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <TextField id="outlined-basic" label="MFG Year" name='mfgYear' onChange={handleInput} value={mfgYear} type="number" variant="outlined" required fullWidth/>
                      </Box>
                  </Grid>
                  
                  <Grid item md={3}>
                        <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date} ${"tm_dashboard_rightbar_form_date_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                          <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DemoContainer components={['DatePicker']}>
                              <DatePicker label="Insurance Validity" onChange={handleInsuranceDate} value={insuranceValidity} sx={{width:'100%'}} required/>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date} ${"tm_dashboard_rightbar_form_date_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                              <DatePicker label="Road Tax Validity" onChange={handleRoadTaxValidityDate} value={roadTaxValidity} sx={{width:'100%'}} required/>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date_time} ${"tm_dashboard_rightbar_form_date_time_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DateTimePicker']}>
                            <DateTimePicker label="Auction Start Time" onChange={handleAuctionStartTime} value={auctionStartTime} sx={{width:'100%'}} required />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Box>
                    </Grid>
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date_time} ${"tm_dashboard_rightbar_form_date_time_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DateTimePicker']}>
                            <DateTimePicker label="Auction End Time" onChange={handleAuctionEndTime} value={auctionEndTime} sx={{width:'100%'}} required />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Box>
                    </Grid>
        
                  
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Inspection Score</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={inspectionScore}
                            label="Seating Capacity*"
                            onChange={handleInput}
                            name='inspectionScore'
                          >
                            
                            <MenuItem value='1'>1</MenuItem>
                            <MenuItem value='2'>2</MenuItem>
                            <MenuItem value='3'>3</MenuItem>
                            <MenuItem value='4'>4</MenuItem>
                            <MenuItem value='5'>5</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      
                  </Grid>
                  
                </Grid>
                <Box className={`${dashboardStyles.tm_dashboard_img_upl} ${"tm_dashboard_img_upl_gb"}`}>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                    <Typography variant='h4'>Upload images</Typography>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Add Thumbnail Photos (Upload only 1 Photo) <Box sx={{color:"red"}}>{error}</Box></Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='ThumbnailPhotos' hidden />
                          </Button>
                          
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {ThumbnailPhotos.length > 0 &&
                          ThumbnailPhotos.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={URL.createObjectURL(element)}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveImage(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Add Exterior Photos (Upload only 5 Photo)</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='ExteriorPhotos' hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {ExteriorPhotos.length > 0 &&
                          ExteriorPhotos.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box>
                                  <Image
                                    src={URL.createObjectURL(element)}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveImage(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>

                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Add Interior Photos (Upload only 5 Photo)</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='InteriorPhotos' hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {InteriorPhotos.length > 0 &&
                          InteriorPhotos.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={URL.createObjectURL(element)}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveImage(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>

                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Add Engine Photos (Upload only 5 Photo)</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='EnginePhotos' hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {EnginePhotos.length > 0 &&
                          EnginePhotos.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={URL.createObjectURL(element)}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveImage(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>

                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Add Tyre Photos (Upload only 5 Photo)</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='TyresPhotos' hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {TyresPhotos.length > 0 &&
                          TyresPhotos.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={URL.createObjectURL(element)}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveImage(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>

                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Add Dent Photos (Upload only 5 Photo)</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='DentsPhotos' hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {DentsPhotos.length > 0 &&
                          DentsPhotos.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={URL.createObjectURL(element)}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveImage(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>

                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Engine Sound Video</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='engineVideo' hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                              
                              <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box>
                                    {engineVideo ? (<>
                                    <video width="200" height="100" controls >
                                      <source src={engineVideo} type="video/mp4"/>
                                    </video>
                                    <Button onClick={() => handleRemoveVideo()}><CloseIcon/> </Button>
                                    </>):(<> {isLoader?(<CircularProgress />):(<></>)}</>)}
                                    
                                </Box>
                              </Box>
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Silencer Video</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='silencerVideo' hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                              
                              <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box>
                                    {silencerVideo ? (<>
                                    <video width="200" height="100" controls >
                                      <source src={silencerVideo} type="video/mp4"/>
                                    </video>
                                    <Button onClick={() => handleRemoveVideo2()}><CloseIcon/> </Button>
                                    </>):(<> {isLoader2?(<CircularProgress />):(<></>)}</>)}
                                    
                                </Box>
                              </Box>
                        </Grid>
                      </Grid>
                  </Box>
                </Box>

                <Box sx={{margin:'50px 0 0'}}>
                  <Grid container spacing={4}>
                    
                    {/* <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Alloy wheels *</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Alloy wheels *"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Spare wheel*</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Spare wheel*"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Turbo chargers*</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Turbo chargers*"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Front break type*</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Front break type*"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <TextField id="outlined-basic" label="Fuel tank capacity (in liters)*" variant="outlined" fullWidth/>
                      </Box>
                    </Grid> */}
                  </Grid>
                </Box>
                <Box sx={{margin:'50px 0 0'}}>
                  <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                      <Typography variant='h4'>Comfort</Typography>
                    </Box>
                    <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}>

                      <Grid container spacing={0}>
                        {comfortList.length > 0 &&
                          comfortList.map((element, index) => {
                            return (
                              <Grid item md={6} key={index}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value={element}
                                      key={index}
                                      name='comforts'
                                      onChange={handleInput}
                                      checked={ Object.values(comforts).includes(element.toString())? true : false }
                                    />
                                  }
                                  label={element}
                                />
                              </Grid>
                            );
                          })}
                      </Grid>

                    </Box>                    
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                      <Typography variant='h4'>Safety</Typography>
                    </Box>
                    <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}>
                          <Grid container spacing={0}>
                                    {safetyList.length > 0 &&
                                      safetyList.map((element, index) => {
                                        return (
                                          <Grid item md={6} key={index}>
                                            <FormControlLabel
                                              control={
                                                <Checkbox
                                                  value={element}
                                                  name='safety'
                                                  key={index}
                                                  onChange={handleInput}
                                                  checked={
                                                    Object.values(safety).includes(element.toString()) ? true : false
                                                  }
                                                />
                                              }
                                              label={element}
                                            />
                                          </Grid>
                                        );
                                      })}
                          </Grid>                     
                    </Box>                    
                  </Box>                 
                  
                  <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                      <Typography variant='h4'>Interior</Typography>
                    </Box>
                    <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}>
                          <Grid container spacing={0}>
                                    {interiorList.length > 0 &&
                                      interiorList.map((element, index) => {
                                        return (
                                          <Grid item md={6} key={index}>
                                            <FormControlLabel
                                              control={
                                                <Checkbox
                                                  key={index}
                                                  name='interior'
                                                  value={element}
                                                  onChange={handleInput}
                                                  checked={
                                                    Object.values(interior).includes(element.toString())
                                                      ? true
                                                      : false
                                                  }
                                                />
                                              }
                                              label={element}
                                            />
                                          </Grid>
                                        );
                                      })}
                          </Grid>                    
                    </Box>                    
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                      <Typography variant='h4'>Exterior</Typography>
                    </Box>
                    <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}>
                            <Grid container spacing={0}>
                                    {exteriorList.length > 0 &&
                                      exteriorList.map((element, index) => {
                                        return (
                                          <Grid item md={6} key={index}>
                                            <FormControlLabel
                                              control={
                                                <Checkbox
                                                  key={index}
                                                  value={element}
                                                  name='exterior'
                                                  onChange={handleInput}
                                                  checked={
                                                    Object.values(exterior).includes(element.toString())
                                                      ? true
                                                      : false
                                                  }
                                                />
                                              }
                                              label={element}
                                            />
                                          </Grid>
                                        );
                                      })}
                              </Grid>                    
                    </Box>                    
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                      <Typography variant='h4'>Entertainment and Communication</Typography>
                    </Box>
                    <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}>
                              <Grid container spacing={0}>
                                    {entertainmentList.length > 0 &&
                                      entertainmentList.map((element, index) => {
                                        return (
                                          <Grid item md={6} key={index}>
                                            <FormControlLabel
                                              control={
                                                <Checkbox
                                                  key={index}
                                                  value={element}
                                                  name='entertainment'
                                                  onChange={handleInput}
                                                  checked={
                                                    Object.values(entertainment).includes(element.toString())
                                                      ? true
                                                      : false
                                                  }
                                                />
                                              }
                                              label={element}
                                            />
                                          </Grid>
                                        );
                                      })}
                                  </Grid>                     
                    </Box>                    
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_rightbar_form_submit_btn}>
                    <Button variant="contained" type='submit'>submit</Button>           
                  </Box>
                </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>      
        <Dialog
        open={popupOpen}
        onClose={handleCloseBtn}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Success Message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have added successfully!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleCloseBtn}>Ok</Button> */}
          <Button onClick={handleCloseBtn} autoFocus>Ok</Button>
        </DialogActions>
      </Dialog>  
      </Box>
    </>
  )
}

export default Create