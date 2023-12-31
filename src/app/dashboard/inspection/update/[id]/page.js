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
import { Margin } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {vehicleApi} from '../../../../../app/service/vehicle';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Link from 'next/link';




function Update({ params }) {  

  const router = useRouter()
  
  // Basic Document Part
  const [docId, setDocId] = useState(null);
  const [inspectionDocId, setInspectionDoc] = useState(null);
  const [years, setYears] = useState([]);
  const [inspectorList,setInspectorList]=useState([]);

  const [inspector, setInspector]=useState("");
  const [custContactNo, setCustContactNo]=useState("");
  const [cityList, setCityList]=useState([]);
  const [city, setCity]=useState("");
  const [regType, setRegType]=useState("");
  const [regNo, setRegNo]=useState("");
  const [rcAvailability, setRcAvailability]=useState("");
  const [rcCondition, setRcCondition]=useState("");
  const [regDate, setRegistrationDate]=useState(null);
  const [fittnessUpto, setFitnessuptoDate]=useState(null);
  const [tobeScraped, setTobeScraped]=useState(null);
  const [regState, setRegState]=useState(null);
  const [rtoList, setrtoList]=useState([]);
  const [rto, setRto]=useState(null);
  const [ownerSerialNo, setOwnerSerialNo]=useState(null);
  const [brandlist, setBrandlist] = useState([]);
  const [brand, setBrand] = useState(null);
  const [modellist, setModelList] = useState([]);
  const [model, setModel] = useState(null);
  const [variantList, setVariantList] = useState([]);
  const [variant, setVariant] = useState(null);
  const [engineNo, setEngineNo] = useState(null);
  const [chassisNo, setChassisNo] = useState(null);
  const [regOwnerName, setRegOwnerName] = useState(null);
  const [mfgMonth, setMfgMonth] = useState(null);
  const [mfgYear, setMfgYear] = useState(null);
  const [fuelTypelist, setfuelTypelist]=useState([]);
  const [fuelType, setfuelType]=useState(null);
  const [cc, setCC]=useState(null);
  const [hypoDetails, setHypoDetails]=useState(null);
  const [seatList, setseatList]=useState([]);
  const [seat, setSeat]=useState(null);
  const [missmatchRC, setMissmatchRC]=useState(null);
  const [roadTax, setRoadTax]=useState(null);
  const [roadTaxValidUpto, setRoadTaxValidUpto]=useState(null);
  const [insurance, setInsurance]=useState(null);
  const [insuranceValidity, setInsuranceValidity]=useState(null);
  const [noClaimBonus, setNoClaimBonus]=useState(null);
  const [missmatchInsurance, setMissmatchInsurance]=useState(null);
  const [duplicateKey, setDuplicateKey]=useState(null);
  const [rtoNoc, setRtoNoc]=useState(null);
  const [rtoNocIssueDate, setRtoNocIssueDate]=useState(null);
  const [commentsOnBasic, setCommentsOnBasic] = useState([]);
  const [rcAvailabilityImages, setRcAvailabilityImages] = useState([]);
  const [chassisImages, setChassisImages] = useState([]);
  const [hypoImages, setHypoImages] = useState([]);
  const [roadTaxValidityImages, setRoadTaxValidityImages] = useState([]);
  const [insuranceImages, setInsuranceImages] = useState([]);
  const [duplicateKeyImages, setDuplicateKeyImages] = useState([]);
  const [rtoNocImages, setRtoNocImages] = useState([]);
  const [isLoader,setLoader]=useState(false);
  const [isLoader2,setLoader2]=useState(false);
  const [isLoader3,setLoader3]=useState(false);
  const [isLoader4,setLoader4]=useState(false);
  const [isLoader5,setLoader5]=useState(false);
  const [isLoader6,setLoader6]=useState(false);
  const [isLoader7,setLoader7]=useState(false);
  const [engine, setEngine]=useState(null);
  const [battery, setBattery]=useState(null);
  const [coolant, setCoolant]=useState(null);
  const [engineOilDipstick, setEngineOilDipstick]=useState(null);
  const [engineOil, setEngineOil]=useState(null);
  const [engineMount, setEngineMount]=useState(null);
  const [engineBlowbyStatus, setEngineBlowbyStatus]=useState(null);
  const [exhaustSmoke, setExhaustSmoke]=useState(null);
  const [radiator, setRadiator]=useState(null);
  const [clutch, setClutch]=useState(null);
  const [gear, setGear]=useState(null);
  const [steering, setSteering]=useState(null);
  const [brake, setBrake]=useState(null);
  const [suspension, setSuspension]=useState(null);
  const [commentsOnEngine, setCommentsOnEngine] = useState([]);
  const [commentsOnTransmission, setCommentsOnTransmission] = useState([]);
  const [fuelLevel, setFuelLevel]=useState(null);
  const [electrical, setElectrical]=useState(null);
  const [rearWiper, setRearWiper]=useState(null);
  const [rearDefogger, setRearDefogger]=useState(null);
  const [powerWindow, setPowerWindow]=useState(null);
  const [rhsFrontPW, setRhsFrontPW]=useState(null);
  const [lhsFrontPW, setLhsFrontPW]=useState(null);
  const [lhsRearPW, setLhsRearPW]=useState(null);
  const [rhsRearPW, setRhsRearPW]=useState(null);
  const [leatherSeats, setLeatherSeats]=useState(null);
  const [fabricSeats, setFabricSeats]=useState(null);
  const [commentsOnInterior, setCommentsOnInterior] = useState([]);
  const [commentsOnElectrical, setCommentsOnElectrical] = useState([]);
  const [bonnet, setBonnet]=useState(null);
  const [upperCrossMember, setUpperCrossMember]=useState(null);
  const [lowerCrossMember, setLowerCrossMember]=useState(null);
  const [radiatorSupport, setRadiatorSupport]=useState(null);
  const [headlightSupport, setHeadlightSupport]=useState(null);
  const [lhsApron, setLhsApron]=useState(null);
  const [rhsApron, setRhsApron]=useState(null);
  const [frontWindshield, setFrontWindshield]=useState(null);
  const [firewall, setFirewall]=useState(null);
  const [cowlTop, setCowlTop]=useState(null);
  const [roof, setRoof]=useState(null);
  const [frontBumper, setFrontBumper]=useState(null);
  const [lhsHeadlamp, setLhsHeadlamp]=useState(null);
  const [rhsHeadlamp, setRhsHeadlamp]=useState(null);
  const [lhsFoglamp, setLhsFoglamp]=useState(null);
  const [rhsFoglamp, setRhsFoglamp]=useState(null);
  const [lhsFender, setLhsFender]=useState(null);
  const [lhsFrontAlloy, setLhsFrontAlloy]=useState(null);
  const [lhsFrontTyre, setLhsFrontTyre]=useState(null);
  const [lhsOrvm, setLhsOrvm]=useState(null);
  const [lhsAPillar, setLhsAPillar]=useState(null);
  const [lhsFrontDoor, setLhsFrontDoor]=useState(null);
  const [lhsBPillar, setLhsBPillar]=useState(null);
  const [lhsRearDoor, setLhsRearDoor]=useState(null);
  const [lhsCPillar, setLhsCPillar]=useState(null);
  const [lhsRunningBoard, setLhsRunningBoard]=useState(null);
  const [lhsRearAlloy, setLhsRearAlloy]=useState(null);
  const [lhsRearTyre, setLhsRearTyre]=useState(null);
  const [lhsQuarterPanel, setLhsQuarterPanel]=useState(null);
  const [rearBumper, setRearBumper]=useState(null);
  const [lhsTailLamp, setLhsTailLamp]=useState(null);
  const [rhsTailLamp, setRhsTailLamp]=useState(null);
  const [rearWindshield, setRearWindshield]=useState(null);
  const [bootDoor, setBootDoor]=useState(null);
  const [spareTyre, setSpareTyre]=useState(null);
  const [bootFloor, setBootFloor]=useState(null);
  const [rhsQuarterPanel, setRhsQuarterPanel]=useState(null);
  const [rhsRearAlloy, setRhsRearAlloy]=useState(null);
  const [rhsRearTyre, setRhsRearTyre]=useState(null);
  const [rhsCPillar, setRhsCPillar]=useState(null);
  const [rhsRearDoor, setRhsRearDoor]=useState(null);
  const [rhsBPillar, setRhsBPillar]=useState(null);
  const [rhsFrontDoor, setRhsFrontDoor]=useState(null);
  const [rhsAPillar, setRhsAPillar]=useState(null);
  const [rhsRunningBoard, setRhsRunningBoard]=useState(null);
  const [rhsFrontAlloy, setRhsFrontAlloy]=useState(null);
  const [rhsFrontTyre, setRhsFrontTyre]=useState(null);
  const [rhsOrvm, setRhsOrvm]=useState(null);
  const [rhsFender, setRhsFender]=useState(null);
  const [commentsOnExterior, setCommentsOnExterior] = useState([]);
  const [noOfAirbags, setNoOfAirbags]=useState(null);
  const [abs, setAbs]=useState(null);
  const [driverSideAB, setDriverSideAB]=useState(null);
  const [codriverSideAB, setCodriverSideAB]=useState(null);
  const [lhsAPillarAB, setLhsAPillarAB]=useState(null);
  const [lhsBPillarAB, setLhsBPillarAB]=useState(null);
  const [lhsCPillarAB, setLhsCPillarAB]=useState(null);
  const [rhsAPillarAB, setRhsAPillarAB]=useState(null);
  const [rhsBPillarAB, setRhsBPillarAB]=useState(null);
  const [rhsCPillarAB, setRhsCPillarAB]=useState(null);
  const [reverseParkingCamera, setReverseParkingCamera]=useState(null);
  const [manualAC, setManualAC]=useState(null);
  const [climateAC, setClimateAC]=useState(null);
  const [musicSystem, setMusicSystem]=useState(null);
  const [stereo, setStereo]=useState(null);
  const [inbuiltSpeaker, setInbuiltSpeaker]=useState(null);
  const [externalSpeaker, setExternalSpeaker]=useState(null);
  const [stearingMountedAudio, setStearingMountedAudio]=useState(null);
  const [sunroof, setSunroof]=useState(null);
  const [odometerReading, setOdometerReading]=useState(null);
  const [commentsOnComfort, setCommentsOnComfort] = useState([]);

  // auction
  const [bodyTypelist, setbodyTypelist]=useState([]);
  const [bodyType, setbodyType]=useState(null);
  const [regYear, setRegYear]=useState(null);
  const [transmission, setTransmission]=useState(null);
  const [ownerTypelist, setownerTypelist]=useState([]);
  const [ownerType, setownerType]=useState(null);
  const [colorList, setcolorList]=useState([]);
  const [color, setColor]=useState(null);
  const [kmsDriven, setkmsDriven]=useState(null);
  const [carPrice, setcarPrice]=useState(null);
  const [oneClickBuyPrice, setOneClickBuyPrice]=useState(null);
  const [description, setDescription]=useState(null);
  const [mileage, setMileage]=useState(null);
  const [maxPower, setmaxPower]=useState(null);
  const [maxTorque, setMaxTorque]=useState(null);
  const [noc, setNoc]=useState(null);
  const [inspectionReport, setInspectionReport]=useState(null);
  const [inspectionScore, setInspectionScore]=useState(null);
  const [comforts, setComforts] = useState([]);
  const [safety, setSafety] = useState([]);
  const [interior, setInterior] = useState([]);
  const [exterior, setExterior] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [carsoldStatus,setCarsoldStatus]=useState(null);
  const [auctionStartTime, setAuctionStartTime]=useState(null);
  const [auctionEndTime, setAuctionEndTime]=useState(null);

  const [comfortList, setComfortList] = useState([]);
  const [safetyList, setSafetyList] = useState([]);
  const [interiorList, setInteriorList] = useState([]);
  const [exteriorList, setExteriorList] = useState([]);
  const [entertainmentList, setEntertainmentList] = useState([]);


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


  const [exteriorImages, setExteriorImages] = useState([]);
  const [dentImages, setDentImages] = useState([]);
  const [tyreImages, setTyreImages] = useState([]);
  const [engineImages, setEngineImages] = useState([]);
  const [interiorImages, setInteriorImages] = useState([]);
  const [safetyImages, setSafetyImages] = useState([]);
  const [comfortImages, setComfortImages] = useState([]);

  const [inspectionPdf, setInspectionPdf] = useState(null);





 
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
    getInspectorList();
    // getInspectionListbyID();

    
  
    const currentYear = new Date().getFullYear();
    const startYear = 2000;
    const yearsArray = [];
    for (let year = startYear; year <= currentYear; year++) {
      yearsArray.push(year);
    }
    setYears(yearsArray);

  }, []); 

  
  

  const getInspectorList = async () => {
    try {
      const response = await vehicleApi.getInspectorList();
            // console.log(response.data.data);
      if (response.data.status === 200) {
        setInspectorList(response.data.data.reverse());
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getMakeModel = async () => {
    try {
      const response2 = await vehicleApi.getMakeModel();
            // console.log(response.data.data);
      if (response2.data.status === 200) {
        setBrandlist(response2.data.data);
        // console.log(response.data.data);
        const data={id:params.id};
        setDocId(params.id);
        const response = await vehicleApi.getInspectionListbyID(data);
            // console.log(response.data.data);
          if (response.data.status === 200) {
            const result=response.data.data.data;

            setInspectionDoc(response.data.data.id);
            const filteredResult = response2.data.data.filter((item) => item.name == result.basicDocuments.brand);
            setModelList(filteredResult[0].models);
            const filteredResult2 = filteredResult[0].models.filter((item) => item.name == result.basicDocuments.model);
            // console.log(filteredResult2[0].variants.length);
            if(filteredResult2[0].variants.length>0)
            {
              setVariantList(filteredResult2[0].variants);
            }

            // basic details
            setInspector(result.inspectorId);
            setCustContactNo(result.basicDocuments.custContactNo);
            setCity(result.basicDocuments.city);
            setRegType(result.basicDocuments.regType);
            setRegNo(result.basicDocuments.regNo);
            setRcAvailability(result.basicDocuments.rcAvailablilty);
            setRcCondition(result.basicDocuments.rcCondition);
            if(result.basicDocuments.regDate!=null)
            {
              const date = new Date(result.basicDocuments.regDate);
              setRegistrationDate(dayjs(date.toLocaleDateString('en-US')));
            }
            if(result.basicDocuments.fittnessUpto!=null)
            {
              const date = new Date(result.basicDocuments.fittnessUpto);
              setFitnessuptoDate(dayjs(date.toLocaleDateString('en-US')));
            }
            setTobeScraped(result.basicDocuments.tobeScraped);
            setRegState(result.basicDocuments.regState);
            setRto(result.basicDocuments.rtoLocation);
            setOwnerSerialNo(result.basicDocuments.ownerSerialNo);
            setBrand(result.basicDocuments.brand);
            setModel(result.basicDocuments.model);
            setVariant(result.basicDocuments.variant);
            setEngineNo(result.basicDocuments.engineNo);
            setChassisNo(result.basicDocuments.chassisNo);
            setRegOwnerName(result.basicDocuments.regOwnerName);
            setMfgMonth(result.basicDocuments.mfgMonth);
            setMfgYear(result.basicDocuments.manufacturingYear);
            setfuelType(result.basicDocuments.fuelType);
            setCC(result.basicDocuments.engineCC);
            setHypoDetails(result.basicDocuments.hypoDetails);
            setSeat(result.basicDocuments.seat);
            setMissmatchRC(result.basicDocuments.missmatchRC);
            setRoadTax(result.basicDocuments.roadTax);
            if(result.basicDocuments.roadTaxValidity!=null)
            {
              const date = new Date(result.basicDocuments.roadTaxValidity);
              setRoadTaxValidUpto(dayjs(date.toLocaleDateString('en-US')));
            }
            setInsurance(result.basicDocuments.insurance);
            if(result.basicDocuments.insuranceValidity!=null)
            {
              const date = new Date(result.basicDocuments.insuranceValidity);
              setInsuranceValidity(dayjs(date.toLocaleDateString('en-US')));
            }
            setNoClaimBonus(result.basicDocuments.noClaimBonus);
            setMissmatchInsurance(result.basicDocuments.missmatchInsurance);
            setDuplicateKey(result.basicDocuments.duplicateKey);
            setRtoNoc(result.basicDocuments.rtoNoc);
            if(result.basicDocuments.rtoNocIssueDate!=null)
            {
              const date = new Date(result.basicDocuments.rtoNocIssueDate);
              setRtoNocIssueDate(dayjs(date.toLocaleDateString('en-US')));
            }
            setCommentsOnBasic(result.basicDocuments.commentsOnBasic);
            setRcAvailabilityImages(result.basicDocuments.rcAvailabilityImages);
            setChassisImages(result.basicDocuments.chassisImages);
            setHypoImages(result.basicDocuments.hypoImages);
            setRoadTaxValidityImages(result.basicDocuments.roadTaxValidityImages);
            setInsuranceImages(result.basicDocuments.insuranceImages);
            setDuplicateKeyImages(result.basicDocuments.duplicateKeyImages);
            setRtoNocImages(result.basicDocuments.rtoNocImages);

            // Engine & Transmission Details
            setEngine(result.engineAndTransmissionDetails.engine);
            setBattery(result.engineAndTransmissionDetails.battery);
            setCoolant(result.engineAndTransmissionDetails.coolant);
            setEngineOilDipstick(result.engineAndTransmissionDetails.engineOilDipstick);
            setEngineOil(result.engineAndTransmissionDetails.engineOil);
            setEngineMount(result.engineAndTransmissionDetails.engineMount);
            setEngineBlowbyStatus(result.engineAndTransmissionDetails.engineBlow);
            setExhaustSmoke(result.engineAndTransmissionDetails.exhaustSmoke);
            setRadiator(result.engineAndTransmissionDetails.radiator);
            setClutch(result.engineAndTransmissionDetails.clutch);
            setGear(result.engineAndTransmissionDetails.gear);
            setSteering(result.engineAndTransmissionDetails.steering);
            setBrake(result.engineAndTransmissionDetails.brake);
            setSuspension(result.engineAndTransmissionDetails.suspension);
            setCommentsOnEngine(result.engineAndTransmissionDetails.commentsOnEngine);
            setCommentsOnTransmission(result.engineAndTransmissionDetails.commentsOnTransmission);

            // Electrical & Interior Details
            setOdometerReading(result.electicalInteriorDetails.odometerReading);
            setFuelLevel(result.electicalInteriorDetails.fuelLevel);
            setElectrical(result.electicalInteriorDetails.electricals);
            setRearWiper(result.electicalInteriorDetails.rearWiper);
            setRearDefogger(result.electicalInteriorDetails.rearDefogger);
            setPowerWindow(result.electicalInteriorDetails.powerWindow);
            setRhsFrontPW(result.electicalInteriorDetails.rhsFrontPowerWindow);
            setLhsFrontPW(result.electicalInteriorDetails.lhsFrontPowerWindow);
            setLhsRearPW(result.electicalInteriorDetails.lhsRearPowerWindow);
            setRhsRearPW(result.electicalInteriorDetails.rhsRearPowerWindow);
            setLeatherSeats(result.electicalInteriorDetails.leatherSeats);
            setFabricSeats(result.electicalInteriorDetails.fabricSeats);
            setCommentsOnInterior(result.electicalInteriorDetails.commentsOnInterior);
            setCommentsOnElectrical(result.electicalInteriorDetails.commentsOnElectrical);

            // Exterior Details
            setBonnet(result.exteriorDetails.bonnet);
            setUpperCrossMember(result.exteriorDetails.upperCrossMember);
            setLowerCrossMember(result.exteriorDetails.lowerCrossMember);
            setRadiatorSupport(result.exteriorDetails.radiatorSupport);
            setHeadlightSupport(result.exteriorDetails.headlightSupport);
            setLhsApron(result.exteriorDetails.lhsApron);
            setRhsApron(result.exteriorDetails.rhsApron);
            setFrontWindshield(result.exteriorDetails.frontWindshield);
            setFirewall(result.exteriorDetails.firewall);
            setCowlTop(result.exteriorDetails.cowlTop);
            setRoof(result.exteriorDetails.roof);
            setFrontBumper(result.exteriorDetails.frontBumper);
            setLhsHeadlamp(result.exteriorDetails.lhsHeadLamp);
            setRhsHeadlamp(result.exteriorDetails.rhsHeadLamp);
            setLhsFoglamp(result.exteriorDetails.lhsFogLamp);
            setRhsFoglamp(result.exteriorDetails.rhsFogLamp);
            setLhsFender(result.exteriorDetails.lhsFender);
            setLhsFrontAlloy(result.exteriorDetails.lhsFrontAlloy);
            setLhsFrontTyre(result.exteriorDetails.lhsFrontTyre);
            setLhsOrvm(result.exteriorDetails.lhsOrvm);
            setLhsAPillar(result.exteriorDetails.lhsAPillar);
            setLhsFrontDoor(result.exteriorDetails.lhsFrontDoor);
            setLhsBPillar(result.exteriorDetails.lhsBPillar);
            setLhsRearDoor(result.exteriorDetails.lhsRearDoor);
            setLhsCPillar(result.exteriorDetails.lhsCPillar);
            setLhsRunningBoard(result.exteriorDetails.lhsRunningBoard);
            setLhsRearAlloy(result.exteriorDetails.lhsRearAlloy);
            setLhsRearTyre(result.exteriorDetails.lhsRearTyre);
            setLhsQuarterPanel(result.exteriorDetails.lhsQuarterPanel);
            setRearBumper(result.exteriorDetails.rearBumper);
            setLhsTailLamp(result.exteriorDetails.lhsTailLamp);
            setRhsTailLamp(result.exteriorDetails.rhsTailLamp);
            setRearWindshield(result.exteriorDetails.rearWindshield);
            setBootDoor(result.exteriorDetails.bootDoor);
            setSpareTyre(result.exteriorDetails.spareTyre);
            setBootFloor(result.exteriorDetails.bootFloor);
            setRhsQuarterPanel(result.exteriorDetails.rhsQuarterPanel);
            setRhsRearAlloy(result.exteriorDetails.rhsRearAlloy);
            setRhsRearTyre(result.exteriorDetails.rhsRearTyre);
            setRhsCPillar(result.exteriorDetails.rhsCPillar);
            setRhsRearDoor(result.exteriorDetails.rhsRearDoor);
            setRhsBPillar(result.exteriorDetails.rhsBPillar);
            setRhsFrontDoor(result.exteriorDetails.rhsFrontDoor);
            setRhsAPillar(result.exteriorDetails.rhsAPillar);
            setRhsRunningBoard(result.exteriorDetails.rhsRunningBoard);
            setRhsFrontAlloy(result.exteriorDetails.rhsFrontAlloy);
            setRhsFrontTyre(result.exteriorDetails.rhsFrontTyre);
            setRhsOrvm(result.exteriorDetails.rhsOrvm);
            setRhsFender(result.exteriorDetails.rhsFender);
            setCommentsOnExterior(result.exteriorDetails.commentsOnExterior);

            // Safety Details
            setNoOfAirbags(result.safetyDetails.noOfAirbags);
            setAbs(result.safetyDetails.abs);
            setDriverSideAB(result.safetyDetails.driverSide);
            setCodriverSideAB(result.safetyDetails.coDriverSide);
            setLhsAPillarAB(result.safetyDetails.lhsApillar);
            setLhsBPillarAB(result.safetyDetails.lhsBpillar);
            setLhsCPillarAB(result.safetyDetails.lhsCpillar);
            setRhsAPillarAB(result.safetyDetails.rhsApillar);
            setRhsBPillarAB(result.safetyDetails.rhsBpillar);
            setRhsCPillarAB(result.safetyDetails.rhsCpillar);
            setReverseParkingCamera(result.safetyDetails.reverseParkingCamera);

            // Comfort & Conveniance
            setManualAC(result.comfortDetails.manualAC);
            setClimateAC(result.comfortDetails.climateControl);
            setMusicSystem(result.comfortDetails.musicSystem);
            setStereo(result.comfortDetails.stereo);
            setInbuiltSpeaker(result.comfortDetails.inbuiltSpeaker);
            setExternalSpeaker(result.comfortDetails.externalSpeaker);
            setStearingMountedAudio(result.comfortDetails.steeringMountedAudioControl);
            setSunroof(result.comfortDetails.sunroof);
            setCommentsOnComfort(result.comfortDetails.commentsOnComfort);

            // Auction Details
            setbodyType(result.basicDocuments.bodyType);
            setRegYear(result.basicDocuments.registrationYear);
            setTransmission(result.basicDocuments.transmission);
            setownerType(result.basicDocuments.ownerType);
            setColor(result.basicDocuments.color);
            setkmsDriven(result.basicDocuments.kmsDriven);
            setDescription(result.basicDocuments.carDescription);
            setMileage(result.basicDocuments.mileage);
            setmaxPower(result.basicDocuments.maxPower);
            setMaxTorque(result.basicDocuments.maxTorque);
            setNoc(result.basicDocuments.noc);
            setInspectionReport(result.basicDocuments.inspectionReport);
            setInspectionScore(result.basicDocuments.inspectionScore);
            setComforts(result.basicDocuments.comfort);
            setSafety(result.basicDocuments.safety);
            setInterior(result.basicDocuments.interior);
            setExterior(result.basicDocuments.exterior);
            setEntertainment(result.basicDocuments.entertainment);

            // Images
            setExteriorImages(result.exteriorDetails.exteriorImages);
            setDentImages(result.exteriorDetails.dentImages);
            setTyreImages(result.exteriorDetails.tyreImages);
            setEngineImages(result.engineAndTransmissionDetails.engineImages);
            setInteriorImages(result.electicalInteriorDetails.interiorImages);
            setSafetyImages(result.safetyDetails.safetyImages);
            setComfortImages(result.comfortDetails.comfortImages);
            setEngineVideo(result.engineAndTransmissionDetails.engineVideo);
            setSilencerVideo(result.engineAndTransmissionDetails.exhaustSmokeVideo);
            const imagePath=[{
              'path':result.basicDocuments.imagePath,
              'type':'THUMB'
            }];
            setThumbImage(imagePath);

            // inspection PDF
            
            setInspectionPdf(result.pdfUrl);

            const getAuctionDetails = await vehicleApi.getAuctionDetails(data);
            if (getAuctionDetails.data.status === 200)
            {
                // setAuctionDetails(getAuctionDetails.data.data);
                setCarsoldStatus(getAuctionDetails.data.data.isSoldOut);
                if(getAuctionDetails.data.data.oneClickBuyPrice)
                {
                  setOneClickBuyPrice(getAuctionDetails.data.data.oneClickBuyPrice);
                }
                

                //startAuction
                if(getAuctionDetails.data.data.startTime!=0)
                {
                  const date = new Date(getAuctionDetails.data.data.startTime);
                  const year = date.getFullYear();
                  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
                  const day = date.getDate().toString().padStart(2, '0');
                  const hours = date.getHours().toString().padStart(2, '0');
                  const minutes = date.getMinutes().toString().padStart(2, '0');
                  const AuctionStartTime = `${year}-${month}-${day}T${hours}:${minutes}`;
                  setAuctionStartTime(dayjs(AuctionStartTime));
                }
                

                //endAuction
                if(getAuctionDetails.data.data.endTime!=0)
                {
                  const date2 = new Date(getAuctionDetails.data.data.endTime);
                  const year2 = date2.getFullYear();
                  const month2 = (date2.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
                  const day2 = date2.getDate().toString().padStart(2, '0');
                  const hours2 = date2.getHours().toString().padStart(2, '0');
                  const minutes2 = date2.getMinutes().toString().padStart(2, '0');
                  const AuctionEndTime = `${year2}-${month2}-${day2}T${hours2}:${minutes2}`;
                  setAuctionEndTime(dayjs(AuctionEndTime));
                }
                

                // setThumbImage(getAuctionDetails.data.data.carDetails.imagePath);
                
            }

            const carDetails = await vehicleApi.getAuctionCarDetails(data);
          if (carDetails.data.status === 200) {
            const result=carDetails.data.data;
         
            setcarPrice(result.carPrice);
            
            setAllcarImage(result.images);

            // if(result.properties.insuranceValidity!=null)
            // {
            //   const date = new Date(result.properties.insuranceValidity);
            //   setInsuranceValidity(dayjs(date.toLocaleDateString('en-US')));
            // }
            
            // if(result.properties.roadTaxValidity!=null)
            // {
            //   const date2 = new Date(result.properties.roadTaxValidity);
            //   setRoadTaxValidity(dayjs(date2.toLocaleDateString('en-US')));
            // }
           
            
            // const thumbImages = result.images.filter((item) => item.type == "THUMB");
            // setThumbImages(thumbImages);

            // const extImages = result.images.filter((item) => item.type == "EXT");
            // setExtImages(extImages);

            // const intImages = result.images.filter((item) => item.type == "INT");
            // setIntImages(intImages);

            // const engineImages = result.images.filter((item) => item.type == "ENGINE");
            // setEngineImages(engineImages);

            // const tyreImages = result.images.filter((item) => item.type == "TYRE");
            // settyreImages(tyreImages);

            // const dentImages = result.images.filter((item) => item.type == "DENT");
            // setdentImages(dentImages);

            if(result.videos)
            {
                setAllcarVideo(result.videos);
              
                const engineVideo = result.videos.filter((item) => item.type == "ENGINE");
                if(engineVideo.length>0)
                {
                  setEngineVideo(engineVideo[0].path);
                }
                
                const silencerVideo = result.videos.filter((item) => item.type == "SILENCER");
                if(silencerVideo.length>0)
                {
                  setSilencerVideo(silencerVideo[0].path);
                }
            }
            
            
          }
    
            
          }
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
    
    // Basic Document Part
   
    if (e.target.name === 'inspector') {
      setInspector(e.target.value);
    }
    if (e.target.name === 'custContactNo') {
      setCustContactNo(e.target.value);
    }
    if (e.target.name === 'city') {
      setCity(e.target.value);
    }
    if (e.target.name === 'regType') {
      setRegType(e.target.value);
    }
    if (e.target.name === 'noc') {
      setNoc(e.target.value);
    }
    if (e.target.name === 'regNo') {
      setRegNo(e.target.value);
    }
    if (e.target.name === 'rcAvailability') {
      setRcAvailability(e.target.value);
    }
    if (e.target.name === 'rcCondition') {
      setRcCondition(e.target.value);
    }
    if (e.target.name === 'tobeScraped') {
      setTobeScraped(e.target.value);
    }
    if (e.target.name === 'regState') {
      setRegState(e.target.value);
    }
    if (e.target.name === 'rto') {
      setRto(e.target.value);
    }
    if (e.target.name === 'ownerSerialNo') {
      setOwnerSerialNo(e.target.value);
    }
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
    if(e.target.name === "engineNo")
    {
      setEngineNo(e.target.value);
    }
    if(e.target.name === "odometerReading")
    {
      if(e.target.value!='')
      {
        setOdometerReading(Number(e.target.value));
      }
      else
      {
        setOdometerReading(null);
      }
      
    }
    
    if(e.target.name === "chassisNo")
    {
      setChassisNo(e.target.value);
    }
    if(e.target.name === "regOwnerName")
    {
      setRegOwnerName(e.target.value);
    }
    if(e.target.name === "mfgMonth")
    {
      setMfgMonth(e.target.value);
    }
    if(e.target.name === "mfgYear")
    {
      setMfgYear(e.target.value);
    }
    if (e.target.name === 'fuelType') {
      setfuelType(e.target.value);
    }
    if (e.target.name === 'cc') {
      if(e.target.value!="")
      {
        setCC(Number(e.target.value));
      }
      else
      {
        setCC(null);
      }
      
    }
    if (e.target.name === 'hypoDetails') {
      setHypoDetails(e.target.value);
    }
    if (e.target.name === 'seat') {
      setSeat(e.target.value);
    }
    if (e.target.name === 'missmatchRC') {
      setMissmatchRC(e.target.value);
    }
    if (e.target.name === 'roadTax') {
      setRoadTax(e.target.value);
    }
    if (e.target.name === 'insurance') {
      setInsurance(e.target.value);
    }
    if (e.target.name === 'noClaimBonus') {
      setNoClaimBonus(e.target.value);
    }
    if (e.target.name === 'missmatchInsurance') {
      setMissmatchInsurance(e.target.value);
    }
    if (e.target.name === 'duplicateKey') {
      setDuplicateKey(e.target.value);
    }
    if (e.target.name === 'rtoNoc') {
      setRtoNoc(e.target.value);
    }
    if (e.target.name === 'commentsOnBasic') {
      if (e.target.checked) {
        setCommentsOnBasic([...commentsOnBasic, e.target.value]);
      } else {
        setCommentsOnBasic(commentsOnBasic.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }
    if (e.target.name === 'rcAvailabilityImages' && e.target.files.length > 0) {
        uploadInspectionImage(e.target.files[0]);
    }
    if (e.target.name === 'chassisImages' && e.target.files.length > 0) {
        uploadInspectionImage2(e.target.files[0]);
    }
    if (e.target.name === 'hypoImages' && e.target.files.length > 0) {
      uploadInspectionImage3(e.target.files[0]);
    }
    if (e.target.name === 'roadTaxValidityImages' && e.target.files.length > 0) {
      uploadInspectionImage4(e.target.files[0]);
    }
    if (e.target.name === 'insuranceImages' && e.target.files.length > 0) {
      uploadInspectionImage5(e.target.files[0]);
    }
    if (e.target.name === 'duplicateKeyImages' && e.target.files.length > 0) {
      uploadInspectionImage6(e.target.files[0]);
    }
    if (e.target.name === 'rtoNocImages' && e.target.files.length > 0) {
      uploadInspectionImage7(e.target.files[0]);
    }
    if (e.target.name === 'engine') {
      setEngine(e.target.value);
    }
    if (e.target.name === 'battery') {
      setBattery(e.target.value);
    }
    if (e.target.name === 'coolant') {
      setCoolant(e.target.value);
    }
    if (e.target.name === 'engineOilDipstick') {
      setEngineOilDipstick(e.target.value);
    }
    if (e.target.name === 'engineOil') {
      setEngineOil(e.target.value);
    }
    if (e.target.name === 'engineMount') {
      setEngineMount(e.target.value);
    }
    if (e.target.name === 'engineBlowbyStatus') {
      setEngineBlowbyStatus(e.target.value);
    }
    if (e.target.name === 'exhaustSmoke') {
      setExhaustSmoke(e.target.value);
    }
    if (e.target.name === 'radiator') {
      setRadiator(e.target.value);
    }
    if (e.target.name === 'clutch') {
      setClutch(e.target.value);
    }
    if (e.target.name === 'gear') {
      setGear(e.target.value);
    }
    if (e.target.name === 'steering') {
      setSteering(e.target.value);
    }
    if (e.target.name === 'brake') {
      setBrake(e.target.value);
    }
    if (e.target.name === 'suspension') {
      setSuspension(e.target.value);
    }
    if (e.target.name === 'commentsOnEngine') {
      if (e.target.checked) {
        setCommentsOnEngine([...commentsOnEngine, e.target.value]);
      } else {
        setCommentsOnEngine(commentsOnEngine.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }
    if (e.target.name === 'commentsOnTransmission') {
      if (e.target.checked) {
        setCommentsOnTransmission([...commentsOnTransmission, e.target.value]);
      } else {
        setCommentsOnTransmission(commentsOnTransmission.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }
    if (e.target.name === 'fuelLevel') {
      setFuelLevel(e.target.value);
    }
    if (e.target.name === 'electrical') {
      setElectrical(e.target.value);
    }
    if (e.target.name === 'rearWiper') {
      setRearWiper(e.target.value);
    }
    if (e.target.name === 'rearDefogger') {
      setRearDefogger(e.target.value);
    }
    if (e.target.name === 'powerWindow') {
      setPowerWindow(e.target.value);
    }
    if (e.target.name === 'rhsFrontPW') {
      setRhsFrontPW(e.target.value);
    }
    if (e.target.name === 'lhsFrontPW') {
      setLhsFrontPW(e.target.value);
    }
    if (e.target.name === 'lhsRearPW') {
      setLhsRearPW(e.target.value);
    }
    if (e.target.name === 'rhsRearPW') {
      setRhsRearPW(e.target.value);
    }
    if (e.target.name === 'leatherSeats') {
      setLeatherSeats(e.target.value);
    }
    if (e.target.name === 'fabricSeats') {
      setFabricSeats(e.target.value);
    }
    if (e.target.name === 'commentsOnInterior') {
      if (e.target.checked) {
        setCommentsOnInterior([...commentsOnInterior, e.target.value]);
      } else {
        setCommentsOnInterior(commentsOnInterior.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }
    if (e.target.name === 'commentsOnElectrical') {
      if (e.target.checked) {
        setCommentsOnElectrical([...commentsOnElectrical, e.target.value]);
      } else {
        setCommentsOnElectrical(commentsOnElectrical.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }
    if (e.target.name === 'bonnet') {
      setBonnet(e.target.value);
    }
    if (e.target.name === 'upperCrossMember') {
      setUpperCrossMember(e.target.value);
    }
    if (e.target.name === 'lowerCrossMember') {
      setLowerCrossMember(e.target.value);
    }
    if (e.target.name === 'radiatorSupport') {
      setRadiatorSupport(e.target.value);
    }
    if (e.target.name === 'headlightSupport') {
      setHeadlightSupport(e.target.value);
    }
    if (e.target.name === 'lhsApron') {
      setLhsApron(e.target.value);
    }
    if (e.target.name === 'rhsApron') {
      setRhsApron(e.target.value);
    }
    if (e.target.name === 'frontWindshield') {
      setFrontWindshield(e.target.value);
    }
    if (e.target.name === 'firewall') {
      setFirewall(e.target.value);
    }
    if (e.target.name === 'cowlTop') {
      setCowlTop(e.target.value);
    }
    if (e.target.name === 'roof') {
      setRoof(e.target.value);
    }
    if (e.target.name === 'frontBumper') {
      setFrontBumper(e.target.value);
    }
    if (e.target.name === 'lhsHeadlamp') {
      setLhsHeadlamp(e.target.value);
    }
    if (e.target.name === 'rhsHeadlamp') {
      setRhsHeadlamp(e.target.value);
    }
    if (e.target.name === 'lhsFoglamp') {
      setLhsFoglamp(e.target.value);
    }
    if (e.target.name === 'rhsFoglamp') {
      setRhsFoglamp(e.target.value);
    }
    if (e.target.name === 'lhsFender') {
      setLhsFender(e.target.value);
    }
    if (e.target.name === 'lhsFrontAlloy') {
      setLhsFrontAlloy(e.target.value);
    }
    if (e.target.name === 'lhsFrontTyre') {
      setLhsFrontTyre(e.target.value);
    }
    if (e.target.name === 'lhsOrvm') {
      setLhsOrvm(e.target.value);
    }
    if (e.target.name === 'lhsAPillar') {
      setLhsAPillar(e.target.value);
    }
    if (e.target.name === 'lhsFrontDoor') {
      setLhsFrontDoor(e.target.value);
    }
    if (e.target.name === 'lhsBPillar') {
      setLhsBPillar(e.target.value);
    }
    if (e.target.name === 'lhsRearDoor') {
      setLhsRearDoor(e.target.value);
    }
    if (e.target.name === 'lhsCPillar') {
      setLhsCPillar(e.target.value);
    }
    if (e.target.name === 'lhsRunningBoard') {
      setLhsRunningBoard(e.target.value);
    }
    if (e.target.name === 'lhsRearAlloy') {
      setLhsRearAlloy(e.target.value);
    }
    if (e.target.name === 'lhsRearTyre') {
      setLhsRearTyre(e.target.value);
    }
    if (e.target.name === 'lhsQuarterPanel') {
      setLhsQuarterPanel(e.target.value);
    }
    if (e.target.name === 'rearBumper') {
      setRearBumper(e.target.value);
    }
    if (e.target.name === 'lhsTailLamp') {
      setLhsTailLamp(e.target.value);
    }
    if (e.target.name === 'rhsTailLamp') {
      setRhsTailLamp(e.target.value);
    }
    if (e.target.name === 'rearWindshield') {
      setRearWindshield(e.target.value);
    }
    if (e.target.name === 'bootDoor') {
      setBootDoor(e.target.value);
    }
    if (e.target.name === 'spareTyre') {
      setSpareTyre(e.target.value);
    }
    if (e.target.name === 'bootFloor') {
      setBootFloor(e.target.value);
    }
    if (e.target.name === 'rhsQuarterPanel') {
      setRhsQuarterPanel(e.target.value);
    }
    if (e.target.name === 'rhsRearAlloy') {
      setRhsRearAlloy(e.target.value);
    }
    if (e.target.name === 'rhsRearTyre') {
      setRhsRearTyre(e.target.value);
    }
    if (e.target.name === 'rhsCPillar') {
      setRhsCPillar(e.target.value);
    }
    if (e.target.name === 'rhsRearDoor') {
      setRhsRearDoor(e.target.value);
    }
    if (e.target.name === 'rhsBPillar') {
      setRhsBPillar(e.target.value);
    }
    if (e.target.name === 'rhsFrontDoor') {
      setRhsFrontDoor(e.target.value);
    }
    if (e.target.name === 'rhsAPillar') {
      setRhsAPillar(e.target.value);
    }
    if (e.target.name === 'rhsRunningBoard') {
      setRhsRunningBoard(e.target.value);
    }
    if (e.target.name === 'rhsFrontAlloy') {
      setRhsFrontAlloy(e.target.value);
    }
    if (e.target.name === 'rhsFrontTyre') {
      setRhsFrontTyre(e.target.value);
    }
    if (e.target.name === 'rhsOrvm') {
      setRhsOrvm(e.target.value);
    }
    if (e.target.name === 'rhsFender') {
      setRhsFender(e.target.value);
    }
    if (e.target.name === 'commentsOnExterior') {
      if (e.target.checked) {
        setCommentsOnExterior([...commentsOnExterior, e.target.value]);
      } else {
        setCommentsOnExterior(commentsOnExterior.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }
    if (e.target.name === 'noOfAirbags') {
      if(e.target.value!="")
      {
        setNoOfAirbags(Number(e.target.value));
      }
      else
      {
        setNoOfAirbags(null);
      }
      
    }
    if (e.target.name === 'abs') {
      setAbs(e.target.value);
    }
    if (e.target.name === 'driverSideAB') {
      setDriverSideAB(e.target.value);
    }
    if (e.target.name === 'codriverSideAB') {
      setCodriverSideAB(e.target.value);
    }
    if (e.target.name === 'lhsAPillarAB') {
      setLhsAPillarAB(e.target.value);
    }
    if (e.target.name === 'lhsBPillarAB') {
      setLhsBPillarAB(e.target.value);
    }
    if (e.target.name === 'lhsCPillarAB') {
      setLhsCPillarAB(e.target.value);
    }
    if (e.target.name === 'rhsAPillarAB') {
      setRhsAPillarAB(e.target.value);
    }
    if (e.target.name === 'rhsBPillarAB') {
      setRhsBPillarAB(e.target.value);
    }
    if (e.target.name === 'rhsCPillarAB') {
      setRhsCPillarAB(e.target.value);
    }
    if (e.target.name === 'reverseParkingCamera') {
      setReverseParkingCamera(e.target.value);
    }
    if (e.target.name === 'manualAC') {
      setManualAC(e.target.value);
    }
    if (e.target.name === 'climateAC') {
      setClimateAC(e.target.value);
    }
    if (e.target.name === 'musicSystem') {
      setMusicSystem(e.target.value);
    }
    if (e.target.name === 'stereo') {
      setStereo(e.target.value);
    }
    if (e.target.name === 'inbuiltSpeaker') {
      setInbuiltSpeaker(e.target.value);
    }
    if (e.target.name === 'externalSpeaker') {
      setExternalSpeaker(e.target.value);
    }
    if (e.target.name === 'stearingMountedAudio') {
      setStearingMountedAudio(e.target.value);
    }
    if (e.target.name === 'sunroof') {
      setSunroof(e.target.value);
    }
    if (e.target.name === 'commentsOnComfort') {
      if (e.target.checked) {
        setCommentsOnComfort([...commentsOnComfort, e.target.value]);
      } else {
        setCommentsOnComfort(commentsOnComfort.filter((element) => Number(element) !== Number(e.target.value)));
      }
    }
    
    // auction details
    if (e.target.name === 'regYear') {
      setRegYear(e.target.value);
    }
    if (e.target.name === 'bodyType') {
      setbodyType(e.target.value);
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
      if(e.target.value=="")
      {
        setcarPrice(null);
      }
      else
      {
        setcarPrice(Number(e.target.value));
      }
    }
    if (e.target.name === 'oneClickBuyPrice') {
      if(e.target.value=="")
      {
        setOneClickBuyPrice(null);
      }
      else
      {
        setOneClickBuyPrice(Number(e.target.value));
      }
      
    }
    if (e.target.name === 'description') {
      setDescription(e.target.value);
    }
    if (e.target.name === 'mileage') {
      if(e.target.value!="")
      {
        setMileage(Number(e.target.value));
      }
      else
      {
        setMileage(null);
      }
    }
    if (e.target.name === 'maxPower') {
      if(e.target.value!="")
      {
        setmaxPower(Number(e.target.value));
      }
      else
      {
        setmaxPower(null);
      }
    }
    if (e.target.name === 'maxTorque') {
      if(e.target.value!="")
      {
        setMaxTorque(Number(e.target.value));
      }
      else
      {
        setMaxTorque(null);
      }
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
          uploadAuctionImage(e.target.files[0]);
    }

    if (e.target.name === 'ExteriorPhotos' && e.target.files.length > 0) {
          uploadAuctionImage2(e.target.files[0]);
    }

    if (e.target.name === 'InteriorPhotos' && e.target.files.length > 0) {
          uploadAuctionImage3(e.target.files[0]);
    }

    if (e.target.name === 'EnginePhotos' && e.target.files.length > 0) {
          uploadAuctionImage4(e.target.files[0]);   
    }

    if (e.target.name === 'TyresPhotos' && e.target.files.length > 0) {
          uploadAuctionImage5(e.target.files[0]);
    }

    if (e.target.name === 'DentsPhotos' && e.target.files.length > 0) {
          uploadAuctionImage6(e.target.files[0]);
    }

    if (e.target.name === 'safetyImages' && e.target.files.length > 0) {
      uploadAuctionImage7(e.target.files[0]);
    }
    if (e.target.name === 'comfortImages' && e.target.files.length > 0) {
      uploadAuctionImage8(e.target.files[0]);
    }

    if (e.target.name === 'engineVideo' && e.target.files.length > 0) {
          setLoader(true);
          uploadAuctionVideo1(e.target.files[0]);
    }
    if (e.target.name === 'silencerVideo' && e.target.files.length > 0) {
          setLoader2(true);
          uploadAuctionVideo2(e.target.files[0]);
    }
    if (e.target.name === 'inspectionPdf' && e.target.files.length > 0) {
      // console.log("ok proceed");
      uploadInspectionPdf(e.target.files[0]);
    }
    
    
    

  }


  
  const uploadInspectionPdf= async (data)=>{
    //inspection pdf
    const formData = new FormData();
      formData.append('file', data);
    const response = await vehicleApi.uploadInspectionPdf(formData);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      // console.log(response.data.data);
      setInspectionPdf(response.data.data); 
    }
  }
   
const uploadAuctionImage= async (data)=>{
  // thumbnail image
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    setAllcarImage([...allCarImage, response.data.data]);
    setThumbImage([...thumbImage, response.data.data]);
    
  }
}

const uploadAuctionImage2= async (data)=>{
  // exterior images
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage2(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    setExteriorImages([...exteriorImages, response.data.data]);
    setAllcarImage([...allCarImage, response.data.data]);
  
    // console.log(response.data.data);
  }
}

const uploadAuctionImage3= async (data)=>{
  // interior images
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage3(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {

    setInteriorImages([...interiorImages, response.data.data]);
    setAllcarImage([...allCarImage, response.data.data]);

  }
}

const uploadAuctionImage4= async (data)=>{
  // engine images
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage4(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    setEngineImages([...engineImages, response.data.data]);
    setAllcarImage([...allCarImage, response.data.data]);
  }
}

const uploadAuctionImage5= async (data)=>{
  // tyre images
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage5(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    setTyreImages([...tyreImages, response.data.data]);
    setAllcarImage([...allCarImage, response.data.data]);
    // console.log(response.data.data);
  }
}

const uploadAuctionImage6= async (data)=>{
  // dent images
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage6(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    // console.log(response);
    setDentImages([...dentImages, response.data.data]);
    setAllcarImage([...allCarImage, response.data.data]);
    // console.log(response.data.data);
  }
}
const uploadAuctionImage7= async (data)=>{
  // safety images
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage7(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    setSafetyImages([...safetyImages, response.data.data]);
  }
}

const uploadAuctionImage8= async (data)=>{
  // safety images
  const formData = new FormData();
    formData.append('file', data);
  const response = await vehicleApi.uploadAuctionImage8(formData);
  if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
    setComfortImages([...comfortImages, response.data.data]);
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
    setAllcarVideo([...allCarVideo,response.data.data]);
    setAllcarVideo(prevArray => prevArray.filter(item => item.path !== engineVideo));
    
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
    setAllcarVideo(prevArray => prevArray.filter(item => item.path !== silencerVideo));
    
    // console.log(response.data.data);
  }
}

const handleRemoveVideo = async ()=>{
  setEngineVideo(null);
  
}
const handleRemoveVideo2 = async ()=>{
  setSilencerVideo(null);
  
}

  const handleRegistrationDate = (newDate) => {
    setRegistrationDate(newDate);
  };
  const handleFitnessuptoDate = (newDate) => {
    setFitnessuptoDate(newDate);
  };
  const handleRoadTaxValid = (newDate) => {
    setRoadTaxValidUpto(newDate);
  };
  const handleInsuranceValidity = (newDate) => {
    setInsuranceValidity(newDate);
  };
  const handleRtoNocIssueDate = (newDate) => {
    setRtoNocIssueDate(newDate);
  };
  
  
  const uploadInspectionImage= async (data)=>{
    const formData = new FormData();
      formData.append('file', data);
      setLoader(true);
    const response = await vehicleApi.uploadInspectionImage(formData);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      // console.log(response.data.data);
      setLoader(false);
      setRcAvailabilityImages([...rcAvailabilityImages, response.data.data.path]);
    }
    else
    {
      setLoader(false);
    }
  }
  const uploadInspectionImage2= async (data)=>{
    const formData = new FormData();
      formData.append('file', data);
      setLoader2(true);
    const response = await vehicleApi.uploadInspectionImage(formData);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      // console.log(response.data.data);
      setLoader2(false);
      setChassisImages([...chassisImages, response.data.data.path]);
    }
    else
    {
      setLoader2(false);
    }
  }

  const uploadInspectionImage3= async (data)=>{
    const formData = new FormData();
      formData.append('file', data);
      setLoader3(true);
    const response = await vehicleApi.uploadInspectionImage(formData);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      // console.log(response.data.data);
      setLoader3(false);
      setHypoImages([...hypoImages, response.data.data.path]);
    }
    else
    {
      setLoader3(false);
    }
  }

  const uploadInspectionImage4= async (data)=>{
    const formData = new FormData();
      formData.append('file', data);
      setLoader4(true);
    const response = await vehicleApi.uploadInspectionImage(formData);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      // console.log(response.data.data);
      setLoader4(false);
      setRoadTaxValidityImages([...roadTaxValidityImages, response.data.data.path]);
    }
    else
    {
      setLoader4(false);
    }
  }

  const uploadInspectionImage5= async (data)=>{
    const formData = new FormData();
      formData.append('file', data);
      setLoader5(true);
    const response = await vehicleApi.uploadInspectionImage(formData);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      // console.log(response.data.data);
      setLoader5(false);
      setInsuranceImages([...insuranceImages, response.data.data.path]);
    }
    else
    {
      setLoader5(false);
    }
  }

  const uploadInspectionImage6= async (data)=>{
    const formData = new FormData();
      formData.append('file', data);
      setLoader6(true);
    const response = await vehicleApi.uploadInspectionImage(formData);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      // console.log(response.data.data);
      setLoader6(false);
      setDuplicateKeyImages([...duplicateKeyImages, response.data.data.path]);
    }
    else
    {
      setLoader6(false);
    }
  }

  const uploadInspectionImage7= async (data)=>{
    const formData = new FormData();
      formData.append('file', data);
      setLoader7(true);
    const response = await vehicleApi.uploadInspectionImage(formData);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      // console.log(response.data.data);
      setLoader7(false);
      setRtoNocImages([...rtoNocImages, response.data.data.path]);
    }
    else
    {
      setLoader7(false);
    }
  }



  const handleRemovercAvailabilityImages =async (ImageName)=>{
    setRcAvailabilityImages(prevArray => prevArray.filter(item => item !== ImageName));
  }
  const handleRemoveChassisImages =async (ImageName)=>{
    setChassisImages(prevArray => prevArray.filter(item => item !== ImageName));
  }
  const handleRemoveHypoImages =async (ImageName)=>{
    setHypoImages(prevArray => prevArray.filter(item => item !== ImageName));
  }
  const handleRemoveRoadTaxValidityImages =async (ImageName)=>{
    setRoadTaxValidityImages(prevArray => prevArray.filter(item => item !== ImageName));
  }
  const handleRemoveInsuranceImages =async (ImageName)=>{
    setInsuranceImages(prevArray => prevArray.filter(item => item !== ImageName));
  }
  const handleRemoveDuplicateKeyImages =async (ImageName)=>{
    setDuplicateKeyImages(prevArray => prevArray.filter(item => item !== ImageName));
  }
  const handleRemoveRtoNocImages =async (ImageName)=>{
    setRtoNocImages(prevArray => prevArray.filter(item => item !== ImageName));
  }
  const handleRemoveExteriorImage =async (ImageName)=>{
    setExteriorImages(prevArray => prevArray.filter(item => item.path !== ImageName));
    setAllcarImage(prevArray => prevArray.filter(item => item.path !== ImageName));
    
  }
  const handleRemoveTyreImage =async (ImageName)=>{
    setTyreImages(prevArray => prevArray.filter(item => item.path !== ImageName));
    setAllcarImage(prevArray => prevArray.filter(item => item.path !== ImageName));
    
  }
  const handleRemoveDentImage =async (ImageName)=>{
    setDentImages(prevArray => prevArray.filter(item => item.path !== ImageName));
    setAllcarImage(prevArray => prevArray.filter(item => item.path !== ImageName));
    
  }
  const handleRemoveThumbnailImage =async (ImageName)=>{
    setThumbImage(prevArray => prevArray.filter(item => item.path !== ImageName));
    setAllcarImage(prevArray => prevArray.filter(item => item.path !== ImageName));
    
  }
  const handleRemoveEngineImage =async (ImageName)=>{
    setEngineImages(prevArray => prevArray.filter(item => item.path !== ImageName));
    setAllcarImage(prevArray => prevArray.filter(item => item.path !== ImageName));
   
  }
  const handleRemoveInteriorImage =async (ImageName)=>{
    setInteriorImages(prevArray => prevArray.filter(item => item.path !== ImageName));
    setAllcarImage(prevArray => prevArray.filter(item => item.path !== ImageName));
   
  }
  const handleRemoveSafetyImage =async (ImageName)=>{
    setSafetyImages(prevArray => prevArray.filter(item => item.path !== ImageName));
  }
  const handleRemoveComfortImage =async (ImageName)=>{
    setComfortImages(prevArray => prevArray.filter(item => item.path !== ImageName));
  }

  const handleRemoveInspectionPdf =async (e)=>{
    setInspectionPdf(null);
  }
  
  
  const handleAuctionStartTime = (newDate) => {
    setAuctionStartTime(newDate);
    // console.log(newDate);
  };
  const handleAuctionEndTime = (newDate) => {
    setAuctionEndTime(newDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if(thumbImage.length==0)
    {
        alert("Thumbnail Photo is required!")
    }
    else if(thumbImage.length>1)
    {
        alert("Only One Thumbnail Photo will accept!")
    }
    else
    {
    

    const formData={docId,inspectionDocId,inspector,custContactNo,city,regType,regNo,rcAvailability,rcCondition,regDate,fittnessUpto,tobeScraped,regState,rto,ownerSerialNo,brand,
      model,variant,engineNo,chassisNo,regOwnerName,mfgMonth,mfgYear,fuelType,cc,hypoDetails,seat,missmatchRC,roadTax,roadTaxValidUpto,
      insurance,insuranceValidity,noClaimBonus,missmatchInsurance,duplicateKey,rtoNoc,rtoNocIssueDate,engine,battery,coolant,engineOilDipstick,
      engineOil,engineMount,engineBlowbyStatus,exhaustSmoke,radiator,clutch,gear,steering,brake,suspension,fuelLevel,electrical,rearWiper,
      rearDefogger,powerWindow,rhsFrontPW,lhsFrontPW,lhsRearPW,rhsRearPW,leatherSeats,fabricSeats,bonnet,upperCrossMember,lowerCrossMember,
      radiatorSupport,headlightSupport,lhsApron,rhsApron,frontWindshield,firewall,cowlTop,roof,frontBumper,lhsHeadlamp,rhsHeadlamp,
      lhsFoglamp,rhsFoglamp,lhsFender,lhsFrontAlloy,lhsFrontTyre,lhsOrvm,lhsAPillar,lhsFrontDoor,lhsBPillar,lhsRearDoor,lhsCPillar,lhsRunningBoard,
      lhsRearAlloy,lhsRearTyre,lhsQuarterPanel,rearBumper,lhsTailLamp,rhsTailLamp,rearWindshield,bootDoor,spareTyre,bootFloor,rhsQuarterPanel,
      rhsRearAlloy,rhsRearTyre,rhsCPillar,rhsRearDoor,rhsBPillar,rhsFrontDoor,rhsAPillar,rhsRunningBoard,rhsFrontAlloy,rhsFrontTyre,rhsOrvm,
      rhsFender,noOfAirbags,odometerReading,abs,driverSideAB,codriverSideAB,lhsAPillarAB,lhsBPillarAB,lhsCPillarAB,rhsAPillarAB,rhsBPillarAB,rhsCPillarAB,
      reverseParkingCamera,manualAC,climateAC,musicSystem,stereo,inbuiltSpeaker,externalSpeaker,stearingMountedAudio,sunroof,
      bodyType,transmission,ownerType,color,kmsDriven,carPrice,carsoldStatus,oneClickBuyPrice,auctionStartTime,auctionEndTime,description,mileage,maxPower,maxTorque,noc,inspectionReport,inspectionScore,comforts,safety,
      interior,exterior,entertainment,engineVideo,silencerVideo,allCarImage,allCarVideo,thumbImage,inspectionPdf,regYear,rcAvailabilityImages,chassisImages,hypoImages,roadTaxValidityImages,
      insuranceImages,duplicateKeyImages,rtoNocImages,commentsOnBasic,commentsOnInterior,commentsOnEngine,commentsOnExterior,commentsOnTransmission,commentsOnComfort,commentsOnElectrical,exteriorImages,dentImages,tyreImages,engineImages,interiorImages,safetyImages,comfortImages};

      // console.log(formData);

    
    const response = await vehicleApi.updateInspectionVehicle(formData);
    // console.log(response);
    if (response.status === 200 && response.data.status === 200 && response.data.success === true) {
      confirm("Car updated successfully");
      router.push("/dashboard/inspection");
    }

  }
  };
    
  const exteriorData = [
    "Okay",
    "Repaired",
    "Replaced",
    "Dented",
    "Damaged",
    "Repainted",
    "Rusted",
    "Faded",
    "Scratched",
    "Not Opening",
    "Not Working",
    "Missing",
    "Not Applicable",
  ];

  const commentsOnBasicList = [
    "CNG/LPG Plate not Available",
    "CNG/LPG Removed",
    "Vin Plate Missing",
    "CNG/LPG Cylinder test certificate not Available",
    "RC Fitness Expired",
    "Car Converted from Commercial to private",
    "Migrated from Other State",
    "Remote Key Damaged / Not Available",
    "Chassis Number Rusted",
    "Chassis Number Not Traceable",
  ];

  const commentsOnEngineList=[
    'Not Converting to CNG / LPG',
    'RPM Not increasing',
    'Car not working on Petrol',
    'Turbo Charger Noise',
    'Turbo Charger Not Working',
    'Fan Belt Noise',
    'Alternator Bearing Noise',
    'Minor Noise',
    'Major Noise',
    'Critical Noise',
    'Oil Coming from Exhaust Tail Pipe',
    'Leakege From Injector',
    'Car is in Working Condition but Towing Suggested to Avoid Damage to Engine'
  ];

  const commentsOnTransmissionList=[
    'Car is in Working Condition but Towing Suggested to Avoid Damage to Clutch',
    'Car is in Working Condition but Towing Suggested to Avoid Damage to Gear',
    'Towing Required',
    'Gear box Oil Leakage',
    'Abnormal Noise coming from Gear Box',
    'All Weel Drive (AWD)',
    'Four Wheel Drive (4X4)',
  ];

  const commentsOnInteriorList=[
    'Door Trim Torn',
    'AC Vent Damaged',
    'AC Knob Damaged / Not Working',
    'Cabin Floor Rusted',
    'Roof Lining Loose / Replaced',
    'Roof lining Damaged',
    'Gear Box Cover Damaged',
    'Dashboard Broken',
    'Dashboard Scratched',
    'Electrical Seat Adjusment Not Working',
    'Driver Seat Broken or Sliding Not Working',
    'Push Button Start Stop Available',
    'Knee Airbags Available',
    'Seat Airbags Available'
  ];

  const commentsOnElectricalList=[
    'Odometer Tampered',
    'Navigation Chip Not Available',
    'Base Tube / Woofer Retained By the Customer',
    'Music system Retained By the Customer',
    'Amplifier Retained By the Customer',
    'Horn Not Working',
    'Power Window Master Switch Not Working'
  ];

  const commentsOnExteriorList=[
    'Customized Vehicle or Body Modified',
    'Body Shell Replaced',
    'Roof Top Canvas',
    'Water Logged Vehicle',
    'Chassis Extension Repaired',
    'Strut Mounting Area Damaged',
    'Roof Colour Changed / Vinyl wrapped',
    'Vehicle Color Changed'
  ];

  const commentsOnComfortList=[
    'Electrical Wiring Damaged',
    'Starter Motor / Solanoid Malfunction',
    'Battery Not Available',
    'Front Drive Axle Noise',
    'Car Pulling on One Side',
    'Silencer Assembly Damaged',
    'Noise from Silencer Assembly',
    'Hand Brake not Working',
    'Jack & Toolkit not available',
  ];

  
  
  return (
    <>
      <Box className={dashboardStyles.tm_dashboard_main}>        
        <Grid container> 
          <Sidebar/>         
          <Grid item md={10}>
            <Box className={dashboardStyles.tm_dashboard_rightbar_main}>
              <Header/>
              <Box className={dashboardStyles.tm_dashboard_rightbar_form_main}>
                 <Box className={dashboardStyles.tm_auctionvehicle_table_main_top}>
                  <Box className={dashboardStyles.tm_auctionvehicle_table_main_top_title}>
                    <Typography variant='h4'>Update Your Car</Typography>
                  </Box>
                  <Box className={dashboardStyles.tm_auctionvehicle_table_main_top_btn}>
                  <Link as={`/dashboard/inspection/report/${docId}`} href={`/dashboard/inspection/report?id=${docId}`} ><Button variant="contained">Generate PDF</Button></Link>
                  </Box>
                </Box>
                <form onSubmit={handleSubmit}>
                  <Box>
                    <Typography variant='h6'>Basic Document Details</Typography>
                  </Box>
                <Grid container spacing={4}>
                
                  
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Inspector*</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={inspector}
                          label="Select Inspector*"
                          onChange={handleInput}
                          name='inspector'
                          required
                        >
                          {inspectorList.length > 0 && inspectorList.map((data,key) => (
                            <MenuItem key={key} value={data.id}>{data.email} ({data.name ? data.name : 'NA'})</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <TextField id="outlined-basic" label="Customer Contact No" onChange={handleInput} name='custContactNo' value={custContactNo} type="text" required variant="outlined" fullWidth/>
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
                        <InputLabel id="demo-simple-select-label">Registration Type*</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={regType}
                          label="Select Registration Type*"
                          onChange={handleInput}
                          name='regType'
                          required
                        >
                            <MenuItem key='1' value="Private">Private</MenuItem>
                            <MenuItem key='2' value="Commercial">Commercial</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <TextField id="outlined-basic" label="Registration No" onChange={handleInput} name='regNo' value={regNo} type="text" variant="outlined" fullWidth/>
                      </Box>
                  </Grid> 
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">RC Availability*</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={rcAvailability}
                          label="RC Availability*"
                          onChange={handleInput}
                          name='rcAvailability'
                          required
                        >
                            <MenuItem key='1' value="Original">Original</MenuItem>
                            <MenuItem key='2' value="Photocopy">Photocopy</MenuItem>
                            <MenuItem key='3' value="Lost">Lost</MenuItem>
                            <MenuItem key='4' value="Lost with photocopy">Lost with photocopy</MenuItem>
                            <MenuItem key='5' value="Duplicate">Duplicate</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">RC Condition*</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={rcCondition}
                          label="RC Condition*"
                          onChange={handleInput}
                          name='rcCondition'
                          required
                        >
                            <MenuItem key='1' value="Okay">Okay</MenuItem>
                            <MenuItem key='2' value="Damaged">Damaged</MenuItem>
                            <MenuItem key='3' value="Faded">Faded</MenuItem>
                            <MenuItem key='4' value="Not Applicable">Not Applicable</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                        <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date} ${"tm_dashboard_rightbar_form_date_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                          <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DemoContainer components={['DatePicker']}>
                              <DatePicker label="Registration Date*" name='regDate' value={regDate} onChange={handleRegistrationDate} sx={{width:'100%'}} required/>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                  </Grid>
                  <Grid item md={3}>
                        <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date} ${"tm_dashboard_rightbar_form_date_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                          <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Fittness Upto</Typography>
                            <DemoContainer components={['DatePicker']}>
                              <DatePicker  name='fittnessUpto' value={fittnessUpto} onChange={handleFitnessuptoDate} sx={{width:'100%'}}/>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>To be Scraped</Typography>
                        <Select
                          value={tobeScraped}
                          onChange={handleInput}
                          name='tobeScraped'
                        >
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Registration State*</Typography>
                        <Select
                          onChange={handleInput}
                          name='regState'
                          value={regState}
                          required
                        >
                            <MenuItem key='1' value="West Bengal">West Bengal</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Select RTO*</Typography>
                        <Select
                          onChange={handleInput}
                          name='rto'
                          value={rto}
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
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Owner Serial No</Typography>
                      <TextField id="outlined-basic" onChange={handleInput} name='ownerSerialNo' value={ownerSerialNo} type="text" variant="outlined" fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Select Brand *</Typography>
                        <Select
                          value={brand}
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
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Select Model *</Typography>
                        <Select
                          value={model}
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
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Select Variant *</Typography>
                        <Select
                          value={variant}
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
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Engine No</Typography>
                      <TextField id="outlined-basic" onChange={handleInput} name='engineNo' value={engineNo} type="text" variant="outlined" fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Chassis No</Typography>
                      <TextField id="outlined-basic" onChange={handleInput} name='chassisNo' value={chassisNo} type="text" variant="outlined" fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Reg Owner Name</Typography>
                      <TextField id="outlined-basic" onChange={handleInput} name='regOwnerName' value={regOwnerName} type="text" variant="outlined" required fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>MFG Month*</Typography>
                        <Select
                          onChange={handleInput}
                          name='mfgMonth'
                          value={mfgMonth}
                          required
                        >
                              <MenuItem key='1' value="Jan">January</MenuItem>
                              <MenuItem key='2' value="Feb">February</MenuItem>
                              <MenuItem key='3' value="Mar">March</MenuItem>
                              <MenuItem key='4' value="Apr">April</MenuItem>
                              <MenuItem key='5' value="May">May</MenuItem>
                              <MenuItem key='6' value="Jun">June</MenuItem>
                              <MenuItem key='7' value="Jul">July</MenuItem>
                              <MenuItem key='8' value="Aug">August</MenuItem>
                              <MenuItem key='9' value="Sep">September</MenuItem>
                              <MenuItem key='10' value="Oct">October</MenuItem>
                              <MenuItem key='11' value="Nov">November</MenuItem>
                              <MenuItem key='12' value="Dec">December</MenuItem>
                          
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>MFG Year*</Typography>
                        <Select
                          onChange={handleInput}
                          name='mfgYear'
                          value={mfgYear}
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
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Fuel Type *</Typography>
                        <Select
                          onChange={handleInput}
                          name='fuelType'
                          value={fuelType}
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
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Engine (CC)*</Typography>
                      <TextField id="outlined-basic"  onChange={handleInput} name='cc' value={cc} type="number" variant="outlined" required fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Hypothecation Details</Typography>
                        <Select
                          onChange={handleInput}
                          name='hypoDetails'
                          value={hypoDetails}
                          
                        >
                            <MenuItem key='1' value="Not Hypothecated">Not Hypothecated</MenuItem>
                            <MenuItem key='2' value="Loan Active">Loan Active</MenuItem>
                            <MenuItem key='3' value="Valid NOC Available">Valid NOC Available</MenuItem>
                            <MenuItem key='4' value="NOC not available, Loan Closed">NOC not available, Loan Closed</MenuItem>

                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Seating Capacity *</Typography>
                          <Select
                            value={seat}
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
                        <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Missmatch in RC</Typography>
                          <Select
                            onChange={handleInput}
                            name='missmatchRC'
                            value={missmatchRC}
                            
                          >
                            <MenuItem key='1' value="No Missmatch">No Missmatch</MenuItem>
                            <MenuItem key='2' value="Make">Make</MenuItem>
                            <MenuItem key='3' value="Model">Model</MenuItem>
                            <MenuItem key='4' value="Variant">Variant</MenuItem>
                            <MenuItem key='5' value="Owner SL No">Owner SL No</MenuItem>
                            <MenuItem key='6' value="Fuel Type">Fuel Type</MenuItem>
                            <MenuItem key='7' value="Color">Color</MenuItem>
                            <MenuItem key='8' value="Seating Capacity">Seating Capacity</MenuItem>
                            <MenuItem key='9' value="Date/Year of Mfg">Date/Year of Mfg</MenuItem>
                            <MenuItem key='10' value="Registration Date">Registration Date</MenuItem>
                            
                          </Select>
                        </FormControl>
                      </Box>
                  </Grid> 
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Road Tax</Typography>
                          <Select
                            onChange={handleInput}
                            name='roadTax'
                            value={roadTax}
                            
                          >
                            <MenuItem key='1' value="OTT">OTT</MenuItem>
                            <MenuItem key='2' value="LTT">LTT</MenuItem>
                            <MenuItem key='3' value="Limited Period">Limited Period</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>  
                    <Grid item md={3}>
                        <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date} ${"tm_dashboard_rightbar_form_date_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Road Tax Valid Upto</Typography>
                            <DemoContainer components={['DatePicker']}>
                              <DatePicker  name="roadTaxValidUpto" value={roadTaxValidUpto} onChange={handleRoadTaxValid}  sx={{width:'100%'}}/>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Insurance</Typography>
                          <Select
                            onChange={handleInput}
                            name='insurance'
                            value={insurance}
                            
                          >
                            <MenuItem key='1' value="Expired">Expired</MenuItem>
                            <MenuItem key='2' value="Third Party">Third Party</MenuItem>
                            <MenuItem key='3' value="Comprehensive">Comprehensive</MenuItem>
                            <MenuItem key='4' value="Zero Depriciation/Nill Depriciation/Bumper to Bumper">Zero Depriciation/Nill Depriciation/Bumper to Bumper</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>  
                    <Grid item md={3}>
                        <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date} ${"tm_dashboard_rightbar_form_date_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                          <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Insurance Validity</Typography>
                            <DemoContainer components={['DatePicker']}>
                              <DatePicker  name="insuranceValidity" value={insuranceValidity} onChange={handleInsuranceValidity} sx={{width:'100%'}}/>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>No Claim Bonus</Typography>
                          <Select
                            onChange={handleInput}
                            name='noClaimBonus'
                            value={noClaimBonus}
                            
                          >
                            <MenuItem key='1' value="Not Applicable / Not Available">Not Applicable / Not Available</MenuItem>
                            <MenuItem key='2' value="10%">10%</MenuItem>
                            <MenuItem key='3' value="15%">15%</MenuItem>
                            <MenuItem key='4' value="20%">20%</MenuItem>
                            <MenuItem key='5' value="25%">25%</MenuItem>
                            <MenuItem key='6' value="30%">30%</MenuItem>
                            <MenuItem key='7' value="35%">35%</MenuItem>
                            <MenuItem key='8' value="40%">40%</MenuItem>
                            <MenuItem key='9' value="45%">45%</MenuItem>
                            <MenuItem key='10' value="50%">50%</MenuItem>
                            <MenuItem key='11' value="Above 50%">Above 50%</MenuItem>
                            
                            </Select>
                        </FormControl>
                      </Box>
                    </Grid>  
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Missmatch in Insurance</Typography>
                          <Select
                            onChange={handleInput}
                            name='missmatchInsurance'
                            value={missmatchInsurance}
                          
                          >
                            <MenuItem key='1' value="No Missmatch">No Missmatch</MenuItem>
                            <MenuItem key='2' value="Make / Model / Variant">Make / Model / Variant</MenuItem>
                            <MenuItem key='3' value="Chassis Number">Chassis Number</MenuItem>
                            <MenuItem key='4' value="Engine Number">Engine Number</MenuItem>
                            <MenuItem key='5' value="Registraion Number">Registraion Number</MenuItem>
                            <MenuItem key='6' value="Fuel Type">Fuel Type</MenuItem>
                            
                            </Select>
                        </FormControl>
                      </Box>
                    </Grid>  
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Suplicate Key</Typography>
                          <Select
                            onChange={handleInput}
                            name='duplicateKey'
                            value={duplicateKey}
                            
                          >
                            <MenuItem key='1' value="Yes">Yes</MenuItem>
                            <MenuItem key='2' value="No">No</MenuItem>
                            
                            </Select>
                        </FormControl>
                      </Box>
                    </Grid>  
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                      <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RTO Noc</Typography>
                          <Select
                            onChange={handleInput}
                            name='rtoNoc'
                            value={rtoNoc}
                          >
                            
                            <MenuItem value='Not Applicable'>Not Applicable</MenuItem>
                            <MenuItem value='Issued'>Issued</MenuItem>
                            <MenuItem value='Expired (issued 90 days ago)'>Expired (issued 90 days ago)</MenuItem>
                            <MenuItem value='Missing'>Missing</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                     </Grid>
                    <Grid item md={3}>
                        <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date} ${"tm_dashboard_rightbar_form_date_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                          <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RTO Noc Issue Date</Typography>
                            <DemoContainer components={['DatePicker']}>
                              <DatePicker name="rtoNocIssueDate" value={rtoNocIssueDate} onChange={handleRtoNocIssueDate}  sx={{width:'100%'}}/>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        
                          <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                            <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                              <Typography variant='h4'>Comments On Basic</Typography>
                            </Box>
                          <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}></Box>
                            <Grid container spacing={0}>
                            
                            {commentsOnBasicList.length > 0 &&
                              commentsOnBasicList.map((element, index) => {
                                return (
                                  <Grid item md={6} key={index}>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          value={element}
                                          key={index}
                                          name='commentsOnBasic'
                                          onChange={handleInput}
                                          checked={ Object.values(commentsOnBasic).includes(element.toString())? true : false }
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
                    </Grid>
                </Grid>
                <Box>
                    <Typography variant='h6'>Auction Details</Typography>
                  </Box>
                <Grid container spacing={4}>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                        <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Registration Year *</Typography>
                          <Select
                            onChange={handleInput}
                            name='regYear'
                            value={regYear}
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
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Body Type *</Typography>
                        <Select
                          value={bodyType}
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
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Transmission *</Typography>
                        <Select
                          value={transmission}
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
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Owner Type *</Typography>
                        <Select
                          value={ownerType}
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
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Color *</Typography>
                        <Select
                          value={color}
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
                    <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Kilometers Driven*</Typography>
                    <TextField id="outlined-basic" onChange={handleInput} name='kmsDriven' type="number" value={kmsDriven} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Mileage in kmpl</Typography>
                      <TextField id="outlined-basic"  onChange={handleInput} name='mileage' type="number" value={mileage} variant="outlined" fullWidth/>
                      </Box>
                  </Grid>    
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Max Power</Typography>
                      <TextField id="outlined-basic" onChange={handleInput} name='maxPower' type="number" value={maxPower} variant="outlined" fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Max Torque</Typography>
                      <TextField id="outlined-basic" onChange={handleInput} name='maxTorque' type="number" value={maxTorque} variant="outlined" fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                      <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Noc*</Typography>
                          <Select
                            value={noc}
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
                      <FormControl fullWidth>
                          <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Inspection Score</Typography>
                          <Select
                            value={inspectionScore}
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
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Your Selling Price</Typography>
                    <TextField id="outlined-basic" onChange={handleInput} name='carPrice' value={carPrice}  type="number" InputLabelProps={{shrink: true,}} variant="outlined" required fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>One Click Buy Price (Optional)</Typography>
                    <TextField id="outlined-basic" onChange={handleInput} name='oneClickBuyPrice' type="number" value={oneClickBuyPrice} variant="outlined" InputLabelProps={{shrink: true,}} fullWidth/>
                    <Typography variant='span' sx={{color:'red', marginTop:'5px', display:'block'}}>Note : If you put any value then this car will not show in auction</Typography>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Car Sold Status (Optional)</Typography>
                        <TextField
                          id="outlined-select-currency-native"
                          select
                          defaultValue={carsoldStatus}
                          onChange={handleInput}
                          name='carsoldStatus'
                          SelectProps={{
                            native: true,
                          }}
                          fullWidth
                          // helperText="Please select your currency"
                        >
                          
                            <option key="1" value="true">Yes </option>
                            <option key="2" value="false">No </option>
                        </TextField>
                        <Typography variant='span' sx={{color:'red', marginTop:'5px', display:'block'}}>Note : If status is No , then this car will show in OCB</Typography>
                      </Box>
                  </Grid>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date_time} ${"tm_dashboard_rightbar_form_date_time_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Auction Start Time</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DateTimePicker']}>
                            <DateTimePicker onChange={handleAuctionStartTime} format="DD-MM-YYYY HH:mm" value={auctionStartTime} sx={{width:'100%'}} required />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Box>
                    </Grid>
                    <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_date_time} ${"tm_dashboard_rightbar_form_date_time_gb"} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Auction End Time</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DateTimePicker']}>
                            <DateTimePicker onChange={handleAuctionEndTime} format="DD-MM-YYYY HH:mm" value={auctionEndTime} sx={{width:'100%'}} required />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Box>
                    </Grid>
                  <Grid item md={12}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Inspection Report</Typography>
                      <TextField id="outlined-basic" onChange={handleInput} name='inspectionReport' value={inspectionReport} variant="outlined" fullWidth/>
                      </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                    <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Car Description</Typography>
                    <TextField id="outlined-basic"  onChange={handleInput} name='description' value={description} variant="outlined" fullWidth/>
                    </Box>
                  </Grid>
                  <Grid item md={12}>
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
                                                    checked={ Object.values(safety).includes(element.toString()) ? true : false }
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
                                                    checked={ Object.values(interior).includes(element.toString()) ? true: false }
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
                                                    checked={ Object.values(exterior).includes(element.toString()) ? true : false }
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
                                                    checked={ Object.values(entertainment).includes(element.toString()) ? true : false }
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
                  </Box>
                  </Grid>
                </Grid>
                

                <Box>
                    <Typography variant='h6'>Engine & Transmission Details</Typography>
                </Box>
                <Grid container spacing={4}>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Engine</Typography>
                        <Select
                          onChange={handleInput}
                          name='engine'
                          value={engine}
                        >
                            <MenuItem key='1' value="Okay">Okay</MenuItem>
                            <MenuItem key='2' value="Repaired">Repaired</MenuItem>
                            <MenuItem key='3' value="MIL Light Glowing">MIL Light Glowing</MenuItem>
                            <MenuItem key='4' value="RPM Fluctuating">RPM Fluctuating</MenuItem>
                            <MenuItem key='5' value="Over Heating">Over Heating</MenuItem>
                            <MenuItem key='6' value="Misfiring">Misfiring</MenuItem>
                            <MenuItem key='7' value="Fuel Leakage from injector">Fuel Leakage from injector</MenuItem>
                            <MenuItem key='8' value="Knoking">Knoking</MenuItem>
                            <MenuItem key='9' value="Long Cranking Due to Weak Compression">Long Cranking Due to Weak Compression</MenuItem>
                            <MenuItem key='10' value="Replaced">Replaced</MenuItem>
                            <MenuItem key='11' value="Air filter Box Damaged">Air filter Box Damaged</MenuItem>
                            <MenuItem key='12' value="Seized">Seized</MenuItem>
                            <MenuItem key='13' value="Sump Damaged">Sump Damaged</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Battery</Typography>
                        <Select
                          onChange={handleInput}
                          name='battery'
                          value={battery}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Changed">Changed</MenuItem>
                            <MenuItem value="Weak">Weak</MenuItem>
                            <MenuItem value="Dead">Dead</MenuItem>
                            <MenuItem value="Jumpstart">Jumpstart</MenuItem>
                            <MenuItem value="Acid Leakage">Acid Leakage</MenuItem>
                            <MenuItem value="Discharge Light Glowing">Discharge Light Glowing</MenuItem>
                            <MenuItem value="Damaged">Damaged</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Coolant</Typography>
                        <Select
                          onChange={handleInput}
                          name='coolant'
                          value={coolant}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Leaking">Leaking</MenuItem>
                            <MenuItem value="Dirty">Dirty</MenuItem>
                            <MenuItem value="Level Low">Level Low</MenuItem>

                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Engine Oil Dipstick</Typography>
                        <Select
                          onChange={handleInput}
                          name='engineOilDipstick'
                          value={engineOilDipstick}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Broken">Broken</MenuItem>
                            <MenuItem value="Not Available">Not Available</MenuItem>

                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Engine Oil</Typography>
                        <Select
                          onChange={handleInput}
                          name='engineOil'
                          value={engineOil}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Leaking">Leaking</MenuItem>
                            <MenuItem value="Dirty">Dirty</MenuItem>
                            <MenuItem value="Leakage From Manifold">Leakage From Manifold</MenuItem>
                            <MenuItem value="Leakage from Sump Chamber">Leakage from Sump Chamber</MenuItem>
                            <MenuItem value="Low Pressure Warning Light Glowing">Low Pressure Warning Light Glowing</MenuItem>
                            <MenuItem value="Leakage fom Turbo Charger">Leakage fom Turbo Charger</MenuItem>
                            <MenuItem value="Leakage From Side Cover">Leakage From Side Cover</MenuItem>
                            <MenuItem value="Leakage from ingine Head">Leakage from ingine Head</MenuItem>
                            <MenuItem value="Level Low">Level Low</MenuItem>

                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Engine Mount</Typography>
                        <Select
                          onChange={handleInput}
                          name='engineMount'
                          value={engineMount}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Broken">Broken</MenuItem>
                            <MenuItem value="Loose">Loose</MenuItem>
                            <MenuItem value="Excess Vibration">Excess Vibration</MenuItem>
                            <MenuItem value="Rusted">Rusted</MenuItem>

                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Engine Blow by Status</Typography>
                        <Select
                          onChange={handleInput}
                          name='engineBlowbyStatus'
                          value={engineBlowbyStatus}
                        >
                            <MenuItem value="No Blow By">No Blow By</MenuItem>
                            <MenuItem value="Permisable Blow By">Permisable Blow By</MenuItem>
                            <MenuItem value="Oil Spilage on Idle">Oil Spilage on Idle</MenuItem>
                            <MenuItem value="Permisable Blow By with Oil Spilage">Permisable Blow By with Oil Spilage</MenuItem>
                            <MenuItem value="Back Compression">Back Compression</MenuItem>

                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Exhaust Smoke</Typography>
                        <Select
                          onChange={handleInput}
                          name='exhaustSmoke'
                          value={exhaustSmoke}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Black">Black</MenuItem>
                            <MenuItem value="Blue">Blue</MenuItem>
                            <MenuItem value="White">White</MenuItem>

                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Radiator</Typography>
                        <Select
                          onChange={handleInput}
                          name='radiator'
                          value={radiator}
                        >
                            <MenuItem value="Fan Motor Noise">Fan Motor Noise</MenuItem>
                            <MenuItem value="Fan Not Working">Fan Not Working</MenuItem>
                            <MenuItem value="Radiator Repaired /Welded">Radiator Repaired /Welded</MenuItem>
                            <MenuItem value="Radiator Damaged">Radiator Damaged</MenuItem>
                            <MenuItem value="Coolant Mixed with Engine Oil">Coolant Mixed with Engine Oil</MenuItem>

                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Clutch</Typography>
                        <Select
                          onChange={handleInput}
                          name='clutch'
                          value={clutch}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Hard">Hard</MenuItem>
                            <MenuItem value="Spongy">Spongy</MenuItem>
                            <MenuItem value="Burning">Burning</MenuItem>
                            <MenuItem value="Bearing Noise">Bearing Noise</MenuItem>
                            <MenuItem value="Slip / Low Pick up">Slip / Low Pick up</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Gear</Typography>
                        <Select
                          onChange={handleInput}
                          name='gear'
                          value={gear}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Manual Transmission">Manual Transmission</MenuItem>
                            <MenuItem value="Automatic Transmission">Automatic Transmission</MenuItem>
                            <MenuItem value="Hard">Hard</MenuItem>
                            <MenuItem value="Not Engaging">Not Engaging</MenuItem>
                            <MenuItem value="Abnormal Noise">Abnormal Noise</MenuItem>
                            <MenuItem value="Auto Transmission Not Working">Auto Transmission Not Working</MenuItem>
                            <MenuItem value="Gear Freeplay">Gear Freeplay</MenuItem>
                            <MenuItem value="Gear Knob Broken / Damaged">Gear Knob Broken / Damaged</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Steering</Typography>
                        <Select
                          onChange={handleInput}
                          name='steering'
                          value={steering}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Abnormal Noise">Abnormal Noise</MenuItem>
                            <MenuItem value="Hard">Hard</MenuItem>
                            <MenuItem value="Pump Noise">Pump Noise</MenuItem>
                            <MenuItem value="Oil Leakage from Rack">Oil Leakage from Rack</MenuItem>
                            <MenuItem value="Telescopic Adjustment not Working">Telescopic Adjustment not Working</MenuItem>
                            <MenuItem value="Wheel Adjustment Not Working">Wheel Adjustment Not Working</MenuItem>
                            <MenuItem value="Hydraulic Power Steering Not Working">Hydraulic Power Steering Not Working</MenuItem>
                            <MenuItem value="Electrical Power Steering Not Working">Electrical Power Steering Not Working</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>brake</Typography>
                        <Select
                          onChange={handleInput}
                          name='brake'
                          value={brake}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Ineffective">Ineffective</MenuItem>
                            <MenuItem value="Noise">Noise</MenuItem>
                            <MenuItem value="Master Cylinder Leakage">Master Cylinder Leakage</MenuItem>
                            <MenuItem value="Wheel Cylinder Leakage">Wheel Cylinder Leakage</MenuItem>
                            <MenuItem value="Hand / Parking Brake Light Glowing">Hand / Parking Brake Light Glowing</MenuItem>
                            <MenuItem value="Car With Electronic Parking Brake">Car With Electronic Parking Brake</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Suspension</Typography>
                        <Select
                          onChange={handleInput}
                          name='suspension'
                          value={suspension}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Weak">Weak</MenuItem>
                            <MenuItem value="Damaged">Damaged</MenuItem>
                            <MenuItem value="Leakage in suspension">Leakage in suspension</MenuItem>
                            <MenuItem value="Abnormal Noise">Abnormal Noise</MenuItem>
                            <MenuItem value="Air Suspension Faulty">Air Suspension Faulty</MenuItem>
                            <MenuItem value="Suspension Modified">Suspension Modified</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                          <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                            <Typography variant='h4'>Comments On Engine</Typography>
                          </Box>
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}></Box>
                          <Grid container spacing={0}>
                          
                          {commentsOnEngineList.length > 0 &&
                              commentsOnEngineList.map((element, index) => {
                                return (
                                  <Grid item md={6} key={index}>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          value={element}
                                          key={index}
                                          name='commentsOnEngine'
                                          onChange={handleInput}
                                          checked={ Object.values(commentsOnEngine).includes(element.toString())? true : false }
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
                  </Grid>
                  <Grid item md={12}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                          <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                            <Typography variant='h4'>Comments On Transmission</Typography>
                          </Box>
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}></Box>
                          <Grid container spacing={0}>
                          
                          {commentsOnTransmissionList.length > 0 &&
                              commentsOnTransmissionList.map((element, index) => {
                                return (
                                  <Grid item md={6} key={index}>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          value={element}
                                          key={index}
                                          name='commentsOnTransmission'
                                          onChange={handleInput}
                                          checked={ Object.values(commentsOnTransmission).includes(element.toString())? true : false }
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
                  </Grid>
                  
                </Grid>
               

                <Box>
                    <Typography variant='h6'>Electrical & Interior Details</Typography>
                </Box>
                <Grid container spacing={4}>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Odometer Reading</Typography>
                      <TextField id="outlined-basic" onChange={handleInput} name='odometerReading' type="number" value={odometerReading} variant="outlined" fullWidth/>
                      </Box>
                  </Grid>
                
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Fuel Level</Typography>
                        <Select
                          onChange={handleInput}
                          name='fuelLevel'
                          value={fuelLevel}
                        >
                          <MenuItem value="Reserve">Reserve</MenuItem>
                            <MenuItem value="Less than 25%">Less than 25%</MenuItem>
                            <MenuItem  value="25% to 50%">25% to 50%</MenuItem>
                            <MenuItem  value="More than 50%">More than 50%</MenuItem>
                            
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Electrical</Typography>
                        <Select
                          onChange={handleInput}
                          name='electrical'
                          value={electrical}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Odometer Not Working">Odometer Not Working</MenuItem>
                            <MenuItem value="Techometer Not Working">Techometer Not Working</MenuItem>
                            <MenuItem value="Speedometer Not Working">Speedometer Not Working</MenuItem>
                            <MenuItem value="Wiper Motor Not Working">Wiper Motor Not Working</MenuItem>
                            <MenuItem value="Central Locking Not Working">Central Locking Not Working</MenuItem>
                            <MenuItem value="Remote Locking Not Working">Remote Locking Not Working</MenuItem>
                            <MenuItem value="Headlight washer Not Working">Headlight washer Not Working</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Rear Wiper & Washer</Typography>
                        <Select
                          onChange={handleInput}
                          name='rearWiper'
                          value={rearWiper}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                            <MenuItem value="Broken">Broken</MenuItem>
                            <MenuItem value="Not Working">Not Working</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Rear Defogger</Typography>
                        <Select
                          onChange={handleInput}
                          name='rearDefogger'
                          value={rearDefogger}
                        >
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                            <MenuItem value="Not Working">Not Working</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Power Window</Typography>
                        <Select
                          onChange={handleInput}
                          name='powerWindow'
                          value={powerWindow}
                        >
                            <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Front (Power Window)</Typography>
                        <Select
                          onChange={handleInput}
                          name='rhsFrontPW'
                          value={rhsFrontPW}
                        >
                            <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                            <MenuItem value="Working">Working</MenuItem>
                            <MenuItem value="Not Working">Not Working</MenuItem>
                            <MenuItem value="Missing">Missing</MenuItem>
                            <MenuItem value="Broken / Damaged">Broken / Damaged</MenuItem>
                            <MenuItem value="Noisy">Noisy</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Front (Power Window)</Typography>
                        <Select
                          onChange={handleInput}
                          name='lhsFrontPW'
                          value={lhsFrontPW}
                        >
                            <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                            <MenuItem value="Working">Working</MenuItem>
                            <MenuItem value="Not Working">Not Working</MenuItem>
                            <MenuItem value="Missing">Missing</MenuItem>
                            <MenuItem value="Broken / Damaged">Broken / Damaged</MenuItem>
                            <MenuItem value="Noisy">Noisy</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">LHS Rear(Power Window)</InputLabel>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Rear (Power Window)</Typography>
                        <Select
                          onChange={handleInput}
                          name='lhsRearPW'
                          value={lhsRearPW}
                        >
                            <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                            <MenuItem value="Working">Working</MenuItem>
                            <MenuItem value="Not Working">Not Working</MenuItem>
                            <MenuItem value="Missing">Missing</MenuItem>
                            <MenuItem value="Broken / Damaged">Broken / Damaged</MenuItem>
                            <MenuItem value="Noisy">Noisy</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Rear (Power Window)</Typography>
                        <Select
                          onChange={handleInput}
                          name='rhsRearPW'
                          value={rhsRearPW}
                        >
                            <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                            <MenuItem value="Working">Working</MenuItem>
                            <MenuItem value="Not Working">Not Working</MenuItem>
                            <MenuItem value="Missing">Missing</MenuItem>
                            <MenuItem value="Broken / Damaged">Broken / Damaged</MenuItem>
                            <MenuItem value="Noisy">Noisy</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Leather Seats</Typography>
                        <Select
                          onChange={handleInput}
                          name='leatherSeats'
                          value={leatherSeats}
                        >
                            <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Torn">Torn</MenuItem>
                            <MenuItem value="Worn Out">Worn Out</MenuItem>
                            <MenuItem value="Cushion Damaged">Cushion Damaged</MenuItem>
                            <MenuItem value="Depressed">Depressed</MenuItem>
                            <MenuItem value="Seat Cover Fitted">Seat Cover Fitted</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Fabric Seats</Typography>
                        <Select
                          onChange={handleInput}
                          name='fabricSeats'
                          value={fabricSeats}
                        >
                            <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                            <MenuItem value="Okay">Okay</MenuItem>
                            <MenuItem value="Torn">Torn</MenuItem>
                            <MenuItem value="Worn Out">Worn Out</MenuItem>
                            <MenuItem value="Cushion Damaged">Cushion Damaged</MenuItem>
                            <MenuItem value="Depressed">Depressed</MenuItem>
                            <MenuItem value="Seat Cover Fitted">Seat Cover Fitted</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                          <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                            <Typography variant='h4'>Comments On Interior</Typography>
                          </Box>
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}></Box>
                          <Grid container spacing={0}>
                          
                          {commentsOnInteriorList.length > 0 &&
                              commentsOnInteriorList.map((element, index) => {
                                return (
                                  <Grid item md={6} key={index}>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          value={element}
                                          key={index}
                                          name='commentsOnInterior'
                                          onChange={handleInput}
                                          checked={ Object.values(commentsOnInterior).includes(element.toString())? true : false }
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
                  </Grid>
                  <Grid item md={12}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                          <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                            <Typography variant='h4'>Comments On Electricals</Typography>
                          </Box>
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}></Box>
                          <Grid container spacing={0}>
                          
                          {commentsOnElectricalList.length > 0 &&
                              commentsOnElectricalList.map((element, index) => {
                                return (
                                  <Grid item md={6} key={index}>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          value={element}
                                          key={index}
                                          name='commentsOnElectrical'
                                          onChange={handleInput}
                                          checked={ Object.values(commentsOnElectrical).includes(element.toString())? true : false }
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
                  </Grid>
                  
                </Grid>
               

                <Box>
                    <Typography variant='h6'>Exterior Details</Typography>
                </Box>
                <Grid container spacing={4}>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Bonnet</Typography>
                        <Select
                          onChange={handleInput}
                          name='bonnet'
                          value={bonnet}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                          
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Upper Cross Member</Typography>
                        <Select
                          onChange={handleInput}
                          name='upperCrossMember'
                          value={upperCrossMember}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Lower Cross member</Typography>
                        <Select
                          onChange={handleInput}
                          name='lowerCrossMember'
                          value={lowerCrossMember}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Radiator Support</Typography>
                        <Select
                          onChange={handleInput}
                          name='radiatorSupport'
                          value={radiatorSupport}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Headlight Support</Typography>
                        <Select
                          onChange={handleInput}
                          name='headlightSupport'
                          value={headlightSupport}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Apron</Typography>
                        <Select
                          onChange={handleInput}
                          name='lhsApron'
                          value={lhsApron}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Apron</Typography>
                        <Select
                          onChange={handleInput}
                          name='rhsApron'
                          value={rhsApron}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Front Windshield</Typography>
                        <Select
                          onChange={handleInput}
                          name='frontWindshield'
                          value={frontWindshield}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Firewall</Typography>
                        <Select
                          onChange={handleInput}
                          name='firewall'
                          value={firewall}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Cowl Top</Typography>
                        <Select
                          onChange={handleInput}
                          name='cowlTop'
                          value={cowlTop}
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Roof</Typography>
                        <Select
                          onChange={handleInput}
                          name='roof'
                          value={roof}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Front Bumper</Typography>
                        <Select
                          onChange={handleInput}
                          name='frontBumper'
                          value={frontBumper}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Headlamp</Typography>
                        <Select
                          onChange={handleInput}
                          name='lhsHeadlamp'
                          value={lhsHeadlamp}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Headlamp</Typography>
                        <Select
                          onChange={handleInput}
                          name='rhsHeadlamp'
                          value={rhsHeadlamp}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Foglamp</Typography>
                        <Select
                          onChange={handleInput}
                          name='lhsFoglamp'
                          value={lhsFoglamp}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Foglamp</Typography>
                        <Select
                          onChange={handleInput}
                          name='rhsFoglamp'
                          value={rhsFoglamp}
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Fender</Typography>
                        <Select
                          value={lhsFender}
                          onChange={handleInput}
                          name='lhsFender'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Front Alloy</Typography>
                        <Select
                          value={lhsFrontAlloy}
                          onChange={handleInput}
                          name='lhsFrontAlloy'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Front Tyre</Typography>
                        <Select
                          value={lhsFrontTyre}
                          onChange={handleInput}
                          name='lhsFrontTyre'
                        >
                           <MenuItem value="Chinese Tyre">Chinese Tyre</MenuItem>
                           <MenuItem value="Resoaled">Resoaled</MenuItem>
                           <MenuItem value="Damaged">Damaged</MenuItem>
                           <MenuItem value="Tyre Life (10%-29%)">Tyre Life (10%-29%)</MenuItem>
                           <MenuItem value="Tyre Life (30%-49%)">Tyre Life (30%-49%)</MenuItem>
                           <MenuItem value="Tyre Life (50%-79%)">Tyre Life (50%-79%)</MenuItem>
                           <MenuItem value="Tyre Life (80%-100%)">Tyre Life (80%-100%)</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Orvm</Typography>
                        <Select
                          value={lhsOrvm}
                          onChange={handleInput}
                          name='lhsOrvm'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS A Pillar</Typography>
                        <Select
                          value={lhsAPillar}
                          onChange={handleInput}
                          name='lhsAPillar'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Front Door</Typography>
                        <Select
                          value={lhsFrontDoor}
                          onChange={handleInput}
                          name='lhsFrontDoor'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS B Pillar</Typography>
                        <Select
                          value={lhsBPillar}
                          onChange={handleInput}
                          name='lhsBPillar'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Rear Door</Typography>
                        <Select
                          value={lhsRearDoor}
                          onChange={handleInput}
                          name='lhsRearDoor'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS C Pillar</Typography>
                        <Select
                          value={lhsCPillar}
                          onChange={handleInput}
                          name='lhsCPillar'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Running Board</Typography>
                        <Select
                          value={lhsRunningBoard}
                          onChange={handleInput}
                          name='lhsRunningBoard'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Rear Alloy</Typography>
                        <Select
                          value={lhsRearAlloy}
                          onChange={handleInput}
                          name='lhsRearAlloy'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Rear Tyre</Typography>
                        <Select
                          value={lhsRearTyre}
                          onChange={handleInput}
                          name='lhsRearTyre'
                        >
                           <MenuItem value="Chinese Tyre">Chinese Tyre</MenuItem>
                           <MenuItem value="Resoaled">Resoaled</MenuItem>
                           <MenuItem value="Damaged">Damaged</MenuItem>
                           <MenuItem value="Tyre Life (10%-29%)">Tyre Life (10%-29%)</MenuItem>
                           <MenuItem value="Tyre Life (30%-49%)">Tyre Life (30%-49%)</MenuItem>
                           <MenuItem value="Tyre Life (50%-79%)">Tyre Life (50%-79%)</MenuItem>
                           <MenuItem value="Tyre Life (80%-100%)">Tyre Life (80%-100%)</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Quarter Panel</Typography>
                        <Select
                          value={lhsQuarterPanel}
                          onChange={handleInput}
                          name='lhsQuarterPanel'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Rear Bumper</Typography>
                        <Select
                          value={rearBumper}
                          onChange={handleInput}
                          name='rearBumper'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS Tail Lamp</Typography>
                        <Select
                          value={lhsTailLamp}
                          onChange={handleInput}
                          name='lhsTailLamp'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Tail Lamp</Typography>
                        <Select
                          value={rhsTailLamp}
                          onChange={handleInput}
                          name='rhsTailLamp'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Rear Windshield</Typography>
                        <Select
                          value={rearWindshield}
                          onChange={handleInput}
                          name='rearWindshield'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Boot Door</Typography>
                        <Select
                          value={bootDoor}
                          onChange={handleInput}
                          name='bootDoor'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Spare Tyre</Typography>
                        <Select
                          value={spareTyre}
                          onChange={handleInput}
                          name='spareTyre'
                        >
                           <MenuItem value="Chinese Tyre">Chinese Tyre</MenuItem>
                           <MenuItem value="Resoaled">Resoaled</MenuItem>
                           <MenuItem value="Damaged">Damaged</MenuItem>
                           <MenuItem value="Tyre Life (10%-29%)">Tyre Life (10%-29%)</MenuItem>
                           <MenuItem value="Tyre Life (30%-49%)">Tyre Life (30%-49%)</MenuItem>
                           <MenuItem value="Tyre Life (50%-79%)">Tyre Life (50%-79%)</MenuItem>
                           <MenuItem value="Tyre Life (80%-100%)">Tyre Life (80%-100%)</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Boot Floor</Typography>
                        <Select
                          value={bootFloor}
                          onChange={handleInput}
                          name='bootFloor'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">RHS Quarter Panel</InputLabel>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Quarter Panel</Typography>
                        <Select
                          value={rhsQuarterPanel}
                          onChange={handleInput}
                          name='rhsQuarterPanel'
                          
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Rear Alloy</Typography>
                        <Select
                          value={rhsRearAlloy}
                          onChange={handleInput}
                          name='rhsRearAlloy'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Rear Tyre</Typography>
                        <Select
                          value={rhsRearTyre}
                          onChange={handleInput}
                          name='rhsRearTyre'
                        >
                           <MenuItem value="Chinese Tyre">Chinese Tyre</MenuItem>
                           <MenuItem value="Resoaled">Resoaled</MenuItem>
                           <MenuItem value="Damaged">Damaged</MenuItem>
                           <MenuItem value="Tyre Life (10%-29%)">Tyre Life (10%-29%)</MenuItem>
                           <MenuItem value="Tyre Life (30%-49%)">Tyre Life (30%-49%)</MenuItem>
                           <MenuItem value="Tyre Life (50%-79%)">Tyre Life (50%-79%)</MenuItem>
                           <MenuItem value="Tyre Life (80%-100%)">Tyre Life (80%-100%)</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS C Pillar</Typography>
                        <Select
                          value={rhsCPillar}
                          onChange={handleInput}
                          name='rhsCPillar'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Rear Door</Typography>
                        <Select
                          value={rhsRearDoor}
                          onChange={handleInput}
                          name='rhsRearDoor'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS B Pillar</Typography>
                        <Select
                          value={rhsBPillar}
                          onChange={handleInput}
                          name='rhsBPillar'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Front Door</Typography>
                        <Select
                          value={rhsFrontDoor}
                          onChange={handleInput}
                          name='rhsFrontDoor'
                        >
                           {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS A Pillar</Typography>
                        <Select
                          value={rhsAPillar}
                          onChange={handleInput}
                          name='rhsAPillar'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Running Board</Typography>
                        <Select
                          value={rhsRunningBoard}
                          onChange={handleInput}
                          name='rhsRunningBoard'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Front Alloy</Typography>
                        <Select
                          value={rhsFrontAlloy}
                          onChange={handleInput}
                          name='rhsFrontAlloy'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Front Tyre</Typography>
                        <Select
                          value={rhsFrontTyre}
                          onChange={handleInput}
                          name='rhsFrontTyre'
                        >
                           <MenuItem value="Chinese Tyre">Chinese Tyre</MenuItem>
                           <MenuItem value="Resoaled">Resoaled</MenuItem>
                           <MenuItem value="Damaged">Damaged</MenuItem>
                           <MenuItem value="Tyre Life (10%-29%)">Tyre Life (10%-29%)</MenuItem>
                           <MenuItem value="Tyre Life (30%-49%)">Tyre Life (30%-49%)</MenuItem>
                           <MenuItem value="Tyre Life (50%-79%)">Tyre Life (50%-79%)</MenuItem>
                           <MenuItem value="Tyre Life (80%-100%)">Tyre Life (80%-100%)</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Orvm</Typography>
                        <Select
                          value={rhsOrvm}
                          onChange={handleInput}
                          name='rhsOrvm'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS Fender</Typography>
                        <Select
                          value={rhsFender}
                          onChange={handleInput}
                          name='rhsFender'
                        >
                          {exteriorData.map((element,index)=>(
                            <MenuItem key={index} value={element}>{element}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                          <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                            <Typography variant='h4'>Comments On Exterior</Typography>
                          </Box>
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}></Box>
                          <Grid container spacing={0}>
                          
                          {commentsOnExteriorList.length > 0 &&
                              commentsOnExteriorList.map((element, index) => {
                                return (
                                  <Grid item md={6} key={index}>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          value={element}
                                          key={index}
                                          name='commentsOnExterior'
                                          onChange={handleInput}
                                          checked={ Object.values(commentsOnExterior).includes(element.toString())? true : false }
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
                  </Grid>
                </Grid>
             

                <Box>
                    <Typography variant='h6'>Safety Details</Typography>
                </Box>
                <Grid container spacing={4}>
                  <Grid item md={3}>
                      <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Number of Airbags</Typography>
                      <TextField id="outlined-basic" onChange={handleInput} name='noOfAirbags' value={noOfAirbags} type="number" variant="outlined" fullWidth/>
                      </Box>
                  </Grid> 
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>ABS</Typography>
                        <Select
                          value={abs}
                          onChange={handleInput}
                          name='abs'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Warning Light Glowing">Warning Light Glowing</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Driver Side Airbags</Typography>
                        <Select
                          value={driverSideAB}
                          onChange={handleInput}
                          name='driverSideAB'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Deployed">Deployed</MenuItem>
                          <MenuItem value="Removed">Removed</MenuItem>
                          <MenuItem value="Airbag Warning Light Glowing">Airbag Warning Light Glowing</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Co-driver Side Airbags</Typography>
                        <Select
                          value={codriverSideAB}
                          onChange={handleInput}
                          name='codriverSideAB'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Deployed">Deployed</MenuItem>
                          <MenuItem value="Removed">Removed</MenuItem>
                          <MenuItem value="Airbag Warning Light Glowing">Airbag Warning Light Glowing</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS A Pillar Airbags</Typography>
                        <Select
                          value={lhsAPillarAB}
                          onChange={handleInput}
                          name='lhsAPillarAB'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Deployed">Deployed</MenuItem>
                          <MenuItem value="Removed">Removed</MenuItem>
                          <MenuItem value="Airbag Warning Light Glowing">Airbag Warning Light Glowing</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS B Pillar Airbags</Typography>
                        <Select
                          value={lhsBPillarAB}
                          onChange={handleInput}
                          name='lhsBPillarAB'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Deployed">Deployed</MenuItem>
                          <MenuItem value="Removed">Removed</MenuItem>
                          <MenuItem value="Airbag Warning Light Glowing">Airbag Warning Light Glowing</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>LHS C Pillar Airbags</Typography>
                        <Select
                          value={lhsCPillarAB}
                          onChange={handleInput}
                          name='lhsCPillarAB'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Deployed">Deployed</MenuItem>
                          <MenuItem value="Removed">Removed</MenuItem>
                          <MenuItem value="Airbag Warning Light Glowing">Airbag Warning Light Glowing</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS A Pillar Airbags</Typography>
                        <Select
                          value={rhsAPillarAB}
                          onChange={handleInput}
                          name='rhsAPillarAB'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Deployed">Deployed</MenuItem>
                          <MenuItem value="Removed">Removed</MenuItem>
                          <MenuItem value="Airbag Warning Light Glowing">Airbag Warning Light Glowing</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS B Pillar Airbags</Typography>
                        <Select
                          value={rhsBPillarAB}
                          onChange={handleInput}
                          name='rhsBPillarAB'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Deployed">Deployed</MenuItem>
                          <MenuItem value="Removed">Removed</MenuItem>
                          <MenuItem value="Airbag Warning Light Glowing">Airbag Warning Light Glowing</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>RHS C pillar Airbags</Typography>
                        <Select
                          value={rhsCPillarAB}
                          onChange={handleInput}
                          name='rhsCPillarAB'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Deployed">Deployed</MenuItem>
                          <MenuItem value="Removed">Removed</MenuItem>
                          <MenuItem value="Airbag Warning Light Glowing">Airbag Warning Light Glowing</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Reverse Parking Camera</Typography>
                        <Select
                          value={reverseParkingCamera}
                          onChange={handleInput}
                          name='reverseParkingCamera'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Hazy">Hazy</MenuItem>
                          <MenuItem value="Damaged / Not working">Damaged / Not working</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                

                <Box>
                    <Typography variant='h6'>Comfort & Conveniance</Typography>
                </Box>
                <Grid container spacing={4}>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Manual AC</Typography>
                        <Select
                          value={manualAC}
                          onChange={handleInput}
                          name='manualAC'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Ineffective">Ineffective</MenuItem>
                          <MenuItem value="Not Working">Not Working</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Climate Control AC</Typography>
                        <Select
                          value={climateAC}
                          onChange={handleInput}
                          name='climateAC'
                        >
                          <MenuItem value="Okay">Okay</MenuItem>
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Ineffective">Ineffective</MenuItem>
                          <MenuItem value="Not Working">Not Working</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Music System</Typography>
                        <Select
                          value={musicSystem}
                          onChange={handleInput}
                          name='musicSystem'
                        >
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Available">Available</MenuItem>
                          <MenuItem value="Not working">Not working</MenuItem>
                          <MenuItem value="Speaker Not Working">Speaker Not Working</MenuItem>
                          <MenuItem value="Front Fascia missing">Front Fascia missing</MenuItem>
                          <MenuItem value="Touchpad Not Working">Touchpad Not Working</MenuItem>
                          <MenuItem value="Data Cable Panel Missing">Data Cable Panel Missing</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Stereo</Typography>
                        <Select
                          value={stereo}
                          onChange={handleInput}
                          name='stereo'
                        >
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Normal Stereo">Normal Stereo</MenuItem>
                          <MenuItem value="Touch Stereo">Touch Stereo</MenuItem>
                          <MenuItem value="Display Damaged / Broken">Display Damaged / Broken</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Inbuilt Speaker</Typography>
                        <Select
                          value={inbuiltSpeaker}
                          onChange={handleInput}
                          name='inbuiltSpeaker'
                        >
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Available">Available</MenuItem>
                          <MenuItem value="Not Working">Not Working</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>External Speaker</Typography>
                        <Select
                          value={externalSpeaker}
                          onChange={handleInput}
                          name='externalSpeaker'
                        >
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Available">Available</MenuItem>
                          <MenuItem value="Not Working">Not Working</MenuItem>
                          <MenuItem value="Damaged">Damaged</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Stearing Mounted Audio Control</Typography>
                        <Select
                          value={stearingMountedAudio}
                          onChange={handleInput}
                          name='stearingMountedAudio'
                        >
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Available">Available</MenuItem>
                          <MenuItem value="Not Working">Not Working</MenuItem>
                          <MenuItem value="Damaged">Damaged</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      <FormControl fullWidth>
                        <Typography sx={{mb:'5px', fontWeight:700, textTransform:'capitalize',}}>Sunroof</Typography>
                        <Select
                          value={sunroof}
                          onChange={handleInput}
                          name='sunroof'
                        >
                          <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                          <MenuItem value="Available">Available</MenuItem>
                          <MenuItem value="Not Working">Not Working</MenuItem>
                          <MenuItem value="Damaged">Damaged</MenuItem>
                          <MenuItem value="Noisy">Noisy</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Box className={`${dashboardStyles.tm_dashboard_rightbar_form_panel} ${"tm_dashboard_rightbar_form_panel_gb"}`}>
                      
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox}>
                          <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                            <Typography variant='h4'>Comments on Comfort</Typography>
                          </Box>
                        <Box className={dashboardStyles.tm_dashboard_rightbar_form_checkbox_all}></Box>
                          <Grid container spacing={0}>
                          
                          {commentsOnComfortList.length > 0 &&
                              commentsOnComfortList.map((element, index) => {
                                return (
                                  <Grid item md={6} key={index}>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          value={element}
                                          key={index}
                                          name='commentsOnComfort'
                                          onChange={handleInput}
                                          checked={ Object.values(commentsOnComfort).includes(element.toString())? true : false }
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
                  </Grid>
                </Grid>
                <Box className={`${dashboardStyles.tm_dashboard_img_upl} ${"tm_dashboard_img_upl_gb"}`}>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_title}>
                    <Typography variant='h4'>Upload images</Typography>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>RC Availablity Images </Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='rcAvailabilityImages' accept="image/*" hidden />
                          </Button>
                          
                        </Box>                        
                      </Grid>
                       <Grid item md={9}>
                         {rcAvailabilityImages.length > 0 &&
                          rcAvailabilityImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemovercAvailabilityImages(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                          {isLoader?(<CircularProgress />):(<></>)}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Chassis Images</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='chassisImages' accept="image/*" hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {chassisImages.length > 0 &&
                          chassisImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box>
                                  <Image
                                    src={element}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveChassisImages(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                          {isLoader2?(<CircularProgress />):(<></>)}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Hypothecation Images</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='hypoImages' accept="image/*" hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {hypoImages.length > 0 &&
                          hypoImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveHypoImages(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                          {isLoader3?(<CircularProgress />):(<></>)}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Road Tax Validity Images</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='roadTaxValidityImages' accept="image/*" hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {roadTaxValidityImages.length > 0 &&
                          roadTaxValidityImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveRoadTaxValidityImages(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                          {isLoader4?(<CircularProgress />):(<></>)}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Insurance Images</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='insuranceImages' accept="image/*" hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {insuranceImages.length > 0 &&
                          insuranceImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveInsuranceImages(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                          {isLoader5?(<CircularProgress />):(<></>)}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Duplicate Key Images</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='duplicateKeyImages' accept="image/*" hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {duplicateKeyImages.length > 0 &&
                          duplicateKeyImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveDuplicateKeyImages(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                          {isLoader6?(<CircularProgress />):(<></>)}
                        </Grid>
                        
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>RTO Noc Images</Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='rtoNocImages' accept="image/*" hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {rtoNocImages.length > 0 &&
                          rtoNocImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveRtoNocImages(element)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                          {isLoader7?(<CircularProgress />):(<></>)}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Engine & Transmission Images </Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='EnginePhotos' accept="image/*" hidden />
                          </Button>
                          
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {engineImages.length > 0 &&
                          engineImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element.path}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveEngineImage(element.path)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Electrical & Interior Images </Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='InteriorPhotos' accept="image/*" hidden />
                          </Button>
                          
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {interiorImages.length > 0 &&
                          interiorImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element.path}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveInteriorImage(element.path)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Exterior Images </Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='ExteriorPhotos' accept="image/*" hidden />
                          </Button>
                          
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {exteriorImages.length > 0 &&
                          exteriorImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box>
                                  <Image src={element.path} alt='Uploaded Image' height='300' width='300'/>
                                  <Button onClick={() => handleRemoveExteriorImage(element.path)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>
                  
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Add Thumbnail Photos (Upload only 1 Photo) <Box sx={{color:"red"}}></Box></Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='ThumbnailPhotos' accept="image/*" hidden />
                          </Button>
                          
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {thumbImage.length > 0 &&
                          thumbImage.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element.path}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveThumbnailImage(element.path)}><CloseIcon/> </Button>
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
                            <input type="file" onChange={handleInput} name='TyresPhotos' accept="image/*" hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {tyreImages.length > 0 &&
                          tyreImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image src={element.path} alt='Uploaded Image' height='300' width='300' />
                                  <Button onClick={() => handleRemoveTyreImage(element.path)}><CloseIcon/> </Button>
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
                            <input type="file" onChange={handleInput} name='DentsPhotos' accept="image/*" hidden />
                          </Button>
                        </Box>                        
                      </Grid>
                      <Grid item md={9}>
                        {dentImages.length > 0 &&
                          dentImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element.path}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveDentImage(element.path)}><CloseIcon/> </Button>
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
                            <input type="file" onChange={handleInput} name='engineVideo' accept="video/*" hidden />
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
                            <input type="file" onChange={handleInput} name='silencerVideo' accept="video/*" hidden />
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

                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Safety Images </Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='safetyImages' accept="image/*" hidden />
                          </Button>
                          
                        </Box>                        
                      </Grid>
                       <Grid item md={9}>
                         {safetyImages.length > 0 &&
                          safetyImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element.path}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveSafetyImage(element.path)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Comfort & Conveniance Images </Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='comfortImages' accept="image/*" hidden />
                          </Button>
                          
                        </Box>                        
                      </Grid>
                       <Grid item md={9}>
                         {comfortImages.length > 0 &&
                          comfortImages.map((element, index) => {
                            return (
                              <Box key={index} className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box >
                                  <Image
                                    src={element.path}
                                    alt='Uploaded Image'
                                    height='300'
                                    width='300'
                                  />
                                  <Button onClick={() => handleRemoveComfortImage(element.path)}><CloseIcon/> </Button>
                                </Box>
                              </Box>
                            );
                          })}
                        </Grid>
                      </Grid>
                  </Box>
                  <Box className={dashboardStyles.tm_dashboard_img_upl_panel}>
                    <Box className={dashboardStyles.tm_dashboard_img_upl_panel_title}>
                      <Typography variant='h6'>Inspection Report PDF </Typography>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={3}> 
                        <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_title} ${"tm_dashboard_img_upl_panel_title_gb"}`}>
                          <Button variant="contained" component="label">
                            Upload File
                            <input type="file" onChange={handleInput} name='inspectionPdf' accept=".pdf" hidden />
                          </Button>
                          
                        </Box>                        
                      </Grid>
                       <Grid item md={9}>
                        {inspectionPdf ? (<>
                            <Box className={`${dashboardStyles.tm_dashboard_img_upl_panel_img} ${"tm_dashboard_img_upl_panel_img_gb"}`}>
                                <Box>
                                  <Link href={inspectionPdf} target="_blank"><PictureAsPdfIcon sx={{fontSize:"80px"}}/></Link>
                                  <Button onClick={() => handleRemoveInspectionPdf()}><CloseIcon/> </Button>
                                </Box>
                                
                            </Box>
                        </>):(<></>)}
                              
                           
                        </Grid>
                      </Grid>
                  </Box>
                </Box>

                
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