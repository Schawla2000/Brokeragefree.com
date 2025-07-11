import {React,useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
export default function UserPropertytable(props) {
  const nevigate=useNavigate();
  function deletedata()
  {
      console.log(props.name._id);
      console.log(props.type);
      axios.post(`http://localhost:3011/deletedata${props.type}`,{"id":props.name._id})
        .then(res=>{console.log(res.data);alert(res.data.message);nevigate("/Userprofile")})
        .catch(err=>console.log(err))
    
  }
  const url="/images/"+props.type+"/"+props.name.photos;
  return (
    <div>
          
          <div className="a">
        <div className="iteam iteam1">Apartment Name:{props.name.appartmentname}</div>
        <div className="iteam iteam2"><img src={url}
         classNameName="img-fluid" alt={"not found"} width={"700px"} height={"400px"} style={{marginLeft:"80px"}}></img></div>
        <div className="iteam iteam3">No of halls:  {props.name.noofhalls}</div>
        <div className="iteam iteam4">No of Kitchen:  {props.name.noofkitchen}</div>
        <div className="iteam iteam5">No of Bedroom:  {props.name.noofbedroom}</div>
        <div className="iteam iteam6">No of Toilet: {props.name.nooftoilet}</div>
        <div className="iteam iteam7">No of Balconies:  {props.name.noofbalconies}</div>
        <div className="iteam iteam8">No of Bathroom: {props.name.noofbathroom}</div>
        <div className="iteam iteam9">Owner Name: {props.name.name}</div>
        <div className="iteam iteam10">Type of Toilet:  {props.name.bathroomtype}</div>
        <div className="iteam iteam11">Address: {props.name.address}
         City:{props.name.district} State:  {props.name.state} </div>
        <div className="iteam iteam12">No of Godowns: {props.name.noofgodowns}</div>
        <div className="iteam iteam13">Mobile no:</div>
        <div className="iteam iteam14">Area:  {props.name.area}</div>
        <div className="iteam iteam15">Parking Availability: {props.name.parking}</div>
        <div className="iteam iteam16">Price: {props.name.price}</div>
        <div className="iteam iteam17">No of beds: {props.name.noofbeds}</div>
        <div className="iteam iteam18">Rent: {props.name.rent}</div>
        <div className="iteam iteam19"><button onClick={deletedata}>Delete</button></div>
    </div>
    </div>
  )
}
